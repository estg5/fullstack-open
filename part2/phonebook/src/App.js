import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filter, setFilter] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const handleFilterChange = (e) => {
    const val = e.target.value;
    setFilter(val);
    if (filter === "") {
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
      phone: newPhone,
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
      <div>
        <label htmlFor="filter">filter</label>
        <input value={filter} onChange={handleFilterChange} id="filter" />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          <label htmlFor="nameInput">Name:</label>
          <input
            placeholder="enter name..."
            onChange={handleNameChange}
            value={newName}
            id="nameInput"
          />
        </div>
        <div>
          <label htmlFor="numberInput">Number:</label>
          <input
            placeholder="enter number..."
            onChange={handlePhoneChange}
            value={newPhone}
            id="numberInput"
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </div>
  );
};

export default App;
