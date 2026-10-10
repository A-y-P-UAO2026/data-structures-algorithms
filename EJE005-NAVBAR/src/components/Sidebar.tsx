import { useState } from 'react'
import type { NaryNode } from '../structures/NaryTree'
import { SidebarItem } from './SidebarItem'
import type { MenuItem } from '../types/MenuItem'
import { X } from 'lucide-react'

type SidebarProps = { tree: NaryNode<MenuItem>; selectedId: string; onSelect: (item: MenuItem) => void; onClose?: () => void }

export function Sidebar({ tree, selectedId, onSelect, onClose }: SidebarProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['people', 'settings']))
  const toggle = (id: string) => setExpandedIds((current) => {
    const next = new Set(current)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    return next
  })

  return <aside className="sidebar"><div className="brand"><span className="brand-mark">N</span><b>Menú</b><button type="button" className="close-sidebar" onClick={onClose} aria-label="Cerrar menú"><X size={20} /></button></div><nav aria-label="Navegación principal"><p className="nav-caption">OPCIONES</p><ul className="menu-tree">{tree.children.map((node) => <SidebarItem key={node.value.id} node={node} selectedId={selectedId} expandedIds={expandedIds} onSelect={(item) => { onSelect(item); onClose?.() }} onToggle={toggle} />)}</ul></nav></aside>
}
