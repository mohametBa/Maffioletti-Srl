'use client'

import { useState } from 'react'
import { FileText, Zap, GitBranch, Mail, Linkedin, Globe, Database, CheckCircle, AlertCircle, Settings, ArrowRight, Code, Workflow, BarChart3, PieChart, Network } from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'make' | 'n8n'>('make')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Centralisé */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-10 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Workflow className="w-10 h-10" />
              <h1 className="text-4xl font-bold">Documentazione Automazione Workflow</h1>
            </div>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Automazione completa della creazione di contenuti marketing B2B per il settore ATEX
            </p>
            <div className="mt-5 flex justify-center gap-4 flex-wrap">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">pronto per la produzione</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Basato sull&apos;intelligenza artificiale</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Completamente automatizzato</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Centralisée */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-3">
            <div className="inline-flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('make')}
                className={`px-6 py-2.5 rounded-md font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'make' 
                    ? 'bg-white text-blue-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Settings className="w-5 h-5" />
                Strategia Make.com
              </button>
              <button
                onClick={() => setActiveTab('n8n')}
                className={`px-6 py-2.5 rounded-md font-medium transition-all flex items-center gap-2 ${
                  activeTab === 'n8n' 
                    ? 'bg-white text-indigo-600 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Code className="w-5 h-5" />
                Strategia n8n
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Graphiques Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            Architettura del Workflow - {activeTab === 'make' ? 'Make.com' : 'n8n'}
          </h2>
          
          {/* Diagramme Visuel */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 mb-6">
            <WorkflowDiagram platform={activeTab} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">{activeTab === 'make' ? '17' : '20'}</div>
              <div className="text-sm text-gray-600">Nodi/Moduli</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Minuti Tempo Medio</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-600">Contenuti Generati</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">98%</div>
              <div className="text-sm text-gray-600">Tasso Automazione</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'make' && <MakeWorkflow />}
        {activeTab === 'n8n' && <N8nWorkflow />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            Creato da <span className="text-blue-400 font-semibold">BA Mohamet</span> per Maffioletti Srl
          </p>
          <p className="text-sm text-gray-500 mt-2">Test Tecnico - Marketing Automation Specialist</p>
        </div>
      </footer>
    </main>
  )
}

function WorkflowDiagram({ platform }: { platform: 'make' | 'n8n' }) {
  const imageSrc = platform === 'make' ? '/images/make.png' : '/images/n8n.png'
  const imageAlt = platform === 'make' ? 'Make.com Workflow Screenshot' : 'n8n Workflow Screenshot'
  
  const makeModules = [
    { step: 1, name: 'Google Drive', icon: <FileText />, color: 'blue' },
    { step: 2, name: 'Download', icon: <Zap />, color: 'yellow' },
    { step: 3, name: 'Extract Text', icon: <Code />, color: 'green' },
    { step: 4, name: 'OpenAI Analysis', icon: <Network />, color: 'purple' },
    { step: 5, name: 'Parallel Gen', icon: <GitBranch />, color: 'indigo' },
    { step: 6, name: 'Validate', icon: <CheckCircle />, color: 'green' },
    { step: 7, name: 'Database', icon: <Database />, color: 'yellow' },
    { step: 8, name: 'Publish', icon: <Globe />, color: 'blue' },
  ]

  const n8nModules = [
    { step: 1, name: 'Google Drive', icon: <FileText />, color: 'blue' },
    { step: 2, name: 'Download', icon: <Zap />, color: 'yellow' },
    { step: 3, name: 'Python Extract', icon: <Code />, color: 'green' },
    { step: 4, name: 'OpenAI', icon: <Network />, color: 'purple' },
    { step: 5, name: 'Merge', icon: <GitBranch />, color: 'indigo' },
    { step: 6, name: 'Python Validate', icon: <CheckCircle />, color: 'green' },
    { step: 7, name: 'Airtable', icon: <Database />, color: 'blue' },
    { step: 8, name: 'Approval', icon: <AlertCircle />, color: 'orange' },
    { step: 9, name: 'Publish', icon: <Globe />, color: 'blue' },
  ]

  const modules = platform === 'make' ? makeModules : n8nModules

  return (
    <div className="overflow-x-auto">
      {/* Platform Image */}
      <div className="mb-6 flex justify-center">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="max-w-full h-auto rounded-lg shadow-md"
          style={{ maxHeight: '300px' }}
        />
      </div>
      
      <div className="flex items-center justify-between min-w-[800px] gap-2">
        {modules.map((mod, idx) => (
          <div key={mod.step} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${mod.color}-100 to-${mod.color}-200 border-2 border-${mod.color}-300 flex items-center justify-center shadow-md`}>
                <div className={`text-${mod.color}-600`}>
                  {mod.icon}
                </div>
              </div>
              <div className="mt-2 text-center">
                <div className="text-xs font-bold text-gray-700">#{mod.step}</div>
                <div className="text-xs text-gray-600">{mod.name}</div>
              </div>
            </div>
            {idx < modules.length - 1 && (
              <div className="flex-shrink-0 w-8 flex justify-center">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Phase Labels */}
      <div className="flex justify-center gap-8 mt-6 pt-4 border-t border-gray-200">
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Input</span>
          <div className="text-sm font-medium text-gray-700">File sorgente</div>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Processing</span>
          <div className="text-sm font-medium text-gray-700">AI Generation</div>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Quality</span>
          <div className="text-sm font-medium text-gray-700">Validation</div>
        </div>
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Output</span>
          <div className="text-sm font-medium text-gray-700">Publication</div>
        </div>
      </div>
    </div>
  )
}

function MakeWorkflow() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Overview */}
      <section className="workflow-card">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Settings className="w-8 h-8 text-blue-600" />
          Panoramica - Workflow Make.com
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Questo workflow automatizza la generazione di contenuti marketing da un documento tecnico caricato su Google Drive.
          Produce 4 tipi di contenuti ottimizzati per diversi canali.
        </p>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-200">
            <Globe className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-bold text-green-900">Articolo Web</h3>
            <p className="text-sm text-green-700">800-1000 parole, SEO ottimizzato</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border-2 border-orange-200">
            <Mail className="w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-bold text-orange-900">Newsletter</h3>
            <p className="text-sm text-orange-700">300-400 parole, 3 varianti subject</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border-2 border-blue-200">
            <Linkedin className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-bold text-blue-900">LinkedIn #1</h3>
            <p className="text-sm text-blue-700">Versione tecnica</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-200">
            <Linkedin className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-bold text-purple-900">LinkedIn #2</h3>
            <p className="text-sm text-purple-700">Case study / storytelling</p>
          </div>
        </div>
      </section>

      {/* Workflow Modules */}
      <section className="workflow-card">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GitBranch className="w-7 h-7 text-indigo-600" />
          Architettura del Workflow (17 moduli)
        </h2>
        
        <div className="space-y-4">
          <WorkflowModule
            number={1}
            title="Google Drive - Watch Files"
            description="Attiva il workflow al caricamento di un nuovo file in /Marketing/Content-Source"
            icon={<FileText />}
            color="blue"
          />
          
          <WorkflowModule
            number={2}
            title="HTTP - Download File"
            description="Scarica il file da Google Drive (autenticazione OAuth2)"
            icon={<Zap />}
            color="yellow"
          />
          
          <WorkflowModule
            number={3}
            title="Python Script - Extract Text"
            description="Estrae il testo dal PDF/DOCX tramite servizio esterno e conta le parole"
            icon={<Code />}
            color="green"
            prompt={{
              title: "Servizio di estrazione",
              code: `POST https://your-extraction-service.com/extract
{
  "file_url": "{{1.webContentLink}}",
  "file_name": "{{1.name}}",
  "mime_type": "{{1.mimeType}}"
}`
            }}
          />
          
          <WorkflowModule
            number={4}
            title="OpenAI - Analyze Content"
            description="Analizza il contenuto ed estrae: tema principale, 5 keywords SEO, target audience, livello tecnico"
            icon={<Zap />}
            color="purple"
            prompt={{
              title: "System Prompt",
              code: `Sei un esperto di content marketing B2B nel settore industriale ATEX. 
Analizza il testo fornito ed estrai:
- tema principale
- 5 keywords SEO
- target audience (tecnici/manager/acquisti)
- livello tecnico (base/medio/avanzato)

Rispondi SOLO in formato JSON.`
            }}
          />

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border-2 border-indigo-300">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Generazione parallela (Moduli 5-8)
            </h3>
            <p className="text-gray-700 mb-4">
              Questi 4 moduli si eseguono simultaneamente per ottimizzare la velocità di generazione
            </p>
          </div>
          
          <WorkflowModule
            number={5}
            title="OpenAI - Generate Article"
            description="Genera un articolo blog SEO-optimized di 800-1000 parole con titolo, meta description, FAQ"
            icon={<Globe />}
            color="green"
            prompt={{
              title: "User Prompt - Article",
              code: `Genera un articolo blog di 800-1000 parole con:

1. TITOLO SEO (max 60 caratteri, include keyword principale)
2. META DESCRIPTION (max 160 caratteri)
3. INTRODUZIONE (problema + beneficio, 100 parole)
4. CORPO PRINCIPALE (3 sezioni con H2)
5. CONCLUSIONE (CTA + prossimi passi)

REQUISITI:
- Tono professionale ma accessibile
- Keywords density 1-2%
- Include 2-3 FAQ
- Formattazione Markdown
- Suggerisci 2 link interni verso pagine prodotti ATEX

Contenuto: {{3.data.extracted_text}}
Tema: {{4.metadata.main_topic}}
Keywords: {{join(4.metadata.keywords, ', ')}}`
            }}
          />
          
          <WorkflowModule
            number={6}
            title="OpenAI - Generate Newsletter"
            description="Crea una newsletter email con 3 varianti di subject line, preview text e HTML content"
            icon={<Mail />}
            color="orange"
            prompt={{
              title: "User Prompt - Newsletter",
              code: `Crea una newsletter email con:

1. SUBJECT LINE (3 varianti per A/B test, max 50 caratteri)
2. PREVIEW TEXT (140 caratteri)
3. HEADER INTRO (gancio, 50 parole)
4. CONTENUTO PRINCIPALE (riassunto, 250 parole)
5. CTA PRIMARIO (leggi articolo)
6. CTA SECONDARIO (contattaci)

REQUISITI:
- Linguaggio diretto (tu/voi)
- Max 3 paragrafi
- Suggerisci 1 immagine con alt-text
- Mobile-friendly

Articolo: {{5.article.title}}
Contenuto: {{5.article.content_markdown}}`
            }}
          />
          
          <WorkflowModule
            number={7}
            title="OpenAI - LinkedIn Post #1 (Technical)"
            description="Post LinkedIn orientato tecnico (150-200 parole) con hook, problema, soluzione, CTA"
            icon={<Linkedin />}
            color="blue"
            prompt={{
              title: "User Prompt - LinkedIn Technical",
              code: `Genera post LinkedIn TECNICO (150-200 parole):

STRUTTURA:
1. HOOK (prima riga cattura attenzione, max 100 caratteri)
2. PROBLEMA (contesto tecnico, 50 parole)
3. SOLUZIONE/INSIGHT (valore pratico, 70 parole)
4. CTA (invito a commentare, 30 parole)

REQUISITI:
- Spazi bianchi (1-2 righe per blocco)
- NO emoji
- 3-4 hashtag (#ATEX #SafetyFirst #IndustrialAutomation)
- Tono autorevole ma conversazionale
- Domanda finale per engagement

Tema: {{4.metadata.main_topic}}`
            }}
          />
          
          <WorkflowModule
            number={8}
            title="OpenAI - LinkedIn Post #2 (Case Study)"
            description="Post LinkedIn storytelling (150-200 parole) con challenge, solution, risultati misurabili"
            icon={<Linkedin />}
            color="purple"
            prompt={{
              title: "User Prompt - LinkedIn Case Study",
              code: `Genera post LinkedIn CASE STUDY (150-200 parole):

STRUTTURA:
1. STORY HOOK (apertura emotiva)
2. SFIDA (problema del cliente)
3. SOLUZIONE (come abbiamo aiutato)
4. RISULTATI (metricheincremento del 30%...")

REQUISITI specifiche: ":
- Storytelling coinvolgente
- Numeri concreti (percentuali, tempi, costi)
- 3-4 hashtag
- CTA per saperne di più

Tema: {{4.metadata.main_topic}}`
            }}
          />
          
          <WorkflowModule
            number={9}
            title="Python Code - Validate Content Quality"
            description="Valida la qualità SEO, leggibilità, conformità di brand. Score 0-100 per ogni contenuto"
            icon={<CheckCircle />}
            color="green"
          />
          
          <WorkflowModule
            number={10}
            title="Airtable - Create Record"
            description="Salva tutti i contenuti generati in un database con stato Draft"
            icon={<Database />}
            color="yellow"
          />
          
          <WorkflowModule
            number={11}
            title="Slack - Send Notification"
            description="Notifica il team marketing con il quality score e link verso Airtable per revisione"
            icon={<Mail />}
            color="red"
          />
          
          <WorkflowModule
            number={12}
            title="Router - Check Approval Status"
            description="Route secondo lo stato: Approved → Publication | Rejected → Notification | Draft → Attesa"
            icon={<GitBranch />}
            color="indigo"
          />
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Pubblicazione automatica (se approvato)
            </h3>
          </div>
          
          <WorkflowModule
            number={13}
            title="Webflow - Publish Article"
            description="Pubblica l'articolo sul sito web Webflow con slug SEO e meta description"
            icon={<Globe />}
            color="blue"
          />
          
          <WorkflowModule
            number={14}
            title="Brevo - Send Newsletter"
            description="Crea e pianifica la newsletter (3 giorni dopo, alle 10:00)"
            icon={<Mail />}
            color="orange"
          />
          
          <WorkflowModule
            number={15}
            title="LinkedIn - Post #1"
            description="Pubblica il primo post LinkedIn (versione tecnica) immediatamente"
            icon={<Linkedin />}
            color="blue"
          />
          
          <WorkflowModule
            number={16}
            title="LinkedIn - Post #2 (Delayed)"
            description="Pubblica il secondo post dopo 7 giorni per evitare la saturazione"
            icon={<Linkedin />}
            color="purple"
          />
          
          <WorkflowModule
            number={17}
            title="Slack - Rejection Notification"
            description="Notifica se il contenuto viene rifiutato con la motivazione"
            icon={<AlertCircle />}
            color="red"
          />
        </div>
      </section>

      {/* Credentials */}
      <section className="workflow-card bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-7 h-7 text-yellow-700" />
          Credenziali Richieste
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ Google Drive OAuth2</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ OpenAI API Key (GPT-4 Turbo)</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ Airtable API Token</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ Slack Webhook URL</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ Webflow API Token</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ Brevo API Key</div>
          <div className="bg-white p-3 rounded-lg shadow-sm">✅ LinkedIn OAuth2 (Company Page)</div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="workflow-card bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <AlertCircle className="w-7 h-7 text-red-700" />
          Gestione Errori
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Retry automatico: 3 tentativi con intervallo di 60s</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Alert Slack in caso di fallimento con dettagli dell&apos;errore</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Timeout massimo: 5 minuti per esecuzione</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Log esecuzione conservati per debugging</span>
          </li>
        </ul>
      </section>
    </div>
  )
}

function N8nWorkflow() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Overview */}
      <section className="workflow-card">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <Code className="w-8 h-8 text-indigo-600" />
          Panoramica - Workflow n8n
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Architettura open-source auto-ospitata che offre maggior controllo e personalizzazione.
          Utilizza Python nativo per il trattamento e la validazione dei contenuti.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg border-2 border-indigo-200">
            <h3 className="font-bold text-indigo-900 mb-2">Vantaggi</h3>
            <ul className="text-sm text-indigo-700 space-y-1">
              <li>• Open-source e auto-ospitato</li>
              <li>• Codice Python nativo integrato</li>
              <li>• Debugging avanzato</li>
              <li>• Nessun limite di operazioni</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border-2 border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">Differenze vs Make</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Estrazione testo in Python puro</li>
              <li>• Wait node per approvazione manuale</li>
              <li>• Timeout di 7 giorni su validazione</li>
              <li>• Interfaccia visiva di programmazione</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow Structure */}
      <section className="workflow-card">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <GitBranch className="w-7 h-7 text-indigo-600" />
          Architettura del Workflow (20 nodi)
        </h2>
        
        <div className="space-y-4">
          <WorkflowModule
            number={1}
            title="Google Drive Watch"
            description="Sorveglia la cartella Content-Source per nuovi file PDF o DOCX"
            icon={<FileText />}
            color="blue"
          />
          
          <WorkflowModule
            number={2}
            title="HTTP Request - Download File"
            description="Scarica il file con autenticazione Google OAuth2"
            icon={<Zap />}
            color="yellow"
          />
          
          <WorkflowModule
            number={3}
            title="Python Code - Extract Text"
            description="Codice Python nativo per estrarre testo da PDF (PyPDF2) e DOCX (python-docx)"
            icon={<Code />}
            color="green"
            prompt={{
              title: "Python Code - Estrazione",
              code: `import PyPDF2
from docx import Document
import io

def extract_text_from_file(file_binary, file_extension):
    """
    Estrae il testo da un file PDF o DOCX
    """
    text = ""
    
    if file_extension.lower() == '.pdf':
        pdf_file = io.BytesIO(file_binary)
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        for page in pdf_reader.pages:
            text += page.extract_text()
    
    elif file_extension.lower() in ['.docx', '.doc']:
        doc_file = io.BytesIO(file_binary)
        doc = Document(doc_file)
        for para in doc.paragraphs:
            text += para.text + "\\n"
    
    text = text.strip()
    word_count = len(text.split())
    
    return {
        'extracted_text': text,
        'word_count': word_count,
        'char_count': len(text)
    }`
            }}
          />
          
          <WorkflowModule
            number={4}
            title="OpenAI - Content Analysis"
            description="Analisi con GPT-4 Turbo per estrazione metadata strutturate in JSON"
            icon={<Zap />}
            color="purple"
            prompt={{
              title: "System Prompt - Analysis",
              code: `You are a B2B industrial marketing expert specializing in ATEX.
Analyze the provided technical document and extract:
- main topic
- 5 SEO keywords
- target audience (technical/managerial/procurement)
- technical level (basic/intermediate/advanced)
- industry sector

Return ONLY valid JSON.`
            }}
          />

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border-2 border-indigo-300">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Generazione Contenuti Parallela (Nodi 5-8)
            </h3>
            <p className="text-gray-700">
              4 nodi OpenAI che eseguono simultaneamente con risposte JSON strutturate
            </p>
          </div>
          
          <WorkflowModule
            number={5}
            title="OpenAI - Generate Article"
            description="Articolo blog SEO-optimized 800-1000 parole con struttura completa"
            icon={<Globe />}
            color="green"
          />
          
          <WorkflowModule
            number={6}
            title="OpenAI - Generate Newsletter"
            description="Newsletter email 300-400 parole con 3 subject line variants e HTML content"
            icon={<Mail />}
            color="orange"
          />
          
          <WorkflowModule
            number={7}
            title="OpenAI - LinkedIn Post #1 (Technical)"
            description="Post tecnico 150-200 parole: Hook + Problem + Solution + CTA"
            icon={<Linkedin />}
            color="blue"
          />
          
          <WorkflowModule
            number={8}
            title="OpenAI - LinkedIn Post #2 (Case Study)"
            description="Post storytelling 150-200 parole con risultati misurabili"
            icon={<Linkedin />}
            color="purple"
          />
          
          <WorkflowModule
            number={9}
            title="Merge - Combine All Outputs"
            description="Fusiona i dati dai nodi 5, 6, 7, 8 in un unico oggetto JSON"
            icon={<GitBranch />}
            color="indigo"
          />
          
          <WorkflowModule
            number={10}
            title="Python Code - Validate Content Quality"
            description="Validazione completa: SEO, leggibilità (Flesch score), conformità brand"
            icon={<CheckCircle />}
            color="green"
          />
          
          <WorkflowModule
            number={11}
            title="IF - Quality Check Gate"
            description="Condizione: score >= 60 → Continua | score < 60 → Rifiuta & Notifica"
            icon={<GitBranch />}
            color="yellow"
          />
          
          <WorkflowModule
            number={12}
            title="Airtable - Create Record"
            description="Salva tutti i contenuti con Batch_ID, quality score e stato Draft"
            icon={<Database />}
            color="blue"
          />
          
          <WorkflowModule
            number={13}
            title="Slack - Send Review Notification"
            description="Notifica con pulsanti: Approve | Request Changes"
            icon={<Mail />}
            color="red"
          />
          
          <WorkflowModule
            number={14}
            title="WAIT - Manual Approval"
            description="Attesa callback webhook da Airtable (timeout 7 giorni)"
            icon={<AlertCircle />}
            color="orange"
          />
          
          <WorkflowModule
            number={15}
            title="IF - Approval Decision Router"
            description="Route: Approved → Publish (16-19) | Rejected → Notify (20)"
            icon={<GitBranch />}
            color="indigo"
          />
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Pipeline Pubblicazione (se approvato)
            </h3>
          </div>
          
          <WorkflowModule
            number={16}
            title="Webflow - Publish Article"
            description="Pubblicazione su collection Blog Posts con slug auto-generato"
            icon={<Globe />}
            color="blue"
          />
          
          <WorkflowModule
            number={17}
            title="Brevo - Create & Schedule Newsletter"
            description="Creazione campagna email pianificata 3 giorni dopo alle 10:00"
            icon={<Mail />}
            color="orange"
          />
          
          <WorkflowModule
            number={18}
            title="LinkedIn - Publish Post #1"
            description="Pubblicazione immediata del post tecnico con link verso l'articolo"
            icon={<Linkedin />}
            color="blue"
          />
          
          <WorkflowModule
            number={19}
            title="LinkedIn - Publish Post #2 (Delayed)"
            description="WAIT 7 giorni poi pubblicazione del post storytelling"
            icon={<Linkedin />}
            color="purple"
          />
          
          <WorkflowModule
            number={20}
            title="Slack - Rejection Notification"
            description="Notifica di fallimento con motivazione del rifiuto"
            icon={<AlertCircle />}
            color="red"
          />
        </div>
      </section>

      {/* Python Packages */}
      <section className="workflow-card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Code className="w-7 h-7 text-green-700" />
          Pacchetti Python Richiesti
        </h2>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-sm">PyPDF2</div>
          <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-sm">python-docx</div>
          <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-sm">textstat</div>
          <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-sm">re (built-in)</div>
          <div className="bg-white p-3 rounded-lg shadow-sm font-mono text-sm">io (built-in)</div>
        </div>
      </section>

      {/* Execution Settings */}
      <section className="workflow-card bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Settings className="w-7 h-7 text-blue-700" />
          Parametri di Esecuzione
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span><strong>Timezone:</strong> Europe/Rome</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span><strong>Max execution time:</strong> 5 minuti</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span><strong>Save execution data:</strong> Sì (per debugging)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <span><strong>Error handling:</strong> Retry 3x con intervallo 60s</span>
          </li>
          </ul>
      </section>
    </div>
  )
}

interface WorkflowModuleProps {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'indigo' | 'orange'
  prompt?: {
    title: string
    code: string
  }
}

function WorkflowModule({ number, title, description, icon, color, prompt }: WorkflowModuleProps) {
  const [showPrompt, setShowPrompt] = useState(false)
  
  const colorClasses = {
    blue: 'from-blue-50 to-cyan-50 border-blue-200',
    green: 'from-green-50 to-emerald-50 border-green-200',
    yellow: 'from-yellow-50 to-amber-50 border-yellow-200',
    red: 'from-red-50 to-rose-50 border-red-200',
    purple: 'from-purple-50 to-pink-50 border-purple-200',
    indigo: 'from-indigo-50 to-blue-50 border-indigo-200',
    orange: 'from-orange-50 to-amber-50 border-orange-200',
  }
  
  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    red: 'text-red-600',
    purple: 'text-purple-600',
    indigo: 'text-indigo-600',
    orange: 'text-orange-600',
  }
  
  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} border-2 rounded-lg p-4 hover:shadow-lg transition-all`}>
      <div className="flex items-start gap-4">
        <div className={`${iconColorClasses[color]} flex-shrink-0 mt-1`}>
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-white px-2 py-1 rounded text-xs font-bold text-gray-700">
              #{number}
            </span>
            <h3 className="font-bold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-700">{description}</p>
          
          {prompt && (
            <div className="mt-3">
              <button
                onClick={() => setShowPrompt(!showPrompt)}
                className="text-sm bg-white px-3 py-1 rounded shadow hover:shadow-md transition-all flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                {showPrompt ? 'Nascondi' : 'Vedi'} il prompt
              </button>
              
              {showPrompt && (
                <div className="mt-3 animate-slide-up">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-green-400 font-bold mb-2 text-sm">{prompt.title}</div>
                    <pre className="text-green-300 text-xs overflow-x-auto">
                      <code>{prompt.code}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
