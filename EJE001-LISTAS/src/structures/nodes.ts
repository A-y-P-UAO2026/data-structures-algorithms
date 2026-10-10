export class LinkedNode<T> {
  value: T
  next: LinkedNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export class DoublyLinkedNode<T> {
  value: T
  prev: DoublyLinkedNode<T> | null = null
  next: DoublyLinkedNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}
