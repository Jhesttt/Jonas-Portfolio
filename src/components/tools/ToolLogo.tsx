import { useState } from 'react'
import type { Tool } from '../../data/tools'

/**
 * Logo tile. Every provided logo is an app icon with its own background, so it renders the
 * same in light and dark themes (nothing is recoloured); the tile just clips it to a rounded
 * square with a hairline ring so dark icons keep a visible edge on dark cards.
 * If there is no logo, or it fails to load, the text monogram shows instead.
 */
export default function ToolLogo({ tool }: { tool: Pick<Tool, 'logo' | 'icon' | 'name'> }) {
  const [failed, setFailed] = useState(false)
  const showLogo = tool.logo && !failed

  return (
    <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-bg ring-1 ring-ink/15 sm:h-[4.5rem] sm:w-[4.5rem]">
      {showLogo ? (
        <img
          src={tool.logo}
          alt=""
          width={72}
          height={72}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span aria-hidden className="font-display text-3xl leading-none text-ink">
          {tool.icon}
        </span>
      )}
    </span>
  )
}
