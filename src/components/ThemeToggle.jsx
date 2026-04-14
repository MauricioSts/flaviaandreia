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

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Aguarda o carregamento completo do site
        if (document.readyState === 'complete') {
            setIsLoaded(true)
        } else {
            window.addEventListener('load', () => setIsLoaded(true))
            return () => window.removeEventListener('load', () => setIsLoaded(true))
        }
    }, [])

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
            onClick={() => isLoaded && setDark(!dark)}
            disabled={!isLoaded}
            aria-label={dark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            className={`relative w-9 h-9 rounded-full flex items-center justify-center
        bg-surface-secondary border border-border-light hover:border-border
        transition-all duration-300 ${isLoaded ? 'hover:scale-105 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
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
