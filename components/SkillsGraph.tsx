'use client'

import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import SectionHeader from './SectionHeader'

const CATEGORIES = {
  programming: { label: 'Programming', color: '#22d3ee' },
  ml_dl:       { label: 'ML / Deep Learning', color: '#a78bfa' },
  genai:       { label: 'GenAI & NLP', color: '#f472b6' },
  vector_db:   { label: 'Vector Databases', color: '#34d399' },
  mlops:       { label: 'MLOps & Deployment', color: '#fb923c' },
  cloud:       { label: 'Cloud & Platforms', color: '#60a5fa' },
  data:        { label: 'Data & Databases', color: '#facc15' },
} as const

type Category = keyof typeof CATEGORIES

interface SkillNode extends d3.SimulationNodeDatum {
  id: string
  label: string
  category: Category
  size: number
}

const NODES: SkillNode[] = [
  { id: 'python',       label: 'Python',        category: 'programming', size: 30 },
  { id: 'java',         label: 'Java',           category: 'programming', size: 22 },
  { id: 'cpp',          label: 'C++',            category: 'programming', size: 16 },
  { id: 'sql',          label: 'SQL',            category: 'programming', size: 20 },
  { id: 'pytorch',      label: 'PyTorch',        category: 'ml_dl',       size: 26 },
  { id: 'tensorflow',   label: 'TensorFlow',     category: 'ml_dl',       size: 24 },
  { id: 'sklearn',      label: 'Scikit-learn',   category: 'ml_dl',       size: 20 },
  { id: 'keras',        label: 'Keras',          category: 'ml_dl',       size: 16 },
  { id: 'transformers', label: 'Transformers',   category: 'ml_dl',       size: 20 },
  { id: 'llms',         label: 'LLMs',           category: 'genai',       size: 30 },
  { id: 'rag',          label: 'RAG',            category: 'genai',       size: 28 },
  { id: 'langchain',    label: 'LangChain',      category: 'genai',       size: 26 },
  { id: 'langgraph',    label: 'LangGraph',      category: 'genai',       size: 20 },
  { id: 'llamaindex',   label: 'LlamaIndex',     category: 'genai',       size: 20 },
  { id: 'huggingface',  label: 'Hugging Face',   category: 'genai',       size: 20 },
  { id: 'finetuning',   label: 'Fine-Tuning',    category: 'genai',       size: 18 },
  { id: 'nlp2sql',      label: 'NLP-to-SQL',     category: 'genai',       size: 18 },
  { id: 'pinecone',     label: 'Pinecone',       category: 'vector_db',   size: 16 },
  { id: 'faiss',        label: 'FAISS',          category: 'vector_db',   size: 16 },
  { id: 'chromadb',     label: 'ChromaDB',       category: 'vector_db',   size: 14 },
  { id: 'weaviate',     label: 'Weaviate',       category: 'vector_db',   size: 14 },
  { id: 'docker',       label: 'Docker',         category: 'mlops',       size: 24 },
  { id: 'k8s',          label: 'Kubernetes',     category: 'mlops',       size: 24 },
  { id: 'mlflow',       label: 'MLflow',         category: 'mlops',       size: 16 },
  { id: 'fastapi',      label: 'FastAPI',        category: 'mlops',       size: 18 },
  { id: 'cicd',         label: 'CI/CD',          category: 'mlops',       size: 16 },
  { id: 'aws',          label: 'AWS',            category: 'cloud',       size: 24 },
  { id: 'azure',        label: 'Azure',          category: 'cloud',       size: 24 },
  { id: 'sagemaker',    label: 'SageMaker',      category: 'cloud',       size: 16 },
  { id: 'azurefoundry', label: 'Azure AI Foundry', category: 'cloud',    size: 16 },
  { id: 'mysql',        label: 'MySQL',          category: 'data',        size: 16 },
  { id: 'mongodb',      label: 'MongoDB',        category: 'data',        size: 16 },
  { id: 'pandas',       label: 'Pandas',         category: 'data',        size: 18 },
  { id: 'spark',        label: 'Spark',          category: 'data',        size: 14 },
  { id: 'numpy',        label: 'NumPy',          category: 'data',        size: 14 },
]

