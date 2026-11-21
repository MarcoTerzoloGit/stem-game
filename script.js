/**
 * MATH ARENA - Esercizi di matematica per livelli
 * Applicazione web statica per scuola primaria e secondaria di primo grado.
 * Step 2: Motore degli esercizi (navigazione, verifica risposte, rendering dinamico).
 */

/* ==========================================================================
   1. SEZIONE DATI (MODELLO DATI, COSTANTI E DATI DI PROVA)
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
        blueprint: "Una sola operazione, due numeri, eventualmente con riporto.",
        exercises: [
          {
            id: "numeri-1-01",
            text: "In una scuola ci sono due scatole di matite colorate per le attività di disegno: la prima contiene 48 matite e la seconda ne contiene 37. Quante matite colorate ci sono in totale?\nInserisci solo il valore numerico del risultato.",
            answer: "85",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo l'addizione in colonna 48 + 37. Sommiamo prima le unità: 8 + 7 = 15, quindi scriviamo 5 e riportiamo 1 decina. Ora sommiamo le decine con il riporto: 4 + 3 + 1 = 8. Il risultato finale è 85 matite.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-02",
            text: "Per prepararsi a una gara di corsa campestre, Matteo ha programmato una sessione di allenamento di 74 minuti. Finora ha corso per 38 minuti. Quanti minuti gli mancano per completare l'allenamento?\nInserisci solo il valore numerico del risultato.",
            answer: "36",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Mettiamo in colonna la sottrazione 74 - 38 partendo dalle unità. Poiché a 4 non possiamo togliere 8, chiediamo in prestito 1 decina (le 7 decine diventano 6 e le unità diventano 14): 14 - 8 = 6. Sottraiamo poi le decine rimaste: 6 - 3 = 3. Mancano quindi 36 minuti.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-03",
            text: "Durante le vacanze, la famiglia di Sara compie un viaggio in treno diviso in due tratte: la prima tratta è lunga 368 km e la seconda 275 km. Quanti chilometri percorrono in tutto?\nRisposta in km (inserisci solo il valore numerico).",
            answer: "643",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Incolonniamo 368 + 275 e calcoliamo da destra a sinistra. Per le unità facciamo 8 + 5 = 13: scriviamo 3 e riportiamo 1 alle decine. Per le decine sommiamo 6 + 7 + 1 = 14: scriviamo 4 e riportiamo 1 alle centinaia. Infine per le centinaia abbiamo 3 + 2 + 1 = 6, per un totale di 643 km.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-04",
            text: "Nel suo salvadanaio Marco ha messo da parte 452 euro. Per acquistare una mountain bike spende 278 euro. Quanti euro gli rimangono nel salvadanaio?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "174",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo la sottrazione in colonna 452 - 278. Alle unità 2 non basta per togliere 8, quindi prendiamo in prestito 1 decina (le decine diventano 4) e calcoliamo 12 - 8 = 4. Alle decine 4 non basta per togliere 7, quindi chiediamo 1 centinaio (le centinaia diventano 3) e calcoliamo 14 - 7 = 7. Infine alle centinaia calcoliamo 3 - 2 = 1: a Marco rimangono 174 euro.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-05",
            text: "Al teatro comunale si svolgono due spettacoli musicali per beneficenza: alla prima recita assistono 1485 spettatori e alla seconda 1768 spettatori. Quanti spettatori hanno assistito complessivamente ai due spettacoli?\nInserisci solo il valore numerico del risultato.",
            answer: "3253",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Sommiamo in colonna 1485 + 1768 partendo dalle unità: 5 + 8 = 13, scriviamo 3 e riportiamo 1. Alle decine: 8 + 6 + 1 = 15, scriviamo 5 e riportiamo 1. Alle centinaia: 4 + 7 + 1 = 12, scriviamo 2 e riportiamo 1. Alle migliaia: 1 + 1 + 1 = 3, ottenendo in totale 3253 spettatori.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-06",
            text: "Un pasticciere ha aperto una confezione da 904 grammi di zucchero a velo. Ne preleva 368 grammi per guarnire dei croissant. Quanti grammi di zucchero a velo restano nella confezione?\nRisposta in g (inserisci solo il valore numerico).",
            answer: "536",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo in colonna 904 - 368 affrontando il prestito con lo zero. Alle unità non possiamo togliere 8 da 4 e le decine sono 0: prendiamo 1 prestito dalle 9 centinaia (che diventano 8 centinaia e 10 decine), e poi 1 decina per le unità (rimangono 9 decine e abbiamo 14 unità). Calcoliamo ora le singole colonne: 14 - 8 = 6 alle unità, 9 - 6 = 3 alle decine e 8 - 3 = 5 alle centinaia. Restano quindi 536 grammi di zucchero.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-07",
            text: "Per la festa di fine anno della scuola vengono acquistate 6 scatole di biscotti artigianali. Ciascuna scatola contiene 235 biscotti. Quanti biscotti sono stati acquistati in tutto?\nInserisci solo il valore numerico del risultato.",
            answer: "1410",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Moltiplichiamo in colonna 235 per 6 cifra per cifra. Moltiplichiamo le unità: 6 × 5 = 30, scriviamo 0 e riportiamo 3 decine. Moltiplichiamo le decine: 6 × 3 = 18, aggiungiamo il riporto 3 ottenendo 21, scriviamo 1 e riportiamo 2 centinaia. Infine alle centinaia facciamo 6 × 2 = 12, più 2 di riporto fa 14: il totale è 1410 biscotti.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-08",
            text: "In una tribuna di un palazzetto dello sport ci sono 34 file di poltroncine, e ciascuna fila conta 26 posti a sedere. Quanti posti a sedere ci sono complessivamente nella tribuna?\nInserisci solo il valore numerico del risultato.",
            answer: "884",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Calcoliamo in colonna 34 × 26 usando i due prodotti parziali. Prima moltiplichiamo 34 per le 6 unità: 6 × 4 = 24 (scrivo 4 con riporto di 2) e 6 × 3 + 2 = 20, ottenendo 204. Poi moltiplichiamo 34 per le 2 decine scalando di un posto a sinistra: 2 × 4 = 8 e 2 × 3 = 6, ottenendo 68 decine (cioè 680). Sommiamo infine i due prodotti parziali: 204 + 680 = 884 posti.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-09",
            text: "Un insegnante di arte deve distribuire equamente 432 cartoncini da disegno tra 4 classi della scuola. Quanti cartoncini riceverà ogni classe?\nInserisci solo il valore numerico del risultato.",
            answer: "108",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo la divisione in colonna 432 ÷ 4 cifra per cifra da sinistra. Il 4 nel 4 sta 1 volta con resto 0; abbassiamo il 3: il 4 nel 3 sta 0 volte, quindi scriviamo 0 al quoziente e teniamo resto 3. Abbassiamo il 2 ottenendo 32: il 4 nel 32 sta 8 volte esatte con resto 0. Ogni classe riceve quindi 108 cartoncini.",
            table: null,
            svg: null
          },
          {
            id: "numeri-1-10",
            text: "Per partecipare a un soggiorno studio di una settimana, un gruppo di 24 ragazzi spende complessivamente 840 euro per il noleggio delle biciclette. Se la spesa viene divisa in parti uguali, quanti euro paga ciascun ragazzo?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "35",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo la divisione in colonna 840 ÷ 24 con il divisore a due cifre. Consideriamo l'84: il 24 nell'84 è contenuto 3 volte (infatti 24 × 3 = 72), con un resto di 84 - 72 = 12. Abbassiamo lo 0 formando 120: il 24 nel 120 è contenuto esattamente 5 volte (24 × 5 = 120) con resto 0. Ciascun ragazzo paga quindi 35 euro.",
            table: null,
            svg: null
          }
        ]
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
        blueprint: "Una figura o situazione concreta divisa in parti uguali, da tradurre in frazione.",
        exercises: [
          {
            id: "frazioni-1-01",
            text: "Una pizza margherita è tagliata in 8 fette uguali. Se durante la cena ne mangi 3 fette, quale frazione dell'intera pizza hai mangiato? Scrivi la risposta come frazione nel formato a/b.",
            answer: "3/8",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "L'intera pizza è divisa in 8 parti uguali, che formano il denominatore. Avendo mangiato 3 fette (il numeratore), hai consumato i 3/8 della pizza.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-02",
            text: "Una tavoletta di cioccolato è formata da 10 quadretti uguali. Se regali a un amico 7 quadretti, quale frazione della tavoletta gli hai regalato? Scrivi la risposta come frazione nel formato a/b.",
            answer: "7/10",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il totale dei quadretti della tavoletta è 10 (denominatore) e le parti regalate sono 7 (numeratore). La frazione corrispondente è quindi 7/10.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-03",
            text: "Su un vassoio ci sono 6 bicchieri uguali: 5 contengono spremuta d'arancia e 1 è vuoto. Quale frazione di tutti i bicchieri contiene spremuta? Scrivi la risposta come frazione nel formato a/b.",
            answer: "5/6",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Ci sono 6 bicchieri in tutto (denominatore) e 5 di essi contengono spremuta (numeratore). La frazione richiesta è 5/6.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-04",
            text: "In una classe di prima media ci sono 25 studenti in totale, di cui 13 portano gli occhiali da vista. Quale frazione degli studenti della classe porta gli occhiali? Scrivi la risposta come frazione nel formato a/b.",
            answer: "13/25",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "L'insieme completo della classe è composto da 25 alunni (denominatore). Il gruppo considerato è formato dai 13 studenti con gli occhiali (numeratore), quindi la frazione è 13/25.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-05",
            text: "Una crostata alla marmellata è divisa in 7 fette uguali. A merenda vengono mangiate 4 fette. Quale frazione della crostata è rimasta? Scrivi la risposta come frazione nel formato a/b.",
            answer: "3/7",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "L'intera crostata corrisponde a 7/7. Sottraendo le 4 fette mangiate (4/7), rimangono 3 fette su 7, ovvero la frazione complementare 3/7.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-06",
            text: "Chiara sta leggendo un romanzo e finora ha completato i 5/9 delle pagine totali. Quale frazione del libro le resta ancora da leggere? Scrivi la risposta come frazione nel formato a/b.",
            answer: "4/9",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il libro intero rappresenta l'unità, cioè 9/9. Togliendo la parte già letta (5/9), resta da leggere la frazione complementare: 9/9 - 5/9 = 4/9.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-07",
            text: "Il serbatoio dello scooter di Luca è pieno per i 2/5 della sua capienza totale. Quale frazione del serbatoio è ancora vuota? Scrivi la risposta come frazione nel formato a/b.",
            answer: "3/5",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il serbatoio al massimo della capienza vale 5/5. Sottraendo la parte occupata dal carburante (2/5), la frazione complementare che rimane vuota è 5/5 - 2/5 = 3/5.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-08",
            text: "Un disco circolare è suddiviso in 8 settori uguali tra loro. 5 di questi settori sono colorati di verde e i restanti sono bianchi. Quale frazione del disco è colorata di verde? Scrivi la risposta come frazione nel formato a/b.",
            answer: "5/8",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il disco intero è diviso in 8 parti uguali, che indicano il denominatore. I settori colorati di verde sono 5 (il numeratore), perciò la frazione è 5/8.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-09",
            text: "Un rettangolo è diviso in 12 quadratini uguali. 4 di questi quadratini sono colorati di blu. Quale frazione del rettangolo è colorata di blu? Scrivi la frazione ridotta ai minimi termini (es. 1/3).",
            answer: "1/3",
            accepted: ["4/12"],
            tolerance: 0,
            exact: true,
            explanation: "I quadratini blu sono 4 su 12 totali, cioè 4/12. Dividendo sia il numeratore sia il denominatore per il loro Massimo Comune Divisore (4), otteniamo la frazione ridotta ai minimi termini 1/3.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-1-10",
            text: "Un'ora è formata da 60 minuti. Che frazione di un'ora rappresentano 15 minuti? Scrivi la frazione ridotta ai minimi termini (es. 1/4).",
            answer: "1/4",
            accepted: ["15/60"],
            tolerance: 0,
            exact: true,
            explanation: "Poiché un'ora dura 60 minuti, 15 minuti corrispondono a 15/60. Semplificando la frazione dividendo numeratore e denominatore per 15 otteniamo 1/4, il classico 'quarto d'ora'.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 2,
        title: "Confrontare frazioni",
        blueprint: "Due frazioni con denominatori diversi, da ridurre a denominatore comune.",
        exercises: [
          {
            id: "frazioni-2-01",
            text: "Qual è la frazione maggiore tra 3/7 e 5/7?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "5/7",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Quando due frazioni hanno lo stesso denominatore, le parti hanno la stessa grandezza: è maggiore quella con il numeratore più grande. Quindi 5/7 è maggiore di 3/7.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-02",
            text: "Qual è la frazione minore tra 5/11 e 3/11?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "3/11",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Avendo lo stesso denominatore (11), le parti sono identiche per grandezza. La frazione con il numeratore minore rappresenta la quantità più piccola: 3/11 è minore di 5/11.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-03",
            text: "Qual è la frazione maggiore tra 3/4 e 5/8?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "3/4",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Portiamo le frazioni allo stesso denominatore comune 8: moltiplicando per 2, 3/4 diventa 6/8. Poiché 6/8 è maggiore di 5/8, la frazione maggiore è 3/4.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-04",
            text: "Qual è la frazione maggiore tra 2/3 e 6/9?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "uguali",
            accepted: ["uguale"],
            tolerance: 0,
            exact: true,
            explanation: "Semplificando 6/9 (dividendo per 3) otteniamo 2/3, oppure moltiplicando numeratore e denominatore di 2/3 per 3 otteniamo 6/9. Le due frazioni hanno lo stesso valore, quindi sono uguali.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-05",
            text: "Qual è la frazione minore tra 5/6 e 7/9?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "7/9",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Troviamo il minimo comune denominatore tra 6 e 9, che è 18. Riduciamo le frazioni: 5/6 = 15/18 e 7/9 = 14/18. Poiché 14/18 è minore di 15/18, la frazione minore è 7/9.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-06",
            text: "Qual è la frazione maggiore tra 2/3 e 3/4?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "3/4",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Riduciamo le frazioni al denominatore comune 12: 2/3 diventa 8/12 e 3/4 diventa 9/12. Confrontando i numeratori, 9/12 è maggiore di 8/12, quindi la frazione maggiore è 3/4.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-07",
            text: "Qual è la frazione maggiore tra 6/8 e 9/12?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "uguali",
            accepted: ["uguale"],
            tolerance: 0,
            exact: true,
            explanation: "Semplificando entrambe le frazioni ai minimi termini, 6/8 diventa 3/4 (dividendo per 2) e 9/12 diventa 3/4 (dividendo per 3). Avendo lo stesso valore ridotto, le due frazioni sono uguali.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-08",
            text: "Qual è la frazione maggiore tra 3/5 e 5/8?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "5/8",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Portiamo entrambe le frazioni al denominatore comune 40: 3/5 = 24/40 e 5/8 = 25/40. Dato che 25/40 è più grande di 24/40, la frazione maggiore è 5/8.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-09",
            text: "Qual è la frazione maggiore tra 4/7 e 5/9?\nRispondi scrivendo la frazione scelta così come compare nel testo, oppure scrivi \"uguali\" se hanno lo stesso valore.",
            answer: "4/7",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il denominatore comune tra 7 e 9 è 63. Trasformiamo le frazioni: 4/7 = 36/63 e 5/9 = 35/63. Essendo 36/63 maggiore di 35/63, la frazione maggiore è 4/7.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-2-10",
            text: "Qual è la frazione maggiore tra 2/3, 3/4 e 5/6?\nRispondi scrivendo la frazione scelta così come compare nel testo.",
            answer: "5/6",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Troviamo il minimo comune denominatore tra 3, 4 e 6, che è 12. Riduciamo tutte le frazioni: 2/3 = 8/12, 3/4 = 9/12 e 5/6 = 10/12. La frazione con il numeratore più alto è 10/12, quindi la maggiore è 5/6.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 3,
        title: "Somma e sottrazione di frazioni",
        blueprint: "Denominatori diversi, mcm, somma dei numeratori.",
        exercises: [
          {
            id: "frazioni-3-01",
            text: "Calcola la seguente somma di frazioni:\n1/2 + 1/4\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "3/4",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il denominatore 4 è multiplo di 2, quindi è il denominatore comune: trasformiamo 1/2 in 2/4. Eseguiamo la somma dei numeratori: 2/4 + 1/4 = 3/4.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-02",
            text: "Calcola la seguente somma di frazioni:\n2/5 + 3/10\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "7/10",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il denominatore comune tra 5 e 10 è 10. Trasformiamo 2/5 in 4/10 moltiplicando per 2. Sommando i numeratori otteniamo 4/10 + 3/10 = 7/10.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-03",
            text: "Calcola la seguente somma di frazioni:\n1/4 + 5/12\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "2/3",
            accepted: ["8/12"],
            tolerance: 0,
            exact: true,
            explanation: "Il denominatore 12 è multiplo di 4, quindi 1/4 diventa 3/12. Sommando otteniamo 3/12 + 5/12 = 8/12; semplificando per 4 (MCD) si ottiene la frazione ridotta ai minimi termini 2/3.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-04",
            text: "Calcola la seguente somma di frazioni:\n1/2 + 1/3\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "5/6",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "I denominatori 2 e 3 sono primi tra loro, quindi il loro mcm è 2 × 3 = 6. Trasformiamo le frazioni in 3/6 e 2/6. La somma dei numeratori è 3/6 + 2/6 = 5/6.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-05",
            text: "Calcola la seguente somma di frazioni:\n2/3 + 1/5\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "13/15",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il minimo comune multiplo tra 3 e 5 è 15. Portiamo le frazioni allo stesso denominatore: 2/3 = 10/15 e 1/5 = 3/15. Sommando otteniamo 10/15 + 3/15 = 13/15.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-06",
            text: "Calcola la seguente somma di frazioni:\n3/4 + 2/3\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "17/12",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il mcm tra 4 e 3 è 12. Trasformiamo le frazioni: 3/4 = 9/12 e 2/3 = 8/12. Sommando i numeratori si ha 9/12 + 8/12 = 17/12, che è la frazione impropria ridotta ai minimi termini.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-07",
            text: "Calcola la seguente sottrazione di frazioni:\n5/6 - 1/2\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b).",
            answer: "1/3",
            accepted: ["2/6"],
            tolerance: 0,
            exact: true,
            explanation: "Il denominatore 6 è multiplo di 2, perciò 1/2 diventa 3/6. Sottraiamo i numeratori: 5/6 - 3/6 = 2/6. Dividendo per 2 sia il numeratore che il denominatore otteniamo 1/3.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-08",
            text: "Calcola la seguente sottrazione di frazioni:\n4/5 - 1/3\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b).",
            answer: "7/15",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Il minimo comune multiplo tra 5 e 3 è 15. Trasformiamo le frazioni: 4/5 = 12/15 e 1/3 = 5/15. Sottraendo i numeratori otteniamo 12/15 - 5/15 = 7/15.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-09",
            text: "A una festa di compleanno, Marco mangia 1/4 di una crostata e Giulia ne mangia 1/3. Quale frazione dell'intera crostata hanno mangiato insieme i due amici?\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "7/12",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Per trovare la quantità totale consumata sommiamo 1/4 e 1/3. Il denominatore comune tra 4 e 3 è 12: 1/4 = 3/12 e 1/3 = 4/12. Insieme hanno mangiato 3/12 + 4/12 = 7/12 della crostata.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-3-10",
            text: "Durante una gita in montagna, una comitiva percorre 2/5 del sentiero prima di pranzo e 1/2 del sentiero nel pomeriggio. Quale frazione del sentiero complessivo è stata percorsa in tutta la giornata?\nScrivi il risultato come frazione ridotta ai minimi termini (nel formato a/b). Se il risultato è maggiore di 1, scrivi la frazione impropria.",
            answer: "9/10",
            accepted: [],
            tolerance: 0,
            exact: true,
            explanation: "Sommiamo le due frazioni di percorso: 2/5 e 1/2. Il mcm tra 5 e 2 è 10, quindi 2/5 = 4/10 e 1/2 = 5/10. In totale è stato percorso 4/10 + 5/10 = 9/10 del sentiero.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 4,
        title: "Percentuali e frazione di una quantità",
        blueprint: "Calcolare una percentuale o una frazione di un valore, anche in un contesto reale.",
        exercises: [
          {
            id: "frazioni-4-01",
            text: "Calcola i 3/5 di 40.\nInserisci solo il valore numerico del risultato.",
            answer: "24",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Per calcolare la frazione di una quantità, dividiamo il numero per il denominatore e moltiplichiamo per il numeratore: (40 ÷ 5) × 3 = 8 × 3 = 24.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-02",
            text: "Un sentiero escursionistico è lungo complessivamente 60 km. Un gruppo di camminatori ha percorso i 2/3 dell'intero tragitto. Quanti chilometri hanno percorso finora?\nRisposta in km (inserisci solo il valore numerico).",
            answer: "40",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo i 2/3 di 60 km: dividiamo 60 per 3 e moltiplichiamo per 2, cioè (60 ÷ 3) × 2 = 20 × 2 = 40 km percorsi.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-03",
            text: "In una biblioteca ci sono 120 libri di narrativa per ragazzi. Se i 5/8 di questi libri sono romanzi d'avventura, quanti sono i romanzi d'avventura?\nInserisci solo il valore numerico del risultato.",
            answer: "75",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Dividiamo il totale dei libri per il denominatore 8 e moltiplichiamo per il numeratore 5: (120 ÷ 8) × 5 = 15 × 5 = 75 romanzi d'avventura.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-04",
            text: "A quale percentuale corrisponde la frazione 3/4?\nInserisci solo il valore numerico senza il simbolo % (ad esempio per 50% scrivi 50).",
            answer: "75",
            accepted: ["75%"],
            tolerance: 0.01,
            exact: false,
            explanation: "Dividiamo il numeratore per il denominatore: 3 ÷ 4 = 0,75. Moltiplicando per 100 otteniamo il valore percentuale: 75%.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-05",
            text: "A quale percentuale corrisponde la frazione 3/8?\nInserisci solo il valore numerico senza il simbolo % (usa la virgola o il punto per i decimali, es. 12,5).",
            answer: "37,5",
            accepted: ["37.5", "37,5%", "37.5%"],
            tolerance: 0.01,
            exact: false,
            explanation: "Dividiamo il numeratore per il denominatore: 3 ÷ 8 = 0,375. Moltiplicando per 100 otteniamo il 37,5%.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-06",
            text: "Calcola il 15% di 200.\nInserisci solo il valore numerico del risultato.",
            answer: "30",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Per calcolare il 15% di 200, moltiplichiamo 200 per 15 e dividiamo per 100: (200 × 15) ÷ 100 = 3000 ÷ 100 = 30.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-07",
            text: "In una scuola ci sono 350 studenti. Il 40% degli iscritti partecipa ai laboratori pomeridiani di musica e teatro. Quanti studenti partecipano a questi laboratori?\nInserisci solo il valore numerico del risultato.",
            answer: "140",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo il 40% di 350: moltiplichiamo 350 per 40 e dividiamo per 100, ottenendo (350 × 40) ÷ 100 = 14000 ÷ 100 = 140 studenti.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-08",
            text: "Una confezione di cereali da 450 g contiene il 12% di fibre. Quanti grammi di fibre sono contenuti nella confezione?\nRisposta in grammi (inserisci solo il valore numerico).",
            answer: "54",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo il 12% di 450 g moltiplicando per 12 e dividendo per 100: (450 × 12) ÷ 100 = 5400 ÷ 100 = 54 g di fibre.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-09",
            text: "Un paio di scarpe da ginnastica costa 80 €. Durante i saldi viene applicato uno sconto del 20%. Qual è il prezzo finale scontato delle scarpe?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "64",
            accepted: ["64.00", "64,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo prima lo sconto: il 20% di 80 € è (80 × 20) ÷ 100 = 16 €. Sottraendo lo sconto dal prezzo iniziale si ottiene il prezzo finale: 80 − 16 = 64 €.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-4-10",
            text: "L'abbonamento mensile a un servizio di musica in streaming costa 12 €. Dal mese prossimo è previsto un aumento di prezzo del 15%. Quale sarà il nuovo prezzo mensile del servizio?\nRisposta in euro (usa la virgola o il punto per i decimali, es. 15,50).",
            answer: "13,8",
            accepted: ["13.8", "13,80", "13.80"],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo l'aumento del 15% su 12 €: (12 × 15) ÷ 100 = 1,80 €. Aggiungiamo l'aumento al prezzo di partenza: 12 + 1,80 = 13,80 €.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 5,
        title: "Problema a più passaggi",
        blueprint: "Frazioni e percentuali applicate in sequenza su quantità che cambiano.",
        exercises: [
          {
            id: "frazioni-5-01",
            text: "Un libro ha 240 pagine. Lunedì Marco legge 1/4 del libro. Martedì legge il 40% delle pagine rimaste. Quante pagine gli restano ancora da leggere per finire il libro?\nInserisci solo il valore numerico del risultato.",
            answer: "108",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: lunedì Marco legge 1/4 di 240 pagine, cioè 240 ÷ 4 = 60 pagine; ne restano 240 − 60 = 180 pagine.\nPassaggio 2: martedì legge il 40% di 180 pagine, cioè (180 × 40) ÷ 100 = 72 pagine.\nPassaggio 3: le pagine ancora da leggere sono 180 − 72 = 108 pagine.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-02",
            text: "Sofia ha risparmiato 150 €. Spende i 2/5 della somma per comprare un videogioco. Del denaro rimanente, spende il 30% per fare un regalo a sua sorella. Quanti euro le restano alla fine?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "63",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: spesa per il videogioco: (150 ÷ 5) × 2 = 60 €; denaro rimasto: 150 − 60 = 90 €.\nPassaggio 2: spesa per il regalo: (90 × 30) ÷ 100 = 27 €.\nPassaggio 3: denaro finale rimasto: 90 − 27 = 63 €.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-03",
            text: "Un tragitto in auto è lungo 300 km. Prima della sosta l'autista percorre il 35% dell'intero viaggio. Del tragitto rimanente, percorre poi i 4/5. Quanti chilometri restano ancora da percorrere fino alla destinazione?\nRisposta in km (inserisci solo il valore numerico).",
            answer: "39",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: prima della sosta percorre il 35% di 300 km, cioè (300 × 35) ÷ 100 = 105 km; restano 300 − 105 = 195 km.\nPassaggio 2: dopo la sosta percorre i 4/5 di 195 km, cioè (195 ÷ 5) × 4 = 156 km.\nPassaggio 3: chilometri mancanti all'arrivo: 195 − 156 = 39 km.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-04",
            text: "Una pasticceria prepara 200 pasticcini al mattino. A mezzogiorno ne ha venduti la metà (1/2). Nel pomeriggio vende il 60% dei pasticcini rimasti. Quanti pasticcini rimangono invenduti alla chiusura?\nInserisci solo il valore numerico del risultato.",
            answer: "40",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: a mezzogiorno sono stati venduti 1/2 di 200 pasticcini, cioè 200 ÷ 2 = 100; ne rimangono 200 − 100 = 100.\nPassaggio 2: nel pomeriggio viene venduto il 60% di 100 pasticcini, cioè (100 × 60) ÷ 100 = 60 pasticcini.\nPassaggio 3: i pasticcini invenduti alla sera sono 100 − 60 = 40.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-05",
            text: "Un paio di cuffie costa 50 €. Il negozio applica uno sconto del 20%. Ai clienti con carta fedeltà viene applicato un ulteriore sconto del 10% sul prezzo già scontato. Quanto spende un cliente con carta fedeltà che acquista 2 paia di queste cuffie?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "72",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: primo sconto del 20% su 50 €: (50 × 20) ÷ 100 = 10 €; prezzo scontato: 50 − 10 = 40 €.\nPassaggio 2: secondo sconto del 10% su 40 €: (40 × 10) ÷ 100 = 4 €; prezzo fedeltà per paio: 40 − 4 = 36 €.\nPassaggio 3: spesa totale per 2 paia di cuffie: 36 × 2 = 72 €.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-06",
            text: "Una maglietta sportiva costa 30 €. Viene applicato uno sconto del 10%. Sul prezzo scontato si aggiunge un costo di personalizzazione del 20%. Quanto costa ordinare 3 di queste magliette personalizzate?\nRisposta in euro (usa la virgola o il punto per i decimali, es. 50,50).",
            answer: "97,2",
            accepted: ["97.2", "97,20", "97.20"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: sconto del 10% su 30 €: (30 × 10) ÷ 100 = 3 €; prezzo scontato: 30 − 3 = 27 €.\nPassaggio 2: aumento del 20% su 27 €: (27 × 20) ÷ 100 = 5,40 €; costo per singola maglietta: 27 + 5,40 = 32,40 €.\nPassaggio 3: costo totale per 3 magliette: 32,40 × 3 = 97,20 €.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-07",
            text: "In una serra ci sono inizialmente 400 piante. Nella prima settimana vengono vendute 1/4 delle piante totali. Nella seconda settimana vengono vendute 2/3 delle piante rimaste. Nella terza settimana viene venduto il 50% delle piante ancora presenti. Quante piante restano alla fine?\nInserisci solo il valore numerico del risultato.",
            answer: "50",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: piante vendute la prima settimana: 400 ÷ 4 = 100; piante rimaste: 400 − 100 = 300.\nPassaggio 2: piante vendute la seconda settimana: (300 ÷ 3) × 2 = 200; piante rimaste: 300 − 200 = 100.\nPassaggio 3: piante vendute la terza settimana: 50% di 100 = 50; piante rimaste alla fine: 100 − 50 = 50.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-08",
            text: "Una scatola di un gioco da tavolo costa 40 €. Il negozio applica uno sconto del 15% su ogni scatola. Una ludoteca ne compra 3 scatole e alla cassa riceve un ulteriore buono sconto pari a 1/6 della spesa totale delle 3 scatole. Quanto paga complessivamente la ludoteca?\nRisposta in euro (inserisci solo il valore numerico).",
            answer: "85",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: sconto del 15% su 40 €: (40 × 15) ÷ 100 = 6 €; prezzo scontato per scatola: 40 − 6 = 34 €.\nPassaggio 2: spesa per 3 scatole: 34 × 3 = 102 €.\nPassaggio 3: sconto coupon di 1/6 su 102 €: 102 ÷ 6 = 17 €; totale pagato alla cassa: 102 − 17 = 85 €.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-09",
            text: "Un ciclista deve percorrere una tappa di 160 km. Nella prima ora percorre il 25% dell'intero tragitto. Nella seconda ora percorre i 2/5 dei chilometri che gli erano rimasti dopo la prima ora. Quanti chilometri gli restano ancora da percorrere?\nRisposta in km (inserisci solo il valore numerico).",
            answer: "72",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: calcoliamo prima il 25% dell'intero tragitto (160 km): (160 × 25) ÷ 100 = 40 km percorsi nella prima ora.\nPassaggio 2: calcoliamo i chilometri rimasti: 160 − 40 = 120 km.\nPassaggio 3: calcoliamo i 2/5 della distanza rimasta: (120 ÷ 5) × 2 = 48 km percorsi nella seconda ora.\nPassaggio 4: chilometri mancanti alla conclusione della tappa: 120 − 48 = 72 km.",
            table: null,
            svg: null
          },
          {
            id: "frazioni-5-10",
            text: "Un camion trasporta un carico di 450 kg di frutta. I 2/9 del carico sono arance. Della frutta rimanente, il 40% è costituito da mele e la parte restante da pere. Quanti chilogrammi di pere ci sono nel carico?\nRisposta in kg (inserisci solo il valore numerico).",
            answer: "210",
            accepted: [],
            tolerance: 0.01,
            exact: false,
            explanation: "Passaggio 1: dobbiamo calcolare prima il peso delle arance sul totale: (450 ÷ 9) × 2 = 100 kg.\nPassaggio 2: calcoliamo i chilogrammi di frutta rimanenti: 450 − 100 = 350 kg.\nPassaggio 3: calcoliamo il 40% di mele sulla parte rimasta: (350 × 40) ÷ 100 = 140 kg.\nPassaggio 4: i chilogrammi di pere corrispondono al resto: 350 − 140 = 210 kg.",
            table: null,
            svg: null
          }
        ]
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
        exercises: [
          {
            id: "geometria-1-01",
            text: "Osserva la figura qui sotto che mostra un rettangolo con base di 8 cm e altezza di 5 cm.\nCalcola il perimetro del rettangolo in cm (inserisci solo il valore numerico).",
            answer: "26",
            accepted: ["26"],
            tolerance: 0,
            exact: false,
            explanation: "Il perimetro di un rettangolo si calcola sommando tutti i lati: P = 2 × (base + altezza) = 2 × (8 + 5) = 2 × 13 = 26 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 150" width="280" height="150" role="img" aria-label="Rettangolo con base di 8 cm e altezza di 5 cm">
  <rect x="35" y="25" width="200" height="95" fill="var(--black-2)" stroke="var(--blue-400)" stroke-width="3" rx="6" />
  <text x="135" y="18" fill="var(--text)" font-size="14" font-weight="bold" text-anchor="middle">8 cm</text>
  <text x="135" y="140" fill="var(--text-dim)" font-size="13" text-anchor="middle">8 cm</text>
  <text x="20" y="78" fill="var(--text)" font-size="14" font-weight="bold" text-anchor="middle">5 cm</text>
  <text x="250" y="78" fill="var(--text-dim)" font-size="13" text-anchor="middle">5 cm</text>
</svg>`
          }
        ]
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
        exercises: [
          {
            id: "statistica-1-01",
            text: "La tabella riporta il numero di libri letti da quattro studenti durante il mese.\nQuanti libri hanno letto complessivamente i quattro studenti?",
            answer: "14",
            accepted: ["14"],
            tolerance: 0,
            exact: false,
            explanation: "Per trovare il totale dei libri letti si calcola la somma dei singoli valori: 4 + 3 + 5 + 2 = 14 libri in totale.",
            table: {
              headers: ["Studente", "Libri letti"],
              rows: [
                ["Anna", "4"],
                ["Marco", "3"],
                ["Sofia", "5"],
                ["Luca", "2"]
              ]
            },
            svg: null
          }
        ]
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

/* Riferimenti agli elementi DOM memorizzati in cache */
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

