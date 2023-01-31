import React from 'react'
import Persons from './Persons'

const Content = ({persons, allPersons, deletePerson}) => {
  console.log(allPersons.length)
  if (persons.length === 0) {
    return (
      <ul>
        {allPersons.map((person, i) =>
          <Persons key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {persons.map((person, i) =>
          <Persons key={i} person={person} deletePerson={deletePerson} />
        )}
      </ul>
    )
  }
}

export default Content