export default function SkillsGraph() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const svgEl = svgRef.current
    if (!container || !svgEl) return

    const HEIGHT = 520
    let animFrameId: number

    const draw = (width: number) => {
      const svg = d3.select(svgEl)
      svg.selectAll('*').remove()
      svg.attr('width', width).attr('height', HEIGHT)

      const nodes: SkillNode[] = NODES.map(n => ({ ...n }))

      const simulation = d3
        .forceSimulation<SkillNode>(nodes)
        .force('charge', d3.forceManyBody<SkillNode>().strength(-90))
        .force('center', d3.forceCenter(width / 2, HEIGHT / 2))
        .force(
          'collision',
          d3.forceCollide<SkillNode>().radius(d => d.size + 12).strength(0.9)
        )

      const g = svg.append('g')

      svg.call(
        d3
          .zoom<SVGSVGElement, unknown>()
          .scaleExtent([0.4, 2.5])
          .on('zoom', ({ transform }) => g.attr('transform', String(transform)))
      )

      const node = g
        .selectAll<SVGGElement, SkillNode>('.node')
        .data(nodes)
        .enter()
        .append('g')
        .attr('class', 'node')
        .style('cursor', 'grab')
        .call(
          d3
            .drag<SVGGElement, SkillNode>()
            .on('start', (event, d) => {
              if (!event.active) simulation.alphaTarget(0.3).restart()
              d.fx = d.x
              d.fy = d.y
            })
            .on('drag', (event, d) => {
              d.fx = event.x
              d.fy = event.y
            })
            .on('end', (event, d) => {
              if (!event.active) simulation.alphaTarget(0)
              d.fx = null
              d.fy = null
            })
        )

      // Circle
      node
        .append('circle')
        .attr('r', d => d.size)
        .attr('fill', d => CATEGORIES[d.category].color + '18')
        .attr('stroke', d => CATEGORIES[d.category].color)
        .attr('stroke-width', 1.5)
        .on('mouseenter', function (_, d) {
          d3.select(this)
            .attr('fill', CATEGORIES[d.category].color + '35')
            .attr('stroke-width', 2.5)
            .attr('r', d.size + 2)
        })
        .on('mouseleave', function (_, d) {
          d3.select(this)
            .attr('fill', CATEGORIES[d.category].color + '18')
            .attr('stroke-width', 1.5)
            .attr('r', d.size)
        })

      // Label
      node
        .append('text')
        .text(d => d.label)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'central')
        .attr('font-size', d => Math.max(8, Math.min(d.size * 0.52, 13)))
        .attr('fill', d => CATEGORIES[d.category].color)
        .attr('font-family', 'inherit')
        .attr('font-weight', '500')
        .attr('pointer-events', 'none')
        .attr('user-select', 'none')

      simulation.on('tick', () => {
        animFrameId = requestAnimationFrame(() => {
          node.attr('transform', d => `translate(${d.x ?? 0},${d.y ?? 0})`)
        })
      })

      return simulation
    }

    let simulation = draw(container.clientWidth || 800)

    const observer = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width
      if (w > 0) {
        simulation?.stop()
        simulation = draw(w)
      }
    })
    observer.observe(container)

    return () => {
      observer.disconnect()
      simulation?.stop()
      cancelAnimationFrame(animFrameId)
    }
  }, [])

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Technical Stack"
          title="Skills & Expertise"
          subtitle="Drag nodes to explore — scroll to zoom — grouped by technology domain"
        />

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {(Object.entries(CATEGORIES) as [Category, { label: string; color: string }][]).map(
            ([key, { label, color }]) => (
              <span key={key} className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                {label}
              </span>
            )
          )}
        </div>

        <div
          ref={containerRef}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/40 overflow-hidden"
        >
          <svg ref={svgRef} className="w-full block" style={{ height: 520 }} />
        </div>
      </div>
    </section>
  )
}