/* Inizializzazione al caricamento della pagina */
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
   2. SEZIONE LOGICA (NORMALIZZAZIONE, PARSER NUMERICO, CHECK ANSWER E STATO)
   ========================================================================== */

/**
 * Normalizza una stringa per il confronto testuale:
 * - trim e conversione in minuscolo
 * - rimozione di tutti gli spazi interni
 * - sostituzione dei segni "−" (\u2212) e "–" (\u2013) con il trattino standard "-"
 * NOTA: la virgola NON viene sostituita qui, ma solo in parseNumber quando si interpreta come numero.
 */
function normalizeText(val) {
  if (val === null || val === undefined) return "";
  return String(val)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[\u2212\u2013]/g, "-");
}

/**
 * Riconosce e converte una stringa in un numero a virgola mobile:
 * - interi e decimali (con virgola o punto)
 * - frazioni "a/b" (con denominatore diverso da 0)
 * - percentuali "x%" (valore corrispondente: x / 100)
 * Ritorna un valore di tipo number, oppure null se la stringa non è un numero valido.
 */
function parseNumber(str) {
  if (typeof str === "number") {
    return isNaN(str) ? null : str;
  }
  if (typeof str !== "string") {
    return null;
  }

  // Pulizia preliminare: rimozione spazi e unificazione segno meno
  const s = str.trim().replace(/\s+/g, "").replace(/[\u2212\u2013]/g, "-");
  if (!s) return null;

  // 1. Percentuale: es. "37,5%", "25%", "-10%"
  const percentMatch = s.match(/^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))%$/);
  if (percentMatch) {
    const val = parseFloat(percentMatch[1].replace(",", "."));
    return isNaN(val) ? null : val / 100;
  }

  // 2. Frazione: es. "3/8", "-1/2", "+4/5" (con b != 0)
  const fractionMatch = s.match(/^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))\s*\/\s*([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))$/);
  if (fractionMatch) {
    const num = parseFloat(fractionMatch[1].replace(",", "."));
    const den = parseFloat(fractionMatch[2].replace(",", "."));
    if (isNaN(num) || isNaN(den) || den === 0) return null;
    return num / den;
  }

  // 3. Intero o decimale con virgola o punto: es. "0,375", "42", "-12.5"
  const numMatch = s.match(/^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+))$/);
  if (numMatch) {
    const val = parseFloat(numMatch[1].replace(",", "."));
    return isNaN(val) ? null : val;
  }

  return null;
}

