import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  const [filteredName, setFilteredName] = useState("");

  function handleInputChange(evt) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }

  let inputfiltered = (event) => {
    let value = event.target.value;
    if (value !== "") {
      let filteredResult = persons.filter((user) =>
        user.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setPersons(filteredResult);
    } else {
      setPersons(persons);
    }

    setFilteredName(value);
  };

  function formSubmit(event) {
    event.preventDefault();
    const filteredSearch = persons.find(
      (person) => person.name === data.name && person.number === data.number
    );
    if (filteredSearch) {
      window.alert(`${data.name} and ${data.number} has already been added`);
    } else {
      setPersons([...persons, data]);
    }
    console.log(persons);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with
        <input
          type="search"
          value={filteredName}
          onChange={inputfiltered}
          className="input"
          placeholder="Filter"
        />
      </div>
      <form onSubmit={formSubmit}>
        <div>
          Name:
          <input
            value={data.name}
            onChange={handleInputChange}
            name="name"
            label="Name"
            placeholder="input name"
          />
        </div>
        <div>
          Number:
          <input
            value={data.number}
            onChange={handleInputChange}
            name="number"
            label="use number"
            placeholder="input number"
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
      <h2>Names</h2>
      {persons && persons.length > 0 ? (
        persons.map((user) => (
          <li key={user.id} className="user">
            <span className="user-name">{user.name}</span>
            <span className="user-number">{user.number}</span>
          </li>
        ))
      ) : (
        <p>No results found!</p>
      )}
    </div>
  );
};

export default App;

