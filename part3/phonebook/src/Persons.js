import React from 'react'

const Persons = ({person, deletePerson}) => {
    return (
        <p className="text-3xl font-bold underline">
            {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
        </p>
    )
}

export default Persons
