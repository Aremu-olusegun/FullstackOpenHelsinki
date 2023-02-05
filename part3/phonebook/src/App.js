import { useState, useEffect } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from './services/persons'
import Content from './Content'
import Notification from './Notification'

const App = () => {
  const [allPersons, setAllPersons] = useState([])
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState("")
  const [message, setMessage] = useState(null)

  useEffect(() => {
    personService.getAll()
    .then(response => {
      console.log(response.data)
      console.log('found one')
      setAllPersons(response.data)
    })
  },[allPersons.length])
  console.log(allPersons)

  function handleNameChange(e){
    let name = e.target.value
    setNewName(name)
  }

  function handleNumberChange(e){
    let number = e.target.value
    setNewNumber(number)
  }


  const filterSearch = (e) => {
    const keyword = e.target.value;
    setNewFilter(keyword)
    if (keyword === '') {
      setPersons(allPersons);
      return
    } else {
      const results = allPersons.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setPersons(results);
    }
};

function deletePerson(id){
  const filteredPerson = allPersons.filter(person => person.id === id)
  const personName = filteredPerson[0].name
  const personId = filteredPerson[0].id
  if(window.confirm(`Delete ${personName} ?`)) {
    personService.remove(personId)
    console.log(`${personName} successfully deleted`)
    setMessage(
      `${personName} was succesfully deleted`
    )
    setAllPersons(allPersons.filter(person => person.id !== personId))
    setTimeout(() => {
      setMessage(null)
    }, 5000);
  }
}

  function submitForm(e){
    e.preventDefault()
    const person = persons.filter(person => person.name === newName);
    const personToAdd = person[0];
    const updatedPerson = {...personToAdd, number: newNumber}

    if(person.length !== 0){
      if(window.confirm(`${personToAdd.name} is already added to the phonebook, replace the old number with a new one ?`)){
        personService
        .update(updatedPerson.id, updatedPerson)
        .then(returnedPerson => {
          setAllPersons(allPersons.map(personItem => personItem.id !== personToAdd.id ? personItem : returnedPerson))
          setNewName('')
          setNewNumber('')
          setMessage(`${updatedPerson.name} was successfully updated`)
          setTimeout(() => {
            setMessage(null)
          }, 5000);
        })
        .catch((error) => {
          console.log(error)
          setPersons(persons.filter(person => person.id !== updatedPerson.id))
          setNewName('')
          setNewNumber('')
          setMessage(
            `[ERROR] ${updatedPerson.name} was already deleted from server`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
      }
    }
    else {
      console.log(newName)
      const personToAdd = {
          name: newName,
          number: newNumber
        }
        personService
          .create(personToAdd)
          .then(returnedPerson => {
            setAllPersons(allPersons.concat(returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(
              `${newName} was successfully added`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
          .catch(error => {
            setMessage(
              `[ERROR] ${error.response.data.error}`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            console.log(error.response.data)
          })
  }
  }

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold underline">Phonebook</h2>
        <Notification message={message}/>
        <Filter onChange={filterSearch} name={newName} value={newFilter}/>
        <h3>Add a new</h3>
        <PersonForm submitForm={submitForm} newNumber={newNumber} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
        <h2>Numbers</h2>
        <Content persons={persons} allPersons={allPersons} deletePerson={deletePerson}/>
      </div>
    </>
  )
}

export default App