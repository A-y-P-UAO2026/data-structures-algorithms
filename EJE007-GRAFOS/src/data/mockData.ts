import { Graph } from '../structures/Graph'
import type { CityNode, PersonNode } from '../types/GraphNode'

export const cities: CityNode[] = [
  { id: 'city-cali', kind: 'city', name: 'Cali' },
  { id: 'city-bogota', kind: 'city', name: 'Bogotá' },
  { id: 'city-medellin', kind: 'city', name: 'Medellín' },
]

export const people: PersonNode[] = [
  { id: 'person-juan', kind: 'person', name: 'Juan', age: 25, cityId: 'city-cali' },
  { id: 'person-maria', kind: 'person', name: 'María', age: 23, cityId: 'city-cali' },
  { id: 'person-carlos', kind: 'person', name: 'Carlos', age: 28, cityId: 'city-bogota' },
  { id: 'person-andrea', kind: 'person', name: 'Andrea', age: 24, cityId: 'city-medellin' },
  { id: 'person-pedro', kind: 'person', name: 'Pedro', age: 30, cityId: 'city-bogota' },
]

export function createMockGraph(): Graph {
  const graph = new Graph()
  cities.forEach((city) => graph.addNode(city))
  people.forEach((person) => {
    graph.addNode(person)
    graph.addEdge(person.id, person.cityId, 'residence')
  })
  graph.addEdge('person-juan', 'person-maria', 'friendship')
  graph.addEdge('person-juan', 'person-carlos', 'friendship')
  graph.addEdge('person-carlos', 'person-pedro', 'friendship')
  graph.addEdge('person-andrea', 'person-maria', 'friendship')
  return graph
}
