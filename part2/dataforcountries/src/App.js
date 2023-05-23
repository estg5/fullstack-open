import React, { useEffect, useState } from "react";
import countriesService from "./services/countries";

const Find = ({ value, onInputHandler }) => {
  return (
    <div>
      <label>find countries </label>
      <input value={value} onInput={onInputHandler} />
    </div>
  );
};

const DisplayCountries = ({ data }) => {
  if (data.length > 10) {
    return <div>too many matches, specify filter</div>;
  }

  if (data.length === 1) {
    return <DisplayCountryDetails country={data[0]} />;
  }

  return (
    <div>
      {data.map((c) => (
        <p key={c.area}>{c.name.common}</p>
      ))}
    </div>
  );
};

const DisplayCountryDetails = ({ country }) => {
  const languages = [];
  for (const [key, value] of Object.entries(country.languages)) {
    languages.push(value);
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <p>
        <strong>languages:</strong>
      </p>
      <ul>
        {languages.map((l, i) => (
          <li key={i}>{l}</li>
        ))}
      </ul>
      <img src={country.flags.png}></img>
    </div>
  );
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [displayCountries, setDisplayCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService.getAll().then((c) => {
      setCountries(c);
      setDisplayCountries(c);
    });
  }, []);

  useEffect(() => {
    if (!countries.length) {
      return;
    }

    const filtered = displayCountries.filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    );

    setDisplayCountries(filtered);
  }, [search]);

  useEffect(() => {
    if (countries.length && !displayCountries.length) {
      setDisplayCountries(countries);
    }
  }, [displayCountries]);

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <Find value={search} onInputHandler={handleSearchInput} />
      {search ? <DisplayCountries data={displayCountries} /> : null}
    </div>
  );
}
