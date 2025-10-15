import Image from "next/image";
import { Patrick_Hand } from "next/font/google";
import Script from "next/script"; // ⬅️ Calendly script loader

const patrick = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function Home() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Yellow Pad", href: "#yellowpad" },
    { label: "Strengths", href: "#strengths" },
    { label: "Industries", href: "#industries" },
    { label: "Approach", href: "#approach" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 text-neutral-900">
      {/* Calendly Widget Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="section h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/village-logo.png"
                width={160}
                height={48}
                alt="Village Consulting logo"
                priority
                className="h-9 w-auto object-contain"
              />
            </a>
            <div>
              <p className="font-semibold leading-tight">Village Consulting, LLC</p>
              <p className="text-xs text-neutral-500">ERP • CRM • MES • PMO</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-neutral-900 text-neutral-700">
                {n.label}
              </a>
            ))}
            <a href="#yellowpad" className="btn btn-brand">Get in touch</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
    <section className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(90%_70%_at_10%_0%,rgba(107,107,214,0.10),transparent_55%),radial-gradient(80%_60%_at_100%_10%,rgba(168,90,42,0.08),transparent_55%)]" />
  <div className="section pb-8 md:pb-12 pt-16 md:pt-24">
    <div className="max-w-5xl mx-auto px-4 text-center md:text-left">
      <span className="badge">
        <Dot /> Life Sciences • Global Delivery • Compliance
      </span>
      <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        Acquisition IT Integration & Enterprise Transformation—done right.
      </h1>
      <p className="mt-5 text-neutral-700 text-base md:text-lg max-w-prose mx-auto md:mx-0">
        For nearly two decades, Village Consulting has helped Life Sciences organizations integrate acquisitions,
        implement ERP, CRM and MES systems, and deliver compliant, high quality results—backed by rigorous and proven
        project management processes and templates, and a relentless commitment to quality.
      </p>
      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
        <a href="#services" className="btn btn-brand">Explore services</a>
        <a
          href="#yellowpad"
          className="btn bg-[#F6E27A] text-neutral-900 hover:bg-[#f3db5e] hover:opacity-95"
        >
          Book a Yellow Pad Session
        </a>
      </div>
      <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3 text-xs text-neutral-600">
        <span className="badge"><Dot /> GMP & validation expertise</span>
        <span className="badge"><Dot /> 25+ years of implementation experience</span>
        <span className="badge"><Dot /> Discovery workshop & process mapping expertise</span>
      </div>
    </div>

    <div className="hr" />
  </div>

</section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="section text-center">
          <h2 className="text-3xl font-bold">Services</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            End-to-end consulting to integrate acquisitions, modernize enterprise systems, and deliver compliant, scalable outcomes.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M12 2l9 4-9 4-9-4 9-4Z" />
                    <path d="M3 10l9 4 9-4" />
                    <path d="M3 16l9 4 9-4" />
                  </svg>
                ),
                title: "Acquisition IT Integration",
                body: "Cross-system fit-gap analysis, integration roadmaps, and deployment strategies that unify legacy and new enterprises.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="18" height="7" rx="1" />
                  </svg>
                ),
                title: "PMO & Program Leadership",
                body: "Governance, traceability, and risk control via adaptable PMO frameworks—ensuring every milestone drives measurable value.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                ),
                title: "ERP / CRM / MES Implementation",
                body: "Business-driven process design, configuration oversight, and validation alignment for compliant global deployments.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M20 21v-2a8 8 0 00-8-8H4a8 8 0 00-8 8v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                ),
                title: "Hardware & Software Migration",
                body: "PC refresh, software deployment, and environment cutovers coordinated through a trusted subcontractor network.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                ),
                title: "Regulatory & Quality Alignment",
                body: "GMP-sensitive delivery and validation documentation that pass audits and keep operations inspection-ready.",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
                    <path d="M3 3h18v18H3z" />
                    <path d="M7 7h10v10H7z" />
                  </svg>
                ),
                title: "S/4HANA Migration Advisory",
                body: "Blueprinting, data strategy, and execution models to transition from SAP ECC to S/4HANA with zero downtime.",
              },
            ].map((s) => (
              <div key={s.title} className="card group">
                <div className="flex items-center gap-3 mb-3 text-[var(--brand)] group-hover:text-[var(--accent)] transition-colors">
                  {s.icon}
                  <h3 className="font-semibold text-lg text-neutral-900">{s.title}</h3>
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow Pad Session — with Calendly embed */}
      <section id="yellowpad" className="py-20 bg-neutral-900 text-neutral-50 scroll-mt-20">
        <div className="section">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-bold">Yellow Pad Session</h2>
              <p className="mt-3 text-neutral-300 max-w-prose">
                A fast, practical consultative session. You explain your business challenge. I restate it to confirm understanding,
                then provide a <span className="font-semibold">high-level recommendation</span> with <span className="font-semibold">next steps</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#book-yellowpad"
                  className="btn bg-[#FAEC96] text-neutral-900 hover:bg-[#f8e87f] hover:opacity-95"
                >
                  Book a Yellow Pad Session
                </a>
                <a
                  href="#contact"
                  className="btn btn-brand"
                >
                  Ask a question
                </a>
              </div>

              <p className="mt-3 text-xs text-neutral-400">
                Optional NDA available on request. 45–60 minutes via video or onsite.
              </p>
            </div>

            {/* RIGHT — yellow pad image with overlay text (unchanged) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/yellow-pad-blank.png"
                  alt="Yellow Pad"
                  width={900}
                  height={1200}
                  className="w-full h-auto object-cover"
                  priority
                />

                <div
                  className={`${patrick.className} absolute inset-0 text-blue-900`}
                  style={
                    {
                      ['--left' as any]: '15.5%',
                      ['--top' as any]: '10.5%',
                      ['--line' as any]: '2.82%',
                    } as any
                  }
                  aria-label="Process and typical outputs written on a yellow pad"
                >
                  <div className="absolute" style={{ left: 'var(--left)', top: 'var(--top)' }}>
                    <h3 className="whitespace-nowrap text-[clamp(20px,2.2vw,36px)] font-normal text-ink-shadow border-b-2 border-blue-900 w-fit pb-[0.2em]">
                      Here&apos;s the Process
                    </h3>
                  </div>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 5 * var(--line))' }}
                  >
                    1. You describe your business challenge
                  </p>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 7 * var(--line))' }}
                  >
                    2. We dive deeper to gain a greater understanding
                  </p>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 9 * var(--line))' }}
                  >
                    3. I summarize our conversation and get to work!
                  </p>

                  <div className="absolute" style={{ left: 'var(--left)', top: 'calc(var(--top) + 12 * var(--line))' }}>
                    <h3 className="whitespace-nowrap text-[clamp(20px,2.2vw,36px)] font-normal text-ink-shadow border-b-2 border-blue-900 w-fit pb-[0.2em]">
                      Typical Output
                    </h3>
                  </div>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 16 * var(--line))' }}
                  >
                    1. One page summary with high-level recommendations
                  </p>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 18 * var(--line))' }}
                  >
                    2. Risks &amp; assumptions to validate
                  </p>

                  <p
                    className="absolute whitespace-nowrap text-ink-shadow text-[clamp(18px,1.9vw,30px)]"
                    style={{ left: 'var(--left)', top: 'calc(var(--top) + 20 * var(--line))' }}
                  >
                    3. Let&apos;s meet to review!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly inline embed */}
          <div id="book-yellowpad" className="mt-12">
            {/* Replace the data-url below with your actual Calendly event type URL */}
            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden"
              data-url="https://calendly.com/ari-kolker-sapvillage/30min?hide_gdpr_banner=1&background_color=111827&text_color=f5f5f5&primary_color=faec96"
              style={{ minWidth: "320px", height: "760px" }}
            />
          </div>

          {/* subtle divider to next light section */}
          <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* What sets us apart */}
      <section id="strengths" className="py-20 bg-neutral-50 border-y">
        <div className="section text-center">
          <h2 className="text-3xl font-bold">What sets us apart</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Enterprise-grade execution for regulated environments — designed to de-risk delivery and accelerate value.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <article className="group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--brand)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l9 4-9 4-9-4 9-4Z" />
                    <path d="M3 10l9 4 9-4" />
                    <path d="M3 16l9 4 9-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">ERP, CRM & MES mastery</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                <li>25+ years leading complex implementations</li>
                <li>Cross-platform integration patterns that scale</li>
                <li>Acquisition playbooks proven in production</li>
              </ul>
            </article>

            <article className="group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--accent)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l4 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Outcome-driven execution</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                <li>Cutover planning & dependable go-lives</li>
                <li>PMO toolkits: requirements, risk, UAT</li>
                <li>Roadmaps that balance speed & safety</li>
              </ul>
            </article>

            <article className="group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--brand)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">GMP & validation expertise</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                <li>Validation-sensitive delivery in GxP settings</li>
                <li>Audit-ready traceability & documentation</li>
                <li>Quality first — no shortcuts, ever</li>
              </ul>
            </article>

            <article className="group">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--accent)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="18" height="7" rx="1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Solution-driven & scalable</h3>
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-neutral-700">
                <li>Global reach with onsite flexibility</li>
                <li>Subcontractor network to scale fast</li>
                <li>Business-analyst mindset that drives adoption</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Industries, Processes & Reach */}
      <section id="industries" className="py-20 bg-neutral-50 border-y">
        <div className="section text-center">
          <h2 className="text-3xl font-bold">Industries, Processes & Reach</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            Experience that spans highly regulated manufacturing and global enterprise operations.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            <article className="card group">
              <div className="flex items-center gap-3 mb-3 text-[var(--brand)] group-hover:text-[var(--accent)] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3z" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
                <h3 className="font-semibold text-lg text-neutral-900">Life Sciences & Consumer Packaged Goods</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Pharmaceutical & medical device manufacturers (discrete and process) and Consumer Packaged Goods producers—
                supported across full product lifecycles.
              </p>
            </article>

            <article className="card group">
              <div className="flex items-center gap-3 mb-3 text-[var(--brand)] group-hover:text-[var(--accent)] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l3 3" />
                </svg>
                <h3 className="font-semibold text-lg text-neutral-900">End-to-End Business Processes</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                From commercial and order management through logistics, finance, manufacturing execution, and service delivery—each
                process mapped, validated, and optimized for operational resilience.
              </p>
            </article>

            <article className="card group">
              <div className="flex items-center gap-3 mb-3 text-[var(--brand)] group-hover:text-[var(--accent)] transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M2 12h20M12 2a10 10 0 010 20M4.93 4.93a10 10 0 0114.14 14.14" />
                </svg>
                <h3 className="font-semibold text-lg text-neutral-900">Global Program Reach</h3>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Programs delivered across North America, Europe, and Asia—coordinating onsite and offshore teams for seamless,
                compliant rollouts.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="approach" className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="section text-center">
          <h2 className="text-3xl font-bold">How we work</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
            A proven sequence that aligns stakeholders, de-risks delivery, and lands compliant go-lives—without surprises.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <article className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--brand)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m14 10-6 2 2 6 6-2-2-6Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Discover</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                <li>Deep-dive workshops with business & IT</li>
                <li>Scope, success criteria, risk landscape</li>
                <li>Stakeholder & operating model alignment</li>
              </ul>
            </article>

            <article className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--accent)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
                    <path d="M9 4v14M15 6v14" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Map & Measure</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                <li>As-Is process mapping across tracks</li>
                <li>Requirements & design traceability</li>
                <li>KPIs and validation touchpoints captured</li>
              </ul>
            </article>

            <article className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--brand)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Fit-Gap & Plan</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                <li>Cross-system fit-gap by function & track</li>
                <li>Phased vs. big-bang deployment modeling</li>
                <li>Risk plan, UAT strategy, cutover blueprint</li>
              </ul>
            </article>

            <article className="card group">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-[var(--accent)] text-white transition-transform group-hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 19c1-4 5-8 9-9l3-3 2 2-3 3c-1 4-5 8-9 9l-2-2Z" />
                    <path d="M4 20c2 0 4-2 4-4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Deploy & Deliver</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-neutral-700">
                <li>PMO cadence, reporting, and governance</li>
                <li>Validation-sensitive execution in GxP contexts</li>
                <li>Disciplined cutover & dependable go-live</li>
              </ul>
            </article>
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border text-sm text-neutral-700 shadow-sm">
              <span className="font-medium text-neutral-900">Flow:</span>
              <span className="hidden sm:inline">Discover</span>
              <Arrow />
              <span className="hidden sm:inline">Map & Measure</span>
              <Arrow />
              <span className="hidden sm:inline">Fit-Gap & Plan</span>
              <Arrow />
              <span className="hidden sm:inline">Deploy & Deliver</span>
            </div>
          </div>

          <div className="mt-10">
            <a href="#yellowpad" className="btn btn-brand">Discuss your program</a>
          </div>
        </div>
      </section>

      {/* Experience */}
