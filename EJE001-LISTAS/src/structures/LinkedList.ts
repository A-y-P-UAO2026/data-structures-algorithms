import { LinkedNode } from './nodes'

export class LinkedList<T> {
  head: LinkedNode<T> | null = null
  tail: LinkedNode<T> | null = null

  append(value: T): LinkedNode<T> {
    const node = new LinkedNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }

    return node
  }
}
