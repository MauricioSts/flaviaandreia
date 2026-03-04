import { HiHeart, HiExternalLink, HiRss } from 'react-icons/hi'

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-border-light overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                <span className="text-white font-bold text-lg leading-none">FA</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold text-text-primary text-xl tracking-tight">Dra. Flavia Andreia Santos</p>
                                <p className="text-xs text-text-tertiary font-bold uppercase tracking-widest">Enfermeira Obstetra · Mestre · Doutora</p>
                            </div>
                        </div>
                        <p className="text-base text-text-secondary leading-relaxed font-medium max-w-sm">
                            Mais de duas décadas de dedicação à saúde materno-infantil, parto humanizado e formação científica de excelência na UFRN.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3 space-y-6">
                        <h4 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] mb-4">Acesso Rápido</h4>
                        <ul className="space-y-4">
                            {['Início', 'Sobre', 'Formação', 'Experiência', 'Publicações'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-sm font-bold text-text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-border-light group-hover:bg-primary transition-colors" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="md:col-span-4 space-y-6">
                        <h4 className="text-xs font-bold text-text-primary uppercase tracking-[0.2em] mb-4">Recursos Externos</h4>
                        <div className="space-y-4">
                            <a
                                href="https://lattes.cnpq.br/9993128048836468"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-surface-secondary p-4 rounded-3xl border border-border-light hover:bg-surface hover:border-primary/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                    <HiExternalLink size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-text-primary">Plataforma Lattes</span>
                                    <span className="text-[10px] font-bold text-text-tertiary uppercase">Currículo Oficial</span>
                                </div>
                            </a>

                            <div className="group flex items-center gap-4 bg-surface-secondary p-4 rounded-3xl border border-border-light hover:bg-surface transition-all duration-300">
                                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-secondary shadow-sm">
                                    <HiRss size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-text-primary">UFRN - SIGAA</span>
                                    <span className="text-[10px] font-bold text-text-tertiary uppercase">Portal do Docente</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest">
                            © {new Date().getFullYear()} Dra. Flavia Andreia Santos. Todos os direitos reservados.
                        </p>
                        <p className="text-[10px] font-bold text-text-tertiary uppercase tracking-widest bg-surface-secondary px-3 py-1 rounded-full border border-border-light">
                            Desenvolvido com excelência técnica
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                            Feito com <HiHeart className="text-rose-500 animate-pulse" size={16} /> para a saúde
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
