/**
 * Matematica: esercizi per livelli
 * Applicazione web statica per scuola primaria e secondaria di primo grado.
 */

/* ==========================================================================
   MODELLO DATI (TOPICS)
   ========================================================================== */
const TOPICS = [
  {
    id: "numeri",
    number: 1,
    title: "Numeri e operazioni",
    description: "Operazioni fondamentali, ordine delle precedenze, divisibilità, numeri interi relativi ed espressioni aritmetiche.",
    levels: [
      {
        level: 1,
        title: "Operazione singola con numeri piccoli",
        blueprint: "Calcola il risultato di una singola operazione fondamentale tra numeri interi entro il 100.",
        exercises: []
      },
      {
        level: 2,
        title: "Due operazioni e precedenze",
        blueprint: "Risolvi una sequenza di due operazioni rispettando le regole di precedenza e l'eventuale uso di parentesi.",
        exercises: []
      },
      {
        level: 3,
        title: "Multipli e divisori (MCD e mcm)",
        blueprint: "Determina il Massimo Comune Divisore o il minimo comune multiplo tra due o tre numeri naturali.",
        exercises: []
      },
      {
        level: 4,
        title: "Numeri relativi",
        blueprint: "Esegui calcoli aritmetici con numeri interi relativi positivi e negativi.",
        exercises: []
      },
      {
        level: 5,
        title: "Espressione complessa",
        blueprint: "Risolvi un'espressione aritmetica completa con parentesi tonde, quadre e le quattro operazioni.",
        exercises: []
      }
    ]
  },
  {
    id: "frazioni",
    number: 2,
    title: "Frazioni, decimali e percentuali",
    description: "Frazioni proprie, improprie e apparenti, frazioni equivalenti, operazioni, numeri decimali e calcolo di percentuali.",
    levels: [
      {
        level: 1,
        title: "Riconoscere una frazione",
        blueprint: "Individua la frazione corrispondente a una figura divisa in parti uguali o riconosce numeratore e denominatore.",
        exercises: []
      },
      {
        level: 2,
        title: "Confrontare frazioni",
        blueprint: "Confronta due o più frazioni inserendo il simbolo di ordine corretto o riducendole allo stesso denominatore.",
        exercises: []
      },
      {
        level: 3,
        title: "Somma e sottrazione di frazioni",
        blueprint: "Esegui l'addizione o la sottrazione tra due frazioni con denominatore uguale o diverso.",
        exercises: []
      },
      {
        level: 4,
        title: "Percentuali e frazione di una quantità",
        blueprint: "Calcola il valore della frazione o della percentuale indicata rispetto a una quantità intera data.",
        exercises: []
      },
      {
        level: 5,
        title: "Problema a più passaggi",
        blueprint: "Risolvi un problema pratico a più passaggi che coinvolge frazioni, sconti percentuali o parti rimanenti.",
        exercises: []
      }
    ]
  },
  {
    id: "geometria",
    number: 3,
    title: "Geometria",
    description: "Formule per il calcolo di perimetro e area dei poligoni, circonferenza e cerchio, figure solide e teorema di Pitagora.",
    levels: [
      {
        level: 1,
        title: "Perimetro con formula diretta",
        blueprint: "Calcola il perimetro di un poligono regolare o semplice applicando direttamente la formula geometrica.",
        exercises: []
      },
      {
        level: 2,
        title: "Area di poligoni",
        blueprint: "Calcola l'area di triangoli e quadrilateri noti le misure di base, altezza o diagonali.",
        exercises: []
      },
      {
        level: 3,
        title: "Cerchio",
        blueprint: "Determina la lunghezza della circonferenza o l'area del cerchio dato il raggio o il diametro.",
        exercises: []
      },
      {
        level: 4,
        title: "Solidi",
        blueprint: "Calcola il volume o l'area della superficie totale di cubi e parallelepipedi retti.",
        exercises: []
      },
      {
        level: 5,
        title: "Pitagora e figure combinate",
        blueprint: "Risolvi problemi geometrici con figure composte applicando il teorema di Pitagora.",
        exercises: []
      }
    ]
  },
  {
    id: "misure",
    number: 4,
    title: "Misure e proporzionalità",
    description: "Unità di misura del sistema metrico, equivalenze temporali, proporzioni numeriche e relazioni di proporzionalità diretta e inversa.",
    levels: [
      {
        level: 1,
        title: "Equivalenza semplice",
        blueprint: "Converti una misura di lunghezza, massa o capacità tra multipli e sottomultipli del sistema metrico decimale.",
        exercises: []
      },
      {
        level: 2,
        title: "Equivalenze con decimali e tempo",
        blueprint: "Esegui conversioni tra unità di misura con numeri decimali e trasformazioni di ore, minuti e secondi.",
        exercises: []
      },
      {
        level: 3,
        title: "Proporzione con incognita",
        blueprint: "Determina il termine incognito x in una proporzione numerica applicando la proprietà fondamentale.",
        exercises: []
      },
      {
        level: 4,
        title: "Proporzionalità diretta e inversa",
        blueprint: "Riconosci grandezze direttamente o inversamente proporzionali e calcola il valore mancante.",
        exercises: []
      },
      {
        level: 5,
        title: "Problema composto con scala",
        blueprint: "Risolvi un problema composto su distanze reali e distanze su mappa applicando la scala di riduzione.",
        exercises: []
      }
    ]
  },
  {
    id: "algebra",
    number: 5,
    title: "Introduzione all'algebra",
    description: "Introduzione al calcolo letterale, sostituzione numerica, risoluzione di equazioni di primo grado e problemi algebrici.",
    levels: [
      {
        level: 1,
        title: "Sostituzione in un'espressione",
        blueprint: "Calcola il valore numerico di un'espressione letterale sostituendo alle lettere i numeri assegnati.",
        exercises: []
      },
      {
        level: 2,
        title: "Equazione a un passaggio",
        blueprint: "Risolvi un'equazione di primo grado a un solo passaggio applicando il primo o il secondo principio di equivalenza.",
        exercises: []
      },
      {
        level: 3,
        title: "Equazione a due passaggi",
        blueprint: "Risolvi un'equazione di primo grado a due passaggi isolando il termine con l'incognita.",
        exercises: []
      },
      {
        level: 4,
        title: "Equazione con parentesi e incognita in entrambi i membri",
        blueprint: "Risolvi un'equazione di primo grado con parentesi e termini con l'incognita presenti in entrambi i membri.",
        exercises: []
      },
      {
        level: 5,
        title: "Problema da tradurre in equazione",
        blueprint: "Traduci un problema formulato a parole in un'equazione di primo grado e trova la soluzione richiesta.",
        exercises: []
      }
    ]
  },
  {
    id: "piano",
    number: 6,
    title: "Piano cartesiano e funzioni",
    description: "Coordinate cartesiane nel piano, individuazione di punti e figure, tabelle di valori per funzioni lineari e rette.",
    levels: [
      {
        level: 1,
        title: "Leggere e disegnare un punto",
        blueprint: "Individua le coordinate cartesiane (x, y) di un punto assegnato o individua il punto sulla griglia.",
        exercises: []
      },
      {
        level: 2,
        title: "Quadranti e distanze su una retta",
        blueprint: "Determina il quadrante di appartenenza di un punto o calcola la distanza tra due punti su rette orizzontali o verticali.",
        exercises: []
      },
      {
        level: 3,
        title: "Poligoni nel piano",
        blueprint: "Calcola perimetro o area di un poligono semplice disegnato nel piano cartesiano a partire dai suoi vertici.",
        exercises: []
      },
      {
        level: 4,
        title: "Funzione e tabella di valori",
        blueprint: "Compila una tabella di valori per una funzione lineare del tipo y = mx + q associando ciascun valore di x al rispettivo y.",
        exercises: []
      },
      {
        level: 5,
        title: "Retta per due punti e distanza",
        blueprint: "Determina l'equazione della retta passante per due punti o calcola la distanza tra due punti qualsiasi nel piano.",
        exercises: []
      }
    ]
  },
  {
    id: "statistica",
    number: 7,
    title: "Statistica e probabilità",
    description: "Lettura e interpretazione di tabelle e grafici, indici di posizione centrale (media, moda, mediana) e calcolo di probabilità classica.",
    levels: [
      {
        level: 1,
        title: "Leggere una tabella o un grafico",
        blueprint: "Estrai e interpreta i dati numerici rappresentati in una tabella, in un istogramma o in un grafico a barre.",
        exercises: []
      },
      {
        level: 2,
        title: "Media aritmetica e moda",
        blueprint: "Calcola la media aritmetica di un insieme di dati e individua la moda della distribuzione.",
        exercises: []
      },
      {
        level: 3,
        title: "Mediana e campo di variazione",
        blueprint: "Determina la mediana di una serie ordinata di dati numerici e calcola il campo di variazione.",
        exercises: []
      },
      {
        level: 4,
        title: "Probabilità di un evento semplice",
        blueprint: "Calcola la probabilità classica di un evento semplice come rapporto tra numero di casi favorevoli e casi possibili.",
        exercises: []
      },
      {
        level: 5,
        title: "Tabella di frequenze, media ponderata e percentuali",
        blueprint: "Completa una tabella di frequenze assolute e relative e calcola la media ponderata o percentuali collegate.",
        exercises: []
      }
    ]
  }
];