/**
 * Verifica la correttezza della risposta dell'utente secondo le regole:
 * 1. Normalizzazione iniziale.
 * 2. Se exercise.exact è true: confronto puramente testuale con answer/accepted normalizzati.
 * 3. Altrimenti prova prima il confronto numerico (tramite parseNumber) con tolleranza (default 0.0001).
 * 4. Se il confronto numerico non è applicabile, ripiega sul confronto testuale normalizzato.
 *
 * @param {Object} exercise - Oggetto esercizio dal modello dati
 * @param {string} userInput - Testo inserito dall'utente nel campo di input
 * @returns {boolean} - true se la risposta è corretta, false altrimenti
 */
function checkAnswer(exercise, userInput) {
  if (!exercise || userInput === null || userInput === undefined) {
    return false;
  }

  const normInput = normalizeText(userInput);
  if (!normInput) {
    return false;
  }

  // Lista di tutti i valori attesi accettati (risposta principale + alternative)
  const targets = [
    exercise.answer,
    ...(Array.isArray(exercise.accepted) ? exercise.accepted : [])
  ].filter((t) => t !== null && t !== undefined);

  if (targets.length === 0) {
    return false;
  }

  // 1. Caso esatto: confronto solo testuale
  if (exercise.exact === true) {
    return targets.some((target) => normalizeText(target) === normInput);
  }

  // 2. Prova prima il confronto numerico
  const userNum = parseNumber(userInput);
  const tolerance = typeof exercise.tolerance === "number" ? exercise.tolerance : 0.0001;

  if (userNum !== null) {
    for (const target of targets) {
      const targetNum = parseNumber(target);
      if (targetNum !== null && Math.abs(userNum - targetNum) <= tolerance) {
        return true;
      }
    }
  }

  // 3. Ripiego sul confronto testuale normalizzato se non numerico o non combaciato
  return targets.some((target) => normalizeText(target) === normInput);
}

