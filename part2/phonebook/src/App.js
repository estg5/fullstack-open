import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "1488-322-228" },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value);
  };

  const addNewPerson = (e) => {
    e.preventDefault();

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((p) => (
        <p key={p.name}>
          {p.name} {p.phone}
        </p>
      ))}
    </div>
  );
};

export default App;
