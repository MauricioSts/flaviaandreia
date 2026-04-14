import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HiMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#about' },
    { label: 'Formação', href: '#education' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Publicações', href: '#publications' },
    { label: 'Contato', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'
                    }`}
            >
                <div className={`mx-3 sm:mx-4 md:mx-6 lg:max-w-7xl lg:mx-auto px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between transition-all duration-500 rounded-2xl sm:rounded-3xl ${scrolled
                        ? 'glass-effect border border-white/20 shadow-xl backdrop-blur-2xl'
                        : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 sm:gap-3 active:scale-95 transition-transform">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                            <span className="text-white font-bold text-sm sm:text-base">FA</span>
                        </div>
                        <div className="hidden xs:flex flex-col">
                            <span className="font-bold text-text-primary text-xs sm:text-sm tracking-tight leading-none mb-0.5 sm:mb-1">
                                Dra. Flavia Andreia
                            </span>
                            <span className="text-[9px] sm:text-[10px] text-text-tertiary font-bold uppercase tracking-widest leading-none">
                                Santos
                            </span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-semibold text-text-secondary hover:text-primary transition-all duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* Theme Toggle + CTA Desktop */}
                    <div className="hidden lg:flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95"
                        >
                            Fale Comigo
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`p-2 rounded-xl transition-all duration-200 active:scale-95 ${mobileOpen ? 'bg-surface-secondary text-primary' : 'text-text-primary hover:bg-surface-secondary'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - iPhone Style */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-md"
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="absolute top-0 left-0 right-0 bg-surface rounded-b-[40px] shadow-2xl p-6 pt-24 border-b border-border-light"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col items-center gap-6 w-full">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-lg text-text-primary font-bold hover:text-primary transition-colors active:scale-95 w-full text-center py-2"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <div className="mt-4 w-full px-4">
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex justify-center items-center py-4 rounded-full bg-primary text-white font-bold shadow-xl shadow-primary/20 active:scale-95 transition-transform"
                                    >
                                        Fale Comigo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
