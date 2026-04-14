import { HiMail, HiLocationMarker, HiPhone, HiExternalLink } from 'react-icons/hi'

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

export default function Contact() {
    return (
        <section id="contact" className="py-24 sm:py-32 bg-surface-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left Side: Header & Info */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">Contato</span>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
                                Vamos conversar.
                                <br />
                                <span className="text-text-secondary font-medium italic">Entre em contato.</span>
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                                Estou disponível para colaborações acadêmicas, consultas sobre assistência ao parto e projetos de gestão em saúde.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.title}
                                    className="group flex items-start gap-6 p-6 rounded-2xl bg-surface-secondary border border-border-light hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${item.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' :
                                        item.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white' :
                                            'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                                        }`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-sm font-bold text-text-tertiary uppercase tracking-widest mb-2">{item.title}</h4>
                                        {item.link ? (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base font-semibold text-text-primary hover:text-primary transition-colors flex items-center gap-2 group"
                                            >
                                                {item.content}
                                                <HiExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                                            </a>
                                        ) : (
                                            <p className="text-base font-semibold text-text-primary whitespace-pre-line">{item.content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-surface p-8 sm:p-12 rounded-[40px] border border-border-light shadow-2xl shadow-black/5">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">Nome Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-6 py-4 rounded-2xl bg-surface-secondary border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary placeholder:text-text-tertiary"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-6 py-4 rounded-2xl bg-surface-secondary border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary placeholder:text-text-tertiary"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">Assunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-6 py-4 rounded-2xl bg-surface-secondary border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-primary placeholder:text-text-tertiary"
                                    placeholder="Como posso ajudar?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-text-primary mb-3 uppercase tracking-wider">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-6 py-4 rounded-2xl bg-surface-secondary border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-text-primary placeholder:text-text-tertiary"
                                    placeholder="Escreva sua mensagem..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 px-8 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-0.5"
                            >
                                Enviar Mensagem
                            </button>
                            <p className="text-[10px] text-center text-text-tertiary font-bold uppercase tracking-wider opacity-60"> Resposta em até 48 horas </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
