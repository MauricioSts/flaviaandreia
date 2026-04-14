import { HiMail, HiLocationMarker, HiPhone, HiExternalLink } from 'react-icons/hi'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const contactInfo = [
        {
            icon: HiLocationMarker,
            title: 'Endereço Profissional',
            content: 'Hospital Universitário Ana Bezerra\nPraça Tequinha Farias, 13 – Centro\nSanta Cruz, RN – CEP 59535-000',
            color: 'primary'
        },
        {
            icon: HiPhone,
            title: 'Telefone',
            content: '(84) 3291-2324 – Ramal 223',
            color: 'secondary'
        },
        {
            icon: HiMail,
            title: 'Currículo Lattes',
            content: 'Acesse minha produção completa',
            link: 'https://lattes.cnpq.br/9993128048836468',
            color: 'accent'
        }
    ]

    return (
        <section id="contact" className="py-24 sm:py-32 bg-surface-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side: Header & Info */}
                    <div className="space-y-12">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -40 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Contato</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                                Vamos conversar.
                                <br />
                                <span className="text-text-secondary font-medium italic">Entre em contato.</span>
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                                Estou disponível para colaborações acadêmicas, consultas sobre assistência ao parto e projetos de gestão em saúde.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                    className="group flex items-start gap-6 bg-surface p-6 rounded-3xl border border-border-light shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110 shadow-sm ${item.color === 'primary' ? 'bg-primary/5 text-primary' : item.color === 'secondary' ? 'bg-secondary/5 text-secondary' : 'bg-accent/5 text-accent'}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-text-primary mb-1 uppercase tracking-wider">{item.title}</h3>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:text-primary-dark transition-all flex items-center gap-2 group/link">
                                                {item.content}
                                                <HiExternalLink size={16} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                            </a>
                                        ) : (
                                            <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-line font-medium opacity-80">
                                                {item.content}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Decorative Blur */}
                        <div className="absolute -z-10 -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[48px] blur-2xl" />

                        <form
                            className="bg-surface rounded-[40px] p-10 sm:p-12 border border-border-light shadow-2xl shadow-black/5 space-y-6 relative"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-text-secondary uppercase tracking-[0.1em] ml-1">Nome</label>
                                    <input
                                        type="text"
                                        placeholder="Seu nome"
                                        className="w-full px-6 py-4 rounded-2xl border border-border-light bg-surface-secondary text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-surface transition-all placeholder:opacity-40"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-text-secondary uppercase tracking-[0.1em] ml-1">E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="w-full px-6 py-4 rounded-2xl border border-border-light bg-surface-secondary text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-surface transition-all placeholder:opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-text-secondary uppercase tracking-[0.1em] ml-1">Mensagem</label>
                                <textarea
                                    rows={5}
                                    placeholder="Como posso ajudar você?"
                                    className="w-full px-6 py-4 rounded-2xl border border-border-light bg-surface-secondary text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-surface transition-all placeholder:opacity-40 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
                            >
                                Enviar mensagem
                            </button>

                            <p className="text-[10px] text-center text-text-tertiary font-bold uppercase tracking-wider opacity-60"> Resposta em até 48 horas </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
