import type { Tool } from '../../data/tools'
import ToolCard from './ToolCard'

/** Two columns on phones and tablets (2x2 for four tools), one full-width row on desktop. */
export default function ToolGrid({ tools }: { tools: Tool[] }) {
  const desktop = tools.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <ul className={`grid grid-cols-2 gap-3 sm:gap-5 ${desktop}`}>
      {tools.map((tool) => (
        <li key={tool.id} className="flex">
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  )
}
