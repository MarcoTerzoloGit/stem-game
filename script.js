/**
 * MATH ARENA - Esercizi di matematica per livelli
 * Applicazione web statica per scuola primaria e secondaria di primo grado.
 * Tema GAME: blu elettrico e neri, progressione per stage, feedback interattivo.
 */

/* ==========================================================================
   MODELLO DATI (TOPICS)
   ========================================================================== */
const TOPICS = [
  {
    id: "numeri",
    number: 1,
    icon: "🔢",
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
    icon: "🍕",
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
    icon: "📐",
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
    icon: "📏",
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
    icon: "🧮",
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
    icon: "📈",
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
    icon: "🎲",
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

/* Gradi di progressione dei 5 livelli / stage */
const STAGE_RANKS = ["Novizio", "Apprendista", "Esperto", "Maestro", "Leggenda"];
const TOTAL_APP_EXERCISES = 350; // 7 argomenti * 5 livelli * 10 esercizi
const STORAGE_KEY = "math_arena_progress";

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
  homeLink: null,
  hudRankName: null,
  hudSolvedCount: null,
  hudTotalCount: null,
  hudProgressFill: null,
  hudProgressBar: null
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
  updateHudProgress();
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
  DOM.hudRankName = document.getElementById("hud-rank-name");
  DOM.hudSolvedCount = document.getElementById("hud-solved-count");
  DOM.hudTotalCount = document.getElementById("hud-total-count");
  DOM.hudProgressFill = document.getElementById("hud-progress-fill");
  DOM.hudProgressBar = document.querySelector(".hud-progress-bar");
}

/* ==========================================================================
   GESTIONE PROGRESSI E RANGO HUD
   ========================================================================== */
function getSolvedExercises() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
      if (typeof parsed === "object" && parsed !== null) return Object.keys(parsed);
    }
  } catch (e) {
    // localStorage disabilitato o non accessibile
  }
  return [];
}

function isExerciseSolved(exerciseId) {
  const solved = getSolvedExercises();
  return solved.includes(exerciseId);
}

function markExerciseSolved(exerciseId) {
  const solved = getSolvedExercises();
  if (!solved.includes(exerciseId)) {
    solved.push(exerciseId);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(solved));
    } catch (e) {
      // Ignora errori di salvataggio in storage locale
    }
  }
  updateHudProgress();
}

/**
 * Calcola il rango HUD in base agli esercizi risolti:
 * Novizio (0-9), Apprendista (10-49), Esperto (50-119), Maestro (120-249), Leggenda (250+)
 */
function getRankInfo(solvedCount) {
  if (solvedCount >= 250) return { rank: "Leggenda" };
  if (solvedCount >= 120) return { rank: "Maestro" };
  if (solvedCount >= 50) return { rank: "Esperto" };
  if (solvedCount >= 10) return { rank: "Apprendista" };
  return { rank: "Novizio" };
}

function updateHudProgress() {
  if (!DOM.hudRankName) return;
  const solved = getSolvedExercises().length;
  const { rank } = getRankInfo(solved);

  DOM.hudRankName.textContent = rank;
  if (DOM.hudSolvedCount) DOM.hudSolvedCount.textContent = solved;
  if (DOM.hudTotalCount) DOM.hudTotalCount.textContent = TOTAL_APP_EXERCISES;

  const pct = Math.min(100, Math.round((solved / TOTAL_APP_EXERCISES) * 100));
  if (DOM.hudProgressFill) DOM.hudProgressFill.style.width = `${pct}%`;
  if (DOM.hudProgressBar) DOM.hudProgressBar.setAttribute("aria-valuenow", solved);
}

/* ==========================================================================
   FEEDBACK DI GIOCO: SCINTILLE (12-16 span generati dinamicamente)
   ========================================================================== */