<section id="experience" className="py-20 bg-white">
  <div className="section">
    <h2 className="text-3xl font-bold text-center">Leadership & Background</h2>

    <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
      {/* Leadership card with larger photo */}
      <div className="card md:col-span-2">
        <div className="flex items-start gap-6">
          <Image
            src="/graphics/ari-headshot.jpg"
            alt="Ari Kolker, Founder & President"
            width={140}
            height={140}
            className="rounded-2xl ring-1 ring-black/5 object-cover shadow-md"
          />
          <div>
            <h3 className="font-semibold text-lg">Ari Kolker, Founder & President</h3>
            <p className="mt-2 text-neutral-700 leading-relaxed">
              For nearly three decades, Ari has built a reputation for delivering pragmatic, high-quality solutions
              that create measurable value for clients. A former Deloitte consultant and Clarkston Consulting leader,
              he founded Village Consulting to do what large firms often can’t—pair strategic insight with hands-on
              execution. Ari’s relentless pursuit of quality and client satisfaction defines every engagement, from
              integration strategy to full-scale program delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Operating Model card */}
      <div className="card">
        <h3 className="font-semibold text-lg">Operating Model</h3>
        <p className="mt-2 text-neutral-700 leading-relaxed">
          Owner-operated with a trusted subcontractor network for technical execution. Clients may work directly with
          subcontractors under overall program leadership.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-neutral-900 text-neutral-50">
        <div className="section">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold">Let’s talk about your integration or transformation.</h2>
              <p className="mt-3 text-neutral-300">
                Whether you’re integrating an acquisition, planning S/4HANA, or standing up a PMO—let’s map it, de-risk it,
                and deliver it together.
              </p>
            </div>
            <div className="md:justify-self-end">
              <a href="mailto:info@villageconsulting.com" className="btn bg-white text-neutral-900 hover:opacity-90">
                Email us
              </a>
            </div>
          </div>
          <div className="mt-8 text-xs text-neutral-400">
            <p>Confidential information is handled under mutual NDA upon request.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="section flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <div className="flex items-center gap-3">
            <Image
              src="/village-logo.png"
              width={120}
              height={36}
              alt="Village Consulting"
              className="h-6 w-auto object-contain"
            />
            <span>© {new Date().getFullYear()} Village Consulting, LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-neutral-900" href="#">Privacy</a>
            <a className="hover:text-neutral-900" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper icons */
function Dot() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" className="text-blue-500" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" className="text-neutral-400 inline-block">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
