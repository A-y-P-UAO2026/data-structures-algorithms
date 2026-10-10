import { useState, type FormEvent } from 'react'
import type { CityNode } from '../types/GraphNode'

type PersonFormProps = { cities: CityNode[]; onAdd: (name: string, age: number, cityId: string) => boolean }

export function PersonForm({ cities, onAdd }: PersonFormProps) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [cityId, setCityId] = useState(cities[0]?.id ?? '')
  const [message, setMessage] = useState('')

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const added = onAdd(name.trim(), Number(age), cityId)
    if (!added) { setMessage('Ingresa un nombre y una edad válida.'); return }
    setName(''); setAge(''); setMessage('Persona agregada correctamente.')
  }

  return <section className="panel"><h2>Agregar persona</h2><form className="person-form" onSubmit={submit}><label>Nombre<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ej. Laura" /></label><label>Edad<input type="number" min="1" value={age} onChange={(event) => setAge(event.target.value)} placeholder="25" /></label><label>Ciudad<select value={cityId} onChange={(event) => setCityId(event.target.value)}>{cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}</select></label><button type="submit">Agregar</button></form>{message && <p className="form-message">{message}</p>}</section>
}