function triggerSparks(targetElement) {
  // Rispetta la preferenza prefers-reduced-motion
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const rect = targetElement
    ? targetElement.getBoundingClientRect()
    : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  const container = document.createElement("div");
  container.className = "sparks-container";
  container.setAttribute("aria-hidden", "true");
  document.body.appendChild(container);

  const count = 14; // Tra 12 e 16 elementi span
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("span");
    spark.className = "spark-particle";
    const angle = (i / count) * 360 + (Math.random() * 24 - 12);
    const distance = 45 + Math.random() * 55;
    const rad = (angle * Math.PI) / 180;
    const dx = Math.cos(rad) * distance;
    const dy = Math.sin(rad) * distance;
    const size = 4 + Math.random() * 4;

    spark.style.setProperty("--dx", `${dx}px`);
    spark.style.setProperty("--dy", `${dy}px`);
    spark.style.width = `${size}px`;
    spark.style.height = `${size}px`;
    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;

    container.appendChild(spark);
  }

  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 900);
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
          <span class="topic-icon" aria-hidden="true">${topic.icon}</span>
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
                <span>📖 Mappa argomento</span>
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

function toggleAccordionTopic(topicId) {
  if (openAccordionTopicId === topicId) {
    setAccordionState(topicId, false);
    openAccordionTopicId = null;
  } else {
    if (openAccordionTopicId) {
      setAccordionState(openAccordionTopicId, false);
    }
    setAccordionState(topicId, true);
    openAccordionTopicId = topicId;
  }
}

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
      return { view: "level", topic, level, exerciseIndex: 1 };
    }
    return { view: "404" };
  }

  // Rotta esercizio: #/<topicId>/<level>/<exerciseIndex>
  if (parts.length === 3) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    const levelNumber = parseInt(parts[1], 10);
    const exerciseIndex = parseInt(parts[2], 10);
    const level = topic ? topic.levels.find((l) => l.level === levelNumber) : null;

    if (topic && level && !isNaN(exerciseIndex) && exerciseIndex >= 1 && exerciseIndex <= 10) {
      return { view: "level", topic, level, exerciseIndex };
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
      renderLevel(route.topic, route.level, route.exerciseIndex || 1);
      break;
    default:
      renderNotFound();
      break;
  }

  window.scrollTo(0, 0);
  DOM.mainContent.focus();
}