/* ==========================================================================
   STATO GLOBALE E RIFERIMENTI DOM
   ========================================================================== */
const DOM = {
  menuToggle: null,
  sidebar: null,
  sidebarOverlay: null,
  topicsAccordion: null,
  viewContainer: null,
  statusLive: null,
  mainContent: null,
  homeLink: null
};

/** Argomento attualmente aperto nell'accordion (stringa id o null) */
let openAccordionTopicId = null;

/* ==========================================================================
   INIZIALIZZAZIONE
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initDOMReferences();
  initSidebarAccordion();
  initMobileDrawer();
  initRouter();
});

function initDOMReferences() {
  DOM.menuToggle = document.getElementById("menu-toggle");
  DOM.sidebar = document.getElementById("sidebar");
  DOM.sidebarOverlay = document.getElementById("sidebar-overlay");
  DOM.topicsAccordion = document.getElementById("topics-accordion");
  DOM.viewContainer = document.getElementById("view-container");
  DOM.statusLive = document.getElementById("status-live");
  DOM.mainContent = document.getElementById("main-content");
  DOM.homeLink = document.getElementById("nav-home-link");
}

/* ==========================================================================
   ACCORDION DELLA BARRA LATERALE
   ========================================================================== */
function initSidebarAccordion() {
  if (!DOM.topicsAccordion) return;

  const html = TOPICS.map((topic) => {
    return `
      <div class="accordion-item" data-topic="${topic.id}" id="item-${topic.id}">
        <button
          type="button"
          class="accordion-trigger"
          id="trigger-${topic.id}"
          aria-expanded="false"
          aria-controls="panel-${topic.id}"
        >
          <span class="topic-num-badge" aria-hidden="true">${topic.number}</span>
          <span class="topic-trigger-title">${topic.title}</span>
          <span class="accordion-chevron" aria-hidden="true">▼</span>
        </button>
        <div
          class="accordion-panel"
          id="panel-${topic.id}"
          role="region"
          aria-labelledby="trigger-${topic.id}"
          hidden
        >
          <ul class="level-list">
            <li>
              <a href="#/${topic.id}" class="topic-overview-link" data-topic-overview="${topic.id}">
                <span>📖 Panoramica sezione</span>
              </a>
            </li>
            ${topic.levels.map((lvl) => `
              <li>
                <a href="#/${topic.id}/${lvl.level}" class="level-link" data-route="${topic.id}/${lvl.level}">
                  <span class="level-badge">L${lvl.level}</span>
                  <span class="level-link-text">${lvl.title}</span>
                </a>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `;
  }).join("");

  DOM.topicsAccordion.innerHTML = html;

  // Gestione click su ciascun trigger dell'accordion
  DOM.topicsAccordion.querySelectorAll(".accordion-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentItem = btn.closest(".accordion-item");
      const topicId = parentItem.getAttribute("data-topic");
      toggleAccordionTopic(topicId);
    });
  });

  // Chiudi la sidebar mobile quando si clicca un link di navigazione
  DOM.sidebar.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link && window.innerWidth < 768) {
      closeMobileDrawer();
    }
  });
}

/**
 * Apre una sezione specifica dell'accordion e chiude tutte le altre (o la chiude se già aperta su click utente)
 */
function toggleAccordionTopic(topicId) {
  if (openAccordionTopicId === topicId) {
    // Chiude l'accordion aperto
    setAccordionState(topicId, false);
    openAccordionTopicId = null;
  } else {
    // Chiude quello precedentemente aperto, se diverso
    if (openAccordionTopicId) {
      setAccordionState(openAccordionTopicId, false);
    }
    // Apre quello nuovo
    setAccordionState(topicId, true);
    openAccordionTopicId = topicId;
  }
}

/**
 * Assicura che una sezione sia esplicitamente aperta (usata dal router)
 */
function ensureAccordionOpen(topicId) {
  if (openAccordionTopicId && openAccordionTopicId !== topicId) {
    setAccordionState(openAccordionTopicId, false);
  }
  if (topicId) {
    setAccordionState(topicId, true);
    openAccordionTopicId = topicId;
  } else if (openAccordionTopicId) {
    setAccordionState(openAccordionTopicId, false);
    openAccordionTopicId = null;
  }
}

function setAccordionState(topicId, isOpen) {
  const item = document.getElementById(`item-${topicId}`);
  if (!item) return;
  const trigger = document.getElementById(`trigger-${topicId}`);
  const panel = document.getElementById(`panel-${topicId}`);

  if (isOpen) {
    item.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    panel.removeAttribute("hidden");
  } else {
    item.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    panel.setAttribute("hidden", "");
  }
}

/* ==========================================================================
   DRAWER MOBILE (SIDEBAR)
   ========================================================================== */
function initMobileDrawer() {
  if (!DOM.menuToggle || !DOM.sidebar || !DOM.sidebarOverlay) return;

  DOM.menuToggle.addEventListener("click", () => {
    const isOpen = DOM.sidebar.classList.contains("open");
    if (isOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  DOM.sidebarOverlay.addEventListener("click", closeMobileDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && DOM.sidebar.classList.contains("open")) {
      closeMobileDrawer();
      DOM.menuToggle.focus();
    }
  });
}

function openMobileDrawer() {
  DOM.sidebar.classList.add("open");
  DOM.sidebarOverlay.classList.add("active");
  DOM.menuToggle.setAttribute("aria-expanded", "true");
  DOM.menuToggle.setAttribute("aria-label", "Chiudi menu");
}

function closeMobileDrawer() {
  DOM.sidebar.classList.remove("open");
  DOM.sidebarOverlay.classList.remove("active");
  DOM.menuToggle.setAttribute("aria-expanded", "false");
  DOM.menuToggle.setAttribute("aria-label", "Apri menu");
}

/* ==========================================================================
   ROUTING BASATO SU HASH
   ========================================================================== */
function initRouter() {
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

function parseHash() {
  const hash = window.location.hash || "";
  // Rimuove cancelletto e slash iniziale/finale
  const cleaned = hash.replace(/^#\/?/, "").replace(/\/+$/, "");

  if (!cleaned || cleaned === "home") {
    return { view: "home" };
  }

  const parts = cleaned.split("/");

  // Rotta argomento: #/<topicId>
  if (parts.length === 1) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    if (topic) {
      return { view: "topic", topic };
    }
    return { view: "404" };
  }

  // Rotta livello: #/<topicId>/<level>
  if (parts.length === 2) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    const levelNumber = parseInt(parts[1], 10);
    const level = topic ? topic.levels.find((l) => l.level === levelNumber) : null;

    if (topic && level) {
      return { view: "level", topic, level };
    }
    return { view: "404" };
  }

  return { view: "404" };
}

function handleRoute() {
  const route = parseHash();

  updateSidebarActiveState(route);

  switch (route.view) {
    case "home":
      renderHome();
      break;
    case "topic":
      renderTopic(route.topic);
      break;
    case "level":
      renderLevel(route.topic, route.level);
      break;
    default:
      renderNotFound();
      break;
  }

  // Scroll in cima alla pagina e focus per accessibilità
  window.scrollTo(0, 0);
  DOM.mainContent.focus();
}

function updateSidebarActiveState(route) {
  // Rimuovi stati attivi precedenti
  DOM.sidebar.querySelectorAll(".active").forEach((el) => {
    el.classList.remove("active");
    el.removeAttribute("aria-current");
  });

  if (route.view === "home") {
    if (DOM.homeLink) {
      DOM.homeLink.classList.add("active");
      DOM.homeLink.setAttribute("aria-current", "page");
    }
    ensureAccordionOpen(null);
  } else if (route.view === "topic") {
    ensureAccordionOpen(route.topic.id);
    const link = DOM.sidebar.querySelector(`[data-topic-overview="${route.topic.id}"]`);
    if (link) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  } else if (route.view === "level") {
    ensureAccordionOpen(route.topic.id);
    const link = DOM.sidebar.querySelector(`[data-route="${route.topic.id}/${route.level.level}"]`);
    if (link) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  } else {
    ensureAccordionOpen(null);
  }
}

function announceForScreenReader(message) {
  if (DOM.statusLive) {
    DOM.statusLive.textContent = message;
  }
}

/* ==========================================================================
   RENDER DELLE VISTE
   ========================================================================== */

/**
 * Vista Home: panoramica con card di tutte le sezioni
 */
function renderHome() {
  document.title = "Home | Matematica: esercizi per livelli";
  announceForScreenReader("Pagina Home caricata.");

  const topicsCardsHtml = TOPICS.map((topic) => `
    <a href="#/${topic.id}" class="card topic-card">
      <div class="card-header-line">
        <span class="card-topic-num">Argomento ${topic.number}</span>
        <span class="card-badge-count">5 livelli</span>
      </div>
      <h2 class="card-title">${topic.title}</h2>
      <p class="card-description">${topic.description}</p>
      <div class="card-footer-info">
        <span>Esplora i 5 livelli</span>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  `).join("");

  DOM.viewContainer.innerHTML = `
    <header class="view-header">
      <h1 class="view-title">Esercizi di matematica per livelli</h1>
      <p class="view-subtitle">
        Percorso progressivo pensato per studenti di scuola primaria e secondaria di primo grado.
        Scegli uno dei 7 argomenti qui sotto per iniziare ad allenarti!
      </p>
    </header>

    <section aria-label="Sezioni disponibili" class="cards-grid">
      ${topicsCardsHtml}
    </section>
  `;
}

/**
 * Vista Sezione (Topic): descrizione e card dei 5 livelli
 */
function renderTopic(topic) {
  document.title = `${topic.title} | Matematica: esercizi per livelli`;
  announceForScreenReader(`Sezione ${topic.number}: ${topic.title} caricata.`);

  const levelsCardsHtml = topic.levels.map((lvl) => `
    <a href="#/${topic.id}/${lvl.level}" class="card level-card">
      <div class="card-header-line">
        <span class="card-topic-num">Livello ${lvl.level}</span>
      </div>
      <h2 class="card-title">${lvl.title}</h2>
      <p class="card-description">${lvl.blueprint}</p>
      <div class="card-footer-info">
        <span>Vai agli esercizi</span>
        <span aria-hidden="true">→</span>
      </div>
    </a>
  `).join("");

  DOM.viewContainer.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="#/">Home</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">${topic.title}</li>
      </ol>
    </nav>

    <header class="view-header">
      <span class="badge-tag">Sezione ${topic.number}</span>
      <h1 class="view-title">${topic.title}</h1>
      <p class="view-subtitle">${topic.description}</p>
    </header>

    <section aria-label="Livelli della sezione" class="cards-grid">
      ${levelsCardsHtml}
    </section>
  `;
}

/**
 * Vista Livello: breadcrumb, titolo, blueprint, box "Esercizi in arrivo" e navigazione
 */
function renderLevel(topic, level) {
  document.title = `L${level.level} ${level.title} - ${topic.title} | Matematica`;
  announceForScreenReader(`Livello ${level.level}: ${level.title} caricato.`);

  const prevLevel = level.level > 1 ? level.level - 1 : null;
  const nextLevel = level.level < 5 ? level.level + 1 : null;

  DOM.viewContainer.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="#/">Home</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li><a href="#/${topic.id}">${topic.title}</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">Livello ${level.level}</li>
      </ol>
    </nav>

    <header class="view-header">
      <span class="badge-tag">Argomento ${topic.number} · Livello ${level.level} di 5</span>
      <h1 class="view-title">${level.title}</h1>
    </header>

    <section class="blueprint-card" aria-label="Struttura del livello">
      <div class="blueprint-label">Struttura tipo degli esercizi (Blueprint)</div>
      <p class="blueprint-text">"${level.blueprint}"</p>
    </section>

    <section class="exercise-placeholder-card" aria-label="Stato esercizi">
      <div class="placeholder-icon" aria-hidden="true">⏳</div>
      <h2 class="placeholder-title">Esercizi in arrivo</h2>
      <p class="placeholder-message">
        La struttura e la navigazione del livello sono pronte! I 10 esercizi interattivi a risposta singola
        verranno inseriti nei prossimi step dello sviluppo.
      </p>
    </section>

    <nav class="level-nav-bar" aria-label="Navigazione tra livelli">
      ${prevLevel
        ? `<a href="#/${topic.id}/${prevLevel}" class="btn-secondary">← Livello ${prevLevel}</a>`
        : `<span></span>`
      }
      <a href="#/${topic.id}" class="btn-secondary">Torna all'argomento</a>
      ${nextLevel
        ? `<a href="#/${topic.id}/${nextLevel}" class="btn-secondary">Livello ${nextLevel} →</a>`
        : `<span></span>`
      }
    </nav>
  `;
}

/**
 * Vista 404: percorso non riconosciuto
 */
function renderNotFound() {
  document.title = "Pagina non trovata | Matematica: esercizi per livelli";
  announceForScreenReader("Pagina non trovata.");

  DOM.viewContainer.innerHTML = `
    <section class="not-found-view" aria-label="Errore 404">
      <div class="not-found-code">404</div>
      <h1 class="view-title">Pagina non trovata</h1>
      <p class="view-subtitle" style="margin-bottom: 1.5rem;">
        L'indirizzo inserito non corrisponde a nessun argomento o livello valido.
      </p>
      <a href="#/" class="btn-secondary" style="display: inline-block;">Torna alla Home</a>
    </section>
  `;
}
