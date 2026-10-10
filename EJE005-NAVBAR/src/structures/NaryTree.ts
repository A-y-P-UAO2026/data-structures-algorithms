export type NaryNode<T> = {
  value: T
  children: NaryNode<T>[]
}

/** Árbol en el que cada nodo puede tener cero, uno o muchos hijos. */
export class NaryTree<T extends { id: string }> {
  public readonly root: NaryNode<T>

  constructor(root: NaryNode<T>) {
    this.root = root
  }

  /** Recorre el árbol en profundidad y ejecuta una acción para cada nodo. */
  depthFirstVisit(visitor: (value: T, depth: number) => void): void {
    const visit = (node: NaryNode<T>, depth: number) => {
      visitor(node.value, depth)
      node.children.forEach((child) => visit(child, depth + 1))
    }

    visit(this.root, 0)
  }

  findById(id: string): T | undefined {
    let result: T | undefined
    this.depthFirstVisit((value) => {
      if (value.id === id) result = value
    })
    return result
  }
}