/**
 * Estrae una porzione iniziale di testo (snippet) di un dato numero di parole.
 */
function getSnippet(text, wordLimit = 8) {
  if (!text) return "";
  const cleaned = text.replace(/\s+/g, " ").trim();
  const words = cleaned.split(" ");
  if (words.length <= wordLimit) return cleaned;
  return words.slice(0, wordLimit).join(" ") + "…";
}

/* ==========================================================================
   GESTIONE PROGRESSI LOCALSTORAGE E RANGO HUD
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
    // Gestione silenziosa errori storage
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
      // Ignora errori di scrittura
    }
  }
  updateHudProgress();
}

function getRankInfo(solvedCount) {
  if (solvedCount >= 250) return { rank: "Leggenda", icon: "👑", tier: "leggenda" };
  if (solvedCount >= 120) return { rank: "Maestro", icon: "💎", tier: "maestro" };
  if (solvedCount >= 50) return { rank: "Esperto", icon: "🥇", tier: "esperto" };
  if (solvedCount >= 10) return { rank: "Apprendista", icon: "🥈", tier: "apprendista" };
  return { rank: "Novizio", icon: "🥉", tier: "novizio" };
}

function updateHudProgress() {
  if (!DOM.hudRankName) return;
  const solved = getSolvedExercises().length;
  const { rank, icon, tier } = getRankInfo(solved);

  DOM.hudRankName.innerHTML = `<span class="hud-rank-icon" aria-hidden="true">${icon}</span><span>${rank}</span>`;
  DOM.hudRankName.setAttribute("data-tier", tier);
  if (DOM.hudSolvedCount) DOM.hudSolvedCount.textContent = solved;
  if (DOM.hudTotalCount) DOM.hudTotalCount.textContent = TOTAL_APP_EXERCISES;

  const pct = Math.min(100, Math.round((solved / TOTAL_APP_EXERCISES) * 100));
  if (DOM.hudProgressFill) DOM.hudProgressFill.style.width = `${pct}%`;
  if (DOM.hudProgressBar) DOM.hudProgressBar.setAttribute("aria-valuenow", solved);
}

/** Calcola statistiche di avanzamento per un intero argomento */
function getTopicStats(topic) {
  const solved = getSolvedExercises();
  let total = 0;
  let count = 0;
  if (topic && Array.isArray(topic.levels)) {
    topic.levels.forEach((lvl) => {
      if (Array.isArray(lvl.exercises)) {
        total += lvl.exercises.length;
        lvl.exercises.forEach((ex) => {
          if (solved.includes(ex.id)) count++;
        });
      }
    });
  }
  return { total, solved: count };
}

