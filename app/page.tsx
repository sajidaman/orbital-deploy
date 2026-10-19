"use client";

import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type FormEvent } from "react";

const designContract = `<!--
THESIS: Make the unknown feel close enough to explore; refuse the generic tech hero.
OWN-WORLD: Ink-blue observatory, warm planetary clay, precise orbit lines, and paper-white type.
STORY: This is an invitation to explore a fictional field guide; follow the route, then try the demo form.
FIRST VIEWPORT: Editorial title and actions on the left, a large CSS-built planet and flight annotation on the right.
FORM: Persuade landing page; image-led split hero with an editorial field-note follow-up. Seed key: unavailable.
-->`;

const destinations = [
  {
    number: "01",
    name: "The quiet side",
    detail: "A slower orbit, a wider view.",
    className: "moon",
  },
  {
    number: "02",
    name: "Blue hour",
    detail: "Where the horizon keeps going.",
    className: "blue",
  },
  {
    number: "03",
    name: "Farther out",
    detail: "A little room for the unknown.",
    className: "amber",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <template dangerouslySetInnerHTML={{ __html: designContract }} />
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          aria-label="ORBITAL home"
          onClick={closeMenu}
        >
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
          </span>
          ORBITAL
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#field-notes" onClick={closeMenu}>
            Field notes
          </a>
          <a href="#about" onClick={closeMenu}>
            The idea
          </a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Try the demo <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="micro-label">
            <span className="status-dot" aria-hidden="true" />
            A field guide to elsewhere
          </p>
          <h1 id="hero-title">
            Leave the
            <br />
            usual <em>orbit.</em>
          </h1>
          <p className="hero-intro">
            The best way to find a new perspective is to take the long way
            around. Start somewhere unexpected.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#field-notes">
              Explore the field notes <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about">
              Our point of view
            </a>
          </div>
        </div>

        <div
          className="orbital-scene"
          role="img"
          aria-label="Illustration of a planet in orbit"
        >
          <div className="scene-grid" aria-hidden="true" />
          <span className="star star-one" aria-hidden="true" />
          <span className="star star-two" aria-hidden="true" />
          <span className="star star-three" aria-hidden="true" />
          <span className="star star-four" aria-hidden="true" />
          <span className="star star-five" aria-hidden="true" />
          <div className="orbit orbit-back" aria-hidden="true" />
          <div className="planet" aria-hidden="true">
            <div className="planet-land" />
          </div>
          <div className="orbit orbit-front" aria-hidden="true">
            <span className="orbiting-moon" />
          </div>
          <div className="scene-caption scene-caption-top">
            <span>FIELD STUDY</span>
            <span>NO. 001</span>
          </div>
          <div className="scene-caption scene-caption-bottom">
            <span className="caption-rule" />
            <span>
              A WORLD
              <br />
              JUST OUTSIDE
              <br />
              THE ORDINARY
            </span>
          </div>
          <span className="scene-coordinates">FIG. 01 — ILLUSTRATIVE</span>
        </div>

        <a className="scroll-cue" href="#field-notes">
          <span>Scroll to explore</span>
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="field-notes section-shell" id="field-notes">
        <div className="section-heading">
          <div>
            <p className="micro-label">Three ways to look again</p>
            <h2>
              There&apos;s more
              <br />
              than one way <em>out.</em>
            </h2>
          </div>
          <p className="section-summary">
            A collection of imagined places and small reminders to stay
            curious. These are starting points, not destinations.
          </p>
        </div>

        <div className="destination-list">
          {destinations.map((destination) => (
            <article className="destination" key={destination.number}>
              <span className="destination-number">{destination.number}</span>
              <div className={`destination-planet ${destination.className}`} aria-hidden="true">
                <span />
              </div>
              <div className="destination-copy">
                <h3>{destination.name}</h3>
                <p>{destination.detail}</p>
              </div>
              <span className="destination-arrow" aria-hidden="true">
                <ArrowUpRight size={19} />
              </span>
            </article>
          ))}
        </div>
        <p className="illustration-note">All places shown are fictional illustrations.</p>
      </section>

      <section className="about-section" id="about">
        <div className="about-art" aria-hidden="true">
          <div className="about-ring" />
          <div className="about-world">
            <span />
          </div>
          <span className="about-art-label">A NOTE FROM ORBITAL</span>
        </div>
        <div className="about-copy">
          <p className="micro-label">A little more wonder</p>
          <h2>
            Curiosity is
            <br />
            a good place
            <br />
            to <em>begin.</em>
          </h2>
          <p>
            ORBITAL is a small, fictional field guide built around one simple
            idea: there&apos;s always another perspective worth finding. Take a
            breath, look up, and see where your attention goes.
          </p>
          <a className="text-link text-link-light" href="#contact">
            Stay in the loop <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-copy">
          <p className="micro-label">A message from mission control</p>
          <h2>
            Keep a little
            <br />
            space for <em>wonder.</em>
          </h2>
          <p>
            Try the demo form. It won&apos;t send or save your email—this
            project has no mailing list behind it.
          </p>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Your email address</label>
          <div className="input-row">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={submitted}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "Demo complete" : "Try the demo"}
              {!submitted && <ArrowRight size={17} aria-hidden="true" />}
            </button>
          </div>
          <p className="form-message" aria-live="polite">
            {submitted
              ? "Demo complete — nothing was sent or stored."
              : "No emails are collected. This form only changes what you see here."}
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-symbol" aria-hidden="true">
            <span />
          </span>
          ORBITAL
        </a>
        <p>A small invitation to look beyond the usual.</p>
        <a href="#top" className="back-to-top">
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <span className="footer-copyright">A fictional field guide · 2026</span>
      </footer>
    </main>
  );
}
