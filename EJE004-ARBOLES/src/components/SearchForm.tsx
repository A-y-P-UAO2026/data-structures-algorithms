import { useState, type FormEvent } from 'react'

type SearchFormProps = {
  onSearch: (value: number) => boolean
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const number = Number(value)

    if (value.trim() === '' || !Number.isFinite(number)) {
      setMessage('Escribe un número válido.')
      return
    }

    setMessage(onSearch(number) ? `El número ${number} sí existe.` : `El número ${number} no existe.`)
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Buscar número</h2>
      <input type="number" value={value} onChange={(event) => setValue(event.target.value)} placeholder="Ej. 60" />
      <button type="submit">Buscar</button>
      {message && <p className="form-message">{message}</p>}
    </form>
  )
}
