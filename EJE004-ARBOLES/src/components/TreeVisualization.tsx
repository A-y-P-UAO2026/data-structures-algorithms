import Tree from 'react-d3-tree'
import type { RawNodeDatum } from 'react-d3-tree'
import type { TreeNode } from '../structures/TreeNode'

type TreeVisualizationProps = {
  root: TreeNode<number> | null
}

function toTreeData(node: TreeNode<number> | null): RawNodeDatum | null {
  if (node === null) return null

  const children = [node.left, node.right]
    .filter((child): child is TreeNode<number> => child !== null)
    .map(toTreeData)
    .filter((child): child is RawNodeDatum => child !== null)

  return {
    name: String(node.value),
    children: children.length > 0 ? children : undefined,
  }
}

export function TreeVisualization({ root }: TreeVisualizationProps) {
  const data = toTreeData(root)

  return (
    <section className="tree-card">
      <h2>Visualización del árbol</h2>
      <div className="tree-container">
        {data ? <Tree data={data} orientation="vertical" translate={{ x: 300, y: 55 }} pathFunc="step" /> : <p>El árbol está vacío.</p>}
      </div>
    </section>
  )
}
