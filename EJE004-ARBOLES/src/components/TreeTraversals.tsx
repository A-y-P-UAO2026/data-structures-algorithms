type TreeTraversalsProps = {
  inorder: number[]
  preorder: number[]
  postorder: number[]
}

export function TreeTraversals({ inorder, preorder, postorder }: TreeTraversalsProps) {
  return (
    <section className="traversals-card">
      <h2>Recorridos</h2>
      <p><strong>Inorder:</strong> {inorder.join(' → ')}</p>
      <p><strong>Preorder:</strong> {preorder.join(' → ')}</p>
      <p><strong>Postorder:</strong> {postorder.join(' → ')}</p>
    </section>
  )
}
