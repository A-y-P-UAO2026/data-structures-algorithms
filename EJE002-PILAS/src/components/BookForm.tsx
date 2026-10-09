import { useState, type FormEvent } from 'react'
import type { Book } from '../types/Book'

type BookFormProps = { onSubmit: (book: Book) => void }

const emptyBook: Book = { name: '', isbn: '', author: '', editorial: '' }

export function BookForm({ onSubmit }: BookFormProps) {
  const [book, setBook] = useState<Book>(emptyBook)
  const [error, setError] = useState('')

  const handleChange = (field: keyof Book, value: string) => {
    setBook((currentBook) => ({ ...currentBook, [field]: value }))
    setError('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (Object.values(book).some((value) => !value.trim())) {
      setError('Completa todos los campos para registrar el libro.')
      return
    }
    onSubmit({ name: book.name.trim(), isbn: book.isbn.trim(), author: book.author.trim(), editorial: book.editorial.trim() })
    setBook(emptyBook)
    setError('')
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">Nuevo elemento</span>
        <h2>Registrar libro</h2>
        <p>El último libro registrado quedará en el tope de la pila.</p>
      </div>
      <div className="form-grid">
        <label>Nombre del libro<input type="text" value={book.name} onChange={(event) => handleChange('name', event.target.value)} placeholder="Ej. El principito" /></label>
        <label>ISBN<input type="text" value={book.isbn} onChange={(event) => handleChange('isbn', event.target.value)} placeholder="Ej. 978-0000000000" /></label>
        <label>Autor<input type="text" value={book.author} onChange={(event) => handleChange('author', event.target.value)} placeholder="Nombre del autor" /></label>
        <label>Editorial<input type="text" value={book.editorial} onChange={(event) => handleChange('editorial', event.target.value)} placeholder="Nombre de la editorial" /></label>
      </div>
      {error && <p className="form-error">{error}</p>}
      <button className="primary-button" type="submit">Agregar a la pila</button>
    </form>
  )
}
