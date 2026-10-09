import { useEffect, useState } from 'react'
import { InsertForm } from './components/InsertForm'
import { SearchForm } from './components/SearchForm'
import { TreeTraversals } from './components/TreeTraversals'
import { TreeVisualization } from './components/TreeVisualization'
import { mockNumbers } from './data/mockNumbers'
import { BinarySearchTree } from './structures/BinarySearchTree'
import './App.css'

function App() {
  const [tree] = useState(() => new BinarySearchTree(mockNumbers))
  const [treeVersion, setTreeVersion] = useState(0)
  const [insertedCount, setInsertedCount] = useState(0)

  const inorder = tree.inorder()
  const preorder = tree.preorder()
  const postorder = tree.postorder()

  useEffect(() => {
    console.log('Inorder:', tree.inorder())
    console.log('Preorder:', tree.preorder())
    console.log('Postorder:', tree.postorder())
  }, [tree, treeVersion])

  const handleInsert = (value: number) => {
    const inserted = tree.insert(value)
    if (inserted) {
      setInsertedCount((count) => count + 1)
      setTreeVersion((version) => version + 1)
    }
    return inserted
  }

  return (
    <main className="app">
      <header>
        <h1>Árbol binario de búsqueda</h1>
        <p>Inserta números, búscalos y observa cómo se organiza el árbol.</p>
      </header>

      <div className="forms-grid">
        <InsertForm onInsert={handleInsert} />
        <SearchForm onSearch={(value) => tree.search(value)} />
      </div>

      <TreeVisualization key={treeVersion} root={tree.getRoot()} />
      <TreeTraversals inorder={inorder} preorder={preorder} postorder={postorder} />

      <p className="summary">Números agregados después de iniciar: {insertedCount}</p>
    </main>
  )
}

export default App
