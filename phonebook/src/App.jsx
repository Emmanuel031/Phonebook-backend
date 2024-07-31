import { useState } from "react";
import Filter from "./filter";

const App = () => {
  let [persons, setPersons] = useState([
      { name: "Arto Hellas", number: "040-1234567" },
    ]),
    [newName, setName] = useState(""),
    [number, setNumber] = useState(""),
    [filter, setFilter] = useState("");

  let handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  let handleNumber = (e) => {
    setNumber(e.target.value);
  };

  function handleForm(e) {
    e.preventDefault();

    if (newName == "") {
      alert("Type a name");
    } else if (number == "") {
      alert("Type a number");
    } else {
      if (persons.some((n) => n.name == newName)) {
        alert(`${newName} is already in the list`);
      } else {
        setPersons([...persons, { name: [newName], number: [number] }]);
      }
    }
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} persons={persons} handleFilter={handleFilter} />

      <h2>Add a new</h2>

      <form onSubmit={handleForm}>
        <div>
          name: <input onChange={handleName} />
        </div>
        <div>
          number: <input onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((n, i) => {
          return (
            <p key={i}>
              {n.name}: {n.number}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;