function updateSidebarActiveState(route) {
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
 * Vista Home: panoramica con card arcade di tutti i 7 argomenti
 */
function renderHome() {
  document.title = "Home | MATH ARENA";
  announceForScreenReader("Pagina Home di MATH ARENA caricata.");

  const topicsCardsHtml = TOPICS.map((topic) => `
    <a href="#/${topic.id}" class="card topic-card">
      <div class="card-header-line">
        <span class="card-topic-badge"><span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number}</span>
        <span class="card-badge-count">5 STAGE</span>
      </div>
      <h2 class="card-title">${topic.title}</h2>
      <p class="card-description">${topic.description}</p>
      <div class="card-footer-info">
        <span>Esplora i 5 stage</span>
        <span class="card-arrow" aria-hidden="true">→</span>
      </div>
    </a>
  `).join("");

  DOM.viewContainer.innerHTML = `
    <header class="view-header">
      <h1 class="view-title">MATH ARENA: SFIDE PER LIVELLI</h1>
      <p class="view-subtitle">
        Percorso arcade progressivo pensato per studenti di scuola primaria e secondaria di primo grado.
        Seleziona uno dei 7 argomenti per iniziare ad allenarti e scalare i ranghi!
      </p>
    </header>

    <section aria-label="Sezioni disponibili" class="cards-grid">
      ${topicsCardsHtml}
    </section>
  `;
}

/**
 * Vista Sezione (Topic): i 5 livelli disposti come percorso stage di gioco
 */
function renderTopic(topic) {
  document.title = `${topic.title} | MATH ARENA`;
  announceForScreenReader(`Sezione ${topic.number}: ${topic.title} caricata.`);

  const levelsCardsHtml = topic.levels.map((lvl) => {
    const rankLabel = STAGE_RANKS[lvl.level - 1] || "Novizio";
    const segments = [1, 2, 3, 4, 5].map((s) => `
      <span class="meter-segment ${s <= lvl.level ? "is-active" : ""}"></span>
    `).join("");

    return `
      <a href="#/${topic.id}/${lvl.level}" class="card stage-card" data-stage="${lvl.level}">
        <div class="stage-node-indicator" aria-hidden="true">
          <span class="stage-node-num">${lvl.level}</span>
        </div>
        <div class="card-header-line">
          <span class="stage-rank-tag">${rankLabel}</span>
          <div class="stage-difficulty" aria-label="Difficoltà ${lvl.level} su 5">
            <span class="sr-only">Difficoltà ${lvl.level} su 5</span>
            <div class="difficulty-meter" aria-hidden="true">
              ${segments}
            </div>
          </div>
        </div>
        <h2 class="card-title">Stage ${lvl.level}: ${lvl.title}</h2>
        <p class="card-description">${lvl.blueprint}</p>
        <div class="card-footer-info">
          <span>Entra nello stage</span>
          <span class="card-arrow" aria-hidden="true">→</span>
        </div>
      </a>
    `;
  }).join("");

  DOM.viewContainer.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="#/">Home</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">${topic.title}</li>
      </ol>
    </nav>

    <header class="view-header">
      <span class="badge-tag"><span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number}</span>
      <h1 class="view-title">${topic.title}</h1>
      <p class="view-subtitle">${topic.description}</p>
    </header>

    <div class="stages-path-container">
      <section aria-label="Percorso dei 5 stage" class="stages-path">
        ${levelsCardsHtml}
      </section>
    </div>
  `;
}

/**
 * Ottiene i dati dell'esercizio attivo. Se presente nell'array TOPICS lo utilizza,
 * altrimenti genera un esercizio coerente con il blueprint dello stage per consentire
 * il collaudo immediato di stili, tabelle, SVG, feedback e scintille.
 */
function getExerciseData(topic, level, exerciseIndex) {
  if (level.exercises && level.exercises.length >= exerciseIndex && level.exercises[exerciseIndex - 1]) {
    return level.exercises[exerciseIndex - 1];
  }

  const id = `${topic.id}-${level.level}-${String(exerciseIndex).padStart(2, "0")}`;

  // Dimostrativo ricco per frazioni (Stage 1): figura SVG e tabella comparativa
  if (topic.id === "frazioni" && level.level === 1) {
    return {
      id,
      text: "Osserva la figura e la tabella: quale frazione rappresenta la parte evidenziata rispetto all'intero? Inserisci la frazione ridotta ai minimi termini (formato numeratore/denominatore, es. 3/8).",
      answer: "3/8",
      accepted: ["3/8"],
      tolerance: 0,
      exact: true,
      explanation: "L'intero è diviso in 8 parti uguali e 3 sono evidenziate in blu. La frazione corrispondente è 3/8.",
      table: {
        headers: ["Componente", "Valore", "Significato"],
        rows: [
          ["Numeratore", "3", "Parti evidenziate in blu"],
          ["Denominatore", "8", "Numero totale di parti uguali"],
          ["Rapporto", "3/8", "Frazione propria (< 1)"]
        ]
      },
      svg: `<svg viewBox="0 0 320 60" width="320" height="60" role="img" aria-label="Barra rettangolare divisa in 8 segmenti uguali con 3 segmenti colorati in blu">
        <rect x="2" y="10" width="316" height="40" fill="var(--black-2)" stroke="var(--black-4)" stroke-width="2" rx="6" />
        <rect x="2" y="10" width="39.5" height="40" fill="var(--blue-500)" stroke="var(--black-4)" stroke-width="1" />
        <rect x="41.5" y="10" width="39.5" height="40" fill="var(--blue-500)" stroke="var(--black-4)" stroke-width="1" />
        <rect x="81" y="10" width="39.5" height="40" fill="var(--blue-500)" stroke="var(--black-4)" stroke-width="1" />
        <line x1="120.5" y1="10" x2="120.5" y2="50" stroke="var(--black-4)" stroke-width="1" />
        <line x1="160" y1="10" x2="160" y2="50" stroke="var(--black-4)" stroke-width="1" />
        <line x1="199.5" y1="10" x2="199.5" y2="50" stroke="var(--black-4)" stroke-width="1" />
        <line x1="239" y1="10" x2="239" y2="50" stroke="var(--black-4)" stroke-width="1" />
        <line x1="278.5" y1="10" x2="278.5" y2="50" stroke="var(--black-4)" stroke-width="1" />
      </svg>`
    };
  }

  // Fallback didattico coerente per ogni altro stage
  const sampleAnswer = String(exerciseIndex * 3 + level.level);
  return {
    id,
    text: `[Esercizio ${exerciseIndex}] ${level.blueprint} Risolvi il problema e inserisci il risultato nel campo di testo.`,
    answer: sampleAnswer,
    accepted: [sampleAnswer],
    tolerance: 0,
    exact: false,
    explanation: `Passo 1: individua i dati. Passo 2: applica il calcolo corretto. Il risultato esatto è ${sampleAnswer}.`,
    table: null,
    svg: null
  };
}

/**
 * Vista Livello / Stage: blueprint, griglia dei 10 esercizi e arena dell'esercizio attivo
 */
function renderLevel(topic, level, exerciseIndex = 1) {
  const currentEx = Math.max(1, Math.min(10, exerciseIndex));
  const rankLabel = STAGE_RANKS[level.level - 1] || "Novizio";
  const exercise = getExerciseData(topic, level, currentEx);

  document.title = `Stage ${level.level} - Ex ${currentEx} | ${topic.title} | MATH ARENA`;
  announceForScreenReader(`Stage ${level.level}: ${level.title}, esercizio ${currentEx} di 10 caricato.`);

  // Genera griglia dei 10 esercizi dello stage
  const exerciseCardsHtml = Array.from({ length: 10 }, (_, i) => {
    const exNum = i + 1;
    const exId = `${topic.id}-${level.level}-${String(exNum).padStart(2, "0")}`;
    const solved = isExerciseSolved(exId);
    const active = exNum === currentEx;

    return `
      <a
        href="#/${topic.id}/${level.level}/${exNum}"
        class="exercise-card ${active ? "is-active" : ""} ${solved ? "is-solved" : ""}"
        data-exercise-id="${exId}"
        aria-label="Esercizio ${exNum} di 10 ${solved ? "(risolto)" : ""}"
      >
        <span class="exercise-card-num">${String(exNum).padStart(2, "0")}</span>
        <span class="exercise-status-icon" aria-hidden="true">${solved ? "✔" : "○"}</span>
      </a>
    `;
  }).join("");

  // Tabella dell'esercizio (se presente)
  let tableHtml = "";
  if (exercise.table && exercise.table.headers && exercise.table.rows) {
    const ths = exercise.table.headers.map((h) => `<th>${h}</th>`).join("");
    const trs = exercise.table.rows.map((row) => `
      <tr>
        ${row.map((cell) => `<td>${cell}</td>`).join("")}
      </tr>
    `).join("");

    tableHtml = `
      <div class="exercise-table-container">
        <table class="exercise-table" aria-label="Tabella dati dell'esercizio">
          <thead>
            <tr>${ths}</tr>
          </thead>
          <tbody>
            ${trs}
          </tbody>
        </table>
      </div>
    `;
  }

  // Figura SVG dell'esercizio (se presente)
  let svgHtml = "";
  if (exercise.svg) {
    svgHtml = `
      <div class="exercise-svg-box" aria-hidden="false">
        ${exercise.svg}
      </div>
    `;
  }

  const prevEx = currentEx > 1 ? currentEx - 1 : null;
  const nextEx = currentEx < 10 ? currentEx + 1 : null;

  DOM.viewContainer.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="#/">Home</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li><a href="#/${topic.id}">${topic.title}</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li><a href="#/${topic.id}/${level.level}">Stage ${level.level}</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">Esercizio ${currentEx}</li>
      </ol>
    </nav>

    <header class="view-header">
      <span class="badge-tag">
        <span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number} · Stage ${level.level} di 5 (${rankLabel})
      </span>
      <h1 class="view-title">${level.title}</h1>
    </header>

    <section class="blueprint-card" aria-label="Struttura dello stage">
      <div class="blueprint-label">Blueprint di gioco (Struttura tipo)</div>
      <p class="blueprint-text">"${level.blueprint}"</p>
    </section>

    <section class="exercise-section" aria-label="Elenco esercizi dello stage">
      <div class="section-label">
        <span>Elenco sfide dello stage (10 esercizi)</span>
        <span class="tabular-nums">Ex ${currentEx}/10</span>
      </div>
      <div class="exercise-grid">
        ${exerciseCardsHtml}
      </div>
    </section>

    <!-- Card Arena dell'Esercizio Attivo -->
    <section class="exercise-arena-card" aria-label="Esercizio attivo">
      <div class="exercise-arena-header">
        <div class="exercise-stage-info">
          <span class="stage-rank-tag">${rankLabel}</span>
          <span class="card-badge-count tabular-nums">Sfida ${String(currentEx).padStart(2, "0")} / 10</span>
        </div>
        <div class="stage-difficulty" aria-label="Difficoltà ${level.level} su 5">
          <span class="sr-only">Difficoltà ${level.level} su 5</span>
          <div class="difficulty-meter" aria-hidden="true">
            ${[1, 2, 3, 4, 5].map((s) => `<span class="meter-segment ${s <= level.level ? "is-active" : ""}"></span>`).join("")}
          </div>
        </div>
      </div>

      <p class="exercise-prompt-text" id="exercise-text">${exercise.text}</p>

      ${svgHtml}
      ${tableHtml}

      <form class="exercise-form" id="exercise-form" onsubmit="return false;">
        <label for="answer-input" class="answer-label">La tua risposta:</label>
        <div class="answer-input-group">
          <input
            type="text"
            id="answer-input"
            class="answer-input"
            placeholder="Scrivi qui..."
            autocomplete="off"
            aria-describedby="exercise-text feedback-live"
          />
          <button type="submit" id="btn-check" class="btn-arcade btn-primary">
            <span>Controlla</span>
            <span aria-hidden="true">✔</span>
          </button>
          <button type="button" id="btn-solution" class="btn-arcade btn-secondary">
            <span>Mostra soluzione</span>
          </button>
        </div>

        <div id="feedback-live" class="feedback-box" role="status" aria-live="polite"></div>

        <div id="solution-box" class="solution-box" aria-live="polite">
          <div class="solution-header">💡 Spiegazione passo-passo:</div>
          <p id="solution-text">${exercise.explanation}</p>
        </div>
      </form>
    </section>

    <!-- Barra navigazione esercizi e stage (fissa in basso su mobile) -->
    <nav class="exercise-nav-bar" aria-label="Navigazione tra sfide">
      ${prevEx
        ? `<a href="#/${topic.id}/${level.level}/${prevEx}" class="btn-arcade btn-secondary">← Sfida precedente</a>`
        : `<a href="#/${topic.id}" class="btn-arcade btn-secondary">← Mappa stage</a>`
      }
      <a href="#/${topic.id}/${level.level}" class="btn-arcade btn-secondary">Reset stage</a>
      ${nextEx
        ? `<a href="#/${topic.id}/${level.level}/${nextEx}" class="btn-arcade btn-primary">Sfida successiva →</a>`
        : (level.level < 5
            ? `<a href="#/${topic.id}/${level.level + 1}" class="btn-arcade btn-primary">Stage successivo →</a>`
            : `<a href="#/${topic.id}" class="btn-arcade btn-secondary">Fine argomento 🎉</a>`
          )
      }
    </nav>
  `;

  attachExerciseHandlers(exercise);
}

