declare module 'react-d3-graph' {
  import type { ComponentType } from 'react'

  export type GraphProps = {
    id: string
    data: { nodes: Array<Record<string, unknown>>; links: Array<Record<string, unknown>> }
    config?: Record<string, unknown>
    onClickNode?: (nodeId: string) => void
  }

  export const Graph: ComponentType<GraphProps>
}