/** Calcola statistiche di avanzamento per un singolo livello */
function getLevelStats(level) {
  const solved = getSolvedExercises();
  const total = level && Array.isArray(level.exercises) ? level.exercises.length : 0;
  const count = level && Array.isArray(level.exercises)
    ? level.exercises.filter((ex) => solved.includes(ex.id)).length
    : 0;
  return { total, solved: count };
}

/* Effetto di gioco: esplosione festosa di coriandoli e scintille arcade */
function triggerSparks(targetElement) {
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

  const colors = ["#10B981", "#F59E0B", "#06B6D4", "#EC4899", "#8B5CF6", "#3B82F6", "#FBBF24"];
  const shapes = ["★", "◆", "▲", "●", "+"];
  const count = 22;

  for (let i = 0; i < count; i++) {
    const spark = document.createElement("span");
    spark.className = "spark-particle";
    
    // Angolo distribuito a 360° con leggera dispersione casuale
    const angle = (i / count) * 360 + (Math.random() * 20 - 10);
    const distance = 40 + Math.random() * 85;
    const rad = (angle * Math.PI) / 180;
    const dx = Math.cos(rad) * distance;
    const dy = Math.sin(rad) * distance;
    const color = colors[i % colors.length];
    const isSymbol = Math.random() > 0.45;

    spark.style.setProperty("--dx", `${dx}px`);
    spark.style.setProperty("--dy", `${dy}px`);
    spark.style.left = `${originX}px`;
    spark.style.top = `${originY}px`;
    spark.style.color = color;

    if (isSymbol) {
      spark.classList.add("spark-symbol");
      spark.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    } else {
      const size = 6 + Math.random() * 6;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.backgroundColor = color;
      spark.style.boxShadow = `0 0 10px ${color}`;
    }

    container.appendChild(spark);
  }

  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 1000);
}

/* ==========================================================================
   BARRA LATERALE E ACCORDION
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

  DOM.topicsAccordion.querySelectorAll(".accordion-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parentItem = btn.closest(".accordion-item");
      const topicId = parentItem.getAttribute("data-topic");
      toggleAccordionTopic(topicId);
    });
  });

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
   3. SEZIONE ROUTER (PARSING HASH, CAMBIO VISTA E GESTIONE ERRORI 404)
   ========================================================================== */

function initRouter() {
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
}

/**
 * Interpreta l'hash corrente della finestra e restituisce l'oggetto rotta corrispondente:
 * - #/ oppure #/home: vista "home"
 * - #/<topicId>: vista "topic"
 * - #/<topicId>/<level>: vista "level"
 * - #/<topicId>/<level>/<n>: vista "exercise" (solo se n esiste nei dati, altrimenti "404")
 */
function parseHash() {
  const hash = window.location.hash || "";
  const cleaned = hash.replace(/^#\/?/, "").replace(/\/+$/, "");

  if (!cleaned || cleaned === "home") {
    return { view: "home" };
  }

  const parts = cleaned.split("/");

  // 1. Rotta Argomento: #/<topicId>
  if (parts.length === 1) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    if (topic) {
      return { view: "topic", topic };
    }
    return { view: "404" };
  }

  // 2. Rotta Livello: #/<topicId>/<livello>
  if (parts.length === 2) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    const levelNumber = parseInt(parts[1], 10);
    const level = topic ? topic.levels.find((l) => l.level === levelNumber) : null;

    if (topic && level) {
      return { view: "level", topic, level };
    }
    return { view: "404" };
  }

  // 3. Rotta Esercizio: #/<topicId>/<livello>/<n>
  if (parts.length === 3) {
    const topic = TOPICS.find((t) => t.id === parts[0]);
    const levelNumber = parseInt(parts[1], 10);
    const exerciseNum = parseInt(parts[2], 10);
    const level = topic ? topic.levels.find((l) => l.level === levelNumber) : null;

    // L'esercizio deve esistere effettivamente all'interno dell'array exercises
    if (
      topic &&
      level &&
      !isNaN(exerciseNum) &&
      exerciseNum >= 1 &&
      level.exercises &&
      exerciseNum <= level.exercises.length
    ) {
      return {
        view: "exercise",
        topic,
        level,
        exerciseIndex: exerciseNum,
        exercise: level.exercises[exerciseNum - 1]
      };
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
    case "exercise":
      renderExercise(route.topic, route.level, route.exerciseIndex, route.exercise);
      break;
    default:
      renderNotFound();
      break;
  }

  window.scrollTo(0, 0);
  if (DOM.mainContent) {
    DOM.mainContent.focus();
  }
}

