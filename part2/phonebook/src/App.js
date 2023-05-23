import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";

const Notification = ({ message, type }) => {
  if (message === null) {
    return <div></div>;
  }

  return <div className={type}>{message}</div>;
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    personsService.getAll().then((resp) => {
      setPersons(resp);
      setFilteredPersons(resp);
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
        if (
          window.confirm(
            `${newName} already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const person = { ...persons[i], number: newPhone };
          personsService
            .updatePerson(persons[i].id, person)
            .then((resp) => {
              const updatedPersons = persons.map((p) => {
                if (resp.id === p.id) {
                  return { ...p, number: newPhone };
                }
                return p;
              });
              setPersons(updatedPersons);
              setFilteredPersons(updatedPersons);
              setNewName("");
              setNewPhone("");
            })
            .catch(() => {
              setMessage(`Cant update ${personToSave.name}`);
              setNotification("error");
              setTimeout(() => {
                setMessage("");
              }, 5000);
            });
        }
        return;
      }
    }

    const personToSave = {
      name: newName,
      number: newPhone,
    };
    personsService.savePerson(personToSave).then((resp) => {
      const newPersons = persons.concat(resp);
      setPersons(newPersons);
      setFilteredPersons(newPersons);
      setNewName("");
      setNewPhone("");

      setMessage(`Added ${personToSave.name}`);
      setNotification("success");
      setTimeout(() => {
        setMessage("");
      }, 5000);
    });
  };

  const deleteOnClick = (id) => {
    if (window.confirm("wanna delete this sucker? ")) {
      personsService
        .deletePerson(id)
        .then((resp) => {
          const newPersons = persons.filter((p) => p.id != id);
          setPersons(newPersons);
          setFilteredPersons(newPersons);
        })
        .catch(() => {
          const person = persons.filter((p) => p.id === id);
          setMessage(
            `Information of ${person[0].name} has already been removed from server`
          );
          setNotification("error");
          const updatedPersons = persons.filter((p) => {
            if (id !== p.id) {
              return p;
            }
          });
          setPersons(updatedPersons);
          setFilteredPersons(updatedPersons);
          setTimeout(() => {
            setMessage("");
          }, 5000);
        });
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={notification} />
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
      <Persons persons={filteredPersons} deleteOnClick={deleteOnClick} />
    </div>
  );
};

export default App;
