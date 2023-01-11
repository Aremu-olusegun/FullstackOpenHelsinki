import React, { useState, useEffect } from "react";
import axios from "axios";
import Content from "./Content";
import Filter from "./Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        console.log("promise fulfilled");
        setAllCountries(response.data);
      });
  }, []);

  const handleFilterChange = (event) => {
    let keyword = event.target.value;
    if (keyword !== "") {
      const regex = new RegExp(keyword, "i");
      const filteredCountries = () =>
        allCountries.filter((country) => country.name.common.match(regex));
      setCountries(filteredCountries);
    } else {
      setAllCountries(allCountries);
    }
    setNewFilter(keyword);
  };

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />
      <Content countries={countries} setCountries={setCountries} />
    </div>
  );
};

export default App;

