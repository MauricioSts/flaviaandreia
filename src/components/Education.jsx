import { HiAcademicCap, HiBookOpen, HiLightBulb } from 'react-icons/hi'

const educationData = [
    {
        period: '2014 – 2016',
        degree: 'Doutorado em Enfermagem',
        institution: 'Universidade Federal do Rio Grande do Norte (UFRN)',
        thesis: 'Autonomia do enfermeiro obstetra na assistência ao parto no âmbito da cultura institucional',
        advisor: 'Bertha Cruz Enders',
        keywords: ['Enfermagem Obstétrica', 'Autonomia Profissional', 'Assistência ao Parto'],
        accent: true,
    },
    {
        period: '2009 – 2010',
        degree: 'Mestrado em Enfermagem',
        institution: 'Universidade Federal do Rio Grande do Norte (UFRN)',
        thesis: 'Percepção das puérperas em relação à importância da consulta pós-parto',
        advisor: 'Rosineide Santana de Brito',
        keywords: ['Puérpera', 'Pós-parto', 'Saúde da Mulher'],
        accent: false,
    },
    {
        period: '2015',
        degree: 'Especialização em Gestão de Hospitais Universitários Federais no SUS',
        institution: 'Hospital Sírio-Libanês',
        thesis: 'Reflexões sobre o percurso de ensino-aprendizagem à luz da metodologia construtivista',
        advisor: 'Mariza Borges Brito de Souza',
        keywords: ['Gestão Hospitalar', 'SUS'],
        hours: '440h',
        accent: false,
    },
    {
        period: '2014',
        degree: 'Aperfeiçoamento em Qualidade e Segurança no Cuidado ao Paciente',
        institution: 'Hospital Sírio-Libanês',
        thesis: 'Metodologias construtivistas à luz da teoria de Paulo Freire',
        keywords: ['Qualidade', 'Segurança do Paciente'],
        hours: '180h',
        accent: false,
    },
    {
        period: '2001 – 2002',
        degree: 'Especialização em Enfermagem Obstétrica',
        institution: 'Universidade Federal do Rio Grande do Norte (UFRN)',
        thesis: 'Ações de incentivo ao aleitamento materno pelos profissionais de enfermagem',
        advisor: 'Bertha Cruz Enders',
        keywords: ['Aleitamento Materno', 'Obstetrícia'],
        hours: '600h',
        accent: false,
    },
    {
        period: '1993 – 1997',
        degree: 'Graduação em Enfermagem e Obstetrícia',
        institution: 'Universidade Federal do Rio Grande do Norte (UFRN)',
        thesis: 'Análise conceitual referente ao tema necessidade de saúde e sua relevância para a enfermagem',
        advisor: 'Bertha Cruz Enders',
        keywords: ['Enfermagem', 'Obstetrícia'],
        accent: false,
    },
]

export default function Education() {
    return (
        <section id="education" className="py-24 sm:py-32 bg-surface flex justify-center">
            <div className="max-w-4xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-4 block">
                        Formação Acadêmica
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                        Construindo conhecimento.
                        <br />
                        <span className="text-text-secondary font-medium">Transformando vidas.</span>
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-8 sm:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-secondary to-primary-100 opacity-20" />

                    <div className="space-y-16">
                        {educationData.map((item, i) => (
                            <TimelineItem key={item.degree} item={item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function TimelineItem({ item, index }) {
    const isEven = index % 2 === 0

    return (
        <div className={`relative flex flex-col sm:flex-row gap-8 sm:gap-12 items-start ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-20 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-[-32px] sm:left-1/2 sm:-translate-x-1/2 top-5 sm:top-1/2 sm:-translate-y-1/2 w-4 h-4 rounded-full bg-surface border-2 border-primary z-20 shadow-lg shadow-primary/20" />

            {/* Content Side */}
            <div className={`w-full sm:w-1/2 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                <div className="group">
                    <div className={`inline-flex items-center gap-3 px-5 py-2 rounded-full mb-4 shadow-sm transition-all duration-300 ${item.accent ? 'bg-primary text-white scale-105' : 'bg-surface-secondary text-text-tertiary border border-border-light hover:border-border'}`}>
                        <span className="text-xs font-bold uppercase tracking-wider">{item.period}</span>
                        {item.hours && <span className="w-1 h-1 rounded-full bg-current opacity-40" />}
                        {item.hours && <span className="text-[10px] font-bold uppercase">{item.hours}</span>}
                    </div>

                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                        {item.degree}
                    </h3>

                    <p className={`text-sm font-bold tracking-tight uppercase mb-4 ${item.accent ? 'text-primary' : 'text-secondary'}`}>
                        {item.institution}
                    </p>

                    {item.thesis && (
                        <p className={`text-base text-text-secondary leading-relaxed italic mb-6 relative px-4 ${isEven ? 'sm:border-r-2 sm:border-border-light sm:px-4' : 'sm:border-l-2 sm:border-border-light sm:px-4'}`}>
                            "{item.thesis}"
                        </p>
                    )}

                    <div className={`flex flex-wrap gap-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {item.keywords.map((kw) => (
                            <span
                                key={kw}
                                className="px-3 py-1 rounded-lg bg-surface-secondary border border-border-light text-[10px] font-bold uppercase tracking-wider text-text-tertiary transition-all hover:bg-surface hover:border-border"
                            >
                                {kw}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer Side */}
            <div className="hidden sm:block w-1/2" />
        </div>
    )
}
