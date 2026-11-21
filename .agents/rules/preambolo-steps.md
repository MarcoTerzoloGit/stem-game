Stiamo costruendo, passo dopo passo, un'applicazione web statica di esercizi di matematica per ragazzi di scuola primaria e secondaria di primo grado. Tutta l'interfaccia e i contenuti sono in italiano.

VINCOLI TECNICI (valgono per tutti gli step)
- Solo tre file nella root del progetto: index.html, style.css, script.js.
- HTML, CSS e JavaScript "vanilla": nessun framework, nessuna libreria, nessun build step, nessun CDN, nessun backend.
- Tutti i percorsi sono relativi (es. href="style.css"), perché il sito sarà ospitato da GitHub Pages in una sottocartella (https://utente.github.io/nome-repo/).
- Navigazione basata sull'hash dell'URL (es. #/frazioni/2/5), così funziona su hosting statico senza configurazione e i link sono condivisibili.
- Mobile first, responsive, accessibile (elementi semantici, focus visibile, contrasto sufficiente, aria-live per i feedback).
- Codice commentato in modo essenziale, funzioni piccole, nessuna duplicazione inutile.

MODELLO DATI (in script.js)
const TOPICS = [
  {
    id: "frazioni",            // id breve, senza spazi
    number: 2,                 // numero dell'argomento nel menu
    title: "Frazioni, decimali e percentuali",
    levels: [
      {
        level: 1,
        title: "Riconoscere una frazione",
        blueprint: "descrizione breve della struttura tipo dell'esercizio",
        exercises: [
          {
            id: "frazioni-1-01",   // argomento-livello-progressivo a 2 cifre
            text: "testo dell'esercizio",
            answer: "3/8",         // stringa o numero
            accepted: [],          // risposte alternative accettate (opzionale)
            tolerance: 0,          // tolleranza numerica (opzionale)
            exact: false,          // true = confronto testuale, non numerico (opzionale)
            explanation: "spiegazione passo-passo della soluzione",
            table: null,           // opzionale: { headers: [...], rows: [[...], ...] }
            svg: null              // opzionale: stringa SVG semplice
          }
        ]
      }
    ]
  }
];

ID DEGLI ARGOMENTI
1 = numeri, 2 = frazioni, 3 = geometria, 4 = misure, 5 = algebra, 6 = piano, 7 = statistica.

REGOLE PER LA CREAZIONE DEGLI ESERCIZI (valgono per tutti gli step sui contenuti)
- Ogni livello contiene esattamente 10 esercizi, con difficoltà crescente all'interno del livello.
- Verifica con cura ogni risultato prima di scriverlo: una risposta sbagliata è un errore grave.
- Ogni esercizio ha una sola risposta corretta, non ambigua, inseribile in un campo di testo. Quando serve, il testo indica l'unità di misura o il formato richiesto (es. "risposta in cm", "risposta come frazione ridotta ai minimi termini", "usa π = 3,14").
- La spiegazione mostra i passaggi in modo chiaro, con il tono di un insegnante gentile, in 1-4 frasi.
- Contesti vari e concreti (scuola, sport, cucina, soldi, viaggi), testi brevi, numeri adatti all'età.
- Nessun esercizio duplicato o quasi identico a un altro dello stesso livello.
- Non modificare codice, stile o dati che non c'entrano con lo step in corso.
- Se non puoi modificare i file direttamente, restituisci solo il blocco da incollare e indica esattamente dove incollarlo.