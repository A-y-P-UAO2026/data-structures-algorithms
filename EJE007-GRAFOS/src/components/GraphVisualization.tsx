import { Graph } from 'react-d3-graph'
import type { GraphData } from '../structures/Graph'

type GraphVisualizationProps = { data: GraphData; onSelectNode: (id: string) => void }

const config = {
  directed: false,
  nodeHighlightBehavior: true,
  automaticRearrangeAfterDropNode: true,
  width: 680,
  height: 430,
  d3: { alphaTarget: 0.05, gravity: -120, linkLength: 150, disableLinkForce: false },
  node: { color: '#4f79a8', fontColor: '#222', fontSize: 12, highlightStrokeColor: '#222', labelProperty: 'label', renderLabel: true, size: 220 },
  link: { color: '#8b9bb3', highlightColor: '#333', labelProperty: 'label', renderLabel: true },
}

export function GraphVisualization({ data, onSelectNode }: GraphVisualizationProps) {
  return <section className="panel graph-panel"><div className="panel-title"><div><h2>Visualización del grafo</h2><p>Haz clic en un nodo para consultar sus datos.</p></div><div className="legend"><span><i className="legend-person" />Persona</span><span><i className="legend-city" />Ciudad</span></div></div><div className="graph-wrapper"><Graph id="people-cities-graph" data={data} config={config} onClickNode={onSelectNode} /></div></section>
}
