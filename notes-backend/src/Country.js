import React from "react";

const Country = ({ country }) => {
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
