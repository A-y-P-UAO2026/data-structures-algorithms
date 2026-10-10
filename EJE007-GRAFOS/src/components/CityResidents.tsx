import type { PersonNode } from '../types/GraphNode'

type CityResidentsProps = { cityName: string; residents: PersonNode[] }

export function CityResidents({ cityName, residents }: CityResidentsProps) {
  return <div className="city-residents"><h3>Habitantes de {cityName}</h3>{residents.length === 0 ? <p className="muted">No hay habitantes registrados.</p> : <ul className="resident-list">{residents.map((person) => <li key={person.id}><span>{person.name}</span><small>{person.age} años</small></li>)}</ul>}</div>
}
