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
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                    ? 'p-4'
                    : 'p-6'
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between transition-all duration-700 rounded-3xl ${scrolled
                    ? 'glass-effect border border-white/20 shadow-xl shadow-slate-200/40 backdrop-blur-2xl'
                    : 'bg-transparent'
                    }`}>
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-3 active:scale-95 transition-transform">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 flex-shrink-0">
                            <span className="text-white font-bold text-base">FA</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-text-primary text-sm tracking-tight leading-none mb-1">
                                Dra. Flavia Andreia
                            </span>
                            <span className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest leading-none">
                                Santos
                            </span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
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
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Fale Comigo
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`p-2 rounded-xl transition-colors ${mobileOpen ? 'bg-surface-secondary text-primary' : 'text-text-primary hover:bg-surface-secondary'}`}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-md"
                        onClick={() => setMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="absolute right-4 top-24 bottom-4 w-[280px] bg-surface rounded-[40px] shadow-2xl p-8 flex flex-col items-center border border-border-light"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col items-center gap-8 w-full pt-4">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="text-lg text-text-primary font-bold hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <div className="mt-8 w-full">
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex justify-center items-center py-4 rounded-3xl bg-primary text-white font-bold shadow-xl shadow-primary/20"
                                    >
                                        Fale Comigo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )
                }
            </AnimatePresence>
        </>
    )
}
