import { motion } from 'motion/react'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-mesh pt-20 pb-12">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] right-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-primary-100/30 blur-[100px] md:blur-[120px] animate-pulse-soft" />
                <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-secondary/10 blur-[80px] md:blur-[100px] animate-float" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
                {/* Mobile-First Layout */}
                <div className="flex flex-col items-center text-center space-y-8">

                    {/* Profile Image - Mobile First */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px]"
                    >
                        {/* Decorative glow */}
                        <div className="absolute -inset-3 bg-gradient-to-tr from-primary-200/40 to-secondary/30 rounded-[60px] blur-2xl opacity-60" />

                        {/* Main Image */}
                        <div className="relative rounded-[60px] overflow-hidden shadow-2xl ring-1 ring-border-light">
                            <img
                                src="/images/perfil1.jpeg"
                                alt="Dra. Flavia Andreia"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-secondary/80 backdrop-blur-md border border-primary-100 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-[11px] font-bold text-primary-dark tracking-wider uppercase">
                            Enfermagem Obstétrica
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
                    >
                        Dra. Flavia Andreia
                        <br />
                        <span className="text-gradient">Santos</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl px-4"
                    >
                        Mais de <strong className="text-text-primary">20 anos</strong> de experiência transformando o cuidar em ciência e arte. Especialista em parto humanizado e formação acadêmica de excelência.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 w-full max-w-md px-4"
                    >
                        <a
                            href="#about"
                            className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 active:scale-95"
                        >
                            Conheça minha trajetória
                        </a>
                        <a
                            href="#publications"
                            className="flex-1 inline-flex items-center justify-center px-6 py-4 rounded-full glass-effect border border-border text-text-primary font-semibold text-sm hover:bg-surface-secondary transition-all duration-300 shadow-sm active:scale-95"
                        >
                            Ver publicações
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex justify-center gap-8 sm:gap-12 mt-8 pt-8 border-t border-border-light w-full max-w-md"
                    >
                        {[
                            { value: '20+', label: 'Anos' },
                            { value: '8+', label: 'Artigos' },
                            { value: '15+', label: 'Projetos' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-text-primary">{stat.value}</div>
                                <div className="text-xs text-text-tertiary font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2 opacity-40">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-secondary">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <HiArrowDown className="text-text-primary" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
