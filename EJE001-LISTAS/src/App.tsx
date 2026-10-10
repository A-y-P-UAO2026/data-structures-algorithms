import { useState } from 'react'
import { BrowserHistory } from './components/BrowserHistory'
import { MusicPlayer } from './components/MusicPlayer'
import { mockPages } from './data/mockPages'
import { mockSongs } from './data/mockSongs'
import { DoublyLinkedList, } from './structures/DoublyLinkedList'
import { LinkedList } from './structures/LinkedList'
import type { DoublyLinkedNode, LinkedNode } from './structures/nodes'
import type { Page } from './data/mockPages'
import type { Song } from './data/mockSongs'
import './App.css'

const songs = new LinkedList<Song>()
mockSongs.forEach((song) => songs.append(song))

const pages = new DoublyLinkedList<Page>()
mockPages.forEach((page) => pages.append(page))

function App() {
  const [view, setView] = useState<'music' | 'history'>('music')
  const [currentSong, setCurrentSong] = useState<LinkedNode<Song> | null>(songs.head)
  const [currentPage, setCurrentPage] = useState<DoublyLinkedNode<Page> | null>(pages.head)

  const nextSong = () => {
    if (currentSong?.next) setCurrentSong(currentSong.next)
  }

  const goBack = () => {
    if (currentPage?.prev) setCurrentPage(currentPage.prev)
  }

  const goForward = () => {
    if (currentPage?.next) setCurrentPage(currentPage.next)
  }

  return <div className="app"><header className="app-header"><h1>Listas enlazadas</h1><p>Challenge 03 · Estructuras de datos</p></header><nav className="tabs" aria-label="Vistas"><button type="button" className={view === 'music' ? 'active' : ''} onClick={() => setView('music')}>Reproductor de canciones</button><button type="button" className={view === 'history' ? 'active' : ''} onClick={() => setView('history')}>Historial de navegación</button></nav><main>{view === 'music' ? <MusicPlayer current={currentSong} onNext={nextSong} /> : <BrowserHistory current={currentPage} onBack={goBack} onForward={goForward} />}</main></div>
}

export default App
