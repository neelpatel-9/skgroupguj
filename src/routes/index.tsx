import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Droplets, Factory, Recycle, FlaskConical, Wind, Flame, Filter,
  Award, Building2, Users, Phone, Mail, MapPin, Menu, X,
  Target, Lightbulb, Shield, Heart, ArrowRight, CheckCircle2
} from "lucide-react";
import { PartnersMarquee } from "@/components/PartnersMarquee";
import skLogo from "@/assets/sk-group-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SK Group — Expert Manpower & Management for STP, MEE & ZLD Plants" },
      { name: "description", content: "SK Group provides skilled manpower and management services for STP, MEE, ZLD, ETP, RO/UF, ATFD and Boiler operations across India's chemical industry." },
      { property: "og:title", content: "SK Group — STP, MEE & ZLD Manpower Experts" },
      { property: "og:description", content: "10+ years powering chemical industries with expert workforce and management." },
    ],
  }),
});

const services = [
  { icon: FlaskConical, title: "ETP, MEE, MVR & ZLD", desc: "Effluent Treatment, Multi Effect Evaporator, Mechanical Vapor Recompression & Zero Liquid Discharge." },
  { icon: Wind, title: "ATFD & Spray Dryer", desc: "Agitated Thin Film Dryer and Spray Dryer Operations." },
  { icon: Filter, title: "RO & UF Plant", desc: "Reverse Osmosis and Ultrafiltration Plant Operating." },
  { icon: Flame, title: "Boiler Operating", desc: "Complete Boiler Operations and Maintenance." },
  { icon: Droplets, title: "STP with MBBR", desc: "Sewage Treatment Plant with Moving Bed Biofilm Reactor." },
  { icon: Recycle, title: "Process Optimization", desc: "Improving and fine-tuning existing plant processes." },
];

const consulting = [
  { title: "Plant Design", desc: "Optimal plant design and layout" },
  { title: "Process Optimization", desc: "Improving existing processes" },
  { title: "Compliance Advisory", desc: "Environmental and safety regulations" },
  { title: "Training Programs", desc: "Comprehensive workforce training" },
];

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Building2, value: "20+", label: "Trusted Partners" },
  { icon: Users, value: "200+", label: "Skilled Workers" },
];

