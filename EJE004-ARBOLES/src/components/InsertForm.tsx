import { useState, type FormEvent } from 'react'

type InsertFormProps = {
  onInsert: (value: number) => boolean
}

export function InsertForm({ onInsert }: InsertFormProps) {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const number = Number(value)

    if (value.trim() === '' || !Number.isFinite(number)) {
      setMessage('Escribe un número válido.')
      return
    }

    if (!onInsert(number)) {
      setMessage('Ese número ya existe en el árbol.')
      return
    }

    setValue('')
    setMessage('Número insertado correctamente.')
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Insertar número</h2>
      <input type="number" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Ej. 35" />
      <button type="submit">Insertar</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  )
}
