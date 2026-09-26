import { useState, type SyntheticEvent} from 'react'
import {Queue} from './structures/Queue';
import type {Person} from './models/Person';
import './App.css'

const queue = new Queue<Person>();


function App() {
  const [name, setName] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");

  const onAddPerson = (person: Person) => {
    queue.enqueue(person);
    console.log("Persona agregada a la cola:", person);
    console.log("Estado actual de la cola:", queue.getItems());
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    event.preventDefault();

    if (!name.trim() || !withdrawalAmount) {
      return;
    }

    const person: Person = {
      id: crypto.randomUUID(),
      name: name.trim(),
      withdrawalAmount: Number(withdrawalAmount),
      arrivalDate: new Date(),
    };

    onAddPerson(person);

    setName("");
    setWithdrawalAmount("");
  };

  return (
  

    <div id="queue-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>

        <input
          id="name"
          type="text"
          placeholder="Ingrese el nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="withdrawalAmount">
          Monto a retirar
        </label>

        <input
          id="withdrawalAmount"
          type="number"
          placeholder="Ej: 200000"
          value={withdrawalAmount}
          onChange={(event) =>
            setWithdrawalAmount(event.target.value)
          }
        />
      </div>

      <button type="submit">
        Agregar a la cola
      </button>
    </form>
    <div className="queue-display">
      <h2>Cola de personas - Cantidad: {queue.size()}</h2>
      {queue.isEmpty() ? (
        <p>No hay personas en la cola.</p>
      ) : (
        <ul>
          {queue.getItems().map((person) => (
            <li key={person.id}>
              {person.name} - Monto a retirar: {person.withdrawalAmount} - Fecha de llegada:{" "}
              {person.arrivalDate.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <h2>
        Persona al frente de la cola:
      </h2>
      {queue.peek() ? (
        <p>
          {queue.peek()?.name} - Monto a retirar: {queue.peek()?.withdrawalAmount} - Fecha de llegada:{" "}
          {queue.peek()?.arrivalDate.toLocaleString()}
        </p>
      ) : (
        <p>No hay personas en la cola.</p>
      )}
    </div>
    </div>
  )
}

export default App