/**
 * Gestione eventi di verifica risposta, scintille, shake e visualizzazione soluzione
 */
function attachExerciseHandlers(exercise) {
  const form = document.getElementById("exercise-form");
  const input = document.getElementById("answer-input");
  const checkBtn = document.getElementById("btn-check");
  const solutionBtn = document.getElementById("btn-solution");
  const feedbackBox = document.getElementById("feedback-live");
  const solutionBox = document.getElementById("solution-box");

  if (!input || !checkBtn) return;

  function doCheck() {
    const rawVal = (input.value || "").trim();
    if (!rawVal) {
      input.focus();
      return;
    }

    const expected = String(exercise.answer).trim().toLowerCase();
    const acceptedList = (exercise.accepted || []).map((a) => String(a).trim().toLowerCase());
    const userVal = rawVal.toLowerCase();

    const normalize = (s) => s.replace(",", ".");
    const isCorrect = (
      userVal === expected ||
      normalize(userVal) === normalize(expected) ||
      acceptedList.includes(userVal) ||
      acceptedList.map(normalize).includes(normalize(userVal))
    );

    // Reset classi precedenti
    input.classList.remove("is-correct", "is-wrong");
    feedbackBox.classList.remove("is-correct", "is-wrong");

    if (isCorrect) {
      input.classList.add("is-correct");
      feedbackBox.classList.add("is-visible", "is-correct");
      feedbackBox.innerHTML = `
        <span class="feedback-icon" aria-hidden="true">✔</span>
        <strong>Corretto!</strong> ${exercise.explanation || "Ottimo lavoro, risposta esatta!"}
      `;
      announceForScreenReader(`Corretto! ${exercise.explanation || "Risposta esatta."}`);
      triggerSparks(input);
      markExerciseSolved(exercise.id);

      // Aggiorna visivamente la card dell'elenco dei 10 esercizi
      const cardEl = document.querySelector(`[data-exercise-id="${exercise.id}"]`);
      if (cardEl) {
        cardEl.classList.add("is-solved");
        const statusIcon = cardEl.querySelector(".exercise-status-icon");
        if (statusIcon) statusIcon.textContent = "✔";
      }
    } else {
      // Trigger animazione di shake orizzontale
      void input.offsetWidth;
      input.classList.add("is-wrong");
      feedbackBox.classList.add("is-visible", "is-wrong");
      feedbackBox.innerHTML = `
        <span class="feedback-icon" aria-hidden="true">✖</span>
        <strong>Non ancora, riprova</strong> Controlla i tuoi calcoli e reinserisci il valore.
      `;
      announceForScreenReader("Non ancora, riprova. Risposta errata.");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    doCheck();
  });

  checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    doCheck();
  });

  if (solutionBtn && solutionBox) {
    solutionBtn.addEventListener("click", () => {
      const isShown = solutionBox.classList.contains("is-visible");
      if (isShown) {
        solutionBox.classList.remove("is-visible");
        solutionBtn.innerHTML = `<span>Mostra soluzione</span>`;
      } else {
        solutionBox.classList.add("is-visible");
        solutionBtn.innerHTML = `<span>Nascondi soluzione</span>`;
      }
    });
  }
}

/**
 * Vista 404: percorso non riconosciuto
 */
function renderNotFound() {
  document.title = "Pagina non trovata | MATH ARENA";
  announceForScreenReader("Pagina non trovata.");

  DOM.viewContainer.innerHTML = `
    <section class="not-found-view" aria-label="Errore 404">
      <div class="not-found-code">404</div>
      <h1 class="view-title">Zona non esplorata</h1>
      <p class="view-subtitle" style="margin-bottom: 1.5rem;">
        Le coordinate inserite non corrispondono ad alcun argomento o stage valido nell'arena.
      </p>
      <a href="#/" class="btn-arcade btn-primary">Torna alla Home Arena</a>
    </section>
  `;
}
