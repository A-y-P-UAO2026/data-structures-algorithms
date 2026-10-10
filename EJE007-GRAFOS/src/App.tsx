import { useState } from 'react'
import { CityResidents } from './components/CityResidents'
import { GraphVisualization } from './components/GraphVisualization'
import { PersonForm } from './components/PersonForm'
import { cities, createMockGraph } from './data/mockData'
import { Graph } from './structures/Graph'
import type { GraphNode } from './types/GraphNode'
import './App.css'

function App() {
  const [graph] = useState<Graph>(createMockGraph)
  const [, setGraphVersion] = useState(0)
  const [selectedCityId, setSelectedCityId] = useState(cities[0].id)
  const [selectedNodeId, setSelectedNodeId] = useState('person-juan')
  const graphData = graph.toGraphData()
  const selectedNode = graph.searchNode(selectedNodeId)
  const selectedCity = graph.searchNode(selectedCityId)
  const cityResidents = graph.getPeopleByCity(selectedCityId)
  const peopleCount = graph.getNodes().filter((node) => node.kind === 'person').length
  const citiesCount = graph.getNodes().filter((node) => node.kind === 'city').length
  const selectedNeighbors = selectedNode ? graph.getNeighbors(selectedNode.id) : []

  const addPerson = (name: string, age: number, cityId: string): boolean => {
    if (!name || !Number.isInteger(age) || age <= 0 || !graph.searchNode(cityId)) return false
    const id = `person-${Date.now()}`
    const added = graph.addNode({ id, kind: 'person', name, age, cityId })
    if (added) {
      graph.addEdge(id, cityId, 'residence')
      setSelectedNodeId(id)
      setGraphVersion((value) => value + 1)
    }
    return added
  }

  return <div className="app"><header className="header"><h1>Grafo de personas y ciudades</h1><p>Lista de adyacencia con relaciones de amistad y residencia.</p></header><main className="layout"><div className="left-column"><GraphVisualization data={graphData} onSelectNode={setSelectedNodeId} /><section className="panel"><h2>Información del grafo</h2><div className="stats"><div><strong>{peopleCount}</strong><span>Personas</span></div><div><strong>{citiesCount}</strong><span>Ciudades</span></div><div><strong>{graph.getEdges().length}</strong><span>Conexiones</span></div></div></section></div><aside className="right-column"><section className="panel"><h2>Buscar nodo</h2><select className="full-select" value={selectedNodeId} onChange={(event) => setSelectedNodeId(event.target.value)}>{graph.getNodes().map((node) => <option key={node.id} value={node.id}>{node.name} ({node.kind === 'person' ? 'persona' : 'ciudad'})</option>)}</select>{selectedNode && <NodeDetails node={selectedNode} neighbors={selectedNeighbors} />}</section><section className="panel"><h2>Habitantes por ciudad</h2><select className="full-select" value={selectedCityId} onChange={(event) => setSelectedCityId(event.target.value)}>{cities.map((city) => <option key={city.id} value={city.id}>{city.name}</option>)}</select><CityResidents cityName={selectedCity?.kind === 'city' ? selectedCity.name : ''} residents={cityResidents} /></section><PersonForm cities={cities} onAdd={addPerson} /></aside></main></div>
}

function NodeDetails({ node, neighbors }: { node: GraphNode; neighbors: GraphNode[] }) {
  return <div className="node-details"><h3>{node.name}</h3>{node.kind === 'person' ? <p>Edad: {node.age} años</p> : <p>Tipo: ciudad</p>}<p className="neighbors-title">Conexiones:</p>{neighbors.length === 0 ? <p className="muted">Sin conexiones.</p> : <ul>{neighbors.map((neighbor) => <li key={neighbor.id}>{neighbor.name}</li>)}</ul>}</div>
}

export default App
