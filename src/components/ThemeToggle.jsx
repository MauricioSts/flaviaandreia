import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
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
            <motion.div
                key={dark ? 'moon' : 'sun'}
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0, rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
                {dark ? (
                    <HiSun className="text-amber-400" size={18} />
                ) : (
                    <HiMoon className="text-text-secondary" size={18} />
                )}
            </motion.div>
        </button>
    )
}
