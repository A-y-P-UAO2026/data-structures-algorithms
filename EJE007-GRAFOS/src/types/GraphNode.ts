export type NodeKind = 'person' | 'city'

export type CityNode = {
  id: string
  kind: 'city'
  name: string
}

export type PersonNode = {
  id: string
  kind: 'person'
  name: string
  age: number
  cityId: string
}

export type GraphNode = CityNode | PersonNode

export type EdgeType = 'friendship' | 'residence'

export type GraphEdge = {
  from: string
  to: string
  type: EdgeType
}
