import axios from "axios";
import React from "react";
import { useEffect } from "react";

const Country = ({ country }) => {
  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital[0],
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((response) => {
        const apiResponse = response.data;
        console.log(apiResponse);
      });
  });

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital: {country.capital[0]}</p>
      <p>population: {country.population}</p>
      <h2>Spoken languages</h2>
      <ul></ul>
      <h2>Country flag</h2>
      <img src={country.flags.png} alt="Country flag"></img>
    </div>
  );
};

export default Country;
