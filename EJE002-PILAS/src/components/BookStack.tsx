import type { Book } from '../types/Book'

type BookStackProps = { books: Book[]; onPop: () => void }

export function BookStack({ books, onPop }: BookStackProps) {
  const topBook = books.at(-1)
  const booksFromTop = [...books].reverse()

  return (
    <section className="stack-panel" aria-labelledby="stack-title">
      <div className="stack-heading">
        <div><h2 id="stack-title">Pila de libros</h2></div>
        <span className="count-badge">{books.length} {books.length === 1 ? 'libro' : 'libros'}</span>
      </div>
      <div className="top-book">
        <div><span className="top-label">Tope de la pila</span><strong>{topBook ? topBook.name : 'Pila vacía'}</strong></div>
        <span className="top-icon">↑</span>
      </div>
      {books.length === 0 ? (
        <div className="empty-state"><span className="empty-icon">○</span><p>No hay libros almacenados.</p><span>Agrega el primero usando el formulario.</span></div>
      ) : (
        <div className="books-list">
          {booksFromTop.map((book, index) => (
            <article className={`book-card ${index === 0 ? 'is-top' : ''}`} key={`${book.isbn}-${index}`}>
              <div className="book-position">{index === 0 ? 'TOPE' : `#${books.length - index}`}</div>
              <div className="book-info"><h3>{book.name}</h3><p>{book.author}</p><div className="book-meta"><span>ISBN {book.isbn}</span><span>{book.editorial}</span></div></div>
            </article>
          ))}
        </div>
      )}
      <button className="secondary-button" type="button" onClick={onPop} disabled={!topBook}>Retirar libro del tope</button>
    </section>
  )
}
