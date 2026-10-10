import type { NaryNode } from '../structures/NaryTree'
import type { MenuItem } from '../types/MenuItem'
import { CircleHelp, Cog, House, LayoutDashboard, Settings2, Shield, User, Users } from 'lucide-react'
import { Dashboard } from '../pages/Dashboard'
import { Profile } from '../pages/Profile'
import { Settings } from '../pages/Settings'
import { Support } from '../pages/Support'
import { Team } from '../pages/Team'

export const menuTree: NaryNode<MenuItem> = {
  value: { id: 'root', title: 'Workspace', href: '#workspace', icon: House, description: 'Tu espacio de trabajo', component: Dashboard },
  children: [
    { value: { id: 'dashboard', title: 'Dashboard', href: '#dashboard', icon: LayoutDashboard, description: 'Resumen general', component: Dashboard }, children: [] },
    { value: { id: 'people', title: 'Personas', href: '#people', icon: Users, description: 'Gestiona tu equipo', component: Team }, children: [
      { value: { id: 'profile', title: 'Mi perfil', href: '#profile', icon: User, description: 'Información personal', component: Profile }, children: [] },
      { value: { id: 'team', title: 'Equipo', href: '#team', icon: Users, description: 'Miembros del workspace', component: Team }, children: [] },
    ] },
    { value: { id: 'settings', title: 'Configuración', href: '#settings', icon: Cog, description: 'Preferencias del workspace', component: Settings }, children: [
      { value: { id: 'general', title: 'General', href: '#general', icon: Settings2, description: 'Opciones generales', component: Settings }, children: [] },
      { value: { id: 'security', title: 'Seguridad', href: '#security', icon: Shield, description: 'Acceso y privacidad', component: Settings }, children: [] },
    ] },
    { value: { id: 'support', title: 'Ayuda y soporte', href: '#support', icon: CircleHelp, description: 'Encuentra ayuda', component: Support }, children: [] },
  ],
}