const aboutTabs = [
  { id: "mission", icon: Target, title: "Our Mission",
    body: "To provide exceptional manpower solutions and expert consulting services to chemical industries, ensuring operational excellence, safety, and environmental compliance in STP, MEE, and ZLD plant operations." },
  { id: "approach", icon: Lightbulb, title: "Our Approach",
    body: "A whole-systems approach considering all mechanical, process, control, and operational aspects — helping clients achieve maximum efficiency and uptime." },
  { id: "expertise", icon: Shield, title: "Our Expertise",
    body: "Deep capability in design, installation, and commissioning of Sewage Treatment Plants and Multiple Effect Evaporator Plants, with a wide range of operational and process solutions." },
  { id: "values", icon: Heart, title: "Our Values",
    body: "Integrity, safety, sustainability, and partnership — we work alongside our clients to deliver long-term competitive advantage." },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-soft p-1.5">
        <img src={skLogo} alt="SK Group logo" className="w-full h-full object-contain" />
      </div>
      <div className="leading-tight">
        <p className="font-bold text-foreground">SK Group</p>
        <p className="text-[11px] text-muted-foreground">Manufacturing · Operation · Management</p>
      </div>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#partners", label: "Partners" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-semibold shadow-glow hover:opacity-90 transition">
            Get Quote
          </a>
        </nav>
        <button className="md:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-foreground/80 py-2">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg gradient-hero text-primary-foreground text-sm font-semibold text-center">
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10 animate-float" />
      <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            <Droplets className="w-3.5 h-3.5" /> Leading Chemical Industry Manpower Supplier
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            <span className="highlight-text">Manufacturing</span>,{" "}
            <span className="highlight-text">Operation</span> &{" "}
            <span className="highlight-text">Management</span> for STP, MEE & ZLD Plants
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl">
            End-to-end solutions for chemical industries — from building the plant to running it and optimizing performance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition">
              Explore Services <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#partners" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-secondary transition">
              View Partners
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <s.icon className="w-5 h-5 mx-auto text-primary mb-1.5" />
                <p className="text-2xl sm:text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="orbit-stage relative w-full max-w-[520px] mx-auto aspect-square fade-up">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38%] aspect-square rounded-full gradient-hero opacity-10 blur-2xl" />
          {[
            { icon: Droplets, title: "Expert STP Solutions", sub: "Sewage Treatment Plant O&M", desc: "Professional manpower and O&M services for efficient water treatment systems." },
            { icon: Factory, title: "MEE Plant Specialists", sub: "Multiple Effect Evaporator Systems", desc: "Skilled workforce for advanced evaporation and concentration processes." },
            { icon: Recycle, title: "ZLD Plant Experts", sub: "Zero Liquid Discharge Solutions", desc: "Complete manpower solutions for sustainable water management systems." },
            { icon: FlaskConical, title: "Process Engineering", sub: "End-to-end Plant Operations", desc: "From design and commissioning to day-to-day operating expertise." },
          ].map((c, i) => (
            <div
              key={i}
              className="orbit-arm absolute left-1/2 top-1/2 w-[46%] -ml-[23%] -mt-[23%]"
              style={{ animationDelay: `${-i * 6}s` }}
            >
              <div className="orbit-card bg-card rounded-2xl p-3 sm:p-4 border border-border shadow-card">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg gradient-hero flex items-center justify-center mb-2 shadow-glow">
                  <c.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-xs sm:text-sm leading-tight">{c.title}</h3>
                <p className="text-[10px] sm:text-[11px] text-primary font-semibold mt-0.5 leading-tight">{c.sub}</p>
                <p className="hidden sm:block text-[11px] text-muted-foreground mt-1.5 leading-snug">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function About() {
  const [tab, setTab] = useState("mission");
  const active = aboutTabs.find(t => t.id === tab)!;
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">About SK Group</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Powering Chemical Industries with <span className="gradient-text">Expert Workforce</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Welcome to <strong className="text-foreground">SK GROUP</strong> — a trusted partner for <strong className="text-foreground">manufacturing</strong>, <strong className="text-foreground">operating</strong> and <strong className="text-foreground">consulting</strong> services for STP, MEE & ZLD Plants. We deliver comprehensive solutions designed to give your company a competitive advantage.
          </p>
          <p className="mt-4 text-muted-foreground">
            From design and fabrication to installation, commissioning and daily operations, SK GROUP covers every phase of your plant's lifecycle — mechanical, process, control, and operational.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-3xl shadow-card border border-border overflow-hidden">
          <div className="flex flex-wrap border-b border-border">
            {aboutTabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 min-w-[120px] px-4 py-4 text-sm font-semibold transition-colors ${
                  tab === t.id ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.title.replace("Our ", "")}
              </button>
            ))}
          </div>
          <div className="p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
                <active.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{active.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{active.body}</p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map(s => (
            <div key={s.label} className="bg-card border border-border rounded-2xl p-5 text-center shadow-soft">
              <s.icon className="w-6 h-6 mx-auto text-primary mb-2" />
              <p className="text-2xl sm:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { id: "manufacturing", title: "Manufacturing", desc: "Design, build and commission STP, MEE & ZLD plants with precision engineering." },
  { id: "operation", title: "Operation", desc: "Run plants safely with skilled manpower, SOPs and round-the-clock reliability." },
  { id: "management", title: "Management", desc: "Optimize processes, ensure compliance and extend asset life through expert oversight." },
];

function Pillars() {
  return (
    <section className="py-10 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div
              key={p.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border p-5 shadow-soft hover:shadow-card transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-x-0 top-0 h-1 gradient-hero scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center shadow-glow">
                  <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Comprehensive <span className="gradient-text">Manpower Solutions</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Specialized workforce and expert management services for STP, MEE, and ZLD plant operations in the chemical industry.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Contact Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl gradient-hero p-8 sm:p-12 shadow-glow">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground">Expert Management Services</h3>
            <p className="mt-2 text-primary-foreground/80">Beyond manpower, we provide strategic management</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {consulting.map((c, i) => (
              <div key={i} className="bg-background/15 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-5">
                <CheckCircle2 className="w-5 h-5 text-primary-foreground mb-2" />
                <h4 className="font-bold text-primary-foreground">{c.title}</h4>
                <p className="text-sm text-primary-foreground/80 mt-1">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Trusted Partners</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Partnering with <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            We collaborate with some of India's top companies, utilizing expert manpower and providing strategic consulting.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <PartnersMarquee />
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Let's Discuss Your <span className="gradient-text">Manpower Needs</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Ready to optimize your chemical plant operations? Contact our experts for customized solutions.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you within 24 hours."); }}
            className="lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-card"
          >
            <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
            <p className="text-sm text-muted-foreground mt-1">Fill out the form and we'll get back to you within 24 hours.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name *" name="name" required />
              <Field label="Email Address *" name="email" type="email" required />
              <Field label="Phone Number *" name="phone" type="tel" required />
              <Field label="Company Name" name="company" />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Service Required</label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                  <option>Select a service</option>
                  <option>ETP, MEE, MVR & ZLD</option>
                  <option>ATFD & Spray Dryer</option>
                  <option>RO & UF Plant</option>
                  <option>Boiler Operating</option>
                  <option>STP with MBBR</option>
                  <option>Plant Design</option>
                  <option>Process Optimization</option>
                  <option>Compliance Advisory</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-foreground/80 mb-1.5">Message *</label>
                <textarea required rows={4} className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full px-6 py-3 rounded-xl gradient-hero text-primary-foreground font-semibold shadow-glow hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="lg:col-span-2 space-y-4">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft">
              <h3 className="font-bold text-foreground">Get in Touch</h3>
              <p className="text-sm text-muted-foreground mt-1">We're here to help you find the perfect manpower solution.</p>
            </div>
            <ContactCard icon={Phone} title="Phone" lines={["+91 81606 24518"]} sub="Call us for immediate assistance" href="tel:+918160624518" />
            <ContactCard icon={Mail} title="Email" lines={["skgroupservices82@gmail.com", "info@mee-skgroup.in"]} sub="Send us your requirements" href="mailto:skgroupservices82@gmail.com" />
            <ContactCard icon={MapPin} title="Address" lines={["Paras Galaxy, Ahmedabad,", "Gujarat, India"]} sub="Visit our office" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-foreground/80 mb-1.5">{label}</label>
      <input name={name} type={type} required={required}
        className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
    </div>
  );
}

function ContactCard({ icon: Icon, title, lines, sub, href }: { icon: any; title: string; lines: string[]; sub: string; href?: string }) {
  const Wrap: any = href ? "a" : "div";
  return (
    <Wrap href={href} className="block bg-card rounded-2xl p-5 border border-border shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
      <div className="flex gap-4">
        <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center shadow-glow shrink-0">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-foreground">{title}</h4>
          {lines.map(l => (
            <p key={l} className="text-sm text-foreground/80 break-words">{l}</p>
          ))}
          <p className="text-xs text-muted-foreground mt-1">{sub}</p>
        </div>
      </div>
    </Wrap>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl gradient-hero flex items-center justify-center">
              <span className="font-bold text-primary-foreground">SK</span>
            </div>
            <div>
              <p className="font-bold">SK Group</p>
              <p className="text-xs opacity-70">Operation & Management</p>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-70">India's trusted partner for manufacturing, operation and management of STP, MEE, and ZLD plants.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Services</p>
          <ul className="space-y-2 text-sm opacity-70">
            <li>ETP, MEE, MVR & ZLD</li>
            <li>ATFD & Spray Dryer</li>
            <li>RO & UF Plant</li>
            <li>Boiler Operating</li>
            <li>STP with MBBR</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm opacity-70">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Contact</p>
          <ul className="space-y-2 text-sm opacity-70">
            <li>+91 81606 24518</li>
            <li>info@mee-skgroup.in</li>
            <li>Paras Galaxy, Ahmedabad, Gujarat</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pt-6 border-t border-background/10 text-center text-xs opacity-60">
        © {new Date().getFullYear()} SK Group. All rights reserved.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <About />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
