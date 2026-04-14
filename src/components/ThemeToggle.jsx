import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme')
            if (saved) return saved === 'dark'
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        return false
    })

    useEffect(() => {
        const root = document.documentElement
        if (dark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    return (
        <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer
        bg-surface-secondary border border-border-light hover:border-border
        transition-all duration-300 hover:scale-105"
        >
            <div className="flex items-center justify-center">
                {dark ? (
                    <HiSun className="text-amber-400" size={18} />
                ) : (
                    <HiMoon className="text-text-secondary" size={18} />
                )}
            </div>
        </button>
    )
}
