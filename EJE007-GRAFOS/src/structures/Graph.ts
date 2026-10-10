import type { EdgeType, GraphEdge, GraphNode, PersonNode } from '../types/GraphNode'

export type GraphData = {
  nodes: Array<{ id: string; label: string; color: string; size: number }>
  links: Array<{ source: string; target: string; label: string; color: string }>
}

export class Graph {
  private readonly nodes = new Map<string, GraphNode>()
  private readonly adjacency = new Map<string, GraphEdge[]>()

  addNode(node: GraphNode): boolean {
    if (this.nodes.has(node.id)) return false
    if (node.kind === 'person') {
      const city = this.nodes.get(node.cityId)
      if (!city || city.kind !== 'city') return false
    }

    this.nodes.set(node.id, node)
    this.adjacency.set(node.id, [])
    return true
  }

  addEdge(from: string, to: string, type: EdgeType): boolean {
    const source = this.nodes.get(from)
    const target = this.nodes.get(to)
    if (!source || !target || from === to || this.hasEdge(from, to)) return false

    if (type === 'friendship' && (source.kind !== 'person' || target.kind !== 'person')) return false
    if (type === 'residence' && !this.isValidResidence(source, target)) return false

    const edge: GraphEdge = { from, to, type }
    const reverse: GraphEdge = { from: to, to: from, type }
    this.adjacency.get(from)!.push(edge)
    this.adjacency.get(to)!.push(reverse)
    return true
  }

  searchNode(id: string): GraphNode | undefined {
    return this.nodes.get(id)
  }

  getNeighbors(id: string): GraphNode[] {
    return (this.adjacency.get(id) ?? []).map((edge) => this.nodes.get(edge.to)!).filter(Boolean)
  }

  getEdges(): GraphEdge[] {
    const edges: GraphEdge[] = []
    const seen = new Set<string>()
    this.adjacency.forEach((connections) => connections.forEach((edge) => {
      const key = [edge.from, edge.to].sort().join('|')
      if (!seen.has(key)) { seen.add(key); edges.push(edge) }
    }))
    return edges
  }

  getPeopleByCity(cityId: string): PersonNode[] {
    return [...this.nodes.values()].filter((node): node is PersonNode => node.kind === 'person' && node.cityId === cityId)
  }

  getNodes(): GraphNode[] { return [...this.nodes.values()] }

  printGraph(): void {
    this.adjacency.forEach((edges, id) => {
      console.log(id, edges.map((edge) => `${edge.to} (${edge.type})`).join(', '))
    })
  }

  toGraphData(): GraphData {
    return {
      nodes: this.getNodes().map((node) => ({ id: node.id, label: node.name, color: node.kind === 'person' ? '#4f79a8' : '#d38c42', size: node.kind === 'person' ? 220 : 280 })),
      links: this.getEdges().map((edge) => ({ source: edge.from, target: edge.to, label: edge.type === 'friendship' ? 'amistad' : 'reside en', color: edge.type === 'friendship' ? '#8b9bb3' : '#d38c42' })),
    }
  }

  private hasEdge(from: string, to: string): boolean {
    return (this.adjacency.get(from) ?? []).some((edge) => edge.to === to)
  }

  private isValidResidence(source: GraphNode, target: GraphNode): boolean {
    const person = source.kind === 'person' ? source : target.kind === 'person' ? target : null
    const city = source.kind === 'city' ? source : target.kind === 'city' ? target : null
    return Boolean(person && city && person.cityId === city.id)
  }
}
