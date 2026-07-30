import React, { useState, useRef, useEffect } from "react";
import { Mail, Github, Linkedin, Briefcase, ChevronDown } from "lucide-react";
import AWSCloudPracticioner from "./images/AWSCloudPracticioner.png";
import Sakarya_logo from "./images/Sakarya_logo.jpg";
import free_code_camp_logo from "./images/free_code_camp_logo.jpeg";
import hackerrank_logo from "./images/hackerrank_logo.jpeg";
import British_Council_logo from "./images/British_Council_logo.jpg";
import ETS_logo from "./images/toefl.png";
import CKAD from "./images/ckad.png";
import Transcript from "./images/transcript.pdf";

/* ---------------------------------------------------------
   Design tokens (see inline <style> block below for values)
   bg:        #0B0F14   deep charcoal-navy
   surface:   #121922
   border:    #232C35
   text:      #E7ECF1
   muted:     #8B97A3
   accent:    #45D6C6   (terminal/display teal)
   highlight: #E8A33D   (used sparingly — cert dates etc.)
--------------------------------------------------------- */

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="font-mono text-[#45D6C6] text-sm">{"{"}</span>
      <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B97A3]">
        {children}
      </span>
      <span className="font-mono text-[#45D6C6] text-sm">{"}"}</span>
      <span className="flex-1 h-px bg-[#232C35] ml-2" />
    </div>
  );
}

