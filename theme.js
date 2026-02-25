/* THEMES */
body[data-theme="dark"] {
  --bg: #0b0f1a;
  --card: rgba(255,255,255,0.08);
  --text: #e5e7eb;
  --accent: #38bdf8;
}

body[data-theme="light"] {
  --bg: #f4f7fb;
  --card: #ffffff;
  --text: #0f172a;
  --accent: #2563eb;
}

body[data-theme="neon"] {
  --bg: #020617;
  --card: rgba(30,41,59,0.6);
  --text: #e0f2fe;
  --accent: #22d3ee;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: var(--bg);
  color: var(--text);
}

/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
}

.logo {
  font-size: 1.6rem;
  font-weight: 700;
}

.logo span {
  color: var(--accent);
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: var(--text);
}

select {
  background: var(--card);
  color: var(--text);
  border: none;
  padding: 0.4rem;
  border-radius: 6px;
}

/* HERO */
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
}

.hero-text {
  max-width: 600px;
}

.hero-text h1 {
  font-size: 3rem;
}

.hero-text span {
  color: var(--accent);
}

.hero-text h3 {
  margin: 1rem 0;
  font-weight: 400;
}

.hero-image img {
  width: 320px;
  height: 420px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

/* BUTTONS */
.btn {
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  margin-right: 1rem;
}

.primary {
  background: var(--accent);
  color: black;
}

.outline {
  border: 2px solid var(--accent);
  color: var(--accent);
}

/* SECTIONS */
.section {
  max-width: 1000px;
  margin: auto;
  padding: 4rem 2rem;
}

.section h2 {
  margin-bottom: 1.5rem;
  color: var(--accent);
}

.glass {
  background: var(--card);
  border-radius: 20px;
  backdrop-filter: blur(12px);
}

/* SKILLS */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.skills-grid div {
  padding: 1rem;
  background: var(--card);
  text-align: center;
  border-radius: 14px;
}

/* PROJECTS */
.project-card {
  background: var(--card);
  padding: 1.5rem;
  border-radius: 18px;
  margin-bottom: 1.5rem;
}

.project-link {
  color: var(--accent);
  text-decoration: none;
}

/* CONTACT */
.contact-box p {
  margin-bottom: 0.6rem;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 2rem;
  opacity: 0.7;
}
