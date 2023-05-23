import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((resp) => {
      setPersons(resp.data);
      setFilteredPersons(resp.data);
    });
  }, []);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleFilterChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    if (val === "") {
      setFilteredPersons(persons);
      return;
    }

    const filteredValue = persons.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredPersons(filteredValue);
  };

  const addNewPerson = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      return;
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const newPersons = persons.concat({
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    });

    setPersons(newPersons);
    setFilteredPersons(newPersons);
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChangeHandler={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        onSubmitHandler={addNewPerson}
        onChangeNameHandler={handleNameChange}
        onChangePhoneHandler={handlePhoneChange}
        nameValue={newName}
        phoneValue={newPhone}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
