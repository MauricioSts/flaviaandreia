import { HiHeart, HiAcademicCap, HiUserGroup, HiShieldCheck } from 'react-icons/hi'
import ImageWithLoading from './ImageWithLoading'

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
    return (
        <section id="about" className="py-16 sm:py-24 lg:py-32 bg-surface-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3 sm:mb-4 block">
                        Sobre Mim
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
                        Dedicação à vida.
                        <br />
                        <span className="text-text-secondary font-medium italic">Compromisso com o cuidado.</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
                </div>

                {/* Bio + Image */}
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
                    <div className="lg:col-span-5 relative">
                        <div className="relative rounded-3xl sm:rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border">
                            <ImageWithLoading
                                src="/images/foto1.jpeg"
                                alt="Enfermagem obstétrica"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                            {/* Quote overlay */}
                            <div className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10">
                                <p className="text-white text-sm sm:text-base lg:text-lg font-bold italic leading-relaxed opacity-95">
                                    "A prática do cuidado sempre pautada no ciclo gravídico-puerperal
                                    com participação ativa na assistência ao parto."
                                </p>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="absolute -z-10 -bottom-10 -right-10 w-60 h-60 bg-primary-100/20 rounded-full blur-3xl animate-pulse-soft" />
                    </div>

                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary uppercase tracking-tight">Trajetória e Propósito</h3>
                        <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
                            <span className="text-4xl sm:text-5xl font-extrabold text-primary float-left mr-3 sm:mr-4 mt-1 sm:mt-2">E</span>
                            nfermeira graduada pela <strong className="text-text-primary">Universidade Federal do Rio Grande do Norte (UFRN)</strong> em 1997,
                            com especialização em Obstetrícia e em Educação Profissional na Área de Saúde.
                            Mestra e Doutora pela UFRN, com foco na enfermagem obstétrica e na assistência ao parto humanizado.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed font-medium opacity-90">
                            Desde a formação acadêmica, a saúde materno-infantil e a gestão de serviços públicos são meu foco de interesse e atuação.
                            Com aperfeiçoamento em <strong className="text-text-primary">Qualidade e Segurança no Cuidado ao Paciente</strong> e
                            especialização em <strong className="text-text-primary">Gestão de Hospitais Universitários Federais no SUS</strong>,
                            ambos pelo Hospital Sírio-Libanês.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-text-secondary leading-relaxed font-medium opacity-90">
                            Atualmente, exerço função na área de gestão no Hospital Universitário Ana Bezerra (HUAB/UFRN/EBSERH)
                            e sou docente efetiva da UFRN, ministrando aulas teórico-práticas em obstetrícia e coordenando projetos de extensão.
                        </p>

                        <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6">
                            {['COREN Ativo', 'UFRN', 'HUAB/EBSERH', 'Sírio-Libanês'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-surface border border-border text-text-secondary text-xs sm:text-sm font-bold transition-all hover:bg-primary-50 hover:text-primary hover:border-primary-100 shadow-sm active:scale-95"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {highlights.map((item) => (
                        <div key={item.title} className="group">
                            <div className="h-full bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-surface-secondary flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 group-hover:bg-primary group-hover:scale-110 border border-border-light shadow-sm">
                                    <item.icon className="text-primary group-hover:text-white transition-colors duration-300" size={24} />
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-text-primary mb-3 sm:mb-4 tracking-tight uppercase">{item.title}</h4>
                                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-medium opacity-80">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
