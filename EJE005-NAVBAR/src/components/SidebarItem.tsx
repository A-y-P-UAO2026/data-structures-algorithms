import type { NaryNode } from '../structures/NaryTree'
import type { MenuItem } from '../types/MenuItem'
import { ChevronDown, ChevronRight } from 'lucide-react'

type SidebarItemProps = { node: NaryNode<MenuItem>; depth?: number; selectedId: string; expandedIds: Set<string>; onSelect: (item: MenuItem) => void; onToggle: (id: string) => void }

export function SidebarItem({ node, depth = 0, selectedId, expandedIds, onSelect, onToggle }: SidebarItemProps) {
  const { value, children } = node
  const hasChildren = children.length > 0
  const isExpanded = expandedIds.has(value.id)
  const isSelected = selectedId === value.id
  const Icon = value.icon

  return <li className="sidebar-item"><div className={`menu-row ${isSelected ? 'is-selected' : ''}`} style={{ paddingLeft: `${18 + depth * 16}px` }}><button type="button" className="menu-link" onClick={() => onSelect(value)} aria-current={isSelected ? 'page' : undefined}><Icon className="menu-icon" size={16} strokeWidth={1.8} aria-hidden="true" /><span className="menu-label">{value.title}</span></button>{hasChildren && <button type="button" className="expand-button" onClick={() => onToggle(value.id)} aria-label={`${isExpanded ? 'Contraer' : 'Expandir'} ${value.title}`} aria-expanded={isExpanded}>{isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}</button>}</div>{hasChildren && isExpanded && <ul className="submenu">{children.map((child) => <SidebarItem key={child.value.id} node={child} depth={depth + 1} selectedId={selectedId} expandedIds={expandedIds} onSelect={onSelect} onToggle={onToggle} />)}</ul>}</li>
}
