import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [data, setData] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3500/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  let inputfiltered = (event) => {
    let value = event.target.value;
    if (value !== "") {
      let filteredResult = persons.filter((user) =>
        user.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setPersons(filteredResult);
      setFilteredName(value);
    } else {
      setPersons(persons);
    }

    setFilteredName(value);
  };

  const handleTextChange = (evt) => {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  };

  function formSubmit(e) {
    e.preventDefault();
    const filteredSearch = persons.find(
      (person) => person.name === data.name && person.number === data.number
    );
    if (filteredSearch) {
      window.alert(`${data.name} and ${data.number} has already been added`);
    }
    const noteObject = {
      name: data.name,
      number: data.number,
    };
    axios.post("http://localhost:3500/persons", noteObject).then((response) => {
      setPersons([...persons, response.data]);
      setData({ name: "", number: "" });
    });
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
            onChange={handleTextChange}
            name="name"
            label="Name"
            placeholder="input name"
          />
        </div>
        <div>
          Number:
          <input
            value={data.number}
            onChange={handleTextChange}
            name="number"
            label="use number"
            placeholder="input number"
          />
        </div>
        <button type="submit"> Submit </button>
      </form>
      {persons && persons.length > 0 ? (
        persons.map((user) => (
          <li key={user.id} className="user">
            <span className="user-name">{user.name}</span>
            <span className="user-number">{user.number}</span>
            <button>delete</button>
          </li>
        ))
      ) : (
        <p>No results found!</p>
      )}
    </div>
  );
};

export default App;

