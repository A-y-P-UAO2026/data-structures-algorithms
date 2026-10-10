import type { LinkedNode } from '../structures/nodes'
import type { Song } from '../data/mockSongs'

type MusicPlayerProps = {
  current: LinkedNode<Song> | null
  onNext: () => void
}

export function MusicPlayer({ current, onNext }: MusicPlayerProps) {
  if (current === null) return <section className="view-card"><p>No hay canciones disponibles.</p></section>

  return <section className="view-card"><span className="section-label">Lista simplemente enlazada</span><h2>Reproductor de canciones</h2><div className="song-card"><div className="album-placeholder">♫</div><div><h3>{current.value.title}</h3><p>{current.value.artist}</p><span className="duration">Duración: {current.value.duration}</span></div></div><div className="node-info"><span>Canción actual</span><span>{current.next === null ? 'Última canción' : 'Hay una siguiente canción'}</span></div><button type="button" onClick={onNext} disabled={current.next === null}>Siguiente canción</button></section>
}
