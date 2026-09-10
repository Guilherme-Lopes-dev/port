'use client'

import { useEffect, useState } from 'react'
import { EMAIL, LINKEDIN, copy, education, experience, stack, type Lang } from './content'

const SECTIONS = ['how', 'path'] as const
const marqueeItems = stack.flatMap((group) => group.items)

const mailto = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" aria-hidden="true">
      <path
        d="M40 128h176M144 56l72 72-72 72"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17 17 7M8 7h9v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" fill="none" aria-hidden="true">
      <path
        d="M216 76 104 188l-56-56"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('pt')
  const [menu, setMenu] = useState(false)
  const [active, setActive] = useState('')
  const [copied, setCopied] = useState(false)
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = t.htmlLang
  }, [t.htmlLang])

  // Uma passada de IntersectionObserver cobre as duas revelações da página:
  // blocos que sobem e a seção ativa no nav.
  useEffect(() => {
    const once = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('in')
          once.unobserve(e.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('[data-reveal]').forEach((el) => once.observe(el))

    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) spy.observe(el)
    })

    return () => {
      once.disconnect()
      spy.disconnect()
    }
  }, [lang])

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menu])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      // Sem permissão de área de transferência: o mailto ao lado continua funcionando.
      location.href = mailto('Vaga')
    }
  }

  const navItems = [
    { id: 'how', label: t.nav.how },
    { id: 'path', label: t.nav.path },
  ]

  return (
    <>
      <a className="skip" href="#main">
        {t.skip}
      </a>

      <header className="nav container">
        <a className="mark" href="#top">
          <span className="mark-full">Guilherme Lopes</span>
          <span className="mark-short">GL</span>
          <span className="mark-dot" aria-hidden="true" />
        </a>

        <nav className="nav-links" aria-label={t.nav.path}>
          {navItems.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={`#${item.id}`}
              aria-current={active === item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-tools">
          <button
            className="lang"
            onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
            aria-label={t.langLabel}
          >
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        <a className="btn btn-primary btn-sm nav-cta" href={mailto(t.contactLabel)}>
          {t.cta}
          <ArrowUpRight />
        </a>

        <button
          className="burger"
          aria-expanded={menu}
          aria-controls="menu"
          aria-label={menu ? t.menuClose : t.menuOpen}
          onClick={() => setMenu(!menu)}
        >
          <span />
          <span />
        </button>
      </header>
      <div className={`sheet${menu ? ' open' : ''}`} id="menu" hidden={!menu}>
        {navItems.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={{ '--d': i } as React.CSSProperties}
            onClick={() => setMenu(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          className="btn btn-primary"
          href={mailto(t.contactLabel)}
          style={{ '--d': navItems.length } as React.CSSProperties}
          onClick={() => setMenu(false)}
        >
          {t.cta}
          <ArrowRight />
        </a>
      </div>

      <main id="main">
        <section className="section hero container" id="top">
          <div className="hero-copy">
            <h1 className="hero-title">
              {t.heroTitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className="hero-text">{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={mailto(t.contactLabel)}>
                {t.cta}
                <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* ponytail: faixa decorativa, a stack com rotulo continua na secao propria. */}
        <div className="marquee" aria-hidden="true">
          <ul className="marquee-row">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <li key={`${item}-${i}`}>{item}</li>
            ))}
          </ul>
        </div>

        <section className="section container" id="featured">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.featuredLabel}</p>
            <h2 className="section-title">{t.featuredTitle}</h2>
          </div>
          {/* ponytail: moldura vazia de propósito, o case entra aqui quando existir. */}
          <div className="featured" data-reveal>
            <span className="featured-mark" aria-hidden="true" />
            <p className="featured-note">{t.featuredNote}</p>
            <p className="featured-hint">{t.featuredHint}</p>
          </div>
        </section>

        <section className="section container" id="how">
          <div className="split">
            <div className="section-head" data-reveal>
              <p className="eyebrow">{t.howLabel}</p>
              <h2 className="section-title">{t.howTitle}</h2>
            </div>
            <div className="prose" data-reveal>
              <p className="prose-lead">{t.howLead}</p>
              {t.howText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="path">
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.pathLabel}</p>
            <h2 className="section-title">{t.pathTitle}</h2>
          </div>

          <ol>
            {experience.map((job) => (
              <li className="job" key={`${job.company}-${job.period[lang]}`} data-reveal>
                <div className="job-meta">
                  <span className="job-period">{job.period[lang]}</span>
                  <span className="job-place">{job.place}</span>
                </div>
                <div>
                  <h3 className="job-company">
                    {job.company}
                    {job.concurrent && <span className="tag">{t.concurrent}</span>}
                  </h3>
                  <div className="job-roles">
                    {job.roles[lang].map((role) => (
                      <span key={role}>{role}</span>
                    ))}
                  </div>
                  <ul className="job-bullets">
                    {job.bullets[lang].map((b) => (
                      <li key={b}>
                        <span />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="edu" data-reveal>
            <span className="eyebrow">{t.eduLabel}</span>
            <span className="edu-school">{education.school}</span>
            <span className="edu-detail">
              {education.course[lang]}, {education.period}
            </span>
          </div>
        </section>

        <section className="section container" aria-label={t.stackLabel}>
          <div className="section-head" data-reveal>
            <p className="eyebrow">{t.stackLabel}</p>
            <h2 className="section-title">{t.stackTitle}</h2>
          </div>
          {stack.map((group) => (
            <div className="stack-group" key={group.group.en} data-reveal>
              <span className="stack-name">{group.group[lang]}</span>
              <ul className="stack-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section container" id="contact">
          <div className="final" data-reveal>
            <p className="eyebrow">{t.contactLabel}</p>
            <h2 className="final-title">
              {t.contactTitle.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p className="final-text">{t.contactText}</p>
            <div className="final-actions">
              <a className="btn btn-primary" href={mailto(t.contactLabel)}>
                {t.cta}
                <ArrowRight />
              </a>
              <button className="btn btn-ghost" onClick={copyEmail}>
                {copied ? <Check /> : null}
                {copied ? t.copied : t.copyEmail}
              </button>
              <span className="final-email">{EMAIL}</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-row">
          <strong>Guilherme Lourenço Lopes</strong>
          <span>{t.footerRole}</span>
          <span>{t.footerPlace}</span>
        </div>
        <div className="footer-row">
          <a href={mailto(t.contactLabel)}>{EMAIL}</a>
          {LINKEDIN && (
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}
          <span>© {new Date().getFullYear()}</span>
        </div>
        <p className="footer-note">{t.footerNote}</p>
      </footer>
    </>
  )
}