function updateSidebarActiveState(route) {
  if (!DOM.sidebar) return;

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
  } else if (route.view === "level" || route.view === "exercise") {
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
   4. SEZIONE VISTE (HOME, ARGOMENTO, LIVELLO, ESERCIZIO E NOT FOUND)
   ========================================================================== */

/**
 * Restituisce una grafica vettoriale SVG tematica per ciascuno dei 7 argomenti
 */
function getTopicSvg(topicId) {
  switch (topicId) {
    case "numeri":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="14" y="14" width="42" height="42" rx="10" fill="#F59E0B" fill-opacity="0.18" stroke="#F59E0B" stroke-width="2"/>
          <text x="35" y="42" fill="#F59E0B" font-size="20" font-weight="900" text-anchor="middle" dominant-baseline="middle">12</text>
          <rect x="64" y="14" width="42" height="42" rx="10" fill="#F59E0B" fill-opacity="0.28" stroke="#F59E0B" stroke-width="2"/>
          <path d="M85 25V45M75 35H95" stroke="#FBBF24" stroke-width="3.5" stroke-linecap="round"/>
          <rect x="14" y="64" width="42" height="42" rx="10" fill="#F59E0B" fill-opacity="0.28" stroke="#F59E0B" stroke-width="2"/>
          <path d="M25 85H45" stroke="#FBBF24" stroke-width="3.5" stroke-linecap="round"/>
          <rect x="64" y="64" width="42" height="42" rx="10" fill="#F59E0B" fill-opacity="0.18" stroke="#F59E0B" stroke-width="2"/>
          <path d="M75 75L95 95M95 75L75 95" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
        </svg>
      `;
    case "frazioni":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="60" r="46" stroke="#10B981" stroke-width="2.5" stroke-dasharray="5 4" fill="#10B981" fill-opacity="0.1"/>
          <path d="M60 60 L60 14 A46 46 0 0 1 106 60 Z" fill="#10B981" fill-opacity="0.8" stroke="#10B981" stroke-width="2"/>
          <path d="M60 60 L106 60 A46 46 0 0 1 60 106 Z" fill="#10B981" fill-opacity="0.45" stroke="#10B981" stroke-width="2"/>
          <circle cx="60" cy="60" r="14" fill="#0B0F19" stroke="#34D399" stroke-width="2.5"/>
          <text x="60" y="62" fill="#34D399" font-size="12" font-weight="900" text-anchor="middle" dominant-baseline="middle">%</text>
        </svg>
      `;
    case "geometria":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <polygon points="18,98 102,98 60,24" fill="#06B6D4" fill-opacity="0.18" stroke="#06B6D4" stroke-width="2.5"/>
          <circle cx="60" cy="72" r="24" stroke="#38BDF8" stroke-width="2" stroke-dasharray="3 3"/>
          <line x1="60" y1="24" x2="60" y2="98" stroke="#06B6D4" stroke-width="2" stroke-dasharray="3 3"/>
          <rect x="53" y="91" width="7" height="7" fill="#06B6D4"/>
          <circle cx="60" cy="24" r="4.5" fill="#38BDF8"/>
          <circle cx="18" cy="98" r="4.5" fill="#38BDF8"/>
          <circle cx="102" cy="98" r="4.5" fill="#38BDF8"/>
        </svg>
      `;
    case "misure":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="14" y="42" width="92" height="36" rx="8" fill="#8B5CF6" fill-opacity="0.18" stroke="#8B5CF6" stroke-width="2.5"/>
          <line x1="26" y1="42" x2="26" y2="58" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="38" y1="42" x2="38" y2="52" stroke="#A78BFA" stroke-width="1.5"/>
          <line x1="50" y1="42" x2="50" y2="58" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="62" y1="42" x2="62" y2="52" stroke="#A78BFA" stroke-width="1.5"/>
          <line x1="74" y1="42" x2="74" y2="58" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="86" y1="42" x2="86" y2="52" stroke="#A78BFA" stroke-width="1.5"/>
          <line x1="96" y1="42" x2="96" y2="58" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
          <text x="60" y="70" fill="#DDD6FE" font-size="10" font-weight="800" text-anchor="middle">cm · kg · L</text>
        </svg>
      `;
    case "algebra":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="60" cy="60" r="46" fill="#EC4899" fill-opacity="0.12" stroke="#EC4899" stroke-width="2"/>
          <path d="M36 74L50 46M50 74L36 46" stroke="#F472B6" stroke-width="3.5" stroke-linecap="round"/>
          <path d="M58 56H68M58 64H68" stroke="#EC4899" stroke-width="3.5" stroke-linecap="round"/>
          <circle cx="84" cy="60" r="15" fill="#EC4899" fill-opacity="0.35" stroke="#F472B6" stroke-width="2.5"/>
          <text x="84" y="65" fill="#FFF" font-size="14" font-weight="900" text-anchor="middle">?</text>
        </svg>
      `;
    case "piano":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="16" y="16" width="88" height="88" rx="10" fill="#6366F1" fill-opacity="0.1" stroke="#6366F1" stroke-width="1.5"/>
          <line x1="18" y1="60" x2="102" y2="60" stroke="#818CF8" stroke-width="2.5"/>
          <line x1="60" y1="18" x2="60" y2="102" stroke="#818CF8" stroke-width="2.5"/>
          <polygon points="102,56 108,60 102,64" fill="#818CF8"/>
          <polygon points="56,18 60,12 64,18" fill="#818CF8"/>
          <circle cx="82" cy="38" r="5.5" fill="#4F46E5" stroke="#C7D2FE" stroke-width="2.5"/>
          <text x="84" y="32" fill="#C7D2FE" font-size="10" font-weight="800">(x, y)</text>
        </svg>
      `;
    case "statistica":
      return `
        <svg class="topic-card-svg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="20" y="66" width="15" height="34" rx="3" fill="#14B8A6" fill-opacity="0.5" stroke="#14B8A6" stroke-width="2"/>
          <rect x="42" y="44" width="15" height="56" rx="3" fill="#14B8A6" fill-opacity="0.75" stroke="#14B8A6" stroke-width="2"/>
          <rect x="64" y="28" width="15" height="72" rx="3" fill="#14B8A6" fill-opacity="0.95" stroke="#14B8A6" stroke-width="2"/>
          <rect x="86" y="52" width="15" height="48" rx="3" fill="#14B8A6" fill-opacity="0.6" stroke="#14B8A6" stroke-width="2"/>
          <path d="M22 62 Q 46 36, 71 24 T 98 42" stroke="#2DD4BF" stroke-width="3" stroke-linecap="round" fill="none"/>
          <line x1="14" y1="100" x2="106" y2="100" stroke="#5EEAD4" stroke-width="2.5"/>
        </svg>
      `;
    default:
      return "";
  }
}

/**
 * Vista Home: panoramica arcade con card per ciascuno dei 7 argomenti
 */
function renderHome() {
  document.title = "MATH ARENA | Esercizi di matematica per livelli";
  announceForScreenReader("Pagina Home caricata.");

  const solvedTotal = getSolvedExercises().length;
  const { rank, icon } = getRankInfo(solvedTotal);

  const topicsCardsHtml = TOPICS.map((topic) => {
    const stats = getTopicStats(topic);
    const hasContent = stats.total > 0;
    const pct = hasContent ? Math.round((stats.solved / stats.total) * 100) : 0;
    const isCompleted = hasContent && stats.solved === stats.total;

    return `
      <a href="#/${topic.id}" class="card topic-card topic-card--${topic.id}">
        <div class="topic-card-body">
          <div class="card-header-line">
            <span class="card-topic-badge"><span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number}</span>
            <span class="card-badge-count ${isCompleted ? "is-completed" : ""}">
              ${hasContent ? (isCompleted ? "✔ COMPLETATO" : `${stats.solved}/${stats.total} RISOLTI`) : "5 STAGE"}
            </span>
          </div>
          <h2 class="card-title">${topic.title}</h2>
          <p class="card-description">${topic.description}</p>
          ${
            hasContent
              ? `
              <div class="topic-progress-wrap" aria-label="Progresso argomento: ${pct}%">
                <div class="topic-progress-track">
                  <div class="topic-progress-fill" style="width: ${pct}%;"></div>
                </div>
              </div>
              `
              : ""
          }
          <div class="card-footer-info">
            <span>Esplora i 5 stage</span>
            <span class="card-arrow" aria-hidden="true">→</span>
          </div>
        </div>
        <div class="topic-card-visual" aria-hidden="true">
          ${getTopicSvg(topic.id)}
        </div>
      </a>
    `;
  }).join("");

  DOM.viewContainer.innerHTML = `
    <!-- Hero Banner Gamificato -->
    <section class="arena-hero-banner" aria-label="Benvenuto nell'Arena">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          <span>Scuola Primaria & Secondaria di 1° Grado</span>
        </div>
        <h1 class="hero-title">MATH ARENA: SFIDE PER LIVELLI</h1>
        <p class="hero-subtitle">
          Unisciti alla sfida arcade! Risolvi gli esercizi passo dopo passo, allena la mente e scala i ranghi da <strong>Novizio</strong> fino a <strong>Leggenda</strong> della matematica.
        </p>
        <div class="hero-stats-row">
          <div class="hero-stat-pill">
            <span class="hero-stat-icon">⚡</span>
            <div class="hero-stat-text">
              <span class="hero-stat-val">7</span>
              <span class="hero-stat-lbl">Argomenti</span>
            </div>
          </div>
          <div class="hero-stat-pill">
            <span class="hero-stat-icon">🎮</span>
            <div class="hero-stat-text">
              <span class="hero-stat-val">35</span>
              <span class="hero-stat-lbl">Stage Totali</span>
            </div>
          </div>
          <div class="hero-stat-pill">
            <span class="hero-stat-icon">${icon}</span>
            <div class="hero-stat-text">
              <span class="hero-stat-val">${solvedTotal} / ${TOTAL_APP_EXERCISES}</span>
              <span class="hero-stat-lbl">Rango: ${rank}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-graphic" aria-hidden="true">
        <svg class="hero-trophy-svg" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="70" fill="url(#hero-trophy-glow)" fill-opacity="0.25"/>
          <path d="M50 45H110V75C110 92 96 106 80 106C64 106 50 92 50 75V45Z" fill="url(#trophy-gold)" stroke="#FBBF24" stroke-width="3"/>
          <path d="M50 55H36C30 55 26 60 26 66C26 76 34 85 45 87L50 87" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
          <path d="M110 55H124C130 55 134 60 134 66C134 76 126 85 115 87L110 87" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
          <rect x="74" y="106" width="12" height="22" fill="#F59E0B"/>
          <rect x="58" y="128" width="44" height="12" rx="4" fill="#D97706" stroke="#FBBF24" stroke-width="2"/>
          <polygon points="80,58 84,68 94,68 86,74 89,84 80,78 71,84 74,74 66,68 76,68" fill="#FFF"/>
          <defs>
            <radialGradient id="hero-trophy-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 80) rotate(90) scale(70)">
              <stop stop-color="#F59E0B"/>
              <stop offset="1" stop-color="#F59E0B" stop-opacity="0"/>
            </radialGradient>
            <linearGradient id="trophy-gold" x1="50" y1="45" x2="110" y2="106" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FDE68A"/>
              <stop offset="0.5" stop-color="#F59E0B"/>
              <stop offset="1" stop-color="#D97706"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>

    <div class="section-label">
      <span>Seleziona un argomento per iniziare</span>
      <span class="section-label-count">7 mondi disponibili</span>
    </div>

    <section aria-label="Sezioni disponibili" class="cards-grid">
      ${topicsCardsHtml}
    </section>
  `;
}

/**
 * Vista Argomento (Topic): mappa dei 5 livelli disposti in sequenza arcade
 */
function renderTopic(topic) {
  document.title = `${topic.title} | MATH ARENA`;
  announceForScreenReader(`Sezione ${topic.number}: ${topic.title} caricata.`);

  const topicStats = getTopicStats(topic);

  const levelsCardsHtml = topic.levels.map((lvl) => {
    const rankLabel = STAGE_RANKS[lvl.level - 1] || "Novizio";
    const lvlStats = getLevelStats(lvl);
    const hasExercises = lvlStats.total > 0;
    const isCompleted = hasExercises && lvlStats.solved === lvlStats.total;

    // Genera 5 segmenti di cristallo di difficoltà
    const segments = [1, 2, 3, 4, 5].map((s) => `
      <span class="meter-segment ${s <= lvl.level ? "is-active" : ""}"></span>
    `).join("");

    return `
      <a href="#/${topic.id}/${lvl.level}" class="card stage-card ${isCompleted ? "is-completed" : ""}" data-stage="${lvl.level}">
        <div class="stage-node-indicator ${isCompleted ? "is-completed" : ""}" aria-hidden="true">
          <span class="stage-node-num">${isCompleted ? "✔" : lvl.level}</span>
        </div>
        <div class="stage-card-content">
          <div class="card-header-line">
            <div class="stage-tags-group">
              <span class="stage-rank-tag">${rankLabel}</span>
              <span class="stage-counter-tag ${isCompleted ? "is-completed" : ""}">
                ${hasExercises ? (isCompleted ? "✔ 10/10 RISOLTI" : `${lvlStats.solved}/${lvlStats.total} RISOLTI`) : "IN ARRIVO"}
              </span>
            </div>
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

    <header class="view-header topic-header-banner topic-header--${topic.id}">
      <div class="topic-header-text">
        <span class="badge-tag"><span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number}</span>
        <h1 class="view-title">${topic.title}</h1>
        <p class="view-subtitle">${topic.description}</p>
        ${
          topicStats.total > 0
            ? `<div class="topic-header-stat">Progresso argomento: <strong>${topicStats.solved}/${topicStats.total} esercizi completati</strong></div>`
            : ""
        }
      </div>
      <div class="topic-header-visual" aria-hidden="true">
        ${getTopicSvg(topic.id)}
      </div>
    </header>

    <div class="stages-path-container">
      <div class="stages-path-track" aria-hidden="true"></div>
      <section aria-label="Percorso dei 5 stage" class="stages-path">
        ${levelsCardsHtml}
      </section>
    </div>
  `;
}

/**
 * Vista Livello (#/<topicId>/<livello>):
 * - Blueprint mission briefing card
 * - Griglia dei 10 esercizi con stato di completamento
 * - Navigazione tra livelli
 */
function renderLevel(topic, level) {
  document.title = `Livello ${level.level} - ${topic.title} | MATH ARENA`;
  announceForScreenReader(`Livello ${level.level}: ${level.title} caricato.`);

  const hasExercises = Array.isArray(level.exercises) && level.exercises.length > 0;
  const lvlStats = getLevelStats(level);

  let exercisesSectionHtml = "";
  if (!hasExercises) {
    exercisesSectionHtml = `
      <div class="exercise-placeholder-card" role="status">
        <div class="placeholder-icon" aria-hidden="true">⏳</div>
        <h2 class="placeholder-title">Esercizi in arrivo</h2>
        <p class="placeholder-message">
          I contenuti di questo livello sono attualmente in preparazione. Torna presto per affrontare le nuove sfide!
        </p>
      </div>
    `;
  } else {
    const cards = level.exercises.map((ex, idx) => {
      const exNum = idx + 1;
      const solved = isExerciseSolved(ex.id);
      const snippet = getSnippet(ex.text, 8);

      return `
        <a href="#/${topic.id}/${level.level}/${exNum}" class="level-exercise-card ${solved ? "is-solved" : ""}">
          <div class="level-exercise-card-header">
            <span class="level-exercise-num-badge">Esercizio ${exNum}</span>
            <span class="exercise-status-badge ${solved ? "is-solved" : ""}">
              <span class="exercise-status-icon" aria-hidden="true">${solved ? "✔" : "○"}</span>
              <span>${solved ? "Risolto" : "Da fare"}</span>
            </span>
          </div>
          <p class="level-exercise-snippet">${snippet}</p>
          <div class="level-exercise-card-footer">
            <span>${solved ? "Rivedi sfida" : "Inizia esercizio"}</span>
            <span aria-hidden="true">→</span>
          </div>
        </a>
      `;
    }).join("");

    exercisesSectionHtml = `
      <section class="exercise-section" aria-label="Elenco esercizi del livello">
        <div class="section-label">
          <span>Esercizi disponibili (${level.exercises.length})</span>
          <span class="section-label-count">${lvlStats.solved}/${lvlStats.total} Completati</span>
        </div>
        <div class="level-exercises-grid">
          ${cards}
        </div>
      </section>
    `;
  }

  // Pulsanti di navigazione tra livelli dello stesso argomento
  const prevLevel = level.level > 1 ? level.level - 1 : null;
  const nextLevel = level.level < topic.levels.length ? level.level + 1 : null;

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
      <span class="badge-tag">
        <span aria-hidden="true">${topic.icon}</span> Argomento ${topic.number} · Livello ${level.level} di ${topic.levels.length}
      </span>
      <h1 class="view-title">${level.title}</h1>
    </header>

    <section class="blueprint-card" aria-label="Struttura del livello">
      <div class="blueprint-header-row">
        <span class="blueprint-icon" aria-hidden="true">🎯</span>
        <div class="blueprint-label">Obiettivo del Livello (Blueprint)</div>
      </div>
      <p class="blueprint-text">"${level.blueprint}"</p>
    </section>

    ${exercisesSectionHtml}

    <nav class="level-nav-bar" aria-label="Navigazione tra livelli">
      ${
        prevLevel
          ? `<a href="#/${topic.id}/${prevLevel}" class="btn-arcade btn-secondary">← Livello precedente</a>`
          : `<button type="button" class="btn-arcade btn-secondary" disabled aria-disabled="true">← Livello precedente</button>`
      }
      <a href="#/${topic.id}" class="btn-arcade btn-secondary">Mappa argomento</a>
      ${
        nextLevel
          ? `<a href="#/${topic.id}/${nextLevel}" class="btn-arcade btn-primary">Livello successivo →</a>`
          : `<button type="button" class="btn-arcade btn-primary" disabled aria-disabled="true">Livello successivo →</button>`
      }
    </nav>
  `;
}

/**
 * Vista Esercizio (#/<topicId>/<livello>/<n>):
 * - Breadcrumb: Home > Sezione > Livello > Esercizio n
 * - Testo formattato, eventuale tabella o SVG
 * - Form con feedback aria-live="polite", pulsante controlla e soluzione
 * - Navigazione con pulsanti 3D
 */
function renderExercise(topic, level, exerciseIndex, exercise) {
  document.title = `Esercizio ${exerciseIndex} - Livello ${level.level} - ${topic.title} | MATH ARENA`;
  announceForScreenReader(`Esercizio ${exerciseIndex} di ${level.exercises.length}: ${level.title} caricato.`);

  const solved = isExerciseSolved(exercise.id);

  // Tabella se presente
  let tableHtml = "";
  if (exercise.table && Array.isArray(exercise.table.headers) && Array.isArray(exercise.table.rows)) {
    const ths = exercise.table.headers.map((h) => `<th>${h}</th>`).join("");
    const trs = exercise.table.rows
      .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
      .join("");

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

  // SVG se presente
  let svgHtml = "";
  if (exercise.svg) {
    svgHtml = `
      <div class="exercise-svg-box" aria-hidden="false">
        ${exercise.svg}
      </div>
    `;
  }

  // Bottoni di navigazione tra esercizi
  const prevEx = exerciseIndex > 1 ? exerciseIndex - 1 : null;
  const nextEx = exerciseIndex < level.exercises.length ? exerciseIndex + 1 : null;

  DOM.viewContainer.innerHTML = `
    <nav class="breadcrumb-nav" aria-label="Breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="#/">Home</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li><a href="#/${topic.id}">${topic.title}</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li><a href="#/${topic.id}/${level.level}">Livello ${level.level}</a></li>
        <li class="breadcrumb-separator" aria-hidden="true">/</li>
        <li class="breadcrumb-current" aria-current="page">Esercizio ${exerciseIndex}</li>
      </ol>
    </nav>

    <header class="view-header">
      <div class="card-header-line">
        <span class="badge-tag">
          <span aria-hidden="true">${topic.icon}</span> ${topic.title} · Livello ${level.level}
        </span>
        ${solved ? `<span class="exercise-solved-badge" aria-label="Esercizio già risolto">✔ Risolto</span>` : ""}
      </div>
      <h1 class="view-title">Esercizio ${exerciseIndex} di ${level.exercises.length}</h1>
    </header>

    <section class="exercise-arena-card" aria-label="Area dell'esercizio">
      <p class="exercise-prompt-text" id="exercise-text">${exercise.text}</p>

      ${tableHtml}
      ${svgHtml}

      <form class="exercise-form" id="exercise-form" onsubmit="return false;">
        <label for="answer-input" class="answer-label">La tua risposta:</label>
        <div class="answer-input-group">
          <input
            type="text"
            id="answer-input"
            class="answer-input"
            inputmode="text"
            autocomplete="off"
            placeholder="Scrivi qui la risposta..."
            aria-describedby="exercise-text feedback-live"
          />
          <button type="submit" id="btn-check" class="btn-arcade btn-primary">
            <span>Controlla</span>
            <span aria-hidden="true">✔</span>
          </button>
          <button type="button" id="btn-solution" class="btn-arcade btn-secondary">
            <span>Mostra spiegazione</span>
            <span aria-hidden="true">💡</span>
          </button>
        </div>

        <div id="feedback-live" class="feedback-box" role="status" aria-live="polite"></div>

        <div id="solution-box" class="solution-box" aria-live="polite" hidden>
          <div class="solution-header">
            <span aria-hidden="true">💡</span> Risposta corretta e spiegazione passo-passo
          </div>
          <div class="solution-correct-answer">
            <strong>Risposta corretta:</strong> <span class="solution-answer-value">${exercise.answer}</span>
          </div>
          <p class="solution-explanation-text">${exercise.explanation}</p>
        </div>
      </form>
    </section>

    <nav class="exercise-nav-bar" aria-label="Navigazione esercizi">
      ${
        prevEx
          ? `<a href="#/${topic.id}/${level.level}/${prevEx}" class="btn-arcade btn-secondary">← Esercizio precedente</a>`
          : `<button type="button" class="btn-arcade btn-secondary" disabled aria-disabled="true">← Esercizio precedente</button>`
      }
      <a href="#/${topic.id}/${level.level}" class="btn-arcade btn-secondary">Torna all'elenco</a>
      ${
        nextEx
          ? `<a href="#/${topic.id}/${level.level}/${nextEx}" class="btn-arcade btn-primary">Esercizio successivo →</a>`
          : `<button type="button" class="btn-arcade btn-primary" disabled aria-disabled="true">Esercizio successivo →</button>`
      }
    </nav>
  `;

  attachExerciseHandlers(exercise);
}

/**
 * Gestione degli eventi del form esercizio:
 * - click o invio su Controlla -> esegue checkAnswer
 * - click su Mostra/Nascondi soluzione
 * - feedback accessibile e animazioni
 */
function attachExerciseHandlers(exercise) {
  const form = document.getElementById("exercise-form");
  const input = document.getElementById("answer-input");
  const checkBtn = document.getElementById("btn-check");
  const solutionBtn = document.getElementById("btn-solution");
  const feedbackBox = document.getElementById("feedback-live");
  const solutionBox = document.getElementById("solution-box");

  if (!input) return;

  input.focus();

  function doCheck() {
    const rawVal = input.value;
    if (!rawVal || !rawVal.trim()) {
      input.focus();
      return;
    }

    const isCorrect = checkAnswer(exercise, rawVal);

    input.classList.remove("is-correct", "is-wrong");
    feedbackBox.classList.remove("is-correct", "is-wrong");

    if (isCorrect) {
      input.classList.add("is-correct");
      feedbackBox.classList.add("is-visible", "is-correct");
      feedbackBox.innerHTML = `
        <div class="feedback-inner">
          <span class="feedback-icon" aria-hidden="true">🎉</span>
          <div>
            <strong>Eccellente! Risposta corretta!</strong>
            <p class="feedback-sub">Hai completato questa sfida con successo. Continua così!</p>
          </div>
        </div>
      `;
      announceForScreenReader("Corretto!");
      triggerSparks(input);
      markExerciseSolved(exercise.id);
    } else {
      void input.offsetWidth; // Riavvia l'animazione shake
      input.classList.add("is-wrong");
      feedbackBox.classList.add("is-visible", "is-wrong");
      feedbackBox.innerHTML = `
        <div class="feedback-inner">
          <span class="feedback-icon" aria-hidden="true">💪</span>
          <div>
            <strong>Non ancora, riprova!</strong>
            <p class="feedback-sub">Fai un altro tentativo, controlla bene i passaggi o consulta la spiegazione.</p>
          </div>
        </div>
      `;
      announceForScreenReader("Non ancora, riprova.");
    }
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      doCheck();
    });
  }

  if (checkBtn) {
    checkBtn.addEventListener("click", (e) => {
      e.preventDefault();
      doCheck();
    });
  }

  if (solutionBtn && solutionBox) {
    solutionBtn.addEventListener("click", () => {
      const isHidden = solutionBox.hasAttribute("hidden") || !solutionBox.classList.contains("is-visible");
      if (isHidden) {
        solutionBox.removeAttribute("hidden");
        solutionBox.classList.add("is-visible");
        solutionBtn.innerHTML = `<span>Nascondi spiegazione</span> <span aria-hidden="true">▲</span>`;
      } else {
        solutionBox.setAttribute("hidden", "");
        solutionBox.classList.remove("is-visible");
        solutionBtn.innerHTML = `<span>Mostra spiegazione</span> <span aria-hidden="true">💡</span>`;
      }
    });
  }
}

/**
 * Vista 404: percorso o esercizio inesistente
 */
function renderNotFound() {
  document.title = "Pagina non trovata | MATH ARENA";
  announceForScreenReader("Pagina non trovata.");

  DOM.viewContainer.innerHTML = `
    <section class="not-found-view" aria-label="Errore 404">
      <div class="not-found-code">404</div>
      <h1 class="view-title">Pagina non trovata</h1>
      <p class="view-subtitle" style="margin-bottom: 1.5rem;">
        Le coordinate o il numero di esercizio inseriti non esistono in questa arena.
      </p>
      <a href="#/" class="btn-arcade btn-primary">Torna alla Home Arena</a>
    </section>
  `;
}

/* ==========================================================================
   5. SEZIONE AUTO-TEST (ESECUTORE DI COLLAUDO PER CONSOLE DEVTOOLS)
   ========================================================================== */

/**
 * Esegue la suite di auto-test su checkAnswer e parseNumber.
 * Può essere richiamata in qualsiasi momento dalla console del browser: runSelfTests()
 */
function runSelfTests() {
  const tests = [
    {
      name: "1. Exact match: frazione identica",
      exercise: { answer: "3/8", exact: true },
      input: "3/8",
      expected: true
    },
    {
      name: "2. Exact match: spazi rimossi e formato esatto",
      exercise: { answer: "3/8", exact: true },
      input: "  3 / 8  ",
      expected: true
    },
    {
      name: "3. Exact match: frazione equivalente (6/16) deve fallire",
      exercise: { answer: "3/8", exact: true },
      input: "6/16",
      expected: false
    },
    {
      name: "4. Exact match: decimale equivalente (0.375) deve fallire",
      exercise: { answer: "3/8", exact: true },
      input: "0.375",
      expected: false
    },
    {
      name: "5. Numerico: frazione equivalente quando exact è false (6/16 per 3/8)",
      exercise: { answer: "3/8", exact: false },
      input: "6/16",
      expected: true
    },
    {
      name: "6. Numerico: decimale con virgola (0,375 per 3/8)",
      exercise: { answer: "3/8" },
      input: "0,375",
      expected: true
    },
    {
      name: "7. Numerico: decimale con punto (0.375 per 3/8)",
      exercise: { answer: "3/8" },
      input: "0.375",
      expected: true
    },
    {
      name: "8. Numerico: percentuale con virgola (37,5% per 3/8)",
      exercise: { answer: "3/8" },
      input: "37,5%",
      expected: true
    },
    {
      name: "9. Numerico: percentuale con punto (37.5% per 3/8)",
      exercise: { answer: "3/8" },
      input: "37.5%",
      expected: true
    },
    {
      name: "10. Numerico: frazione per risposta espressa in decimale (1/4 per 0,25)",
      exercise: { answer: "0,25" },
      input: "1/4",
      expected: true
    },
    {
      name: "11. Numerico: percentuale per risposta espressa in decimale (25% per 0,25)",
      exercise: { answer: "0,25" },
      input: "25%",
      expected: true
    },
    {
      name: "12. Numerico: segno meno unicode '−' (es. −0,5 per -1/2)",
      exercise: { answer: "-1/2" },
      input: "−0,5",
      expected: true
    },
    {
      name: "13. Numerico: tolleranza numerica personalizzata (3,14 per 3.14159 con tol 0.01)",
      exercise: { answer: "3.14159", tolerance: 0.01 },
      input: "3,14",
      expected: true
    },
    {
      name: "14. Numerico: divisione per zero rifiutata (4/0)",
      exercise: { answer: "0" },
      input: "4/0",
      expected: false
    },
    {
      name: "15. Ripiego testuale: parola con spazi e maiuscole ('  Rettangolo  ')",
      exercise: { answer: "rettangolo" },
      input: "  Rettangolo  ",
      expected: true
    },
    {
      name: "16. Lista accepted: risposte alternative accettate",
      exercise: { answer: "1/2", accepted: ["metà"] },
      input: "metà",
      expected: true
    },
    {
      name: "17. Input non valido: stringa vuota o di soli spazi",
      exercise: { answer: "10" },
      input: "   ",
      expected: false
    }
  ];

  let passed = 0;
  const results = [];

  for (const t of tests) {
    const actual = checkAnswer(t.exercise, t.input);
    const ok = actual === t.expected;
    if (ok) passed++;
    results.push({
      Test: t.name,
      Input: t.input,
      Atteso: t.expected,
      Ottenuto: actual,
      Esito: ok ? "✔ PASS" : "✖ FAIL"
    });
  }

  console.group(`[AUTO-TEST MATH ARENA] checkAnswer: ${passed}/${tests.length} superati`);
  if (console.table) {
    console.table(results);
  } else {
    results.forEach((r) => console.log(`${r.Esito} | ${r.Test}`));
  }
  console.groupEnd();

  return { total: tests.length, passed, failed: tests.length - passed, results };
}

// Esponi runSelfTests globalmente per l'esecuzione manuale da console
window.runSelfTests = runSelfTests;

// Esegui automaticamente gli auto-test al caricamento dello script
try {
  runSelfTests();
} catch (err) {
  console.error("Errore durante l'esecuzione degli auto-test:", err);
}
