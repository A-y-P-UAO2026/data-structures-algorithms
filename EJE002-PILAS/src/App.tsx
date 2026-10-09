import { useState } from 'react'
import { BookForm } from './components/BookForm'
import { BookStack } from './components/BookStack'
import { mockBooks } from './data/mockBooks'
import { Stack } from './structures/Stack'
import type { Book } from './types/Book'
import './App.css'

function App() {
  const [stack] = useState(() => {
    const initialStack = new Stack<Book>()
    mockBooks.forEach((book) => initialStack.push(book))
    return initialStack
  })
  const [books, setBooks] = useState(() => stack.toArray())

  const refreshBooks = () => setBooks(stack.toArray())
  const handleAddBook = (book: Book) => {
    stack.push(book)
    refreshBooks()
  }
  const handlePopBook = () => {
    const removedBook = stack.pop()
    if (!removedBook) return
    refreshBooks()
  }

  return (
    <main className="app-shell">
      <header className="hero-header"><div className="brand-mark">S</div><div><h1>Stack de libros</h1></div></header>
      <div className="content-grid"><BookForm onSubmit={handleAddBook} /><BookStack books={books} onPop={handlePopBook} /></div>
    </main>
  )
}

export default App
