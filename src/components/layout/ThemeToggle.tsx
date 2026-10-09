import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-ink"
    >
      <Sun
        size={18}
        aria-hidden
        className={`absolute transition-all duration-200 ease-out ${isDark ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-90'}`}
      />
      <Moon
        size={18}
        aria-hidden
        className={`absolute transition-all duration-200 ease-out ${isDark ? 'scale-50 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'}`}
      />
    </button>
  )
}
