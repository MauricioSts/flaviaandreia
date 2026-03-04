import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { HiHeart, HiAcademicCap, HiUserGroup, HiShieldCheck } from 'react-icons/hi'

const highlights = [
    {
        icon: HiHeart,
        title: 'Parto Humanizado',
        description: 'Atuação focada na assistência ao parto humanizado e no cuidado integral à mulher durante o ciclo gravídico-puerperal.',
    },
    {
        icon: HiAcademicCap,
        title: 'Docência & Pesquisa',
        description: 'Professora titular da UFRN, orientando projetos de pesquisa e extensão em enfermagem obstétrica.',
    },
    {
        icon: HiUserGroup,
        title: 'Gestão em Saúde',
        description: 'Experiência em gestão hospitalar, coordenação de programas e liderança de equipes multiprofissionais.',
    },
    {
        icon: HiShieldCheck,
        title: 'Qualidade & Segurança',
        description: 'Aperfeiçoamento em Qualidade e Segurança no Cuidado ao Paciente pelo Hospital Sírio-Libanês.',
    },
]

export default function About() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

    return (
        <section id="about" className="py-24 sm:py-32 bg-surface-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-2xl mx-auto"
                >
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                        Sobre Mim
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Dedicação à vida.
                        <br />
                        <span className="text-text-secondary font-medium italic">Compromisso com o cuidado.</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </motion.div>

                {/* Bio + Image */}
                <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-[40px] lg:rounded-[80px] overflow-hidden shadow-2xl shadow-primary/10 aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[650px] ring-1 ring-border">
                            <img
                                src="/images/maternity.png"
                                alt="Enfermagem obstétrica"
                                className="w-full h-full object-cover transition-transform duration-1000 transform hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                            {/* Quote overlay */}
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white text-lg font-bold italic leading-relaxed opacity-95">
                                    "A prática do cuidado sempre pautada no ciclo gravídico-puerperal
                                    com participação ativa na assistência ao parto."
                                </p>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-primary-100/20 rounded-full blur-3xl animate-pulse-soft" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="lg:col-span-7 space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-text-primary uppercase tracking-tight">Trajetória e Propósito</h3>
                        <p className="text-xl text-text-secondary leading-relaxed first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:mt-2">
                            Enfermeira graduada pela <strong className="text-text-primary">Universidade Federal do Rio Grande do Norte (UFRN)</strong> em 1997,
                            com especialização em Obstetrícia e em Educação Profissional na Área de Saúde.
                            Mestra e Doutora pela UFRN, com foco na enfermagem obstétrica e na assistência ao parto humanizado.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-90">
                            Desde a formação acadêmica, a saúde materno-infantil e a gestão de serviços públicos são meu foco de interesse e atuação.
                            Com aperfeiçoamento em <strong className="text-text-primary">Qualidade e Segurança no Cuidado ao Paciente</strong> e
                            especialização em <strong className="text-text-primary">Gestão de Hospitais Universitários Federais no SUS</strong>,
                            ambos pelo Hospital Sírio-Libanês.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed font-medium opacity-90">
                            Atualmente, exerço função na área de gestão no Hospital Universitário Ana Bezerra (HUAB/UFRN/EBSERH)
                            e sou docente efetiva da UFRN, ministrando aulas teórico-práticas em obstetrícia e coordenando projetos de extensão.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-6">
                            {['COREN Ativo', 'UFRN', 'HUAB/EBSERH', 'Sírio-Libanês'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-6 py-2.5 rounded-full bg-surface border border-border text-text-secondary text-sm font-bold transition-all hover:bg-primary-50 hover:text-primary hover:border-primary-100 shadow-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="h-full bg-surface rounded-[32px] p-8 border border-border shadow-xl shadow-black/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-2xl bg-surface-secondary flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:rotate-6 border border-border-light shadow-sm">
                                    <item.icon className="text-primary group-hover:text-white transition-colors duration-500" size={28} />
                                </div>
                                <h4 className="text-lg font-bold text-text-primary mb-4 tracking-tight uppercase">{item.title}</h4>
                                <p className="text-sm text-text-secondary leading-relaxed font-medium opacity-80">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
