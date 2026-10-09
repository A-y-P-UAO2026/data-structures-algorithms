import { TreeNode } from './TreeNode'

export class BinarySearchTree {
  private root: TreeNode<number> | null = null

  constructor(values: number[] = []) {
    values.forEach((value) => this.insert(value))
  }

  insert(value: number): boolean {
    if (this.root === null) {
      this.root = new TreeNode(value)
      return true
    }

    let current = this.root
    while (true) {
      if (value === current.value) return false

      if (value < current.value) {
        if (current.left === null) {
          current.left = new TreeNode(value)
          return true
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = new TreeNode(value)
          return true
        }
        current = current.right
      }
    }
  }

  search(value: number): boolean {
    let current = this.root

    while (current !== null) {
      if (value === current.value) return true
      current = value < current.value ? current.left : current.right
    }

    return false
  }

  inorder(): number[] {
    const result: number[] = []
    this.traverseInorder(this.root, result)
    return result
  }

  preorder(): number[] {
    const result: number[] = []
    this.traversePreorder(this.root, result)
    return result
  }

  postorder(): number[] {
    const result: number[] = []
    this.traversePostorder(this.root, result)
    return result
  }

  getRoot(): TreeNode<number> | null {
    return this.root
  }

  private traverseInorder(node: TreeNode<number> | null, result: number[]): void {
    if (node === null) return
    this.traverseInorder(node.left, result)
    result.push(node.value)
    this.traverseInorder(node.right, result)
  }

  private traversePreorder(node: TreeNode<number> | null, result: number[]): void {
    if (node === null) return
    result.push(node.value)
    this.traversePreorder(node.left, result)
    this.traversePreorder(node.right, result)
  }

  private traversePostorder(node: TreeNode<number> | null, result: number[]): void {
    if (node === null) return
    this.traversePostorder(node.left, result)
    this.traversePostorder(node.right, result)
    result.push(node.value)
  }
}
