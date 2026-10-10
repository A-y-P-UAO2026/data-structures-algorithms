import { DoublyLinkedNode } from './nodes'

export class DoublyLinkedList<T> {
  head: DoublyLinkedNode<T> | null = null
  tail: DoublyLinkedNode<T> | null = null

  append(value: T): DoublyLinkedNode<T> {
    const node = new DoublyLinkedNode(value)

    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail!.next = node
      this.tail = node
    }

    return node
  }
}
