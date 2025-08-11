import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Workflow, Rocket, ShieldCheck, Cog, LineChart, Mail, Phone, Calendar, ArrowRight } from 'lucide-react'
import ChatSection from './ChatSection.jsx'

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-sandstone/40 px-3 py-1 text-xs font-medium text-sandstone">
    {children}
  </span>
)

const CTA = ({ href = '#contact', children }) => (
  <a href={href} className="inline-flex items-center gap-2 rounded-2xl bg-verdant px-5 py-3 font-semibold text-clay shadow-sm hover:opacity-90">
    {children} <ArrowRight className="h-4 w-4" />
  </a>
)

const Section = ({ id, eyebrow, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-20 md:py-28">
    <div className="mx-auto max-w-6xl px-4">
      {(eyebrow || title) && (
        <div className="mb-10 md:mb-14">
          {eyebrow && <p className="text-sm font-medium tracking-widest text-bronze uppercase">{eyebrow}</p>}
          {title && <h2 className="mt-3 text-3xl font-bold leading-tight text-bronze md:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-4 max-w-3xl text-base text-sandstone md:text-lg">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
)

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:0.4}} transition={{duration:0.5}}
    className="group rounded-2xl border border-sandstone/40 bg-obsidian/80 p-6 shadow-sm backdrop-blur-md hover:shadow-md">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sandstone/40 bg-sandstone/20">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-sandstone">{desc}</p>
    <div className="mt-4 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">Learn more →</div>
  </motion.div>
)

const PricingCard = ({ name, price, features, highlighted }) => (
  <div className={["rounded-2xl border p-6 shadow-sm border-sandstone/40", highlighted ? "ring-2 ring-bronze" : ""].join(" ")}> 
    <div className="flex items-baseline justify-between">
      <h3 className="text-xl font-semibold">{name}</h3>
      <Pill>Early access</Pill>
    </div>
    <div className="mt-4 flex items-end gap-1">
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-sm text-sandstone">/project</span>
    </div>
    <ul className="mt-6 space-y-3 text-sm">
      {features.map(f => (
        <li key={f} className="flex items-start gap-2"><ShieldCheck className="mt-0.5 h-4 w-4" /> {f}</li>
      ))}
    </ul>
    <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-verdant px-4 py-2 font-medium text-clay hover:opacity-90">
      Get started <ArrowRight className="h-4 w-4" />
    </button>
  </div>
)

function Header() {
  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="sticky top-0 z-50 w-full border-b border-sandstone/40 bg-obsidian/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bronze/10">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold">Zudim</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-turquoise hover:underline hover:decoration-lapis">{l.label}</a>
          ))}
          <CTA>Book a call</CTA>
        </nav>
        <a href="#contact" className="md:hidden text-turquoise"><Mail className="h-6 w-6" /></a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-sandstone/40 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-bronze/10">
                <BrainCircuit className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">Zudim</span>
            </div>
            <p className="mt-3 text-sm text-sandstone">
              AI automation & AI Academy — turning complex operations into simple, scalable workflows.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-sandstone">
              <li><a href="#about" className="text-turquoise hover:underline hover:decoration-lapis">About</a></li>
              <li><a href="#work" className="text-turquoise hover:underline hover:decoration-lapis">Case studies</a></li>
              <li><a href="#contact" className="text-turquoise hover:underline hover:decoration-lapis">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-sandstone">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@zudim.co.uk</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +44 7867 165959</li>
              <li className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Mon–Fri, 09:00–18:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-sandstone">© {new Date().getFullYear()} Zudim Ltd. All rights reserved.</div>
      </div>
    </footer>
  )
}

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Website enquiry from ${name || '(no name)'}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    return `mailto:hello@zudim.co.uk?subject=${subject}&body=${body}`
  }, [name, email, message])

  return (
    <form onSubmit={(e)=>{e.preventDefault(); window.location.href = mailto;}}
          className="grid gap-4 rounded-2xl border border-sandstone/40 bg-obsidian/60 p-6 shadow-sm backdrop-blur">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Name</label>
        <input className="rounded-xl border border-sandstone/40 bg-obsidian px-3 py-2 outline-none ring-verdant focus:ring"
               value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Email</label>
        <input type="email" className="rounded-xl border border-sandstone/40 bg-obsidian px-3 py-2 outline-none ring-verdant focus:ring"
               value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@company.com" required />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-medium">Message</label>
        <textarea className="min-h-[120px] rounded-xl border border-sandstone/40 bg-obsidian px-3 py-2 outline-none ring-verdant focus:ring"
                  value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Tell us about your project…" required />
      </div>
      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-verdant px-4 py-2 font-semibold text-clay hover:opacity-90">
        Send message <Mail className="h-4 w-4" />
      </button>
    </form>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-obsidian to-sandstone/30 text-clay">
      <Header />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
          <div className="mx-auto h-[36rem] w-[36rem] rounded-full bg-bronze/30 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Pill>AI Automation • Academy</Pill>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-bronze md:text-6xl">
                Build smarter workflows. Scale your business.
              </h1>
              <p className="mt-4 max-w-xl text-base text-sandstone md:text-lg">
                We design and deploy AI agents and automation pipelines that remove friction in operations —
                from data capture and compliance to customer support and fulfilment.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CTA>Discuss a project</CTA>
                <a href="#work" className="inline-flex items-center gap-2 rounded-2xl border border-sandstone/40 px-5 py-3 font-semibold text-turquoise hover:border-lapis hover:bg-sandstone/20 hover:underline hover:decoration-lapis">
                  View case studies
                </a>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-sandstone">
                <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> ISO-aligned delivery</div>
                <div className="flex items-center gap-2"><Cog className="h-4 w-4" /> Built for security</div>
              </div>
            </div>
            <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}
              className="rounded-3xl border border-sandstone/40 bg-obsidian/70 p-4 shadow-[var(--shadow-xl)] backdrop-blur">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-sandstone/40 p-4">
                  <div className="flex items-center gap-2">
                    <Workflow className="h-5 w-5" />
                    <span className="text-sm font-semibold">Agentic Ops</span>
                  </div>
                  <p className="mt-2 text-sm text-sandstone">
                    Orchestrate multi-step processes across tools like Microsoft 365, Nextcloud, n8n and custom APIs.
                  </p>
                </div>
                <div className="rounded-2xl border border-sandstone/40 p-4">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    <span className="text-sm font-semibold">Rapid Pilots</span>
                  </div>
                  <p className="mt-2 text-sm text-sandstone">Ship a working pilot in weeks with measurable impact.</p>
                </div>
                <div className="rounded-2xl border border-sandstone/40 p-4">
                  <div className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    <span className="text-sm font-semibold">Analytics</span>
                  </div>
                  <p className="mt-2 text-sm text-sandstone">Dashboards and reporting to track value and adoption.</p>
                </div>
                <div className="rounded-2xl border border-sandstone/40 p-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-semibold">Governance</span>
                  </div>
                  <p className="mt-2 text-sm text-sandstone">Security, privacy and change management built-in.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live chat */}
      <Section id="live-chat" eyebrow="Live chat" title="Chat with our AI assistant" subtitle="Ask us anything in real time.">
        <ChatSection />
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="What we do" title="Services tailored to your roadmap"
               subtitle="Pick a starting point or combine tracks for a full solution.">
        <div className="grid gap-6 md:grid-cols-3">
          <Feature icon={BrainCircuit} title="AI Automation"
                   desc="Agent workflows, document processing, RAG, and integrations with Microsoft 365, Nextcloud, n8n, Ollama and more." />
          <Feature icon={Cog} title="Custom Development"
                   desc="Lightweight web apps, internal tools and APIs to stitch systems together securely." />
          <Feature icon={ShieldCheck} title="Advisory & Training"
                   desc="Playbooks, governance frameworks and hands-on training for teams adopting AI." />
        </div>
      </Section>

      {/* Work */}
      <Section id="work" eyebrow="Selected work" title="Case studies"
               subtitle="A snapshot of recent projects and pilots. Replace these with your own.">
        <div className="grid gap-6 md:grid-cols-3">
          {['AI Academy enablement', 'Nextcloud + n8n automations', 'Intelligent data pipeline'].map(item => (
            <motion.article key={item} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.45}}
                            className="group rounded-2xl border border-sandstone/40 bg-obsidian/70 p-5 shadow-sm backdrop-blur hover:shadow-md">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-sandstone to-sandstone/40" />
              <h3 className="mt-4 text-lg font-semibold">{item}</h3>
              <p className="mt-2 text-sm text-sandstone">
                Short summary of the challenge, approach and outcome. Add KPIs (e.g., −35% cycle time) to make impact obvious.
              </p>
              <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-turquoise hover:underline hover:decoration-lapis">
                Explore project <ArrowRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" eyebrow="Simple pricing" title="Start small. Prove value. Scale up."
               subtitle="These are placeholders — set your own tiers.">
        <div className="grid gap-6 md:grid-cols-3">
          <PricingCard name="Pilot" price="£4,950" features={[
            'Discovery workshop', '1 automation / agent', 'Lightweight security review', 'Success metrics & dashboard'
          ]}/>
          <PricingCard name="Launch" price="£12,900" highlighted features={[
            'Up to 3 automations', 'Integrations (M365, Nextcloud, n8n)', 'Change & training pack', 'Governance checklist'
          ]}/>
          <PricingCard name="Scale" price="Custom" features={[
            'Roadmap & PMO support', 'Security & compliance alignment', 'SLAs and monitoring', 'Continuous improvement'
          ]}/>
        </div>
      </Section>

      {/* About */}
      <Section id="about" eyebrow="Who we are" title="Bridging strategy, delivery and real-world adoption"
               subtitle="We blend enterprise project management discipline with modern AI engineering. Less noise, more outcomes.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sandstone/40 bg-obsidian/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Approach</h3>
            <p className="mt-2 text-sm text-sandstone">
              We start with the problem, not the model. Co-design with users, lean pilots, measurable wins, then scale with governance.
            </p>
          </div>
          <div className="rounded-2xl border border-sandstone/40 bg-obsidian/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Tooling</h3>
            <p className="mt-2 text-sm text-sandstone">
              Microsoft 365, Nextcloud, n8n, Ollama, Python, Docker — and the right APIs to connect it all securely.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Let’s talk" title="Tell us about your project"
               subtitle="Drop a note — we’ll reply within one business day.">
        <div className="grid gap-8 md:grid-cols-2">
          <ContactForm />
          <div className="rounded-2xl border border-sandstone/40 bg-obsidian/60 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Prefer a quick call?</h3>
            <p className="mt-2 text-sm text-sandstone">We can do a 20-minute scoping chat to see if we’re a fit.</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a href="tel:+447867165959" className="inline-flex items-center gap-2 text-turquoise hover:underline hover:decoration-lapis"><Phone className="h-4 w-4" /> +44 7867 165959</a>
              <a href="mailto:hello@zudim.co.uk" className="inline-flex items-center gap-2 text-turquoise hover:underline hover:decoration-lapis"><Mail className="h-4 w-4" /> hello@zudim.co.uk</a>
              <a href="#" className="inline-flex items-center gap-2 text-turquoise hover:underline hover:decoration-lapis"><Calendar className="h-4 w-4" /> Book a time</a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  )
}
