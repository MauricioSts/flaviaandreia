import { useState } from 'react'
import { HiBriefcase, HiOfficeBuilding, HiChevronDown, HiAcademicCap } from 'react-icons/hi'

const experiences = [
    {
        institution: 'Universidade Federal do Rio Grande do Norte (UFRN)',
        shortName: 'UFRN',
        period: '2004 – Atual',
        roles: [
            'Professora Titular – Disciplinas teórico-práticas em Obstetrícia',
            'Chefe do Setor de Gestão do Ensino (desde 2014)',
            'Coordenadora de Enfermagem da Residência Multiprofissional',
            'Preceptora da Residência Médica em GO',
            'Orientadora de TCC da Residência Multiprofissional',
            'Membro do Grupo de Humanização',
        ],
        type: 'teaching',
    },
    {
        institution: 'Hospital Universitário Ana Bezerra (HUAB/UFRN/EBSERH)',
        shortName: 'HUAB',
        period: '2004 – Atual',
        roles: [
            'Enfermeira Obstetra',
            'Gestão Hospitalar',
            'Gerente de Enfermagem (2009–2011)',
            'Membro da Comissão de Mortalidade Materna e Neonatal',
            'Preceptoria de Graduação e Pós-Graduação em Enfermagem',
        ],
        type: 'hospital',
    },
    {
        institution: 'Universidade Federal de Minas Gerais (UFMG)',
        shortName: 'UFMG',
        period: '2015',
        roles: [
            'Docente da Especialização em Enfermagem Obstétrica (CEEO – Rede Cegonha/MS)',
            'Preceptora da Especialização em Obstetrícia',
            'Orientadora da Especialização em Obstetrícia',
        ],
        type: 'teaching',
    },
    {
        institution: 'Secretaria Municipal de Saúde de Lajes/RN',
        shortName: 'SMS Lajes',
        period: '1997 – 2012',
        roles: [
            'Secretária Municipal de Saúde (2011–2012)',
            'Presidente do Conselho Municipal de Saúde',
            'Coordenadora da Vigilância Epidemiológica',
            'Coordenadora do Programa de Agentes de Saúde',
            'Coordenadora do Núcleo de Educação Permanente',
            'Gerente de Enfermagem',
            'Enfermeira do PSF',
        ],
        type: 'public',
    },
    {
        institution: 'Hospital e Maternidade Aluízio Alves',
        shortName: 'HMAA',
        period: '1997 – 2008',
        roles: [
            'Gerente de Enfermagem',
            'Coordenadora do Programa de Aleitamento Materno',
            'Membro da Comissão de Laqueadura Tubária',
        ],
        type: 'hospital',
    },
]

export default function Experience() {
    return (
        <section id="experience" className="py-24 sm:py-32 bg-surface-secondary relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                        Experiência Profissional
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        Uma carreira de impacto.
                        <br />
                        <span className="text-text-secondary font-medium">Em múltiplas frentes.</span>
                    </h2>
                    <div className="w-16 h-1 bg-primary/10 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Side: Stats & Info */}
                    <div className="lg:col-span-4 space-y-6 lg:space-y-8">
                        <div className="bg-surface p-6 sm:p-8 rounded-[32px] border border-border-light shadow-xl shadow-black/5">
                            <h3 className="text-xl font-bold text-text-primary mb-6 sm:mb-8 text-center sm:text-left">Conquistas</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 sm:gap-8">
                                {[
                                    { label: 'Aprovações Concursos', value: '5+' },
                                    { label: 'Horas Preceptoria', value: '3.000+' },
                                    { label: 'Projetos Coordenados', value: '10+' },
                                ].map((stat) => (
                                    <div key={stat.label} className="group text-center sm:text-left">
                                        <div className="text-3xl sm:text-4xl font-extrabold text-primary mb-1 group-hover:scale-105 transition-transform origin-center sm:origin-left tracking-tight">{stat.value}</div>
                                        <div className="text-[10px] sm:text-xs font-bold text-text-tertiary uppercase tracking-widest leading-tight">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group rounded-[32px] overflow-hidden shadow-2xl">
                            <img
                                src="/images/ensinando.jpeg"
                                alt="Ensino"
                                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-sm font-bold">
                                Formação humana e científica.
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Accordion */}
                    <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                        {experiences.map((exp, i) => (
                            <ExperienceCard key={exp.shortName} exp={exp} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ExperienceCard({ exp, index }) {
    const [expanded, setExpanded] = useState(index === 0)

    return (
        <div className={`transition-all duration-500 rounded-[32px] overflow-hidden border ${expanded ? 'bg-surface border-primary/20 shadow-2xl shadow-primary/5' : 'bg-surface/50 border-border-light hover:border-border'}`}>
            <button
                onClick={() => setExpanded(!expanded)}
                className="w-full flex items-center gap-4 sm:gap-6 p-5 sm:p-8 text-left outline-none"
            >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-500 ${expanded ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface-secondary text-text-tertiary'}`}>
                    {exp.type === 'teaching' ? <HiAcademicCap size={24} className="sm:w-7 sm:h-7" /> :
                        exp.type === 'hospital' ? <HiOfficeBuilding size={24} className="sm:w-7 sm:h-7" /> :
                            <HiBriefcase size={24} className="sm:w-7 sm:h-7" />}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 mb-1">
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${expanded ? 'text-primary' : 'text-text-primary'}`}>
                            {exp.institution}
                        </h3>
                        {expanded && (
                            <span className="text-[9px] sm:text-[10px] font-bold text-primary px-2 sm:px-3 py-1 rounded-full bg-primary/10">ATUAL</span>
                        )}
                    </div>
                    <p className="text-[10px] sm:text-xs font-bold text-text-tertiary uppercase tracking-widest">{exp.period}</p>
                </div>

                <div className={`p-2 rounded-full transition-all duration-500 flex-shrink-0 ${expanded ? 'bg-primary/10 text-primary rotate-180' : 'bg-surface-secondary text-text-tertiary'}`}>
                    <HiChevronDown size={18} className="sm:w-5 sm:h-5" />
                </div>
            </button>

            {expanded && (
                <div>
                    <div className="px-5 sm:px-8 pb-5 sm:pb-8 pt-0">
                        <div className="h-[1px] w-full bg-border-light mb-4 sm:mb-6" />
                        <ul className="space-y-3 sm:space-y-4">
                            {exp.roles.map((role) => (
                                <li key={role} className="flex items-start gap-3 sm:gap-4">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-sm" />
                                    <span className="text-sm sm:text-base text-text-secondary font-medium leading-relaxed">{role}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}
