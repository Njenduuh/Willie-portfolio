// ===== INTERNATIONALIZATION (i18n) — English / German =====
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.greeting": 'Hi, I\'m Wilson <span>Kabangi</span>',
    "hero.tagline": "AI Builder &nbsp;|&nbsp; Full Stack Developer &nbsp;|&nbsp; Automation Engineer",
    "hero.btn": "About Me",
    "about.heading": 'About <span>Me</span>',
    "about.p1": "I build AI-powered systems, automation workflows, and scalable web applications that solve real business problems. My core focus is on AI agents, LangChain and LangGraph workflows, multi-agent systems, and LLM-powered applications — designed and deployed for startups and digital businesses that need production-ready software.",
    "about.p2": "With a foundation in ALX Software Engineering and hands-on experience shipping real-world products, I combine strong frontend skills (React.js, JavaScript) with backend capabilities (Python, Node.js, FastAPI) to build complete end-to-end solutions. From intelligent chatbots and RAG systems to automated business workflows, I focus on results-driven development with clean, maintainable code.",
    "about.p3": 'My journey started at ALX where I built a strong frontend foundation. I then independently taught myself backend development through YouTube, freeCodeCamp, and real-world project building — mastering Node.js, Express.js, REST APIs, databases, and full-stack deployment. That self-driven growth took me from <strong>Frontend → Backend → Full Stack → AI Builder</strong>, and it\'s this relentless, self-taught mindset that drives everything I build today.',
    "about.resume": "Download AI Engineer Resume",
    "about.resume_en": "Resume (EN)",
    "about.resume_de": "Lebenslauf (DE)",
    "skills.heading": 'Skills & <span>Abilities</span>',
    "edu.heading": 'My <span>Education</span>',
    "edu.quote": "Education is not the learning of facts, but the training of the mind to think.",
    "edu.completed": "Completed",
    "edu.certified": "Certified",
    "work.heading": 'Projects <span>Showcase</span>',
    "exp.heading": "Experience",
    "exp.back": "Back to Home",
    "contact.heading": 'Get in <span>Touch</span>',
    "contact.cta": 'Looking for an AI Builder, Automation Developer, or Full Stack Engineer?<br><strong>Let\'s build something powerful.</strong>',
  },
  de: {
    "nav.home": "Startseite",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.education": "Ausbildung",
    "nav.work": "Projekte",
    "nav.experience": "Erfahrung",
    "nav.contact": "Kontakt",
    "hero.greeting": 'Hallo, ich bin Wilson <span>Kabangi</span>',
    "hero.tagline": "KI-Entwickler &nbsp;|&nbsp; Full Stack Entwickler &nbsp;|&nbsp; Automatisierungsingenieur",
    "hero.btn": "Über mich",
    "about.heading": 'Über <span>mich</span>',
    "about.p1": "Ich entwickle KI-gesteuerte Systeme, Automatisierungs-Workflows und skalierbare Webanwendungen, die echte Geschäftsprobleme lösen. Mein Schwerpunkt liegt auf KI-Agenten, LangChain- und LangGraph-Workflows, Multi-Agenten-Systemen und LLM-basierten Anwendungen — entworfen und bereitgestellt für Startups und digitale Unternehmen, die produktionsreife Software benötigen.",
    "about.p2": "Mit einer Grundlage in ALX Software Engineering und praktischer Erfahrung in der Auslieferung realer Produkte kombiniere ich starke Frontend-Fähigkeiten (React.js, JavaScript) mit Backend-Kompetenzen (Python, Node.js, FastAPI), um komplette End-to-End-Lösungen zu entwickeln. Von intelligenten Chatbots und RAG-Systemen bis hin zu automatisierten Geschäfts-Workflows konzentriere ich mich auf ergebnisorientierte Entwicklung mit sauberem, wartbarem Code.",
    "about.p3": 'Meine Reise begann bei ALX, wo ich eine solide Frontend-Grundlage aufgebaut habe. Danach habe ich mir eigenständig die Backend-Entwicklung über YouTube, freeCodeCamp und projektbasiertes Lernen beigebracht — und dabei Node.js, Express.js, REST APIs, Datenbanken und Full-Stack-Deployment gemeistert. Dieses selbstgesteuerte Wachstum hat mich von <strong>Frontend → Backend → Full Stack → KI-Entwickler</strong> geführt, und diese unermüdliche, autodidaktische Denkweise treibt alles an, was ich heute baue.',
    "about.resume": "KI-Ingenieur Lebenslauf herunterladen",
    "about.resume_en": "Lebenslauf (EN)",
    "about.resume_de": "Lebenslauf (DE)",
    "skills.heading": 'Fähigkeiten & <span>Kompetenzen</span>',
    "edu.heading": 'Meine <span>Ausbildung</span>',
    "edu.quote": "Bildung ist nicht das Lernen von Fakten, sondern die Schulung des Geistes zum Denken.",
    "edu.completed": "Abgeschlossen",
    "edu.certified": "Zertifiziert",
    "work.heading": 'Projekt<span>übersicht</span>',
    "exp.heading": "Erfahrung",
    "exp.back": "Zurück zur Startseite",
    "contact.heading": 'Kontakt <span>aufnehmen</span>',
    "contact.cta": 'Suchen Sie einen KI-Entwickler, Automatisierungsentwickler oder Full Stack Ingenieur?<br><strong>Lassen Sie uns etwas Großartiges bauen.</strong>',
  }
};

// Typed.js strings for each language
const typedStrings = {
  en: [
    "build AI Agents.",
    "design LangChain Workflows.",
    "build Automation Systems.",
    "develop Full Stack Applications.",
    "ship Scalable Digital Solutions.",
    "engineer Multi-Agent Systems.",
  ],
  de: [
    "KI-Agenten entwickle.",
    "LangChain-Workflows entwerfe.",
    "Automatisierungssysteme baue.",
    "Full-Stack-Anwendungen entwickle.",
    "skalierbare digitale Lösungen liefere.",
    "Multi-Agenten-Systeme konstruiere.",
  ]
};

let currentLang = localStorage.getItem('portfolioLang') || 'en';
let typedInstance = null;

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

/**
 * Restart Typed.js with the correct language strings
 */
function restartTyped(lang) {
  if (typedInstance) {
    typedInstance.destroy();
  }
  const typingEl = document.querySelector('.typing-text');
  if (typingEl) {
    typingEl.textContent = '';
    typedInstance = new Typed('.typing-text', {
      strings: typedStrings[lang],
      loop: true,
      typeSpeed: 55,
      backSpeed: 28,
      backDelay: 1200,
    });
  }
}

/**
 * Toggle between English and German
 */
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'de' : 'en';
  localStorage.setItem('portfolioLang', currentLang);

  applyTranslations(currentLang);
  restartTyped(currentLang);

  // Update button label
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = currentLang === 'en' ? 'DE' : 'EN';
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

/**
 * Initialize language on page load
 */
document.addEventListener('DOMContentLoaded', function() {
  // Apply saved language preference
  if (currentLang !== 'en') {
    applyTranslations(currentLang);
    const langLabel = document.getElementById('langLabel');
    if (langLabel) {
      langLabel.textContent = 'EN';
    }
    document.documentElement.lang = currentLang;
  }

  // Capture the typed instance created in script.js so we can restart it
  setTimeout(() => {
    if (currentLang !== 'en') {
      restartTyped(currentLang);
    }
  }, 500);
});