function ExperienceCard({ title, company, dates, open, onToggle, children, links }) {
  return (
    <div
      className={`group border rounded-lg p-6 transition-colors duration-300 ${
        open ? "border-[#35424E] bg-[#121922]" : "border-[#232C35] bg-[#0F151C] hover:border-[#35424E]"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#45D6C6] rounded"
      >
        <div>
          <h3 className="text-lg font-semibold text-[#E7ECF1] font-display">{title}</h3>
          <p className="text-sm text-[#8B97A3] mt-1">{company}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-[#8B97A3] whitespace-nowrap">{dates}</span>
          <ChevronDown
            size={16}
            className={`text-[#45D6C6] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1200px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="exp-list list-disc list-outside ml-4 text-[#C4CCD4] space-y-1.5 text-[15px] leading-relaxed">
          {children}
        </ul>
        {links}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [showWL, setShowWL] = useState(true);
  const [showJr, setShowJr] = useState(false);
  const [showPartTime, setShowPartTime] = useState(false);
  const [showIntern, setShowIntern] = useState(false);
  const [showProtranslate, setShowProtranslate] = useState(false);

  return (
    <main className="min-h-screen bg-[#0B0F14] text-[#E7ECF1] relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
        .exp-list strong { color: #45D6C6; font-weight: 600; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      {/* ambient background: grid + soft glow, no photo dependency */}
      <div className="fixed inset-0 -z-10 bg-grid" />
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(680px circle at 15% 0%, rgba(69,214,198,0.09), transparent 60%), radial-gradient(600px circle at 100% 20%, rgba(232,163,61,0.05), transparent 55%)",
        }}
      />

      {/* nav */}
      <nav className="fixed top-0 inset-x-0 z-20 border-b border-[#1B222A] bg-[#0B0F14]/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm text-[#45D6C6]">ali.akbay</span>
          <div className="hidden sm:flex items-center gap-6 font-mono text-xs tracking-wide text-[#8B97A3]">
            <a href="#about" className="hover:text-[#E7ECF1] transition-colors">about</a>
            <a href="#experience" className="hover:text-[#E7ECF1] transition-colors">experience</a>
            <a href="#education" className="hover:text-[#E7ECF1] transition-colors">education</a>
            <a href="#projects" className="hover:text-[#E7ECF1] transition-colors">projects</a>
            <a href="#certifications" className="hover:text-[#E7ECF1] transition-colors">certs</a>
            <a href="/contact" className="text-[#45D6C6] hover:text-[#E7ECF1] transition-colors">contact</a>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* hero */}
        <Reveal>
          <header className="mb-20">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#45D6C6] mb-4">
              software_engineer · payments systems &amp; telecom optimization
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-[#E7ECF1] leading-[1.05] mb-4">
              Ali Yusuf Akbay
            </h1>
            <div className="flex items-center gap-5 mt-8">
              <a
                href="mailto:ali.yusuf01@hotmail.com"
                aria-label="Email"
                className="text-[#8B97A3] hover:text-[#45D6C6] transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/hemlockk"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#8B97A3] hover:text-[#45D6C6] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ali-yusuf-akbay-b95552209/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[#8B97A3] hover:text-[#45D6C6] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://profile.indeed.com/p/aliyusufa-823zyx1"
                target="_blank"
                rel="noreferrer"
                aria-label="Indeed profile"
                className="text-[#8B97A3] hover:text-[#45D6C6] transition-colors"
              >
                <Briefcase size={20} />
              </a>
            </div>
          </header>
        </Reveal>

        {/* about */}
        <Reveal>
          <section id="about" className="mb-20 scroll-mt-20">
            <Eyebrow>about</Eyebrow>
            <p className="text-[#C4CCD4] leading-relaxed text-[15px]">
              Software Engineer with 3+ years across payment systems, SaaS support, and infrastructure
              automation. Currently building and documenting payment applications for ECR/POS devices at
              Worldline, spanning C#, Java, and Node.js. Previously supported and automated SaaS platforms
              at scale — PL/SQL to C# migrations, Docker/Ansible deployments, and a full Oracle-to-ClickHouse
              database migration. Fluent in Turkish and English (officially certified), comfortable working
              directly with global clients under SLA pressure.
            </p>
          </section>
        </Reveal>

        {/* experience */}
        <Reveal>
          <section id="experience" className="mb-20 scroll-mt-20">
            <Eyebrow>experience</Eyebrow>
            <div className="space-y-4">
              <ExperienceCard
                title="Software Support Engineer"
                company="Worldline — Istanbul/Maslak, Hybrid"
                dates="09/2025 – Present"
                open={showWL}
                onToggle={() => setShowWL((p) => !p)}
                links={
                  <a
                    href="https://worldline.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm text-[#45D6C6] hover:underline"
                  >
                    Company Website →
                  </a>
                }
              >
                <li>Supported dozens of external customers building <strong>ECR/POS</strong> payment applications, resolving both device configuration/integration issues and bugs in client-side code against our <strong>SDK</strong></li>
                <li>Authored <strong>technical documentation</strong> covering device configurations, payment flows, and regulatory rules — delivered directly to external clients and partners as their primary integration reference</li>
                <li>Developed, debugged, and troubleshot <strong>C#</strong> Windows Forms sample applications in <strong>Visual Studio</strong>, demonstrating device capabilities and payment flows</li>
                <li>Built the <strong>UI</strong> and payment-flow logic for an <strong>Android POS</strong> simulator in <strong>Java</strong>, integrating with the device's internal fiscal service — provided to clients/partners for integration testing</li>
                <li>Developed a <strong>Node.js/Express</strong> demo application implementing TSM Gateway protocol endpoints for restaurant-ECR device integration and payment flows</li>
              </ExperienceCard>

              <ExperienceCard
                title="Jr. Software Engineer"
                company="P.I. Works, Inc. — Istanbul, Remote"
                dates="08/2023 – 08/2025"
                open={showJr}
                onToggle={() => setShowJr((p) => !p)}
                links={
                  <a
                    href="https://piworks.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-[#45D6C6] hover:underline"
                  >
                    Company Website →
                  </a>
                }
              >
                <li>Communicated with a global client base regarding products and solutions over <strong>Jira</strong>, delivering timely fixes and workarounds in line with strict SLAs</li>
                <li>Managed and supported SaaS platforms across <strong>Windows/Linux</strong> (CentOS, RedHat) and <strong>AWS</strong> cloud environments</li>
                <li>Resolved complex software issues using advanced debugging and troubleshooting methods</li>
                <li>Assisted in migrating <strong>PL/SQL</strong>-based optimizer applications to C# executables for sandboxing and isolated testing purposes</li>
                <li>Designed and optimized complex <strong>SQL</strong> queries for effective data analysis and monitoring</li>
                <li>Automated critical operations using <strong>PL/SQL</strong>, <strong>bash</strong>, <strong>PowerShell</strong>, and internal <strong>Python</strong> tools to improve response times and reduce manual on-call workload</li>
                <li>Deployed microservices via <strong>Docker</strong> and <strong>Ansible</strong>, configuring <strong>REST API</strong> endpoints and streamlining change management</li>
                <li>Built networking and monitoring infrastructure — <strong>HAProxy</strong> load balancing, firewall rules, and <strong>Zabbix</strong> alerting — and diagnosed performance bottlenecks through log and metrics analysis</li>
                <li>Optimized and managed <strong>ETL</strong> operations to ensure stable, reliable data flow</li>
                <li>Led a team through a successful database migration from <strong>Oracle</strong> to <strong>ClickHouse</strong>, and shared best practices on <strong>Confluence</strong> to support team knowledge exchange</li>
              </ExperienceCard>

              <ExperienceCard
                title="Part-Time Software Engineer"
                company="P.I. Works, Inc. — Istanbul, Remote"
                dates="10/2022 – 08/2023"
                open={showPartTime}
                onToggle={() => setShowPartTime((p) => !p)}
              >
                <li>Worked collaboratively to meet KPI targets</li>
                <li>Successfully passed a final 4-stage interview after 5 months</li>
                <li>Achieved: one of 2 out of 6 candidates who qualified for a full-time position</li>
              </ExperienceCard>

              <ExperienceCard
                title="Software Engineering Intern"
                company="P.I. Works, Inc. — Istanbul, On-Site"
                dates="07/2022 – 10/2022"
                open={showIntern}
                onToggle={() => setShowIntern((p) => !p)}
              >
                <li>Achieved: one of 6 out of 13 interns eligible to continue part-time</li>
              </ExperienceCard>

              <ExperienceCard
                title="English Translator"
                company="Protranslate.net — Istanbul, Remote"
                dates="02/2021 – 07/2022"
                open={showProtranslate}
                onToggle={() => setShowProtranslate((p) => !p)}
                links={
                  <a
                    href="https://www.protranslate.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-[#45D6C6] hover:underline"
                  >
                    Company Website →
                  </a>
                }
              >
                <li>Translated official documents, homework, and websites from Turkish to English</li>
                <li>Completed 50 translation jobs and 14 proofreading jobs</li>
                <li>Maintained a quality score of 8.17/10</li>
              </ExperienceCard>
            </div>
          </section>
        </Reveal>

        {/* education */}
        <Reveal>
          <section id="education" className="mb-20 scroll-mt-20">
            <Eyebrow>education</Eyebrow>
            <div className="flex flex-col sm:flex-row items-start gap-6 border border-[#232C35] rounded-lg p-6 bg-[#0F151C]">
              <a href="https://cs.sakarya.edu.tr/" target="_blank" rel="noopener noreferrer" className="shrink-0">
                <img
                  src={Sakarya_logo}
                  alt="Sakarya University Logo"
                  className="w-16 h-16 object-contain rounded bg-white/5 p-1"
                />
              </a>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#E7ECF1]">Sakarya University</h3>
                <p className="text-[#C4CCD4] text-sm mt-1">B.Sc. in Computer Science/Engineering</p>
                <p className="text-[#8B97A3] text-sm mt-1">
                  GPA: <span className="text-[#E7ECF1] font-medium">3.22 / 4.00</span>
                </p>
                <p className="font-mono text-xs text-[#8B97A3] mt-1">Sep 2019 – Aug 2023</p>
                <a
                  href={Transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm font-medium text-[#0B0F14] bg-[#45D6C6] rounded-md hover:bg-[#5EE0D2] transition-colors"
                >
                  View Transcript
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        {/* projects */}
        <Reveal>
          <section id="projects" className="mb-20 scroll-mt-20">
            <Eyebrow>projects</Eyebrow>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Personal Portfolio",
                  desc: "A React-based portfolio showcasing my projects and resume.",
                  href: "https://github.com/hemlockk/PersonalWebSite",
                },
                {
                  title: "Cash Register App",
                  desc: "A final-year Sakarya University project written in C#.",
                  href: "https://github.com/hemlockk/BarkodluSatis",
                },
                {
                  title: "Midas Tax Calculator",
                  desc: "Tax calculation site for foreign stock trades from Turkey.",
                  href: "https://github.com/hemlockk/MidasTaxCalculatorSite",
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="border border-[#232C35] rounded-lg p-5 bg-[#0F151C] hover:border-[#35424E] transition-colors"
                >
                  <h3 className="font-display text-base font-semibold text-[#E7ECF1] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#8B97A3] mb-4 leading-relaxed">{p.desc}</p>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#45D6C6] hover:underline"
                  >
                    View code →
                  </a>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* certifications */}
        <Reveal>
          <section id="certifications" className="mb-20 scroll-mt-20">
            <Eyebrow>certifications</Eyebrow>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  img: AWSCloudPracticioner,
                  alt: "AWS Cloud Practitioner",
                  name: "AWS Certified Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  issued: "Sep 2024",
                  expires: "Sep 2027",
                  href: "https://www.credly.com/badges/8c585abd-2007-42ca-9f64-8f82eccd7fc8/linked_in_profile",
                },
                {
                  img: free_code_camp_logo,
                  alt: "JavaScript Algorithms and Data Structures",
                  name: "JavaScript Algorithms and Data Structures",
                  issuer: "freeCodeCamp",
                  issued: "Oct 2022",
                  expires: "No expiration",
                  href: "https://www.freecodecamp.org/certification/fcc49575b09-50b7-46a0-ac74-12b27dbf9293/javascript-algorithms-and-data-structures",
                },
                {
                  img: hackerrank_logo,
                  alt: "SQL (Advanced) Certificate",
                  name: "SQL (Advanced) Certificate",
                  issuer: "hackerrank.com",
                  issued: "Mar 2024",
                  expires: "No expiration",
                  href: "https://www.hackerrank.com/certificates/ef819e7c20ec",
                },
                {
                  img: British_Council_logo,
                  alt: "IELTS",
                  name: "IELTS — CEFR C1",
                  issuer: "British Council",
                  issued: "May 2024",
                  expires: "May 2026",
                  href: "/ielts.pdf",
                },
                {
                  img: CKAD,
                  alt: "CKAD",
                  name: "Certified Kubernetes Application Developer",
                  issuer: "The Linux Foundation",
                  issued: "Nov 2025",
                  expires: "Nov 2027",
                  credentialId: "LF-8csg5bhz1t",
                  href: "https://www.credly.com/badges/7f6e49fe-9683-427d-a793-3a03e0e69d1c/public_url",
                },
                {
                  img: ETS_logo,
                  alt: "TOEFL",
                  name: "TOEFL — CEFR C1",
                  issuer: "ETS",
                  issued: "Jun 2026",
                  expires: "Jun 2028",
                  href: "/TOEFL.pdf",
                },
              ].map((c) => (
                <a
                  key={c.name}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col border border-[#232C35] rounded-lg p-5 bg-[#0F151C] hover:border-[#35424E] transition-colors"
                >
                  <img src={c.img} alt={c.alt} className="w-10 h-10 object-contain mb-3 bg-white/5 rounded p-1" />
                  <span className="font-display text-sm font-semibold text-[#E7ECF1] leading-snug">{c.name}</span>
                  <span className="text-xs text-[#8B97A3] mt-2">{c.issuer}</span>
                  <span className="font-mono text-xs text-[#E8A33D] mt-3">
                    {c.issued} → {c.expires}
                  </span>
                  {c.credentialId && (
                    <span className="font-mono text-[10px] text-[#5C6672] mt-1">ID: {c.credentialId}</span>
                  )}
                </a>
              ))}
            </div>
          </section>
        </Reveal>

        {/* contact */}
        <Reveal>
          <section className="text-center pt-4">
            <a
              href="/contact"
              className="inline-block bg-[#45D6C6] text-[#0B0F14] font-medium px-6 py-3 rounded-md hover:bg-[#5EE0D2] transition-colors"
            >
              Get in touch
            </a>
            <p className="font-mono text-xs text-[#8B97A3] mt-8">© 2026 Ali Yusuf Akbay</p>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
