import type { ComponentType } from 'react'
import type { LucideIcon } from 'lucide-react'

export type MenuItem = {
  id: string
  title: string
  href: string
  icon: LucideIcon
  description: string
  component: ComponentType
}
