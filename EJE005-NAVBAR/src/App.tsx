import { useMemo, useState } from 'react'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { menuTree } from './data/menuData'
import { NaryTree } from './structures/NaryTree'
import type { MenuItem } from './types/MenuItem'
import { Menu } from 'lucide-react'

const tree = new NaryTree(menuTree)

function App() {
  const [selectedId, setSelectedId] = useState('dashboard')
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const selectedItem = tree.findById(selectedId) ?? menuTree.children[0].value
  const SelectedPage = selectedItem.component
  const menuCount = useMemo(() => { let count = 0; tree.depthFirstVisit(() => { count += 1 }); return count - 1 }, [])
  const selectItem = (item: MenuItem) => { setSelectedId(item.id); setSidebarOpen(false); window.history.replaceState(null, '', item.href) }

  return <div className="app-shell">{isSidebarOpen && <button type="button" className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} aria-label="Cerrar navegación" />}<Sidebar tree={menuTree} selectedId={selectedId} onSelect={selectItem} onClose={() => setSidebarOpen(false)} /><main className="main-content"><header className="topbar"><button type="button" className="mobile-menu-button" onClick={() => setSidebarOpen(true)} aria-label="Abrir navegación"><Menu size={18} /></button><span>Menú de navegación</span></header><div className="page-content"><SelectedPage /><p className="tree-info">Opciones disponibles: {menuCount}</p></div></main></div>
}

export default App
