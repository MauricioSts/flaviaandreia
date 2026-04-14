import { useState } from 'react'
import { HiBookOpen, HiDocumentText, HiExternalLink, HiBookmarkAlt } from 'react-icons/hi'

const articles = [
    { title: 'Sentimentos vivenciados por puérperas durante o pós-parto', journal: 'Rev. Enfermagem UFPE on line', year: 2015, authors: 'SANTOS, F.A.P.S.; MAZZO, M.H.S.N.; BRITO, R.S.' },
    { title: 'Assessment of the assistance to eutocic delivery in a university hospital', journal: 'Online Brazilian Journal of Nursing', year: 2015, authors: 'CASSIANO, A.N.; SANTOS, F.A.P.S. et al.' },
    { title: 'Atividades do enfermeiro durante a visita domiciliar pós-parto', journal: 'Revista Enfermagem UERJ', year: 2014, authors: 'MAZZO, M.H.S.N.; BRITO, R.S.; SANTOS, F.A.P.S.', citations: 2 },
    { title: 'Service rendered to parturient at a university hospital', journal: 'Rev. Pesquisa: Cuidado e Fundamental', year: 2014, authors: 'SILVA, F.; SILVA, R.; SANTOS, F.; REGO, A.' },
    { title: 'Puerperium and postpartum review: meanings attributed by the mother', journal: 'REME - Rev. Mineira de Enfermagem', year: 2013, authors: 'SANTOS, F.A.P.S.; BRITO, R.S.; MAZZO, M.H.S.N.' },
    { title: 'Exame papanicolau: avaliação da qualidade do esfregaço cervical', journal: 'Rev. Rede de Enfermagem do Nordeste', year: 2011, authors: 'SANTOS, F.A.P.S.; BRITO, R.S.; SANTOS, D.L.A.' },
]

const bookChapters = [
    { title: 'O puerpério no contexto da Estratégia Saúde da Família', book: 'Desafios na Assistência à Saúde da Mulher e Temas Emergentes', year: 2012 },
    { title: 'Dificuldades e fragilidades vivenciadas na assistência de enfermagem à puérpera', book: 'Saúde e Meio Ambiente: Desafios do Século XXI', year: 2014 },
]

const projects = [
    { title: 'Bem-Vindo à Vida: fortalecimento das boas práticas de atenção ao parto', period: '2015 – Atual', role: 'Coordenadora' },
    { title: 'Atenção multiprofissional à saúde da puérpera e do recém-nascido', period: '2013 – Atual', role: 'Coordenadora' },
    { title: 'A Arte de Partejar: métodos não farmacológicos na atenção ao parto', period: '2015', role: 'Coordenadora' },
    { title: 'Apoiar para Bem Nascer: empoderamento da parturiente', period: '2013 – Atual', role: 'Integrante' },
    { title: 'Projeto A.M.A.R (Aleitamento Materno com Amor e Responsabilidade)', period: '2013 – Atual', role: 'Integrante' },
]

const tabs = [
    { id: 'articles', label: 'Artigos', icon: HiDocumentText },
    { id: 'chapters', label: 'Capítulos', icon: HiBookOpen },
    { id: 'projects', label: 'Projetos', icon: HiBookmarkAlt },
]

export default function Publications() {
    const [activeTab, setActiveTab] = useState('articles')

    const data = activeTab === 'articles' ? articles : activeTab === 'chapters' ? bookChapters : projects

    return (
        <section id="publications" className="py-16 sm:py-24 lg:py-32 bg-surface overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Produção Científica</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                        Ciência que transforma.
                        <br />
                        <span className="text-text-secondary font-medium">Pesquisa que inspira.</span>
                    </h2>
                    <div className="w-16 h-1 bg-secondary/20 mx-auto rounded-full" />
                </div>

                {/* Mobile-First Tabs */}
                <div className="mb-8 sm:mb-12">
                    <div className="bg-surface-secondary p-3 sm:p-4 rounded-3xl border border-border-light shadow-sm">
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-1 px-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-300 outline-none whitespace-nowrap flex-1 min-w-[100px] ${activeTab === tab.id ? 'bg-surface shadow-lg' : 'hover:bg-surface/50'}`}
                                >
                                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${activeTab === tab.id ? 'bg-primary text-white' : 'bg-surface text-text-tertiary'}`}>
                                        <tab.icon size={16} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <span className={`text-xs sm:text-sm font-bold uppercase transition-colors hidden sm:inline ${activeTab === tab.id ? 'text-primary' : 'text-text-tertiary'}`}>
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content List - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-surface p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-border-light shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
                        >
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {/* Title */}
                                <h4 className="text-sm sm:text-base lg:text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors pr-8">
                                    {item.title}
                                </h4>

                                {/* Authors */}
                                {item.authors && (
                                    <p className="text-[10px] sm:text-xs font-medium text-text-tertiary bg-surface-secondary/50 p-2 sm:p-3 rounded-xl border border-border-light/50 leading-relaxed">
                                        {item.authors}
                                    </p>
                                )}

                                {/* Tags */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[9px] sm:text-[10px] font-bold px-3 py-1.5 rounded-full bg-text-primary text-surface uppercase tracking-wider leading-none">
                                        {item.year || item.period}
                                    </span>
                                    {item.journal && (
                                        <span className="text-[9px] sm:text-[10px] font-bold px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/10 uppercase tracking-wider leading-none line-clamp-1">
                                            {item.journal}
                                        </span>
                                    )}
                                    {item.role && (
                                        <span className={`text-[9px] sm:text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider leading-none border ${item.role === 'Coordenadora' ? 'bg-primary/5 text-primary border-primary/20' : 'bg-surface-secondary text-text-secondary border-border'}`}>
                                            {item.role}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* External Link Icon */}
                            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                <HiExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lattes Link */}
                <div className="mt-8 sm:mt-12 text-center pt-8 sm:pt-12 border-t border-border-light">
                    <a
                        href="https://lattes.cnpq.br/9993128048836468"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 sm:gap-4 text-sm font-bold text-primary hover:text-primary-dark transition-all group active:scale-95"
                    >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <HiExternalLink size={18} className="sm:w-5 sm:h-5" />
                        </div>
                        <span className="border-b-2 border-primary/20 group-hover:border-primary transition-all">
                            Perfil completo no Lattes
                        </span>
                    </a>
                </div>
            </div>
        </section >
    )
}
