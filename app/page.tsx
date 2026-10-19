"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Check, Menu, X } from "lucide-react";

const NAV = [
  { href: "#destinations", label: "Destinations" },
  { href: "#journey", label: "Journey" },
  { href: "#launch-list", label: "Launch list" },
];

const DESTINATIONS = [
  {
    id: "meridian",
    name: "Meridian Station",
    detail: "400 km up. Four-day stays with a window seat on the terminator line.",
    planet: "planet-ice",
  },
  {
    id: "ember",
    name: "Ember Loop",
    detail: "A looping flyby of the amber gas giant, close enough to see the storm bands.",
    planet: "planet-ember",
  },
  {
    id: "halo",
    name: "Halo Ring Cruise",
    detail: "A slow, week-long drift along the ice rings with onboard guides.",
    planet: "planet-halo",
  },
];

const STEPS = [
  { title: "Book", text: "Pick a departure window and a cabin. Pay a deposit, not the full fare." },
  { title: "Train", text: "Three weekends of ground training, including zero-gravity practice." },
  { title: "Launch", text: "Board at the coast spaceport. Ascent takes nine minutes." },
  { title: "Arrive", text: "Dock, unpack, and open the shutters." },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Enter an email address like name@example.com.");
      setJoined(false);
      return;
    }
    setError("");
    setJoined(true);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top" aria-label="ORBITAL home">
            ORBITAL
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className="nav-mobile"
          aria-label="Mobile"
          hidden={!menuOpen}
        >
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="stars" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Low orbit, booked like a train.</h1>
              <p className="lede">
                ORBITAL sells seats to orbital stations and planetary flybys. Pick a
                date, train for three weekends, and launch.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#launch-list">
                  Join the launch list
                </a>
                <a className="button button-quiet" href="#destinations">
                  See destinations
                </a>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="planet planet-ember hero-planet" />
              <div className="hero-ring" />
              <div className="moon" />
            </div>
          </div>
        </section>

        <section className="section" id="destinations" aria-labelledby="dest-title">
          <div className="container">
            <h2 id="dest-title">Three ways to leave the ground</h2>
            <ul className="dest-grid">
              {DESTINATIONS.map((d) => (
                <li key={d.id} className="dest">
                  <div className={`planet dest-planet ${d.planet}`} aria-hidden="true" />
                  <h3>{d.name}</h3>
                  <p>{d.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-dusk" id="journey" aria-labelledby="journey-title">
          <div className="container journey">
            <h2 id="journey-title">From booking to arrival</h2>
            <ol className="steps">
              {STEPS.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="launch-list" aria-labelledby="list-title">
          <div className="container signup">
            <div>
              <h2 id="list-title">Get the first departure dates</h2>
              <p className="lede">
                Leave your email and we will tell you when seats open. This is a demo,
                so nothing is sent or stored.
              </p>
            </div>

            <form className="signup-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="email">Email address</label>
              <div className="field-row">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby="email-status"
                />
                <button type="submit" className="button button-primary">
                  Join the list
                </button>
              </div>
              <p id="email-status" className={error ? "status status-error" : "status"} role="status">
                {error}
                {joined && (
                  <span className="status-ok">
                    <Check size={16} aria-hidden="true" /> You are on the demo list. Nothing was sent.
                  </span>
                )}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <span className="brand">ORBITAL</span>
          <p>
            A fictional service built to practise deploying with GitHub and Vercel. The
            signup form runs only in your browser and collects no data.
          </p>
        </div>
      </footer>
    </>
  );
}
