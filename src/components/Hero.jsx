import { motion } from 'motion/react'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-mesh pt-16">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary-100/30 blur-[120px] animate-pulse-soft" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] animate-float" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Text Content */}
                <div className="order-1 md:order-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/50 backdrop-blur-md border border-primary-100 mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-[10px] font-bold text-primary-dark tracking-[0.2em] uppercase">
                                Enfermagem Obstétrica • Mestre • Doutora
                            </span>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
                    >
                        Dra. Flavia
                        <br />
                        <span className="text-gradient">Andreia Santos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-lg lg:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto md:mx-0"
                    >
                        Mais de <strong className="text-text-primary">20 anos</strong> de experiência transformando o cuidar em ciência e arte. Especialista em parto humanizado e formação acadêmica de excelência.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex flex-wrap justify-center md:justify-start gap-4"
                    >
                        <a
                            href="#about"
                            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:translate-y-[-2px]"
                        >
                            Conheça minha trajetória
                        </a>
                        <a
                            href="#publications"
                            className="inline-flex items-center px-8 py-4 rounded-full glass-effect border border-border text-text-primary font-semibold text-sm hover:bg-surface-secondary transition-all duration-300 shadow-sm hover:shadow-md hover:translate-y-[-2px]"
                        >
                            Ver publicações
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="flex justify-center md:justify-start gap-8 sm:gap-10 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border-light"
                    >
                        {[
                            { value: '20+', label: 'Anos' },
                            { value: '8+', label: 'Artigos' },
                            { value: '15+', label: 'Projetos' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-3xl font-bold text-text-primary">{stat.value}</div>
                                <div className="text-xs text-text-tertiary font-medium uppercase tracking-wider mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className="order-2 md:order-2 flex justify-center items-center"
                >
                    <div className="relative group">
                        {/* Decorative elements behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-200/40 to-secondary/30 rounded-[100px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60" />

                        {/* Main Image Container */}
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-[100px] overflow-hidden shadow-2xl ring-1 ring-border-light">
                            <img
                                src="/images/profile.png"
                                alt="Dra. Flavia Andreia"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
                        </div>

                        {/* Floating Glass Badges */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-8 top-[20%] glass-effect p-4 rounded-2xl shadow-xl border border-border-light hidden sm:block"
                        >
                            <div className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest mb-1">Instituição</div>
                            <div className="text-lg font-bold text-primary-dark">UFRN</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-10 bottom-[20%] glass-effect p-5 rounded-2xl shadow-xl border border-border-light hidden sm:block"
                        >
                            <div className="text-[10px] text-text-tertiary font-bold uppercase tracking-widest mb-1">Título</div>
                            <div className="text-xl font-bold text-gradient">Doutora</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="flex flex-col items-center gap-3 opacity-40">
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
