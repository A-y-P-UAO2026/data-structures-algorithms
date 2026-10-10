import type { DoublyLinkedNode } from '../structures/nodes'
import type { Page } from '../data/mockPages'

type BrowserHistoryProps = {
  current: DoublyLinkedNode<Page> | null
  onBack: () => void
  onForward: () => void
}

export function BrowserHistory({ current, onBack, onForward }: BrowserHistoryProps) {
  if (current === null) return <section className="view-card"><p>No hay páginas en el historial.</p></section>

  return <section className="view-card"><span className="section-label">Lista doblemente enlazada</span><h2>Historial de navegación</h2><div className="page-card"><span className="browser-icon">◉</span><div><h3>{current.value.title}</h3><p>{current.value.url}</p></div></div><div className="node-info"><span>Página actual</span><span>{current.prev === null && current.next === null ? 'Única página' : 'Usa las referencias prev y next'}</span></div><div className="history-actions"><button type="button" onClick={onBack} disabled={current.prev === null}>← Atrás</button><button type="button" onClick={onForward} disabled={current.next === null}>Adelante →</button></div></section>
}
