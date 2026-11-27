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
        blueprint: "Espressione con + e × (o − e ÷) senza parentesi.",
        exercises: [
          {
            id: "numeri-2-01",
            text: "Per la classe di disegno la maestra prepara 7 quaderni singoli e 4 confezioni da 6 pennarelli ciascuna. Per calcolare il materiale totale si usa l'espressione:\n7 + 4 × 6\nCalcola il risultato dell'espressione (inserisci solo il valore numerico).",
            answer: "31",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "In un'espressione senza parentesi, la moltiplicazione ha sempre la precedenza rispetto all'addizione: eseguiamo prima 4 × 6 = 24. A questo punto calcoliamo 7 + 24, ottenendo come risultato finale 31.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-02",
            text: "In pasticceria vengono sfornate 5 teglie contenenti ciascuna 8 biscotti alle mandorle, a cui si aggiungono 15 biscotti già pronti sul bancone. Per contare tutti i biscotti calcola il valore dell'espressione:\n5 × 8 + 15\nInserisci solo il valore numerico del risultato.",
            answer: "55",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "La moltiplicazione ha la precedenza rispetto all'addizione: svolgiamo per prima l'operazione 5 × 8 = 40. Infine sommiamo 40 + 15, ottenendo 55.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-03",
            text: "Marco va al mercato con 50 euro nel portafoglio e compra 3 magliette sportive da 12 euro ciascuna. Per scoprire quanti euro gli rimangono risolvi l'espressione:\n50 − 3 × 12\nInserisci solo il valore numerico del risultato.",
            answer: "14",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "La moltiplicazione deve essere eseguita prima della sottrazione per la regola delle precedenze: calcoliamo prima 3 × 12 = 36. Successivamente sottraiamo questo valore da 50: 50 − 36 = 14.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-04",
            text: "In una gara a quiz una squadra ottiene 9 risposte corrette da 7 punti ciascuna, ma subisce una penalità di 18 punti per il tempo scaduto. Per trovare il punteggio finale risolvi l'espressione:\n9 × 7 − 18\nInserisci solo il valore numerico del risultato.",
            answer: "45",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo per prima la moltiplicazione poiché ha la precedenza sulla sottrazione: 9 × 7 = 63. Sottraiamo poi 18 dal risultato parziale calcolando 63 − 18 = 45.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-05",
            text: "Un gruppo scout parte per un'escursione con una scorta di 60 bottigliette d'acqua. Durante la prima tappa distribuisce equamente 36 bottigliette tra i 4 capisquadra. L'espressione che indica le bottigliette rimaste è:\n60 − 36 ÷ 4\nCalcola il valore dell'espressione (inserisci solo il valore numerico).",
            answer: "51",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Nelle precedenze aritmetiche, la divisione va sempre eseguita prima della sottrazione: calcoliamo innanzitutto 36 ÷ 4 = 9. Ora possiamo completare il calcolo con la sottrazione: 60 − 9 = 51.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-06",
            text: "Un laboratorio artigianale produce 84 kg di marmellata che vengono confezionati in barattoli da 2 kg ciascuno. Se 15 di questi barattoli vengono subito venduti, per sapere quanti ne restano calcola il valore dell'espressione:\n84 ÷ 2 − 15\nInserisci solo il valore numerico del risultato.",
            answer: "27",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "La divisione ha la precedenza rispetto alla sottrazione: svolgiamo prima l'operazione 84 ÷ 2 = 42. Infine eseguiamo la sottrazione calcolando 42 − 15 = 27.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-07",
            text: "La biblioteca scolastica possiede 100 libri di narrativa. Durante la settimana distribuisce 72 libri in parti uguali tra 6 classi di studenti. Per determinare quanti libri restano disponibili calcola:\n100 − 72 ÷ 6\nInserisci solo il valore numerico del risultato.",
            answer: "88",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "La divisione deve essere svolta per prima rispetto alla sottrazione: calcoliamo prima 72 ÷ 6 = 12. Successivamente completiamo il calcolo sottraendo 12 da 100: 100 − 12 = 88.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-08",
            text: "Durante una sessione di allenamento in piscina, un nuotatore compie prima 15 vasche di riscaldamento e poi serie ripetute secondo l'espressione:\n15 + 18 ÷ 3 × 4\nCalcola il valore dell'espressione rispettando le precedenze (inserisci solo il valore numerico).",
            answer: "39",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Moltiplicazioni e divisioni hanno la precedenza sulle addizioni e, avendo pari priorità tra loro, si svolgono nell'ordine in cui compaiono da sinistra a destra. Eseguiamo quindi prima la divisione 18 ÷ 3 = 6, poi la moltiplicazione 6 × 4 = 24 e infine l'addizione: 15 + 24 = 39.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-09",
            text: "Per organizzare una festa di classe si acquistano 8 confezioni di succhi di frutta da 6 euro ciascuna e si applica un buono sconto calcolato dividendo 40 euro tra 5 persone. L'espressione della spesa finale è:\n8 × 6 − 40 ÷ 5\nCalcola il valore dell'espressione (inserisci solo il valore numerico).",
            answer: "40",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Moltiplicazione e divisione hanno entrambe la precedenza sulla sottrazione e si eseguono per prime: calcoliamo 8 × 6 = 48 e 40 ÷ 5 = 8. Infine svolgiamo la sottrazione tra i due valori ottenuti: 48 − 8 = 40.",
            table: null,
            svg: null
          },
          {
            id: "numeri-2-10",
            text: "Durante un viaggio in treno lungo una linea di 50 fermate totali, un convoglio rapido salta 4 tratte da 7 fermate ciascuna, ma include successivamente 12 fermate di coincidenza. L'espressione che indica le fermate effettuate è:\n50 − 4 × 7 + 12\nCalcola il valore dell'espressione rispettando le precedenze (inserisci solo il valore numerico).",
            answer: "34",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Per prima cosa eseguiamo la moltiplicazione, che ha la precedenza: 4 × 7 = 28. Rimangono una sottrazione e un'addizione, che hanno pari priorità e vanno quindi eseguite da sinistra a destra: calcoliamo prima 50 − 28 = 22 e infine 22 + 12 = 34.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 3,
        title: "Multipli e divisori (MCD e mcm)",
        blueprint: "Due numeri da scomporre in fattori primi, poi calcolo di MCD o mcm.",
        exercises: [
          {
            id: "numeri-3-01",
            text: "Il numero 47 è un numero primo? Rispondi sì o no.",
            answer: "sì",
            accepted: ["si", "sì"],
            tolerance: 0,
            exact: true,
            explanation: "Verifichiamo la divisibilità di 47 per i numeri primi minori della sua radice quadrata (2, 3, 5): non è pari, la somma delle cifre 4 + 7 = 11 non è multiplo di 3 e l'ultima cifra non è 0 né 5. Poiché 7² = 49 > 47, non ha altri divisori oltre a 1 e se stesso (la sua scomposizione in fattori primi è semplicemente 47 = 47), quindi è un numero primo.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-02",
            text: "Calcola il Massimo Comune Divisore tra 18 e 30: MCD(18, 30).\nInserisci solo il valore numerico del risultato.",
            answer: "6",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo entrambi i numeri in fattori primi: 18 = 2 · 3² e 30 = 2 · 3 · 5. Per calcolare il MCD moltiplichiamo solo i fattori comuni con l'esponente minore, cioè 2 e 3. Otteniamo quindi MCD(18, 30) = 2 · 3 = 6.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-03",
            text: "Calcola il Massimo Comune Divisore tra 36 e 48: MCD(36, 48).\nInserisci solo il valore numerico del risultato.",
            answer: "12",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo in fattori primi: 36 = 2² · 3² e 48 = 2⁴ · 3. I fattori primi comuni presi con il minimo esponente sono 2² e 3. Calcoliamo quindi MCD(36, 48) = 2² · 3 = 4 · 3 = 12.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-04",
            text: "Calcola il Massimo Comune Divisore tra 45 e 75: MCD(45, 75).\nInserisci solo il valore numerico del risultato.",
            answer: "15",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo i due numeri in fattori primi: 45 = 3² · 5 e 75 = 3 · 5². Scegliamo i fattori comuni con l'esponente minore, che sono 3 e 5. Otteniamo quindi MCD(45, 75) = 3 · 5 = 15.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-05",
            text: "Calcola il Massimo Comune Divisore tra 60 e 90: MCD(60, 90).\nInserisci solo il valore numerico del risultato.",
            answer: "30",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo entrambi i numeri in fattori primi: 60 = 2² · 3 · 5 e 90 = 2 · 3² · 5. I fattori comuni presi con l'esponente minore sono 2, 3 e 5. Il risultato è MCD(60, 90) = 2 · 3 · 5 = 30.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-06",
            text: "Calcola il minimo comune multiplo tra 8 e 12: mcm(8, 12).\nInserisci solo il valore numerico del risultato.",
            answer: "24",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo i due numeri in fattori primi: 8 = 2³ e 12 = 2² · 3. Per trovare il mcm moltiplichiamo tutti i fattori primi, comuni e non comuni, ciascuno con il massimo esponente. Calcoliamo quindi mcm(8, 12) = 2³ · 3 = 8 · 3 = 24.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-07",
            text: "Calcola il minimo comune multiplo tra 14 e 21: mcm(14, 21).\nInserisci solo il valore numerico del risultato.",
            answer: "42",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo in fattori primi: 14 = 2 · 7 e 21 = 3 · 7. Moltiplichiamo i fattori comuni e non comuni presi una sola volta con il massimo esponente: 2, 3 e 7. Troviamo così mcm(14, 21) = 2 · 3 · 7 = 42.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-08",
            text: "Calcola il minimo comune multiplo tra 20 e 24: mcm(20, 24).\nInserisci solo il valore numerico del risultato.",
            answer: "120",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo i numeri in fattori primi: 20 = 2² · 5 e 24 = 2³ · 3. I fattori primi comuni e non comuni presi con il massimo esponente sono 2³, 3 e 5. Otteniamo mcm(20, 24) = 2³ · 3 · 5 = 8 · 3 · 5 = 120.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-09",
            text: "Calcola il minimo comune multiplo tra 36 e 45: mcm(36, 45).\nInserisci solo il valore numerico del risultato.",
            answer: "180",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Scomponiamo in fattori primi: 36 = 2² · 3² e 45 = 3² · 5. Scegliamo tutti i fattori comuni e non comuni con il massimo esponente, cioè 2², 3² e 5. Calcoliamo quindi mcm(36, 45) = 2² · 3² · 5 = 4 · 9 · 5 = 180.",
            table: null,
            svg: null
          },
          {
            id: "numeri-3-10",
            text: "Due autobus di linea partono contemporaneamente dal capolinea alle ore 8:00. Il primo autobus ripassa dal capolinea ogni 12 minuti, mentre il secondo autobus ripassa ogni 18 minuti. Dopo quanti minuti i due autobus si troveranno di nuovo insieme al capolinea per la prima volta?\nRisposta in minuti (inserisci solo il valore numerico).",
            answer: "36",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Il tempo necessario perché i due autobus si ritrovino insieme è dato dal minimo comune multiplo tra 12 e 18. Scomponiamo i due numeri in fattori primi: 12 = 2² · 3 e 18 = 2 · 3². Prendiamo i fattori comuni e non comuni con l'esponente maggiore: mcm(12, 18) = 2² · 3² = 4 · 9 = 36 minuti.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 4,
        title: "Numeri relativi",
        blueprint: "Più operazioni con numeri positivi e negativi, applicando la regola dei segni.",
        exercises: [
          {
            id: "numeri-4-01",
            text: "In un laboratorio scientifico una provetta si trova alla temperatura di (+5) °C. Inserita in una cella refrigerante, la sua temperatura subisce una variazione di (−12) °C. Per trovare la temperatura finale calcola:\n(+5) + (−12)\nRisposta in °C (inserisci solo il valore numerico intero).",
            answer: "-7",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Sommiamo due numeri con segni discordi: il risultato prende il segno del numero che ha valore assoluto maggiore (il segno meno di −12) e come valore la differenza tra i valori assoluti (12 − 5 = 7). Quindi (+5) + (−12) = −7.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-02",
            text: "In un videogioco di esplorazione, un personaggio scende prima in una grotta fino alla quota di (−9) metri e poi scende ancora di (−14) metri. La sua posizione finale si calcola con l'addizione:\n(−9) + (−14)\nRisposta in metri (inserisci solo il valore numerico intero).",
            answer: "-23",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Quando sommiamo due numeri concordi negativi, il risultato mantiene il segno meno e ha come valore la somma dei loro valori assoluti: 9 + 14 = 23. Di conseguenza (−9) + (−14) = −23.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-03",
            text: "Il bilancio della cassa di una cooperativa scolastica registra (+16) euro. Viene annullata una penale precedentemente conteggiata di 9 euro, operazione equivalente a sottrarre un importo negativo:\n(+16) − (−9)\nRisposta in euro (inserisci solo il valore numerico intero).",
            answer: "25",
            accepted: ["+25"],
            tolerance: 0,
            exact: false,
            explanation: "Sottrarre un numero negativo equivale ad addizionare il suo opposto positivo: i due segni meno consecutivi diventano un segno più. Calcoliamo quindi (+16) − (−9) = 16 + 9 = 25.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-04",
            text: "Durante un'escursione in montagna la temperatura dell'aria passa da (−7) °C a (−18) °C. La variazione complessiva segnata dal termometro si ottiene con la sottrazione:\n(−18) − (−7)\nRisposta in °C (inserisci solo il valore numerico intero).",
            answer: "-11",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Trasformiamo la sottrazione in addizione sommando l'opposto: sottrarre (−7) equivale a sommare (+7), ottenendo (−18) + (+7). Poiché i numeri sono discordi, prendiamo il segno del numero con valore assoluto maggiore (−) e calcoliamo la differenza: 18 − 7 = 11, per cui il risultato è −11.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-05",
            text: "In una gara di orienteering ogni errore di percorso comporta una penalità di (−6) punti. Se una squadra compie 4 errori consecutivi, il punteggio totale delle penalità si calcola moltiplicando:\n(+4) × (−6)\nInserisci solo il valore numerico intero del risultato.",
            answer: "-24",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Per la regola dei segni, il prodotto di due fattori con segni discordi (uno positivo e uno negativo) è sempre negativo. Moltiplichiamo i valori assoluti 4 × 6 = 24 e applichiamo il segno meno, ottenendo −24.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-06",
            text: "In un'attività di economia a scuola viene annullata una serie di 7 perdite settimanali da (−8) euro ciascuna. L'operazione di compensazione nel bilancio è data dal prodotto:\n(−7) × (−8)\nInserisci solo il valore numerico intero del risultato.",
            answer: "56",
            accepted: ["+56"],
            tolerance: 0,
            exact: false,
            explanation: "Per la regola dei segni, il prodotto di due numeri concordi negativi è positivo: 'meno per meno fa più'. Moltiplichiamo i valori assoluti 7 × 8 = 56, ottenendo come risultato +56 (o 56).",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-07",
            text: "Un debito complessivo di 54 euro per l'acquisto di materiale sportivo viene suddiviso equamente tra 6 studenti. La quota individuale di debito si determina con la divisione tra numeri relativi:\n(−54) ÷ (+6)\nInserisci solo il valore numerico intero del risultato.",
            answer: "-9",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Nella divisione tra numeri relativi vale la stessa regola dei segni della moltiplicazione: dividendo due numeri con segni discordi il quoziente è negativo. Eseguiamo 54 ÷ 6 = 9 e attribuiamo il segno meno, ottenendo −9.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-08",
            text: "In una sfida di giochi matematici il punteggio di una manche speciale combina penalità e bonus secondo l'espressione:\n(−4) × (+5) + (+27)\nCalcola il risultato rispettando le precedenze delle operazioni (inserisci solo il valore numerico intero).",
            answer: "7",
            accepted: ["+7"],
            tolerance: 0,
            exact: false,
            explanation: "Rispettiamo l'ordine delle operazioni eseguendo prima la moltiplicazione: (−4) × (+5) = −20, poiché il prodotto di segni discordi è negativo. Eseguiamo poi l'addizione: (−20) + (+27) = 7, sommando due numeri discordi in cui prevale il valore assoluto del numero positivo.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-09",
            text: "Durante una prova di collaudo termico, la variazione di stato di un sensore elettronico è descritta dall'espressione:\n(−5) × (−6) − (+42)\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-12",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Eseguiamo per prima la moltiplicazione: il prodotto di due numeri concordi negativi è positivo, per cui (−5) × (−6) = +30. Completiamo con la sottrazione: (+30) − (+42) = 30 − 42 = −12, dato che sottraendo un valore maggiore si ottiene un numero negativo.",
            table: null,
            svg: null
          },
          {
            id: "numeri-4-10",
            text: "In una simulazione sull'escursione termica nello spazio, la temperatura stimata per un modulo orbitante è espressa da:\n(−7) × (+4) − (−15)\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-13",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Risolviamo per prima la moltiplicazione: il prodotto di fattori con segni discordi è negativo, quindi (−7) × (+4) = −28. Successivamente affrontiamo la sottrazione: sottrarre un numero negativo equivale a sommare il suo opposto, ottenendo (−28) + 15 = −13.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 5,
        title: "Espressione complessa",
        blueprint: "Relativi, potenze, radici e parentesi annidate in un'unica espressione.",
        exercises: [
          {
            id: "numeri-5-01",
            text: "In un laboratorio di robotica a scuola, il percorso a ostacoli di un rover assegna un punteggio calcolato con la seguente espressione:\n7 × (2⁴ − 11) − 5²\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "10",
            accepted: ["+10"],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze): calcoliamo prima le potenze 2⁴ = 16 e 5² = 25, ottenendo 7 × (16 − 11) − 25.\nPassaggio 2 (parentesi tonda): svolgiamo la sottrazione nella tonda (16 − 11) = 5, ottenendo 7 × 5 − 25.\nPassaggio 3 (moltiplicazione): eseguiamo la moltiplicazione 7 × 5 = 35, ottenendo 35 − 25.\nPassaggio 4 (sottrazione finale): completiamo l'operazione calcolando 35 − 25 = 10.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-02",
            text: "Nel bilancio di fine trimestre del giornalino scolastico, il saldo contabile tra vendite e costi straordinari è espresso da:\n6 × (3² − 14) + 4²\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-14",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze): calcoliamo le potenze 3² = 9 e 4² = 16, ottenendo 6 × (9 − 14) + 16.\nPassaggio 2 (parentesi tonda): risolviamo la sottrazione nella tonda (9 − 14) = −5, ottenendo 6 × (−5) + 16.\nPassaggio 3 (moltiplicazione): applichiamo la regola dei segni calcolando 6 × (−5) = −30, ottenendo −30 + 16.\nPassaggio 4 (somma finale): completiamo l'addizione algebrica −30 + 16 = −14.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-03",
            text: "In una gara di orienteering a cronometro, il distacco in secondi tra due concorrenti è determinato dall'espressione:\n(3⁴ − 17) ÷ 2³ − 15\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-7",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze): calcoliamo le potenze 3⁴ = 81 e 2³ = 8, ottenendo (81 − 17) ÷ 8 − 15.\nPassaggio 2 (parentesi tonda): eseguiamo la sottrazione nella tonda (81 − 17) = 64, ottenendo 64 ÷ 8 − 15.\nPassaggio 3 (divisione): svolgiamo la divisione 64 ÷ 8 = 8, ottenendo 8 − 15.\nPassaggio 4 (sottrazione finale): completiamo il calcolo tra numeri relativi 8 − 15 = −7.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-04",
            text: "In un laboratorio di pasticceria, la variazione di peso in grammi degli ingredienti dosati da una bilancia elettronica è data da:\n4 × (√36 − 11) + √121\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-9",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (radici quadrate): calcoliamo le radici esatte √36 = 6 e √121 = 11, ottenendo 4 × (6 − 11) + 11.\nPassaggio 2 (parentesi tonda): risolviamo la sottrazione nella tonda (6 − 11) = −5, ottenendo 4 × (−5) + 11.\nPassaggio 3 (moltiplicazione): moltiplichiamo con la regola dei segni 4 × (−5) = −20, ottenendo −20 + 11.\nPassaggio 4 (somma finale): completiamo l'addizione algebrica −20 + 11 = −9.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-05",
            text: "Durante il tragitto di una funivia alpina, la variazione di quota registrata da un altimetro digitale è indicata da:\n(√100 − 4) × (2³ − √81)\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-6",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (radici e potenze): calcoliamo le radici √100 = 10, √81 = 9 e la potenza 2³ = 8, ottenendo (10 − 4) × (8 − 9).\nPassaggio 2 (parentesi tonde): risolviamo le operazioni nelle due tonde (10 − 4) = 6 e (8 − 9) = −1, ottenendo 6 × (−1).\nPassaggio 3 (moltiplicazione finale): moltiplichiamo i due numeri concordando il segno 6 × (−1) = −6.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-06",
            text: "In una prova sui materiali condotta in una camera climatica, la temperatura finale in gradi Celsius è calcolata tramite:\n(5² − √81) ÷ (√64 − 10) − √25\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-13",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze e radici): calcoliamo 5² = 25, √81 = 9, √64 = 8 e √25 = 5, ottenendo (25 − 9) ÷ (8 − 10) − 5.\nPassaggio 2 (parentesi tonde): eseguiamo i calcoli nelle due tonde (25 − 9) = 16 e (8 − 10) = −2, ottenendo 16 ÷ (−2) − 5.\nPassaggio 3 (divisione): svolgiamo la divisione con la regola dei segni 16 ÷ (−2) = −8, ottenendo −8 − 5.\nPassaggio 4 (sottrazione finale): completiamo la somma di numeri concordi negativi −8 − 5 = −13.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-07",
            text: "In un videogioco di avventura, il bilancio finale dei punti raccolti tra gemme e penalità è descritto da:\n[√81 − (2³ + 6)] × 5 − (−2)³\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-17",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze e radici interne): calcoliamo 2³ = 8, √81 = 9 e (−2)³ = −8, ottenendo [9 − (8 + 6)] × 5 − (−8).\nPassaggio 2 (parentesi tonda): risolviamo l'addizione nella tonda interna (8 + 6) = 14, ottenendo [9 − 14] × 5 − (−8).\nPassaggio 3 (parentesi quadra): eseguiamo la sottrazione dentro la quadra [9 − 14] = −5, ottenendo (−5) × 5 − (−8).\nPassaggio 4 (calcolo finale): moltiplichiamo (−5) × 5 = −25 e completiamo −25 − (−8) = −25 + 8 = −17.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-08",
            text: "Al termine di una regata velica a tappe, la classifica combinata di un equipaggio è calcolata tramite l'espressione:\n[5 × (√25 − 8) + 4²] × 3 − (−2)³\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "11",
            accepted: ["+11"],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze e radici interne): calcoliamo √25 = 5, 4² = 16 e (−2)³ = −8, ottenendo [5 × (5 − 8) + 16] × 3 − (−8).\nPassaggio 2 (parentesi tonda): risolviamo la tonda interna (5 − 8) = −3, ottenendo [5 × (−3) + 16] × 3 − (−8).\nPassaggio 3 (parentesi quadra): svolgiamo la moltiplicazione 5 × (−3) = −15 e la somma [−15 + 16] = 1, ottenendo 1 × 3 − (−8).\nPassaggio 4 (calcolo finale): eseguiamo la moltiplicazione 1 × 3 = 3 e completiamo 3 − (−8) = 3 + 8 = 11.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-09",
            text: "In una simulazione di traiettoria orbitale di una sonda spaziale, il disallineamento rispetto alla rotta è espresso da:\n[(−4)² − (2³ + √36)] × (−3) − (−2)⁴\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "-22",
            accepted: [],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze e radici interne): calcoliamo (−4)² = 16, 2³ = 8, √36 = 6 e (−2)⁴ = 16, ottenendo [16 − (8 + 6)] × (−3) − 16.\nPassaggio 2 (parentesi tonda): calcoliamo l'addizione nella tonda interna (8 + 6) = 14, ottenendo [16 − 14] × (−3) − 16.\nPassaggio 3 (parentesi quadra): eseguiamo la sottrazione nella quadra [16 − 14] = 2, ottenendo 2 × (−3) − 16.\nPassaggio 4 (calcolo finale): moltiplichiamo con la regola dei segni 2 × (−3) = −6 e completiamo −6 − 16 = −22.",
            table: null,
            svg: null
          },
          {
            id: "numeri-5-10",
            text: "Durante un'esplorazione oceanica con un batiscafo, la variazione netta di profondità in metri è calcolata tramite l'espressione:\n[√144 − 3 × (2⁴ − √100)] ÷ (−2) + [(−2)³ + √49]\nCalcola il valore dell'espressione (inserisci solo il valore numerico intero).",
            answer: "2",
            accepted: ["+2"],
            tolerance: 0,
            exact: false,
            explanation: "Passaggio 1 (potenze e radici interne): calcoliamo le radici e le potenze interne √144 = 12, 2⁴ = 16, √100 = 10, (−2)³ = −8 e √49 = 7, ottenendo [12 − 3 × (16 − 10)] ÷ (−2) + [−8 + 7].\nPassaggio 2 (parentesi tonda): risolviamo la tonda (16 − 10) = 6, ottenendo [12 − 3 × 6] ÷ (−2) + [−8 + 7].\nPassaggio 3 (parentesi quadre): nella prima quadra calcoliamo 12 − 18 = −6 e nella seconda [−8 + 7] = −1, ottenendo (−6) ÷ (−2) + (−1).\nPassaggio 4 (calcolo finale): eseguiamo la divisione (−6) ÷ (−2) = 3 e completiamo la somma algebrica 3 + (−1) = 2.",
            table: null,
            svg: null
          }
        ]
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
        blueprint: "Una figura semplice con le misure dei lati già date.",
        exercises: [
          {
            id: "geometria-1-01",
            text: "Una fotografia rettangolare ha la base di 9 cm e l'altezza di 6 cm.\nCalcola il perimetro della fotografia in cm (inserisci solo il valore numerico).",
            answer: "30",
            accepted: ["30"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il perimetro del rettangolo si calcola sommando il doppio della base e il doppio dell'altezza: P = 2 × (base + altezza) = 2 × (9 + 6) = 2 × 15 = 30 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 150" width="280" height="150" role="img" aria-label="Rettangolo con base di 9 cm e altezza di 6 cm">
  <rect x="40" y="25" width="200" height="95" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="140" y="18" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">9 cm</text>
  <text x="140" y="140" fill="#94A3B8" font-size="13" text-anchor="middle">9 cm</text>
  <text x="24" y="78" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">6 cm</text>
  <text x="256" y="78" fill="#94A3B8" font-size="13" text-anchor="middle">6 cm</text>
</svg>`
          },
          {
            id: "geometria-1-02",
            text: "Una piastrella quadrata ha il lato di 8 cm.\nCalcola il perimetro della piastrella in cm (inserisci solo il valore numerico).",
            answer: "32",
            accepted: ["32"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il quadrato ha tutti e quattro i lati uguali. Per calcolare il perimetro moltiplichiamo la misura del lato per 4: P = 4 × lato = 4 × 8 = 32 cm.",
            table: null,
            svg: `<svg viewBox="0 0 220 180" width="220" height="180" role="img" aria-label="Quadrato con lato di 8 cm">
  <rect x="50" y="30" width="120" height="120" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="110" y="22" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">8 cm</text>
  <text x="30" y="95" fill="#94A3B8" font-size="13" text-anchor="middle">8 cm</text>
  <text x="190" y="95" fill="#94A3B8" font-size="13" text-anchor="middle">8 cm</text>
  <text x="110" y="168" fill="#94A3B8" font-size="13" text-anchor="middle">8 cm</text>
</svg>`
          },
          {
            id: "geometria-1-03",
            text: "Un campo da pallavolo rettangolare ha la base di 18 m e l'altezza di 9 m.\nCalcola il perimetro del campo da gioco in metri (inserisci solo il valore numerico).",
            answer: "54",
            accepted: ["54"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il perimetro del rettangolo è la somma di tutti i suoi lati: P = 2 × (base + altezza) = 2 × (18 + 9) = 2 × 27 = 54 m.",
            table: null,
            svg: null
          },
          {
            id: "geometria-1-04",
            text: "Un'aiuola triangolare ha i tre lati che misurano rispettivamente 7 m, 10 m e 12 m.\nCalcola il perimetro dell'aiuola in metri (inserisci solo il valore numerico).",
            answer: "29",
            accepted: ["29"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il perimetro di qualsiasi triangolo si calcola sommando la misura dei suoi tre lati: P = 7 + 10 + 12 = 29 m.",
            table: null,
            svg: `<svg viewBox="0 0 300 170" width="300" height="170" role="img" aria-label="Triangolo con lati di 7 m, 10 m e 12 m">
  <polygon points="40,135 260,135 110,35" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <text x="150" y="156" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">12 m</text>
  <text x="62" y="80" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">7 m</text>
  <text x="200" y="80" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">10 m</text>
</svg>`
          },
          {
            id: "geometria-1-05",
            text: "Un cartoncino quadrato per origami ha il lato di 7,5 cm.\nCalcola il perimetro del cartoncino in cm (inserisci solo il valore numerico).",
            answer: "30",
            accepted: ["30", "30.0", "30,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il perimetro del quadrato si calcola moltiplicando la misura del lato per 4: P = 4 × lato = 4 × 7,5 = 30 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-1-06",
            text: "Un ciondolo ha la forma di un triangolo con i lati che misurano 4,5 cm, 6 cm e 7,5 cm.\nCalcola il perimetro del ciondolo in cm (inserisci solo il valore numerico).",
            answer: "18",
            accepted: ["18", "18.0", "18,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Sommiamo le misure dei tre lati del triangolo: P = 4,5 + 6 + 7,5 = 18 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Triangolo con lati di 4,5 cm, 6 cm e 7,5 cm">
  <polygon points="50,135 230,135 50,35" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <rect x="50" y="120" width="15" height="15" fill="none" stroke="#64748B" stroke-width="1.5" />
  <text x="140" y="156" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">6 cm</text>
  <text x="24" y="90" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">4,5 cm</text>
  <text x="155" y="75" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">7,5 cm</text>
</svg>`
          },
          {
            id: "geometria-1-07",
            text: "Un pannello decorativo ha la forma di un esagono regolare con ciascun lato lungo 8 cm.\nCalcola il perimetro dell'esagono in cm (inserisci solo il valore numerico).",
            answer: "48",
            accepted: ["48"],
            tolerance: 0.01,
            exact: false,
            explanation: "Un esagono regolare ha 6 lati tutti congruenti. Il perimetro si calcola moltiplicando la misura del lato per 6: P = 6 × lato = 6 × 8 = 48 cm.",
            table: null,
            svg: `<svg viewBox="0 0 260 190" width="260" height="190" role="img" aria-label="Esagono regolare con lato di 8 cm">
  <polygon points="195,95 163,151 97,151 65,95 97,39 163,39" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <text x="130" y="28" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">8 cm</text>
  <text x="130" y="172" fill="#94A3B8" font-size="13" text-anchor="middle">8 cm</text>
</svg>`
          },
          {
            id: "geometria-1-08",
            text: "La copertina rettangolare di un libro ha la base di 14,5 cm e l'altezza di 21 cm.\nCalcola il perimetro della copertina in cm (inserisci solo il valore numerico).",
            answer: "71",
            accepted: ["71", "71.0", "71,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Sommiamo base e altezza per trovare il semiperimetro: 14,5 + 21 = 35,5 cm. Moltiplichiamo quindi per 2 per ottenere il perimetro: P = 2 × 35,5 = 71 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-1-09",
            text: "Un giardino quadrato è delimitato da una staccionata lunga in tutto 54 m.\nQuanto misura ciascun lato del giardino in metri? (inserisci solo il valore numerico).",
            answer: "13.5",
            accepted: ["13.5", "13,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Poiché il quadrato ha tutti e quattro i lati uguali, la formula inversa del perimetro è lato = P : 4. Calcoliamo quindi: 54 : 4 = 13,5 m.",
            table: null,
            svg: null
          },
          {
            id: "geometria-1-10",
            text: "Un quadro rettangolare ha un perimetro di 38 cm e la base che misura 12 cm.\nQuanto misura l'altezza del quadro in cm? (inserisci solo il valore numerico).",
            answer: "7",
            accepted: ["7"],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo prima il semiperimetro dividendo il perimetro per 2: 38 : 2 = 19 cm (somma di base e altezza). Sottraiamo poi la base nota: altezza = 19 - 12 = 7 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 160" width="280" height="160" role="img" aria-label="Rettangolo con perimetro 38 cm, base 12 cm e altezza incognita">
  <rect x="40" y="25" width="200" height="95" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="140" y="18" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 12 cm</text>
  <text x="24" y="78" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">h = ?</text>
  <text x="140" y="78" fill="#94A3B8" font-size="14" font-weight="500" text-anchor="middle">Perimetro = 38 cm</text>
  <text x="140" y="140" fill="#94A3B8" font-size="13" text-anchor="middle">12 cm</text>
</svg>`
          }
        ]
      },
      {
        level: 2,
        title: "Area di poligoni",
        blueprint: "Applicare la formula dell'area di quadrato, rettangolo o triangolo.",
        exercises: [
          {
            id: "geometria-2-01",
            text: "Un tassello di mosaico quadrato ha il lato di 7 cm.\nCalcola l'area del tassello in cm² (inserisci solo il valore numerico).",
            answer: "49",
            accepted: ["49"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del quadrato si calcola moltiplicando la misura del lato per se stessa: A = lato × lato = 7 × 7 = 49 cm².",
            table: null,
            svg: `<svg viewBox="0 0 220 180" width="220" height="180" role="img" aria-label="Quadrato con lato di 7 cm">
  <rect x="50" y="30" width="120" height="120" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="110" y="22" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">7 cm</text>
  <text x="30" y="95" fill="#94A3B8" font-size="13" text-anchor="middle">7 cm</text>
  <text x="110" y="95" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-2-02",
            text: "Un cartoncino rettangolare per un invito ha la base di 8 cm e l'altezza di 6 cm.\nCalcola l'area del cartoncino in cm² (inserisci solo il valore numerico).",
            answer: "48",
            accepted: ["48"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del rettangolo si ottiene moltiplicando la misura della base per quella dell'altezza: A = base × altezza = 8 × 6 = 48 cm².",
            table: null,
            svg: `<svg viewBox="0 0 280 160" width="280" height="160" role="img" aria-label="Rettangolo con base di 8 cm e altezza di 6 cm">
  <rect x="40" y="30" width="200" height="100" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="140" y="22" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">8 cm</text>
  <text x="24" y="85" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">6 cm</text>
  <text x="140" y="85" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-2-03",
            text: "Un ciondolo ha la forma di un triangolo con la base di 8 cm e l'altezza di 5 cm.\nCalcola l'area del ciondolo in cm² (inserisci solo il valore numerico).",
            answer: "20",
            accepted: ["20"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del triangolo si calcola moltiplicando la base per l'altezza e dividendo il risultato per 2: A = (base × altezza) : 2 = (8 × 5) : 2 = 40 : 2 = 20 cm².",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Triangolo con base di 8 cm e altezza di 5 cm">
  <polygon points="40,140 240,140 140,40" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <line x1="140" y1="40" x2="140" y2="140" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <rect x="140" y="128" width="12" height="12" fill="none" stroke="#64748B" stroke-width="1.5" />
  <text x="140" y="160" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 8 cm</text>
  <text x="175" y="90" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="start">h = 5 cm</text>
  <text x="95" y="100" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-2-04",
            text: "Il cortile di una scuola ha la forma quadrata con il lato lungo 15 m.\nCalcola l'area del cortile in m² (inserisci solo il valore numerico).",
            answer: "225",
            accepted: ["225"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per calcolare l'area del cortile quadrato moltiplichiamo la misura del lato per se stessa: A = 15 × 15 = 225 m².",
            table: null,
            svg: null
          },
          {
            id: "geometria-2-05",
            text: "Un campo da basket rettangolare ha la base di 28 m e l'altezza di 15 m.\nCalcola l'area del campo da gioco in m² (inserisci solo il valore numerico).",
            answer: "420",
            accepted: ["420"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del rettangolo è data dal prodotto delle due dimensioni: A = base × altezza = 28 × 15 = 420 m².",
            table: null,
            svg: null
          },
          {
            id: "geometria-2-06",
            text: "Un'aiuola a forma di triangolo ha la base di 9 m e l'altezza di 7 m.\nCalcola l'area dell'aiuola in m² (inserisci solo il valore numerico).",
            answer: "31.5",
            accepted: ["31.5", "31,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Applichiamo la formula dell'area del triangolo moltiplicando base per altezza e dividendo per 2: A = (9 × 7) : 2 = 63 : 2 = 31,5 m².",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Triangolo con base di 9 m e altezza di 7 m">
  <polygon points="40,140 240,140 170,35" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <line x1="170" y1="35" x2="170" y2="140" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <rect x="158" y="128" width="12" height="12" fill="none" stroke="#64748B" stroke-width="1.5" />
  <text x="140" y="160" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 9 m</text>
  <text x="185" y="85" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="start">h = 7 m</text>
  <text x="105" y="100" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-2-07",
            text: "Un cartellone pubblicitario rettangolare ha la base di 8,5 m e l'altezza di 5 m.\nCalcola l'area del cartellone in m² (inserisci solo il valore numerico).",
            answer: "42.5",
            accepted: ["42.5", "42,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Moltiplichiamo la base per l'altezza del rettangolo: A = base × altezza = 8,5 × 5 = 42,5 m².",
            table: null,
            svg: null
          },
          {
            id: "geometria-2-08",
            text: "La vela di un modellino ha la forma di un triangolo con la base di 15 cm e l'altezza di 9 cm.\nCalcola l'area della vela in cm² (inserisci solo il valore numerico).",
            answer: "67.5",
            accepted: ["67.5", "67,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo l'area del triangolo moltiplicando la misura della base per l'altezza e dividendo il prodotto per 2: A = (15 × 9) : 2 = 135 : 2 = 67,5 cm².",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Triangolo rettangolo con base di 15 cm e altezza di 9 cm">
  <polygon points="50,140 230,140 50,30" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <rect x="50" y="126" width="14" height="14" fill="none" stroke="#64748B" stroke-width="1.5" />
  <text x="140" y="160" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 15 cm</text>
  <text x="24" y="85" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">9 cm</text>
  <text x="105" y="98" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-2-09",
            text: "Un quadro rettangolare ha un'area di 96 cm² e la base lunga 12 cm.\nQuanto misura l'altezza del quadro in cm? (inserisci solo il valore numerico).",
            answer: "8",
            accepted: ["8"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per trovare l'altezza del rettangolo usiamo la formula inversa dividendo l'area per la base: altezza = Area : base = 96 : 12 = 8 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 160" width="280" height="160" role="img" aria-label="Rettangolo con area di 96 cm², base di 12 cm e altezza incognita">
  <rect x="40" y="25" width="200" height="95" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2.5" rx="6" />
  <text x="140" y="18" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 12 cm</text>
  <text x="24" y="78" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">h = ?</text>
  <text x="140" y="78" fill="#94A3B8" font-size="14" font-weight="500" text-anchor="middle">Area = 96 cm²</text>
</svg>`
          },
          {
            id: "geometria-2-10",
            text: "Un timpano triangolare sulla facciata di un edificio ha un'area di 30 m² e la base di 8 m.\nQuanto misura l'altezza del timpano in metri? (inserisci solo il valore numerico).",
            answer: "7.5",
            accepted: ["7.5", "7,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per trovare l'altezza del triangolo usiamo la formula inversa raddoppiando l'area e dividendo per la base: altezza = (2 × Area) : base = (2 × 30) : 8 = 60 : 8 = 7,5 m.",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Triangolo con area di 30 m², base di 8 m e altezza incognita">
  <polygon points="40,140 240,140 130,35" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2.5" stroke-linejoin="round" />
  <line x1="130" y1="35" x2="130" y2="140" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <rect x="130" y="128" width="12" height="12" fill="none" stroke="#64748B" stroke-width="1.5" />
  <text x="140" y="160" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">base = 8 m</text>
  <text x="155" y="85" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="start">h = ?</text>
  <text x="85" y="95" fill="#94A3B8" font-size="13" font-weight="500" text-anchor="middle">Area = 30 m²</text>
</svg>`
          }
        ]
      },
      {
        level: 3,
        title: "Cerchio",
        blueprint: "Calcolare circonferenza e area partendo dal raggio.",
        exercises: [
          {
            id: "geometria-3-01",
            text: "Un sottobicchiere circolare ha un raggio di 3 cm.\nCalcola la lunghezza della sua circonferenza in cm (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "18.84",
            accepted: ["18.84", "18,84", "18.85", "18,85"],
            tolerance: 0.01,
            exact: false,
            explanation: "La formula per calcolare la circonferenza è C = 2 × π × r. Sostituendo i valori noti: C = 2 × 3,14 × 3 = 18,84 cm.",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cerchio con raggio di 3 cm e circonferenza incognita">
  <circle cx="120" cy="95" r="55" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="120" cy="95" r="3.5" fill="#38BDF8" />
  <line x1="120" y1="95" x2="175" y2="95" stroke="#38BDF8" stroke-width="2" />
  <text x="148" y="87" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">r = 3 cm</text>
  <text x="120" y="130" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">C = ?</text>
</svg>`
          },
          {
            id: "geometria-3-02",
            text: "Un orologio da parete circolare ha un raggio di 5 cm.\nCalcola la misura della sua circonferenza in cm (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "31.4",
            accepted: ["31.4", "31,4", "31.40", "31,40", "31.42", "31,42"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per calcolare la circonferenza applichiamo la formula C = 2 × π × r. Sostituendo le misure: C = 2 × 3,14 × 5 = 31,4 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-3-03",
            text: "Un'aiuola circolare in un parco pubblico ha un raggio di 7 m.\nCalcola la lunghezza della bordura che la circonda in metri (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "43.96",
            accepted: ["43.96", "43,96", "43.98", "43,98"],
            tolerance: 0.01,
            exact: false,
            explanation: "La bordura corrisponde alla circonferenza dell'aiuola calcolata con C = 2 × π × r. Sostituendo i valori: C = 2 × 3,14 × 7 = 43,96 m.",
            table: null,
            svg: null
          },
          {
            id: "geometria-3-04",
            text: "Un coperchio circolare per un barattolo ha un diametro di 8 cm.\nCalcola la lunghezza della sua circonferenza in cm (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "25.12",
            accepted: ["25.12", "25,12", "25.13", "25,13"],
            tolerance: 0.01,
            exact: false,
            explanation: "Dato il diametro, calcoliamo la circonferenza con la formula C = π × d. Sostituendo il valore del diametro: C = 3,14 × 8 = 25,12 cm.",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cerchio con diametro di 8 cm e circonferenza incognita">
  <circle cx="120" cy="95" r="55" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="120" cy="95" r="3.5" fill="#38BDF8" />
  <line x1="65" y1="95" x2="175" y2="95" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <text x="120" y="87" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">d = 8 cm</text>
  <text x="120" y="130" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">C = ?</text>
</svg>`
          },
          {
            id: "geometria-3-05",
            text: "La ruota circolare di un monopattino ha un diametro di 20 cm.\nCalcola la lunghezza della circonferenza della ruota in cm (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "62.8",
            accepted: ["62.8", "62,8", "62.80", "62,80", "62.83", "62,83"],
            tolerance: 0.01,
            exact: false,
            explanation: "La circonferenza calcolata a partire dal diametro segue la formula C = π × d. Sostituendo i valori noti: C = 3,14 × 20 = 62,8 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-3-06",
            text: "Un ciondolo rotondo in argento ha un raggio di 4 cm.\nCalcola l'area della sua superficie in cm² (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "50.24",
            accepted: ["50.24", "50,24", "50.27", "50,27"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del cerchio si calcola con la formula A = π × r². Sostituendo la misura del raggio: A = 3,14 × 4² = 3,14 × 16 = 50,24 cm².",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cerchio con raggio di 4 cm e area incognita">
  <circle cx="120" cy="95" r="55" fill="rgba(6, 182, 212, 0.15)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="120" cy="95" r="3.5" fill="#38BDF8" />
  <line x1="120" y1="95" x2="175" y2="95" stroke="#38BDF8" stroke-width="2" />
  <text x="148" y="87" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">r = 4 cm</text>
  <text x="120" y="125" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-3-07",
            text: "Una medaglia sportiva circolare ha un raggio di 5 cm.\nCalcola l'area della medaglia in cm² (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "78.5",
            accepted: ["78.5", "78,5", "78.50", "78,50", "78.54", "78,54"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area del cerchio si ottiene moltiplicando pi greco per il raggio al quadrato: A = π × r². Sostituendo i dati: A = 3,14 × 5² = 3,14 × 25 = 78,5 cm².",
            table: null,
            svg: null
          },
          {
            id: "geometria-3-08",
            text: "Un bersaglio circolare per le freccette ha un raggio di 10 cm.\nCalcola l'area totale del bersaglio in cm² (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "314",
            accepted: ["314", "314.0", "314,0", "314.16", "314,16"],
            tolerance: 0.01,
            exact: false,
            explanation: "Calcoliamo l'area con la formula A = π × r². Sostituendo il raggio: A = 3,14 × 10² = 3,14 × 100 = 314 cm².",
            table: null,
            svg: null
          },
          {
            id: "geometria-3-09",
            text: "Uno specchio circolare da parete ha un diametro di 12 cm.\nCalcola l'area dello specchio in cm² (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "113.04",
            accepted: ["113.04", "113,04", "113.10", "113,10", "113.1"],
            tolerance: 0.01,
            exact: false,
            explanation: "Troviamo prima il raggio dividendo il diametro per 2: r = 12 : 2 = 6 cm. Applichiamo quindi la formula dell'area: A = π × r² = 3,14 × 6² = 3,14 × 36 = 113,04 cm².",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cerchio con diametro di 12 cm e area incognita">
  <circle cx="120" cy="95" r="55" fill="rgba(6, 182, 212, 0.15)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="120" cy="95" r="3.5" fill="#38BDF8" />
  <line x1="65" y1="95" x2="175" y2="95" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <text x="120" y="87" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">d = 12 cm</text>
  <text x="120" y="125" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">Area = ?</text>
</svg>`
          },
          {
            id: "geometria-3-10",
            text: "Una pista circolare per go-kart ha una recinzione esterna lunga 50,24 m.\nQuanto misura il raggio della pista in metri? (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "8",
            accepted: ["8", "8.0", "8,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per ricavare il raggio dalla circonferenza usiamo la formula inversa r = C : (2 × π). Sostituendo i dati noti: r = 50,24 : (2 × 3,14) = 50,24 : 6,28 = 8 m.",
            table: null,
            svg: `<svg viewBox="0 0 260 180" width="260" height="180" role="img" aria-label="Cerchio con circonferenza di 50,24 m e raggio incognito">
  <circle cx="130" cy="100" r="55" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="130" cy="100" r="3.5" fill="#38BDF8" />
  <line x1="130" y1="100" x2="185" y2="100" stroke="#38BDF8" stroke-width="2" stroke-dasharray="4 4" />
  <text x="158" y="92" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">r = ?</text>
  <text x="130" y="32" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">Circonferenza = 50,24 m</text>
</svg>`
          }
        ]
      },
      {
        level: 4,
        title: "Solidi",
        blueprint: "Volume e superficie totale di un solido semplice.",
        exercises: [
          {
            id: "geometria-4-01",
            text: "Un dado da gioco a forma di cubo ha lo spigolo di 3 cm.\nCalcola il volume del cubo in cm³ (inserisci solo il valore numerico).",
            answer: "27",
            accepted: ["27", "27.0", "27,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il volume del cubo si calcola elevando lo spigolo alla terza potenza con la formula V = s³. Sostituendo la misura nota: V = 3³ = 3 × 3 × 3 = 27 cm³.",
            table: null,
            svg: `<svg viewBox="0 0 260 180" width="260" height="180" role="img" aria-label="Cubo con spigolo di 3 cm e volume incognito">
  <polygon points="70,65 115,35 185,35 140,65" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="140,65 185,35 185,115 140,145" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="70,65 140,65 140,145 70,145" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <line x1="70" y1="145" x2="115" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="115" y1="35" x2="115" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="115" y1="115" x2="185" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="105" y="165" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">s = 3 cm</text>
  <text x="105" y="110" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">V = ?</text>
</svg>`
          },
          {
            id: "geometria-4-02",
            text: "Una scatola di latta a forma di cubo ha lo spigolo lungo 5 cm.\nCalcola il volume della scatola in cm³ (inserisci solo il valore numerico).",
            answer: "125",
            accepted: ["125", "125.0", "125,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per trovare il volume del cubo si applica la formula V = s³ (spigolo al cubo). Moltiplichiamo quindi la misura dello spigolo per se stessa tre volte: V = 5³ = 5 × 5 × 5 = 125 cm³.",
            table: null,
            svg: null
          },
          {
            id: "geometria-4-03",
            text: "Un blocco di legno a forma di cubo ha lo spigolo di 4 cm.\nCalcola l'area della superficie totale del cubo in cm² (inserisci solo il valore numerico).",
            answer: "96",
            accepted: ["96", "96.0", "96,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il cubo è composto da 6 facce quadrate uguali, quindi la formula per la superficie totale è S_t = 6 × s². Calcoliamo prima l'area di una faccia (s² = 4² = 16 cm²) e moltiplichiamo per 6: S_t = 6 × 16 = 96 cm².",
            table: null,
            svg: `<svg viewBox="0 0 260 180" width="260" height="180" role="img" aria-label="Cubo con spigolo di 4 cm e superficie totale incognita">
  <polygon points="70,65 115,35 185,35 140,65" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="140,65 185,35 185,115 140,145" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="70,65 140,65 140,145 70,145" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <line x1="70" y1="145" x2="115" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="115" y1="35" x2="115" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="115" y1="115" x2="185" y2="115" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="105" y="165" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">s = 4 cm</text>
  <text x="105" y="110" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">S_t = ?</text>
</svg>`
          },
          {
            id: "geometria-4-04",
            text: "Un contenitore per giochi a forma di cubo ha lo spigolo di 7 cm.\nCalcola l'area della superficie totale del contenitore in cm² (inserisci solo il valore numerico).",
            answer: "294",
            accepted: ["294", "294.0", "294,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area della superficie totale del cubo si calcola con la formula S_t = 6 × s². L'area di ciascuna faccia quadrata è s² = 7² = 49 cm²; moltiplicando per il numero delle facce otteniamo: S_t = 6 × 49 = 294 cm².",
            table: null,
            svg: null
          },
          {
            id: "geometria-4-05",
            text: "Un astuccio a forma di parallelepipedo rettangolo ha la base lunga 8 cm e larga 5 cm, e un'altezza di 4 cm.\nCalcola il volume dell'astuccio in cm³ (inserisci solo il valore numerico).",
            answer: "160",
            accepted: ["160", "160.0", "160,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il volume del parallelepipedo rettangolo si calcola moltiplicando l'area di base per l'altezza con la formula V = A_b × h = a × b × c. Sostituendo le tre dimensioni: V = 8 × 5 × 4 = 160 cm³.",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Parallelepipedo rettangolo con dimensioni 8 cm, 5 cm e 4 cm e volume incognito">
  <polygon points="50,65 110,35 210,35 150,65" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="150,65 210,35 210,105 150,135" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="50,65 150,65 150,135 50,135" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <line x1="50" y1="135" x2="110" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="110" y1="35" x2="110" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="110" y1="105" x2="210" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="100" y="153" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">8 cm</text>
  <text x="35" y="105" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">4 cm</text>
  <text x="195" y="45" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">5 cm</text>
  <text x="100" y="102" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">V = ?</text>
</svg>`
          },
          {
            id: "geometria-4-06",
            text: "Una scatola di biscotti a forma di parallelepipedo rettangolo ha le dimensioni di 12 cm, 6 cm e 5 cm.\nCalcola il volume della scatola in cm³ (inserisci solo il valore numerico).",
            answer: "360",
            accepted: ["360", "360.0", "360,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il volume del parallelepipedo rettangolo si ottiene applicando la formula V = a × b × c (prodotto delle tre dimensioni). Sostituendo le misure assegnate: V = 12 × 6 × 5 = 72 × 5 = 360 cm³.",
            table: null,
            svg: null
          },
          {
            id: "geometria-4-07",
            text: "Un cofanetto per profumo a forma di parallelepipedo rettangolo misura 6 cm di lunghezza, 4 cm di larghezza e 3 cm di altezza.\nCalcola l'area della superficie totale del cofanetto in cm² (inserisci solo il valore numerico).",
            answer: "108",
            accepted: ["108", "108.0", "108,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "L'area della superficie totale si trova con la formula S_t = 2 × (a×b + b×c + a×c), oppure sommando l'area laterale e le due basi: S_t = S_l + 2 × A_b. L'area laterale è S_l = 2 × (6 + 4) × 3 = 60 cm² e le due basi misurano 2 × (6 × 4) = 48 cm², quindi S_t = 60 + 48 = 108 cm².",
            table: null,
            svg: `<svg viewBox="0 0 280 170" width="280" height="170" role="img" aria-label="Parallelepipedo rettangolo con dimensioni 6 cm, 4 cm e 3 cm e superficie totale incognita">
  <polygon points="50,65 110,35 210,35 150,65" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="150,65 210,35 210,105 150,135" fill="rgba(6, 182, 212, 0.08)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <polygon points="50,65 150,65 150,135 50,135" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <line x1="50" y1="135" x2="110" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="110" y1="35" x2="110" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <line x1="110" y1="105" x2="210" y2="105" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <text x="100" y="153" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">6 cm</text>
  <text x="35" y="105" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">3 cm</text>
  <text x="195" y="45" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">4 cm</text>
  <text x="100" y="102" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">S_t = ?</text>
</svg>`
          },
          {
            id: "geometria-4-08",
            text: "Una scatola di cartone a forma di parallelepipedo rettangolo ha la base che misura 10 cm per 5 cm e un'altezza di 8 cm.\nCalcola l'area della superficie totale della scatola in cm² (inserisci solo il valore numerico).",
            answer: "340",
            accepted: ["340", "340.0", "340,0"],
            tolerance: 0.01,
            exact: false,
            explanation: "La superficie totale del parallelepipedo rettangolo si calcola con la formula S_t = S_l + 2 × A_b, dove S_l = 2 × (a + b) × c e A_b = a × b. Calcoliamo l'area laterale S_l = 2 × (10 + 5) × 8 = 30 × 8 = 240 cm² e l'area delle due basi 2 × (10 × 5) = 100 cm²; sommando otteniamo: S_t = 240 + 100 = 340 cm².",
            table: null,
            svg: null
          },
          {
            id: "geometria-4-09",
            text: "Un barattolo per conserve a forma di cilindro ha il raggio di base di 5 cm e l'altezza di 10 cm.\nCalcola il volume del cilindro in cm³ (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "785",
            accepted: ["785", "785.0", "785,0", "785.4", "785,4", "785.40", "785,40"],
            tolerance: 0.01,
            exact: false,
            explanation: "Il volume del cilindro si calcola con la formula V = A_b × h = π × r² × h. Calcoliamo prima l'area del cerchio di base: A_b = 3,14 × 5² = 3,14 × 25 = 78,5 cm². Moltiplichiamo quindi per l'altezza: V = 78,5 × 10 = 785 cm³.",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cilindro con raggio di base 5 cm, altezza 10 cm e volume incognito">
  <path d="M 65 45 L 65 135 A 55 18 0 0 0 175 135 L 175 45" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2" />
  <path d="M 65 135 A 55 18 0 0 1 175 135" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <ellipse cx="120" cy="45" rx="55" ry="18" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" />
  <circle cx="120" cy="45" r="3" fill="#38BDF8" />
  <line x1="120" y1="45" x2="175" y2="45" stroke="#38BDF8" stroke-width="2" />
  <text x="148" y="38" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">r = 5 cm</text>
  <text x="45" y="95" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">h = 10 cm</text>
  <text x="120" y="100" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">V = ?</text>
</svg>`
          },
          {
            id: "geometria-4-10",
            text: "Una candela decorativa a forma di cilindro ha il raggio di base di 3 cm e l'altezza di 7 cm.\nCalcola l'area della superficie totale del cilindro in cm² (usa π = 3,14; inserisci solo il valore numerico).",
            answer: "188.4",
            accepted: ["188.4", "188,4", "188.40", "188,40", "188.5", "188,5", "188.50", "188,50"],
            tolerance: 0.01,
            exact: false,
            explanation: "La superficie totale del cilindro si calcola sommando l'area laterale e le due basi con le formule S_l = 2 × π × r × h, A_b = π × r² e S_t = S_l + 2 × A_b. L'area laterale è S_l = 2 × 3,14 × 3 × 7 = 131,88 cm²; l'area delle due basi è 2 × (3,14 × 3²) = 2 × 28,26 = 56,52 cm². Otteniamo quindi S_t = 131,88 + 56,52 = 188,4 cm².",
            table: null,
            svg: `<svg viewBox="0 0 240 180" width="240" height="180" role="img" aria-label="Cilindro con raggio di base 3 cm, altezza 7 cm e superficie totale incognita">
  <path d="M 65 45 L 65 135 A 55 18 0 0 0 175 135 L 175 45" fill="rgba(6, 182, 212, 0.1)" stroke="#38BDF8" stroke-width="2" />
  <path d="M 65 135 A 55 18 0 0 1 175 135" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="4 4" />
  <ellipse cx="120" cy="45" rx="55" ry="18" fill="rgba(6, 182, 212, 0.18)" stroke="#38BDF8" stroke-width="2" />
  <circle cx="120" cy="45" r="3" fill="#38BDF8" />
  <line x1="120" y1="45" x2="175" y2="45" stroke="#38BDF8" stroke-width="2" />
  <text x="148" y="38" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">r = 3 cm</text>
  <text x="45" y="95" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">h = 7 cm</text>
  <text x="120" y="100" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">S_t = ?</text>
</svg>`
          }
        ]
      },
      {
        level: 5,
        title: "Pitagora e figure combinate",
        blueprint: "Risolvi problemi geometrici con figure composte applicando il teorema di Pitagora.",
        exercises: [
          {
            id: "geometria-5-01",
            text: "Un triangolo rettangolo ha i cateti che misurano 3 cm e 4 cm.\nCalcola la lunghezza dell'ipotenusa in cm (inserisci solo il valore numerico).",
            answer: "5",
            accepted: ["5", "5.0", "5,0", "5.00", "5,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Applichiamo il teorema di Pitagora: l'ipotenusa è la radice quadrata della somma dei quadrati dei cateti. Calcoliamo i² = c₁² + c₂² = 3² + 4² = 9 + 16 = 25, quindi i = √25 = 5 cm.",
            table: null,
            svg: `<svg viewBox="0 0 260 200" width="260" height="200" role="img" aria-label="Triangolo rettangolo con cateti 3 cm e 4 cm e ipotenusa incognita">
  <polygon points="40,160 200,160 40,40" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <rect x="40" y="145" width="15" height="15" fill="none" stroke="#38BDF8" stroke-width="1.5" />
  <text x="120" y="178" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">4 cm</text>
  <text x="25" y="105" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">3 cm</text>
  <text x="135" y="90" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">i = ?</text>
</svg>`
          },
          {
            id: "geometria-5-02",
            text: "Un triangolo rettangolo ha i cateti lunghi 5 cm e 12 cm.\nCalcola la lunghezza dell'ipotenusa in cm (inserisci solo il valore numerico).",
            answer: "13",
            accepted: ["13", "13.0", "13,0", "13.00", "13,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Con il teorema di Pitagora calcoliamo i² = c₁² + c₂² = 5² + 12² = 25 + 144 = 169, quindi i = √169 = 13 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 200" width="280" height="200" role="img" aria-label="Triangolo rettangolo con cateti 5 cm e 12 cm e ipotenusa incognita">
  <polygon points="30,170 250,170 30,50" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <rect x="30" y="155" width="15" height="15" fill="none" stroke="#38BDF8" stroke-width="1.5" />
  <text x="140" y="188" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">12 cm</text>
  <text x="15" y="115" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">5 cm</text>
  <text x="155" y="100" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">i = ?</text>
</svg>`
          },
          {
            id: "geometria-5-03",
            text: "Un triangolo rettangolo ha i cateti che misurano 8 cm e 15 cm.\nCalcola la lunghezza dell'ipotenusa in cm (inserisci solo il valore numerico).",
            answer: "17",
            accepted: ["17", "17.0", "17,0", "17.00", "17,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Applichiamo il teorema di Pitagora: i² = c₁² + c₂² = 8² + 15² = 64 + 225 = 289. Estraendo la radice quadrata otteniamo i = √289 = 17 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-5-04",
            text: "Un triangolo rettangolo ha l'ipotenusa lunga 13 cm e un cateto di 5 cm.\nCalcola la lunghezza dell'altro cateto in cm (inserisci solo il valore numerico).",
            answer: "12",
            accepted: ["12", "12.0", "12,0", "12.00", "12,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per trovare un cateto applichiamo la formula inversa del teorema di Pitagora: c₂ = √(i² − c₁²). Sostituiamo: c₂ = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.",
            table: null,
            svg: `<svg viewBox="0 0 260 200" width="260" height="200" role="img" aria-label="Triangolo rettangolo con ipotenusa 13 cm, cateto 5 cm e cateto incognito">
  <polygon points="40,160 200,160 40,40" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <rect x="40" y="145" width="15" height="15" fill="none" stroke="#38BDF8" stroke-width="1.5" />
  <text x="25" y="105" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">5 cm</text>
  <text x="135" y="90" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">13 cm</text>
  <text x="120" y="178" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">c = ?</text>
</svg>`
          },
          {
            id: "geometria-5-05",
            text: "Un triangolo rettangolo ha l'ipotenusa di 25 cm e un cateto lungo 7 cm.\nCalcola la lunghezza dell'altro cateto in cm (inserisci solo il valore numerico).",
            answer: "24",
            accepted: ["24", "24.0", "24,0", "24.00", "24,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Con la formula inversa del teorema di Pitagora calcoliamo il cateto mancante: c₂ = √(i² − c₁²) = √(25² − 7²) = √(625 − 49) = √576 = 24 cm.",
            table: null,
            svg: null
          },
          {
            id: "geometria-5-06",
            text: "Un triangolo rettangolo ha i cateti che misurano 9 cm e 12 cm.\nCalcola il perimetro del triangolo in cm (inserisci solo il valore numerico).",
            answer: "36",
            accepted: ["36", "36.0", "36,0", "36.00", "36,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "Per trovare il perimetro dobbiamo prima calcolare l'ipotenusa con il teorema di Pitagora: i = √(9² + 12²) = √(81 + 144) = √225 = 15 cm. Il perimetro è la somma dei tre lati: P = 9 + 12 + 15 = 36 cm.",
            table: null,
            svg: `<svg viewBox="0 0 270 210" width="270" height="210" role="img" aria-label="Triangolo rettangolo con cateti 9 cm e 12 cm e perimetro incognito">
  <polygon points="35,170 225,170 35,40" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <rect x="35" y="155" width="15" height="15" fill="none" stroke="#38BDF8" stroke-width="1.5" />
  <text x="130" y="190" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">12 cm</text>
  <text x="20" y="110" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">9 cm</text>
  <text x="145" y="95" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">i = ?</text>
  <text x="135" y="30" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">P = ?</text>
</svg>`
          },
          {
            id: "geometria-5-07",
            text: "Un triangolo rettangolo ha i cateti di 6 cm e 8 cm.\nCalcola l'area del triangolo in cm² (inserisci solo il valore numerico).",
            answer: "24",
            accepted: ["24", "24.0", "24,0", "24.00", "24,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "In un triangolo rettangolo i due cateti fungono da base e altezza, quindi l'area si calcola con la formula A = (c₁ × c₂) / 2 = (6 × 8) / 2 = 48 / 2 = 24 cm².",
            table: null,
            svg: null
          },
          {
            id: "geometria-5-08",
            text: "Un rettangolo ha la base lunga 9 cm e l'altezza di 12 cm.\nCalcola la lunghezza della sua diagonale in cm (inserisci solo il valore numerico).",
            answer: "15",
            accepted: ["15", "15.0", "15,0", "15.00", "15,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "La diagonale di un rettangolo è l'ipotenusa del triangolo rettangolo formato dai due lati. Applichiamo il teorema di Pitagora: d = √(b² + h²) = √(9² + 12²) = √(81 + 144) = √225 = 15 cm.",
            table: null,
            svg: `<svg viewBox="0 0 270 210" width="270" height="210" role="img" aria-label="Rettangolo con base 9 cm, altezza 12 cm e diagonale incognita">
  <rect x="45" y="30" width="180" height="150" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" rx="2" />
  <line x1="45" y1="180" x2="225" y2="30" stroke="#FBBF24" stroke-width="2" stroke-dasharray="6 4" />
  <text x="135" y="198" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">9 cm</text>
  <text x="30" y="110" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">12 cm</text>
  <text x="150" y="115" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">d = ?</text>
</svg>`
          },
          {
            id: "geometria-5-09",
            text: "Un rettangolo ha la diagonale di 25 cm e un lato lungo 7 cm.\nCalcola la lunghezza dell'altro lato in cm (inserisci solo il valore numerico).",
            answer: "24",
            accepted: ["24", "24.0", "24,0", "24.00", "24,00"],
            tolerance: 0.01,
            exact: false,
            explanation: "La diagonale di un rettangolo forma un triangolo rettangolo con i due lati. Usando la formula inversa del teorema di Pitagora troviamo il lato mancante: l = √(d² − l₁²) = √(25² − 7²) = √(625 − 49) = √576 = 24 cm.",
            table: null,
            svg: `<svg viewBox="0 0 290 180" width="290" height="180" role="img" aria-label="Rettangolo con diagonale 25 cm, lato 7 cm e lato incognito">
  <rect x="35" y="25" width="220" height="120" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" rx="2" />
  <line x1="35" y1="145" x2="255" y2="25" stroke="#FBBF24" stroke-width="2" stroke-dasharray="6 4" />
  <text x="20" y="90" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">7 cm</text>
  <text x="155" y="95" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">25 cm</text>
  <text x="145" y="163" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">l = ?</text>
</svg>`
          },
          {
            id: "geometria-5-10",
            text: "Un triangolo rettangolo ha i cateti di 8 cm e 15 cm.\nCalcola l'altezza relativa all'ipotenusa in cm (inserisci solo il valore numerico, arrotonda a due decimali).",
            answer: "7.06",
            accepted: ["7.06", "7,06"],
            tolerance: 0.01,
            exact: false,
            explanation: "Prima calcoliamo l'ipotenusa con il teorema di Pitagora: i = √(8² + 15²) = √(64 + 225) = √289 = 17 cm. L'area del triangolo vale A = (c₁ × c₂) / 2 = (8 × 15) / 2 = 60 cm². L'altezza relativa all'ipotenusa si ricava dalla formula dell'area: h = 2 × A / i = 2 × 60 / 17 = 120 / 17 ≈ 7,06 cm.",
            table: null,
            svg: `<svg viewBox="0 0 280 210" width="280" height="210" role="img" aria-label="Triangolo rettangolo con cateti 8 cm e 15 cm e altezza relativa all'ipotenusa incognita">
  <polygon points="30,180 260,180 30,40" fill="rgba(6, 182, 212, 0.12)" stroke="#38BDF8" stroke-width="2" stroke-linejoin="round" />
  <rect x="30" y="165" width="15" height="15" fill="none" stroke="#38BDF8" stroke-width="1.5" />
  <line x1="145" y1="110" x2="85" y2="180" stroke="#FBBF24" stroke-width="2" stroke-dasharray="5 3" />
  <circle cx="85" cy="180" r="2.5" fill="#FBBF24" />
  <text x="145" y="198" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">15 cm</text>
  <text x="17" y="115" fill="#F8FAFC" font-size="14" font-weight="600" text-anchor="middle">8 cm</text>
  <text x="160" y="100" fill="#F8FAFC" font-size="13" font-weight="600" text-anchor="middle">17 cm</text>
  <text x="100" y="140" fill="#38BDF8" font-size="14" font-weight="700" text-anchor="middle">h = ?</text>
</svg>`
          }
        ]
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
        exercises: [
          {
            id: "misure-1-01",
            text: "5 km = ? m\nInserisci il numero che completa l'equivalenza.",
            answer: "5000",
            accepted: ["5000"],
            tolerance: 0,
            exact: false,
            explanation: "1 km = 1000 m, quindi si moltiplica per 1000: 5 × 1000 = 5000 m.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-02",
            text: "3 m = ? cm\nInserisci il numero che completa l'equivalenza.",
            answer: "300",
            accepted: ["300"],
            tolerance: 0,
            exact: false,
            explanation: "1 m = 100 cm, quindi si moltiplica per 100: 3 × 100 = 300 cm.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-03",
            text: "7000 mm = ? m\nInserisci il numero che completa l'equivalenza.",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "1 m = 1000 mm, quindi si divide per 1000: 7000 ÷ 1000 = 7 m.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-04",
            text: "90 dm = ? m\nInserisci il numero che completa l'equivalenza.",
            answer: "9",
            accepted: ["9"],
            tolerance: 0,
            exact: false,
            explanation: "1 m = 10 dm, quindi si divide per 10: 90 ÷ 10 = 9 m.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-05",
            text: "4 kg = ? g\nInserisci il numero che completa l'equivalenza.",
            answer: "4000",
            accepted: ["4000"],
            tolerance: 0,
            exact: false,
            explanation: "1 kg = 1000 g, quindi si moltiplica per 1000: 4 × 1000 = 4000 g.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-06",
            text: "60 hg = ? kg\nInserisci il numero che completa l'equivalenza.",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "1 kg = 10 hg, quindi si divide per 10: 60 ÷ 10 = 6 kg.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-07",
            text: "8 hg = ? g\nInserisci il numero che completa l'equivalenza.",
            answer: "800",
            accepted: ["800"],
            tolerance: 0,
            exact: false,
            explanation: "1 hg = 100 g, quindi si moltiplica per 100: 8 × 100 = 800 g.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-08",
            text: "2 l = ? ml\nInserisci il numero che completa l'equivalenza.",
            answer: "2000",
            accepted: ["2000"],
            tolerance: 0,
            exact: false,
            explanation: "1 l = 1000 ml, quindi si moltiplica per 1000: 2 × 1000 = 2000 ml.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-09",
            text: "50 cl = ? dl\nInserisci il numero che completa l'equivalenza.",
            answer: "5",
            accepted: ["5"],
            tolerance: 0,
            exact: false,
            explanation: "1 dl = 10 cl, quindi si divide per 10: 50 ÷ 10 = 5 dl.",
            table: null,
            svg: null
          },
          {
            id: "misure-1-10",
            text: "6 dl = ? cl\nInserisci il numero che completa l'equivalenza.",
            answer: "60",
            accepted: ["60"],
            tolerance: 0,
            exact: false,
            explanation: "1 dl = 10 cl, quindi si moltiplica per 10: 6 × 10 = 60 cl.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 2,
        title: "Equivalenze con decimali e tempo",
        blueprint: "Esegui conversioni tra unità di misura con numeri decimali e trasformazioni di ore, minuti e secondi.",
        exercises: [
          {
            id: "misure-2-01",
            text: "2,5 kg = ? g\nInserisci il risultato in grammi.",
            answer: "2500",
            accepted: ["2500"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 kg = 1000 g, quindi 2,5 × 1000 = 2500 g.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-02",
            text: "0,75 m = ? cm\nInserisci il risultato in centimetri.",
            answer: "75",
            accepted: ["75"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 m = 100 cm, quindi 0,75 × 100 = 75 cm.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-03",
            text: "750 ml = ? l\nInserisci il risultato in litri.",
            answer: "0.75",
            accepted: ["0.75", "0,75"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 l = 1000 ml, quindi 750 ÷ 1000 = 0,75 l.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-04",
            text: "1,2 km = ? m\nInserisci il risultato in metri.",
            answer: "1200",
            accepted: ["1200"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 km = 1000 m, quindi 1,2 × 1000 = 1200 m.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-05",
            text: "2 h 15 min = ? min\nInserisci il risultato in minuti.",
            answer: "135",
            accepted: ["135"],
            tolerance: 0.001,
            exact: false,
            explanation: "2 h = 2 × 60 = 120 min, poi si aggiungono i 15 min: 120 + 15 = 135 min.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-06",
            text: "1 h 45 min = ? min\nInserisci il risultato in minuti.",
            answer: "105",
            accepted: ["105"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 h = 60 min, poi si aggiungono i 45 min: 60 + 45 = 105 min.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-07",
            text: "200 min = ? h ? min\nInserisci quante ore intere sono contenute in 200 minuti.",
            answer: "3",
            accepted: ["3"],
            tolerance: 0.001,
            exact: false,
            explanation: "200 ÷ 60 = 3 con resto 20, quindi 200 min = 3 h 20 min. Le ore intere sono 3.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-08",
            text: "3 min 45 s = ? s\nInserisci il risultato in secondi.",
            answer: "225",
            accepted: ["225"],
            tolerance: 0.001,
            exact: false,
            explanation: "3 min = 3 × 60 = 180 s, poi si aggiungono i 45 s: 180 + 45 = 225 s.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-09",
            text: "3 giorni = ? ore\nInserisci il risultato in ore.",
            answer: "72",
            accepted: ["72"],
            tolerance: 0.001,
            exact: false,
            explanation: "1 giorno = 24 ore, quindi 3 × 24 = 72 ore.",
            table: null,
            svg: null
          },
          {
            id: "misure-2-10",
            text: "Un film inizia alle 20:50 e finisce alle 22:35. Quanto dura il film in minuti?",
            answer: "105",
            accepted: ["105"],
            tolerance: 0.001,
            exact: false,
            explanation: "Dalle 20:50 alle 22:35 passano 1 h 45 min. Convertiamo: 1 × 60 + 45 = 105 min.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 3,
        title: "Proporzione con incognita",
        blueprint: "Determina il termine incognito x in una proporzione numerica applicando la proprietà fondamentale.",
        exercises: [
          {
            id: "misure-3-01",
            text: "Risolvi la proporzione:\n3 : 5 = 12 : x\nInserisci il valore di x.",
            answer: "20",
            accepted: ["20"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 3 : 5 = 12 : x. Per la proprietà fondamentale, il prodotto dei medi è uguale al prodotto degli estremi: 3 × x = 5 × 12. Quindi 3x = 60 e x = 60 ÷ 3 = 20.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-02",
            text: "Risolvi la proporzione:\n4 : 7 = 16 : x\nInserisci il valore di x.",
            answer: "28",
            accepted: ["28"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 4 : 7 = 16 : x. Per la proprietà fondamentale: 4 × x = 7 × 16. Quindi 4x = 112 e x = 112 ÷ 4 = 28.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-03",
            text: "Risolvi la proporzione:\n6 : 9 = 14 : x\nInserisci il valore di x.",
            answer: "21",
            accepted: ["21"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 6 : 9 = 14 : x. Per la proprietà fondamentale: 6 × x = 9 × 14. Quindi 6x = 126 e x = 126 ÷ 6 = 21.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-04",
            text: "Risolvi la proporzione:\n5 : 8 = 35 : x\nInserisci il valore di x.",
            answer: "56",
            accepted: ["56"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 5 : 8 = 35 : x. Per la proprietà fondamentale: 5 × x = 8 × 35. Quindi 5x = 280 e x = 280 ÷ 5 = 56.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-05",
            text: "Risolvi la proporzione:\nx : 6 = 15 : 9\nInserisci il valore di x.",
            answer: "10",
            accepted: ["10"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione x : 6 = 15 : 9. Per la proprietà fondamentale: x × 9 = 6 × 15. Quindi 9x = 90 e x = 90 ÷ 9 = 10.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-06",
            text: "Risolvi la proporzione:\n8 : x = 12 : 15\nInserisci il valore di x.",
            answer: "10",
            accepted: ["10"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 8 : x = 12 : 15. Per la proprietà fondamentale: 8 × 15 = x × 12. Quindi 120 = 12x e x = 120 ÷ 12 = 10.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-07",
            text: "Risolvi la proporzione:\n7 : x = 21 : 18\nInserisci il valore di x (incognita al secondo termine).",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 7 : x = 21 : 18. Per la proprietà fondamentale: 7 × 18 = x × 21. Quindi 126 = 21x e x = 126 ÷ 21 = 6.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-08",
            text: "Risolvi la proporzione:\n9 : 4 = x : 12\nInserisci il valore di x (incognita al terzo termine).",
            answer: "27",
            accepted: ["27"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la proporzione 9 : 4 = x : 12. Per la proprietà fondamentale: 9 × 12 = 4 × x. Quindi 108 = 4x e x = 108 ÷ 4 = 27.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-09",
            text: "Una ricetta per 4 persone richiede 300 g di farina. Quanti grammi di farina servono per preparare la stessa ricetta per 6 persone?\nImposta la proporzione e inserisci il risultato in grammi.",
            answer: "450",
            accepted: ["450"],
            tolerance: 0,
            exact: false,
            explanation: "Impostiamo la proporzione persone : farina = persone : farina, cioè 4 : 300 = 6 : x. Per la proprietà fondamentale: 4 × x = 300 × 6. Quindi 4x = 1800 e x = 1800 ÷ 4 = 450 g.",
            table: null,
            svg: null
          },
          {
            id: "misure-3-10",
            text: "Una fotocopiatrice stampa 18 copie in 3 minuti. Quante copie stamperà, allo stesso ritmo, in 7 minuti?\nImposta la proporzione e inserisci il numero di copie.",
            answer: "42",
            accepted: ["42"],
            tolerance: 0,
            exact: false,
            explanation: "Impostiamo la proporzione copie : minuti = copie : minuti, cioè 18 : 3 = x : 7. Per la proprietà fondamentale: 18 × 7 = 3 × x. Quindi 126 = 3x e x = 126 ÷ 3 = 42 copie.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 4,
        title: "Proporzionalità diretta e inversa",
        blueprint: "Riconosci grandezze direttamente o inversamente proporzionali e calcola il valore mancante.",
        exercises: [
          {
            id: "misure-4-01",
            text: "Al mercato 5 kg di arance costano 7,50 €. Quanto costano 8 kg delle stesse arance?\nStabilisci il tipo di proporzionalità e inserisci il prezzo totale in euro (es. 12).",
            answer: "12",
            accepted: ["12", "12,00", "12.00"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità diretta: all'aumentare della quantità di arance acquistate, il costo totale aumenta nella stessa misura (il rapporto Prezzo / Quantità è costante: 7,50 ÷ 5 = 1,50 €/kg). Impostando la proporzione 5 : 7,50 = 8 : x, otteniamo x = (7,50 × 8) ÷ 5 = 60 ÷ 5 = 12 €.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-02",
            text: "Per imbiancare un edificio scolastico, 4 operai impiegano 6 giorni di lavoro. Quanti giorni impiegherebbero 8 operai lavorando allo stesso ritmo?\nStabilisci il tipo di proporzionalità e inserisci il numero di giorni.",
            answer: "3",
            accepted: ["3"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità inversa: aumentando il numero di operai, il tempo necessario per completare il lavoro diminuisce proporzionalmente (il prodotto Operai × Giorni è costante: 4 × 6 = 24). Con 8 operai: x = 24 ÷ 8 = 3 giorni.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-03",
            text: "Considera un viaggio in automobile di lunghezza fissata (ad esempio 200 km). All'aumentare della velocità media dell'auto, il tempo impiegato per completare il tragitto diminuisce in proporzione.\nTra la velocità e il tempo di percorrenza c'è una proporzionalità diretta o inversa? Rispondi scrivendo 'diretta' oppure 'inversa'.",
            answer: "inversa",
            accepted: ["inversa"],
            tolerance: 0,
            exact: true,
            explanation: "Si tratta di una proporzionalità inversa: su un percorso di lunghezza fissata, il prodotto tra velocità e tempo è costante (spazio = v × t). Raddoppiando la velocità, il tempo necessario si dimezza.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-04",
            text: "Un ciclista viaggia a velocità costante e percorre 36 km in 2 ore. Mantenendo la stessa andatura, quanti chilometri percorrerà in 5 ore?\nStabilisci il tipo di proporzionalità e inserisci i chilometri percorsi.",
            answer: "90",
            accepted: ["90"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità diretta: viaggiando a velocità costante, la distanza percorsa e il tempo impiegato aumentano nella stessa misura (il rapporto Distanza / Tempo è costante: 36 ÷ 2 = 18 km/h). In 5 ore il ciclista percorrerà x = 18 × 5 = 90 km (oppure dalla proporzione 36 : 2 = x : 5, da cui x = (36 × 5) ÷ 2 = 90 km).",
            table: null,
            svg: null
          },
          {
            id: "misure-4-05",
            text: "Per riempire una vasca, 2 rubinetti identici aperti contemporaneamente impiegano 18 ore. Se vengono aperti 6 rubinetti uguali ai primi, quante ore saranno necessarie per riempire la stessa vasca?\nStabilisci il tipo di proporzionalità e inserisci il numero di ore.",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità inversa: aumentando il numero di rubinetti con la stessa portata d'acqua, il tempo necessario per riempire la vasca diminuisce proporzionalmente (il prodotto Rubinetti × Ore è costante: 2 × 18 = 36). Con 6 rubinetti serviranno x = 36 ÷ 6 = 6 ore.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-06",
            text: "Un treno viaggia a una velocità media di 120 km/h e collega due città in 3 ore. Se viaggiasse a una velocità media di 90 km/h, quante ore impiegherebbe per percorrere la stessa tratta?\nStabilisci il tipo di proporzionalità e inserisci le ore di viaggio.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità inversa: su un tragitto di lunghezza costante (120 × 3 = 360 km), al diminuire della velocità il tempo necessario aumenta in modo inversamente proporzionale (il prodotto Velocità × Tempo è costante: 360). Alla velocità di 90 km/h: x = 360 ÷ 90 = 4 ore.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-07",
            text: "In un negozio il tessuto costa 14 € al metro. Se compri una lunghezza maggiore di stoffa, il costo complessivo da pagare aumenta nello stesso rapporto.\nTra la lunghezza del tessuto acquistato e il costo totale c'è una proporzionalità diretta o inversa? Rispondi scrivendo 'diretta' oppure 'inversa'.",
            answer: "diretta",
            accepted: ["diretta"],
            tolerance: 0,
            exact: true,
            explanation: "Si tratta di una proporzionalità diretta: raddoppiando o triplicando i metri di tessuto acquistati, anche la spesa totale raddoppia o triplica. Il rapporto Costo / Lunghezza è costante ed equivale al prezzo unitario (14 €/m).",
            table: null,
            svg: null
          },
          {
            id: "misure-4-08",
            text: "Un'automobile consuma 15 litri di carburante per percorrere 240 km in autostrada a velocità costante. Quanti litri consumerà per percorrere 400 km nelle stesse condizioni di guida?\nStabilisci il tipo di proporzionalità e inserisci i litri di carburante.",
            answer: "25",
            accepted: ["25"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità diretta: a parità di andatura, la distanza percorsa e il carburante consumato variano nello stesso rapporto (il consumo unitario è costante: 240 ÷ 15 = 16 km con 1 litro). Dalla proporzione 240 : 15 = 400 : x, ricaviamo x = (15 × 400) ÷ 240 = 6000 ÷ 240 = 25 litri.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-09",
            text: "Una squadra di 6 giardinieri impiega 10 giorni per completare la potatura degli alberi di un parco cittadino. Se la squadra fosse composta da 15 giardinieri che lavorano allo stesso ritmo, quanti giorni impiegherebbe?\nStabilisci il tipo di proporzionalità e inserisci il numero di giorni.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità inversa: all'aumentare dei giardinieri al lavoro, il tempo richiesto per completare la potatura diminuisce in proporzione (il prodotto Giardinieri × Giorni è costante: 6 × 10 = 60). Con 15 giardinieri il tempo necessario sarà x = 60 ÷ 15 = 4 giorni.",
            table: null,
            svg: null
          },
          {
            id: "misure-4-10",
            text: "Un podista corre a ritmo costante e in 12 minuti percorre una distanza di 2400 metri. Mantenendo lo stesso ritmo di corsa, quanti metri percorrerà in 20 minuti?\nStabilisci il tipo di proporzionalità e inserisci i metri percorsi.",
            answer: "4000",
            accepted: ["4000"],
            tolerance: 0,
            exact: false,
            explanation: "Si tratta di una proporzionalità diretta: correndo a velocità costante, il tempo trascorso e la distanza percorsa crescono in modo direttamente proporzionale (rapporto costante: 2400 ÷ 12 = 200 m/min). In 20 minuti percorrerà x = 200 × 20 = 4000 m (oppure impostando 2400 : 12 = x : 20, da cui x = (2400 × 20) ÷ 12 = 4000 m).",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 5,
        title: "Problema composto con scala",
        blueprint: "Risolvi un problema composto su distanze reali e distanze su mappa applicando la scala di riduzione.",
        exercises: [
          {
            id: "misure-5-01",
            text: "Su una cartina escursionistica con scala 1 : 25.000 la distanza misurata tra due rifugi alpini è di 6 cm.\nQual è la distanza reale in linea d'aria tra i due rifugi? Inserisci il risultato in chilometri (km).",
            answer: "1,5",
            accepted: ["1.5", "1,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n6 cm × 25.000 = 150.000 cm.\nPasso 2: Eseguiamo l'equivalenza da centimetri a metri:\n150.000 cm = 1.500 m.\nPasso 3: Eseguiamo l'equivalenza da metri a chilometri:\n1.500 m = 1,5 km.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-02",
            text: "La distanza reale tra due stazioni ferroviarie è di 15 km. Un cartografo deve rappresentare questa tratta su una mappa in scala 1 : 100.000.\nQuanti centimetri misurerà la distanza tra le due stazioni sulla carta? Inserisci il risultato in centimetri (cm).",
            answer: "15",
            accepted: ["15", "15,0", "15.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Trasformiamo la distanza reale da chilometri a metri:\n15 km = 15.000 m.\nPasso 2: Trasformiamo i metri in centimetri:\n15.000 m = 1.500.000 cm.\nPasso 3: Applichiamo la scala di riduzione dividendo per 100.000:\n1.500.000 cm ÷ 100.000 = 15 cm.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-03",
            text: "Su una mappa stradale in scala 1 : 50.000 la distanza misurata tra due paesi è di 4,2 cm. Un ciclista viaggia a una velocità media costante di 21 km/h.\nQuanti minuti impiegherà il ciclista a percorrere quel tragitto? Inserisci il risultato in minuti.",
            answer: "6",
            accepted: ["6", "6,0", "6.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n4,2 cm × 50.000 = 210.000 cm.\nPasso 2: Eseguiamo l'equivalenza in chilometri:\n210.000 cm = 2.100 m = 2,1 km.\nPasso 3: Calcoliamo il tempo impiegato in ore (t = s / v):\n2,1 km ÷ 21 km/h = 0,1 ore.\nPasso 4: Convertiamo le ore in minuti:\n0,1 × 60 min = 6 minuti.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-04",
            text: "Su una mappa regionale con scala 1 : 200.000 il tragitto tra due città costiere misura 8,5 cm.\nQual è la lunghezza effettiva del tragitto nella realtà? Inserisci il valore in chilometri (km).",
            answer: "17",
            accepted: ["17", "17,0", "17.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per il denominatore della scala:\n8,5 cm × 200.000 = 1.700.000 cm.\nPasso 2: Eseguiamo l'equivalenza da centimetri a metri:\n1.700.000 cm = 17.000 m.\nPasso 3: Eseguiamo l'equivalenza da metri a chilometri:\n17.000 m = 17 km.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-05",
            text: "Su una carta stradale in scala 1 : 250.000 la distanza tra due località misura 16 cm. Un'automobile compie questo percorso con un consumo medio di 5 litri di carburante ogni 100 km. Sapendo che il carburante costa 1,85 € al litro, quanto si spende per il carburante necessario al tragitto? Inserisci la spesa in euro (es. 3,70).",
            answer: "3,7",
            accepted: ["3.7", "3,7", "3.70", "3,70"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n16 cm × 250.000 = 4.000.000 cm.\nPasso 2: Eseguiamo l'equivalenza in chilometri:\n4.000.000 cm = 40.000 m = 40 km.\nPasso 3: Calcoliamo i litri di carburante necessari per 40 km:\n(5 L ÷ 100 km) × 40 km = 2 litri di carburante.\nPasso 4: Calcoliamo la spesa complessiva in euro:\n2 L × 1,85 €/L = 3,70 €.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-06",
            text: "Un percorso all'interno di un parco naturale ha una lunghezza reale di 4,8 km. Si vuole disegnarlo su una mappa con scala 1 : 40.000.\nQuanti centimetri misurerà il percorso sulla mappa? Inserisci il risultato in centimetri (cm).",
            answer: "12",
            accepted: ["12", "12,0", "12.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Convertiamo la lunghezza reale da chilometri a metri:\n4,8 km = 4.800 m.\nPasso 2: Convertiamo i metri in centimetri:\n4.800 m = 480.000 cm.\nPasso 3: Applichiamo la scala di riduzione dividendo per 40.000:\n480.000 cm ÷ 40.000 = 12 cm.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-07",
            text: "Su una pianta ferroviaria in scala 1 : 75.000 il tragitto tra due fermate consecutive misura 6 cm. Un treno percorre la tratta a una velocità media costante di 90 km/h.\nQuanti minuti impiega il treno per andare da una fermata all'altra? Inserisci il risultato in minuti.",
            answer: "3",
            accepted: ["3", "3,0", "3.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n6 cm × 75.000 = 450.000 cm.\nPasso 2: Eseguiamo l'equivalenza in chilometri:\n450.000 cm = 4.500 m = 4,5 km.\nPasso 3: Calcoliamo il tempo di viaggio in ore (t = s / v):\n4,5 km ÷ 90 km/h = 0,05 ore.\nPasso 4: Convertiamo le ore in minuti:\n0,05 × 60 min = 3 minuti.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-08",
            text: "Su una mappa topografica in scala 1 : 25.000 la distanza tra una sorgente d'acqua e un lago misura 14 cm.\nA quanti chilometri corrisponde tale distanza nella realtà? Inserisci il risultato in chilometri (km).",
            answer: "3,5",
            accepted: ["3.5", "3,5"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la misura reale in centimetri moltiplicando per 25.000:\n14 cm × 25.000 = 350.000 cm.\nPasso 2: Eseguiamo l'equivalenza da centimetri a metri:\n350.000 cm = 3.500 m.\nPasso 3: Eseguiamo l'equivalenza da metri a chilometri:\n3.500 m = 3,5 km.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-09",
            text: "Su una mappa in scala 1 : 500.000 la distanza stradale tra due capoluoghi misura 14 cm. Un furgone percorre in media 14 km con 1 litro di carburante. Se il carburante costa 1,75 € al litro, quanto si spende per effettuare il viaggio tra i due capoluoghi? Inserisci la spesa in euro (es. 8,75).",
            answer: "8,75",
            accepted: ["8.75", "8,75"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n14 cm × 500.000 = 7.000.000 cm.\nPasso 2: Eseguiamo l'equivalenza in chilometri:\n7.000.000 cm = 70.000 m = 70 km.\nPasso 3: Calcoliamo i litri di carburante necessari dividendo per il rendimento:\n70 km ÷ 14 km/L = 5 litri.\nPasso 4: Calcoliamo la spesa complessiva moltiplicando per il prezzo al litro:\n5 L × 1,75 €/L = 8,75 €.",
            table: null,
            svg: null
          },
          {
            id: "misure-5-10",
            text: "Su una carta stradale in scala 1 : 150.000 la distanza tra due uscite autostradali misura 16 cm. Un'auto viaggia a velocità costante di 80 km/h.\nQuanti minuti impiega l'auto a percorrere quel tratto autostradale? Inserisci il tempo in minuti.",
            answer: "18",
            accepted: ["18", "18,0", "18.0"],
            tolerance: 0.01,
            exact: false,
            explanation: "Passo 1: Calcoliamo la distanza reale in centimetri moltiplicando per la scala:\n16 cm × 150.000 = 2.400.000 cm.\nPasso 2: Eseguiamo l'equivalenza in chilometri:\n2.400.000 cm = 24.000 m = 24 km.\nPasso 3: Calcoliamo il tempo impiegato in ore (t = s / v):\n24 km ÷ 80 km/h = 0,3 ore.\nPasso 4: Convertiamo le ore in minuti:\n0,3 × 60 min = 18 minuti.",
            table: null,
            svg: null
          }
        ]
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
        blueprint: "Data un'espressione con una lettera, sostituire un valore e calcolare.",
        exercises: [
          {
            id: "algebra-1-01",
            text: "Il costo in euro per noleggiare un armadietto a scuola e acquistare x quaderni è rappresentato dall'espressione:\n3x + 2\nCalcola il valore dell'espressione per x = 4.\nInserisci solo il valore numerico intero.",
            answer: "14",
            accepted: ["14"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo il valore dato tra parentesi al posto della lettera: 3(4) + 2. Eseguiamo prima la moltiplicazione: 3 × 4 = 12. Infine sommiamo: 12 + 2 = 14.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-02",
            text: "In una sessione di allenamento in pista, i minuti totali trascorsi tra riscaldamento e a serie di allunghi sono calcolati con l'espressione:\n4a + 5\nCalcola il valore dell'espressione per a = 6.\nInserisci solo il valore numerico intero.",
            answer: "29",
            accepted: ["29"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo il valore dato tra parentesi al posto della lettera: 4(6) + 5. Calcoliamo prima il prodotto: 4 × 6 = 24. Aggiungiamo poi il termine noto: 24 + 5 = 29.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-03",
            text: "Un pasticciere prepara dei vassoi di dolci. I biscotti decorati necessari per n vassoi più una scorta per la vetrina sono dati dall'espressione:\n5n + 12\nCalcola il valore dell'espressione per n = 7.\nInserisci solo il valore numerico intero.",
            answer: "47",
            accepted: ["47"],
            tolerance: 0,
            exact: false,
            explanation: "Scriviamo la sostituzione inserendo il valore tra parentesi: 5(7) + 12. Svolgiamo prima la moltiplicazione: 5 × 7 = 35. Sommiamo infine: 35 + 12 = 47.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-04",
            text: "La spesa in euro per noleggiare una bicicletta elettrica per y ore con una quota fissa di assicurazione è calcolata tramite l'espressione:\n7y + 15\nCalcola il valore dell'espressione per y = 8.\nInserisci solo il valore numerico intero.",
            answer: "71",
            accepted: ["71"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo la lettera y con il suo valore tra parentesi: 7(8) + 15. Eseguiamo per prima la moltiplicazione: 7 × 8 = 56. Completiamo l'addizione: 56 + 15 = 71.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-05",
            text: "In un negozio di giochi, il prezzo scontato per l'acquisto di x bustine promozionali è dato dall'espressione:\n5x − 4\nCalcola il valore dell'espressione per x = 6.\nInserisci solo il valore numerico intero.",
            answer: "26",
            accepted: ["26"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo il valore dato tra parentesi al posto di x: 5(6) − 4. Calcoliamo prima la moltiplicazione: 5 × 6 = 30. Eseguiamo la sottrazione finale: 30 − 4 = 26.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-06",
            text: "Per una serata al cinema con gli amici, il costo totale in euro per k biglietti ridotti dopo aver applicato un buono sconto è espresso da:\n6k − 11\nCalcola il valore dell'espressione per k = 9.\nInserisci solo il valore numerico intero.",
            answer: "43",
            accepted: ["43"],
            tolerance: 0,
            exact: false,
            explanation: "Inseriamo il valore tra parentesi nell'espressione: 6(9) − 11. Svolgiamo prima il prodotto: 6 × 9 = 54. Concludiamo con la sottrazione: 54 − 11 = 43.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-07",
            text: "In una sfida a squadre di un videogioco, il punteggio netto accumulato superando m livelli dopo aver detratto le penalità è dato dall'espressione:\n8m − 17\nCalcola il valore dell'espressione per m = 5.\nInserisci solo il valore numerico intero.",
            answer: "23",
            accepted: ["23"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo il valore tra parentesi al posto della variabile: 8(5) − 17. Eseguiamo prima la moltiplicazione: 8 × 5 = 40. Sottraiamo infine: 40 − 17 = 23.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-08",
            text: "Il numero di piastrelle necessarie per pavimentare una superficie quadrata di lato x metri più una corsia di bordo è calcolato con l'espressione:\nx² + 7\nCalcola il valore dell'espressione per x = 6.\nInserisci solo il valore numerico intero.",
            answer: "43",
            accepted: ["43"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo la variabile con il suo valore tra parentesi: (6)² + 7. Calcoliamo per prima la potenza: 6² = 36. Sommiamo poi: 36 + 7 = 43.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-09",
            text: "Durante un esperimento scientifico in laboratorio, la pressione misurata in un condotto al variare della temperatura x è modellizzata dall'espressione:\n2x² + 3\nCalcola il valore dell'espressione per x = −3.\nInserisci solo il valore numerico intero.",
            answer: "21",
            accepted: ["21", "+21"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo il valore negativo tra parentesi: 2(−3)² + 3. Eleviamo prima a potenza ricordando che il quadrato di un numero negativo è positivo: (−3)² = 9. Moltiplichiamo 2 × 9 = 18 e sommiamo infine: 18 + 3 = 21.",
            table: null,
            svg: null
          },
          {
            id: "algebra-1-10",
            text: "In un gioco a premi a squadre, il punteggio complessivo ottenuto con a risposte esatte e b penalità è regolato dalla formula:\n3a + 2b\nCalcola il valore dell'espressione per a = 5 e b = −2.\nInserisci solo il valore numerico intero.",
            answer: "11",
            accepted: ["11", "+11"],
            tolerance: 0,
            exact: false,
            explanation: "Sostituiamo i valori delle lettere scrivendoli tra parentesi: 3(5) + 2(−2). Eseguiamo le due moltiplicazioni: 3 × 5 = 15 e 2 × (−2) = −4. Concludiamo la somma algebrica: 15 + (−4) = 15 − 4 = 11.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 2,
        title: "Equazione a un passaggio",
        blueprint: "Una sola operazione inversa per isolare l'incognita.",
        exercises: [
          {
            id: "algebra-2-01",
            text: "In una biblioteca scolastica, dopo aver sistemato 6 nuovi libri sul primo ripiano, ci sono in totale 19 libri. La situazione è descritta dall'equazione:\nx + 6 = 19\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "13",
            accepted: ["13"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa dell'addizione: sottraiamo 6 da entrambi i membri dell'equazione. Otteniamo x = 19 − 6, da cui x = 13.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-02",
            text: "Durante una gara di staffetta, una squadra ha già percorso 14 metri nell'ultima frazione e deve raggiungere il traguardo a 32 metri complessivi, secondo l'equazione:\nx + 14 = 32\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "18",
            accepted: ["18"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa dell'addizione: sottraiamo 14 da entrambi i membri dell'equazione. Otteniamo x = 32 − 14, da cui x = 18.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-03",
            text: "Elena aggiunge 27 euro al suo salvadanaio e raggiunge così la somma di 75 euro, come rappresentato dall'equazione:\nx + 27 = 75\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "48",
            accepted: ["48"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa dell'addizione: sottraiamo 27 da entrambi i membri dell'equazione. Otteniamo x = 75 − 27, da cui x = 48.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-04",
            text: "Un pasticciere sforna un vassoio di biscotti. Dopo averne venduti 8, gliene restano 13 sul banco, secondo la relazione:\nx − 8 = 13\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "21",
            accepted: ["21"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della sottrazione: sommiamo 8 a entrambi i membri dell'equazione. Otteniamo x = 13 + 8, da cui x = 21.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-05",
            text: "Durante un viaggio in treno, dopo aver percorso 19 km rimangono ancora 35 km da percorrere fino alla destinazione, come espresso dall'equazione:\nx − 19 = 35\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "54",
            accepted: ["54"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della sottrazione: sommiamo 19 a entrambi i membri dell'equazione. Otteniamo x = 35 + 19, da cui x = 54.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-06",
            text: "In un gioco da tavolo a quiz, a causa di una penalità vengono tolti 46 punti dal totale accumulato da una squadra, che si ritrova con 82 punti:\nx − 46 = 82\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "128",
            accepted: ["128"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della sottrazione: sommiamo 46 a entrambi i membri dell'equazione. Otteniamo x = 82 + 46, da cui x = 128.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-07",
            text: "In una confezione di gadget per una festa ci sono 4 sacchetti uguali contenenti ciascuno x adesivi, per un totale di 28 adesivi complessivi:\n4 · x = 28\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della moltiplicazione: dividiamo entrambi i membri dell'equazione per 4. Otteniamo x = 28 ÷ 4, da cui x = 7.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-08",
            text: "Al mercato ortofrutticolo, una cassa contiene 7 confezioni identiche di fragole per una quantità complessiva di 63 cestini, secondo la relazione:\n7 · x = 63\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "9",
            accepted: ["9"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della moltiplicazione: dividiamo entrambi i membri dell'equazione per 7. Otteniamo x = 63 ÷ 7, da cui x = 9.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-09",
            text: "Un gruppo di amici divide equamente in 3 parti una scorta di caramelle, in modo che ciascuno ne riceva 12, come descritto dall'equazione:\nx / 3 = 12\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "36",
            accepted: ["36"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della divisione: moltiplichiamo entrambi i membri dell'equazione per 3. Otteniamo x = 12 × 3, da cui x = 36.",
            table: null,
            svg: null
          },
          {
            id: "algebra-2-10",
            text: "In un esperimento di fisica in laboratorio, la variazione complessiva di temperatura x viene suddivisa in 5 intervalli uguali, ciascuno pari a −4 °C:\nx / 5 = −4\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "-20",
            accepted: ["-20", "−20"],
            tolerance: 0,
            exact: false,
            explanation: "Per isolare l'incognita x applichiamo l'operazione inversa della divisione: moltiplichiamo entrambi i membri dell'equazione per 5. Otteniamo x = (−4) × 5, da cui x = −20.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 3,
        title: "Equazione a due passaggi",
        blueprint: "Prima si elimina il termine noto, poi si divide per il coefficiente.",
        exercises: [
          {
            id: "algebra-3-01",
            text: "In cartoleria, Luca acquista 2 penne uguali dal costo di x euro ciascuna e un astuccio da 5 euro, spendendo in totale 13 euro:\n2x + 5 = 13\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 5 da entrambi i membri: 2x = 13 − 5 → 2x = 8.\n2) Dividiamo per il coefficiente di x: x = 8 ÷ 2 → x = 4.\nVerifica per sostituzione: 2 · 4 + 5 = 8 + 5 = 13.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-02",
            text: "Durante gli allenamenti di nuoto, Marco ha già fatto 7 vasche di riscaldamento e poi nuota 3 serie da x vasche ciascuna, per un totale di 22 vasche:\n3x + 7 = 22\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "5",
            accepted: ["5"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 7 da entrambi i membri: 3x = 22 − 7 → 3x = 15.\n2) Dividiamo per il coefficiente di x: x = 15 ÷ 3 → x = 5.\nVerifica per sostituzione: 3 · 5 + 7 = 15 + 7 = 22.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-03",
            text: "Un pasticciere decora 4 torte con lo stesso numero x di fragole ciascuna e ne posiziona altre 9 sul vassoio centrale, usando in tutto 33 fragole:\n4x + 9 = 33\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 9 da entrambi i membri: 4x = 33 − 9 → 4x = 24.\n2) Dividiamo per il coefficiente di x: x = 24 ÷ 4 → x = 6.\nVerifica per sostituzione: 4 · 6 + 9 = 24 + 9 = 33.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-04",
            text: "Per comprare un videogioco da 49 euro, Giulia utilizza 14 euro dal suo salvadanaio e 5 banconote uguali da x euro:\n5x + 14 = 49\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 14 da entrambi i membri: 5x = 49 − 14 → 5x = 35.\n2) Dividiamo per il coefficiente di x: x = 35 ÷ 5 → x = 7.\nVerifica per sostituzione: 5 · 7 + 14 = 35 + 14 = 49.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-05",
            text: "Un furgone per le consegne deve compiere un tragitto di 2 tappe da x km ciascuna, ridotto di 3 km per una scorciatoia, per un percorso di 11 km:\n2x − 3 = 11\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sommando 3 a entrambi i membri: 2x = 11 + 3 → 2x = 14.\n2) Dividiamo per il coefficiente di x: x = 14 ÷ 2 → x = 7.\nVerifica per sostituzione: 2 · 7 − 3 = 14 − 3 = 11.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-06",
            text: "Al cinema, 3 amici acquistano un biglietto ciascuno dal costo di x euro e utilizzano un buono sconto comitiva di 8 euro complessivi, pagando 19 euro:\n3x − 8 = 19\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "9",
            accepted: ["9"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sommando 8 a entrambi i membri: 3x = 19 + 8 → 3x = 27.\n2) Dividiamo per il coefficiente di x: x = 27 ÷ 3 → x = 9.\nVerifica per sostituzione: 3 · 9 − 8 = 27 − 8 = 19.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-07",
            text: "In una gara a quiz a punti, una squadra ottiene 6 manche vincenti da x punti ciascuna con una detrazione di 7 punti di penalità, totalizzando 41 punti:\n6x − 7 = 41\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "8",
            accepted: ["8"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sommando 7 a entrambi i membri: 6x = 41 + 7 → 6x = 48.\n2) Dividiamo per il coefficiente di x: x = 48 ÷ 6 → x = 8.\nVerifica per sostituzione: 6 · 8 − 7 = 48 − 7 = 41.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-08",
            text: "Da una scorta iniziale di 10 pennarelli nuovi su un banco, l'insegnante distribuisce 2 astucci uguali con x pennarelli ciascuno, lasciandone 4 sul tavolo:\n10 − 2x = 4\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "3",
            accepted: ["3"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 10 da entrambi i membri: −2x = 4 − 10 → −2x = −6.\n2) Dividiamo per il coefficiente di x (−2): x = (−6) ÷ (−2) → x = 3.\nVerifica per sostituzione: 10 − 2 · 3 = 10 − 6 = 4.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-09",
            text: "Da un credito prepagato di 18 euro su una tessera dei trasporti vengono scalati 3 viaggi identici da x euro l'uno, lasciando 6 euro di credito residuo:\n18 − 3x = 6\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 18 da entrambi i membri: −3x = 6 − 18 → −3x = −12.\n2) Dividiamo per il coefficiente di x (−3): x = (−12) ÷ (−3) → x = 4.\nVerifica per sostituzione: 18 − 3 · 4 = 18 − 12 = 6.",
            table: null,
            svg: null
          },
          {
            id: "algebra-3-10",
            text: "In un esperimento termico in laboratorio, la temperatura rilevata di 7 °C è ottenuta sommando 23 °C a 4 impulsi termici uguali di intensità x:\n4x + 23 = 7\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "-4",
            accepted: ["-4", "−4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo il termine noto sottraendo 23 da entrambi i membri: 4x = 7 − 23 → 4x = −16.\n2) Dividiamo per il coefficiente di x: x = (−16) ÷ 4 → x = −4.\nVerifica per sostituzione: 4 · (−4) + 23 = −16 + 23 = 7.",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 4,
        title: "Equazione con parentesi e incognita in entrambi i membri",
        blueprint: "Risolvi un'equazione di primo grado con parentesi e termini con l'incognita presenti in entrambi i membri.",
        exercises: [
          {
            id: "algebra-4-01",
            text: "Due amici confrontano le loro raccolte di figurine. Luca ha 4 album con x figurine ciascuno più 3 figurine sciolte, mentre Matteo ha un album da x figurine più 15 figurine sciolte. I due ragazzi hanno lo stesso numero totale di figurine:\n4x + 3 = x + 15\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Raccogliamo le x a sinistra e i numeri a destra: 4x − x = 15 − 3 → 3x = 12.\n2) Dividiamo per 3: x = 12 ÷ 3 → x = 4.\nVerifica per sostituzione: 4 · 4 + 3 = 16 + 3 = 19 e 4 + 15 = 19. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-02",
            text: "In un magazzino, 7 scatole uguali contenenti x quaderni ciascuna meno 8 quaderni difettosi equivalgono a 2 scatole identiche più 17 quaderni sfusi:\n7x − 8 = 2x + 17\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "5",
            accepted: ["5"],
            tolerance: 0,
            exact: false,
            explanation: "1) Raccogliamo le x a sinistra e i numeri a destra: 7x − 2x = 17 + 8 → 5x = 25.\n2) Dividiamo per 5: x = 25 ÷ 5 → x = 5.\nVerifica per sostituzione: 7 · 5 − 8 = 35 − 8 = 27 e 2 · 5 + 17 = 10 + 17 = 27. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-03",
            text: "Per due abbonamenti in palestra, la prima formula prevede 3 quote mensili da x euro più 14 euro di iscrizione, mentre la seconda prevede 5 quote mensili da x euro più 2 euro di tessera. Le due formule hanno lo stesso costo totale:\n3x + 14 = 5x + 2\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "1) Raccogliamo i numeri a sinistra e le x a destra: 14 − 2 = 5x − 3x → 12 = 2x.\n2) Dividiamo per 2: x = 12 ÷ 2 → x = 6.\nVerifica per sostituzione: 3 · 6 + 14 = 18 + 14 = 32 e 5 · 6 + 2 = 30 + 2 = 32. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-04",
            text: "In una gara di robotica, 3 squadre schierano ciascuna un numero di sensori pari a (x − 2), ottenendo lo stesso totale di un laboratorio che ne ha x più 4 di riserva:\n3(x − 2) = x + 4\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "5",
            accepted: ["5"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo la parentesi applicando la proprietà distributiva: 3x − 6 = x + 4.\n2) Raccogliamo le x a sinistra e i numeri a destra: 3x − x = 4 + 6 → 2x = 10.\n3) Dividiamo per 2: x = 10 ÷ 2 → x = 5.\nVerifica per sostituzione: 3 · (5 − 2) = 3 · 3 = 9 e 5 + 4 = 9. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-05",
            text: "Risolvi la seguente equazione con una parentesi e l'incognita in entrambi i membri:\n4(x + 1) = 7x − 8\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "4",
            accepted: ["4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo la parentesi moltiplicando per 4: 4x + 4 = 7x − 8.\n2) Raccogliamo i numeri a sinistra e le x a destra: 4 + 8 = 7x − 4x → 12 = 3x.\n3) Dividiamo per 3: x = 12 ÷ 3 → x = 4.\nVerifica per sostituzione: 4 · (4 + 1) = 4 · 5 = 20 e 7 · 4 − 8 = 28 − 8 = 20. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-06",
            text: "Determina il valore dell'incognita x nella seguente equazione:\n5(x + 2) = 2x + 1\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "-3",
            accepted: ["-3", "−3"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo la parentesi moltiplicando per 5: 5x + 10 = 2x + 1.\n2) Raccogliamo le x a sinistra e i numeri a destra: 5x − 2x = 1 − 10 → 3x = −9.\n3) Dividiamo per 3: x = (−9) ÷ 3 → x = −3.\nVerifica per sostituzione: 5 · (−3 + 2) = 5 · (−1) = −5 e 2 · (−3) + 1 = −6 + 1 = −5. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-07",
            text: "Un laboratorio confeziona 4 scatole da x provette più 7 provette sfuse, mentre un secondo laboratorio prepara 3 cassette contenenti ciascuna (x + 5) provette. Entrambi preparano lo stesso numero di provette:\n4x + 7 = 3(x + 5)\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "8",
            accepted: ["8"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo la parentesi moltiplicando per 3: 4x + 7 = 3x + 15.\n2) Raccogliamo le x a sinistra e i numeri a destra: 4x − 3x = 15 − 7 → x = 8.\nVerifica per sostituzione: 4 · 8 + 7 = 32 + 7 = 39 e 3 · (8 + 5) = 3 · 13 = 39. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-08",
            text: "Risolvi la seguente equazione con due parentesi:\n3(x + 4) = 2(2x + 1)\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "10",
            accepted: ["10"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo entrambe le parentesi: 3x + 12 = 4x + 2.\n2) Raccogliamo i numeri a sinistra e le x a destra: 12 − 2 = 4x − 3x → 10 = x.\nVerifica per sostituzione: 3 · (10 + 4) = 3 · 14 = 42 e 2 · (2 · 10 + 1) = 2 · 21 = 42. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-09",
            text: "Fai attenzione al segno meno davanti alla parentesi e risolvi l'equazione:\n7x − (2x − 5) = 3(x − 1)\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "-4",
            accepted: ["-4", "−4"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo le parentesi cambiando i segni dopo il meno: 7x − 2x + 5 = 3x − 3 → 5x + 5 = 3x − 3.\n2) Raccogliamo le x a sinistra e i numeri a destra: 5x − 3x = −3 − 5 → 2x = −8.\n3) Dividiamo per 2: x = (−8) ÷ 2 → x = −4.\nVerifica per sostituzione: 7 · (−4) − (2 · (−4) − 5) = −28 − (−13) = −15 e 3 · (−4 − 1) = 3 · (−5) = −15. ✓",
            table: null,
            svg: null
          },
          {
            id: "algebra-4-10",
            text: "Elimina tutte le parentesi facendo attenzione ai segni e determina la soluzione dell'equazione:\n5(x + 1) − (2x − 3) = 2(x + 3)\nQuanto vale x?\nInserisci solo il valore numerico intero.",
            answer: "-2",
            accepted: ["-2", "−2"],
            tolerance: 0,
            exact: false,
            explanation: "1) Eliminiamo le parentesi: 5x + 5 − 2x + 3 = 2x + 6 → 3x + 8 = 2x + 6.\n2) Raccogliamo le x a sinistra e i numeri a destra: 3x − 2x = 6 − 8 → x = −2.\nVerifica per sostituzione: 5 · (−2 + 1) − (2 · (−2) − 3) = −5 − (−7) = 2 e 2 · (−2 + 3) = 2 · 1 = 2. ✓",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 5,
        title: "Problema da tradurre in equazione",
        blueprint: "Traduci un problema formulato a parole in un'equazione di primo grado e trova la soluzione richiesta.",
        exercises: [
          {
            id: "algebra-5-01",
            text: "Apri un libro e noti che la somma dei numeri delle due pagine affiancate (due numeri consecutivi) è 49. Qual è il numero della pagina più piccola?\nInserisci solo il numero.",
            answer: "24",
            accepted: ["24"],
            tolerance: 0,
            exact: false,
            explanation: "Scegliamo come incognita x il numero della pagina più piccola, quindi la pagina successiva è x + 1. Scriviamo l'equazione x + (x + 1) = 49, cioè 2x + 1 = 49. Sottraendo 1 otteniamo 2x = 48, da cui x = 24. La pagina più piccola è la numero 24 (e la successiva è la 25).",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-02",
            text: "Per entrare al luna park paghi 5 euro di ingresso fisso più 3 euro per ogni giostra a cui partecipi. Se alla fine spendi in tutto 26 euro, quante giostre hai fatto?\nInserisci solo il numero.",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x il numero di giostre fatte. La spesa totale è data dalla quota fissa più il costo delle giostre: 5 + 3x = 26. Sottraiamo 5 da entrambi i membri ottenendo 3x = 21, quindi x = 7. Hai fatto 7 giostre.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-03",
            text: "Marco ha 4 anni più di sua sorella Giulia. Tra 3 anni la somma delle loro età sarà 30 anni. Quanti anni ha oggi Giulia?\nInserisci solo il numero.",
            answer: "10",
            accepted: ["10"],
            tolerance: 0,
            exact: false,
            explanation: "Chiamiamo x l'età attuale di Giulia; oggi Marco ha x + 4 anni. Tra 3 anni Giulia avrà x + 3 anni e Marco avrà x + 7 anni, quindi (x + 3) + (x + 7) = 30, cioè 2x + 10 = 30. Risolvendo otteniamo 2x = 20, cioè x = 10. Oggi Giulia ha 10 anni.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-04",
            text: "La somma di tre numeri interi consecutivi è 72. Qual è il numero più grande tra i tre?\nInserisci solo il numero.",
            answer: "25",
            accepted: ["25"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x il più piccolo dei tre numeri; gli altri due sono x + 1 e x + 2. L'equazione è x + (x + 1) + (x + 2) = 72, cioè 3x + 3 = 72. Da 3x = 69 ricaviamo x = 23. I tre numeri sono 23, 24 e 25, quindi il più grande è 25.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-05",
            text: "Un orto rettangolare ha il perimetro di 56 metri. La lunghezza supera la larghezza di 6 metri. Quanti metri misura la larghezza dell'orto?\nInserisci solo il numero (senza unità di misura).",
            answer: "11",
            accepted: ["11"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x la larghezza in metri; la lunghezza sarà x + 6. Il perimetro è la somma dei quattro lati: 2x + 2(x + 6) = 56, cioè 4x + 12 = 56. Sottraendo 12 otteniamo 4x = 44, da cui x = 11. La larghezza dell'orto misura 11 metri.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-06",
            text: "Oggi un papà ha 38 anni e suo figlio ne ha 14. Quanti anni fa l'età del papà era il triplo di quella del figlio?\nInserisci solo il numero.",
            answer: "2",
            accepted: ["2"],
            tolerance: 0,
            exact: false,
            explanation: "Chiamiamo x gli anni trascorsi. Allora x anni fa il papà aveva 38 − x anni e il figlio 14 − x anni, quindi 38 − x = 3(14 − x). Sviluppando otteniamo 38 − x = 42 − 3x, cioè 2x = 4, da cui x = 2. Accadeva 2 anni fa (quando avevano 36 e 12 anni).",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-07",
            text: "La somma di tre numeri pari consecutivi è 90. Qual è il più piccolo dei tre numeri?\nInserisci solo il numero.",
            answer: "28",
            accepted: ["28"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x il primo numero pari; i due pari consecutivi successivi sono x + 2 e x + 4. Impostiamo l'equazione x + (x + 2) + (x + 4) = 90, cioè 3x + 6 = 90. Sottraendo 6 abbiamo 3x = 84, quindi x = 28. Il più piccolo dei tre numeri pari è 28.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-08",
            text: "Sara ha già 18 euro nel salvadanaio e aggiunge 6 euro ogni settimana. Suo fratello Matteo ha 30 euro e aggiunge 4 euro ogni settimana. Dopo quante settimane avranno esattamente la stessa somma?\nInserisci solo il numero.",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x il numero di settimane. Uguagliamo i risparmi dei due fratelli: 18 + 6x = 30 + 4x. Portiamo le x a sinistra e i numeri a destra: 6x − 4x = 30 − 18, cioè 2x = 12, quindi x = 6. Dopo 6 settimane entrambi avranno 54 euro.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-09",
            text: "Il perimetro di un cartellone rettangolare è 82 cm. La base è 5 cm più del doppio dell'altezza. Quanti centimetri misura la base?\nInserisci solo il numero (senza unità di misura).",
            answer: "29",
            accepted: ["29"],
            tolerance: 0,
            exact: false,
            explanation: "Scegliamo come incognita x l'altezza in cm, così la base misura 2x + 5. L'equazione del perimetro è 2x + 2(2x + 5) = 82, cioè 6x + 10 = 82. Da 6x = 72 ricaviamo x = 12 cm per l'altezza, quindi la base misura 2 · 12 + 5 = 29 cm.",
            table: null,
            svg: null
          },
          {
            id: "algebra-5-10",
            text: "Oggi la zia ha il triplo dell'età di Luca. Tra 12 anni la zia avrà il doppio dell'età che avrà Luca. Quanti anni ha oggi Luca?\nInserisci solo il numero.",
            answer: "12",
            accepted: ["12"],
            tolerance: 0,
            exact: false,
            explanation: "Indichiamo con x l'età attuale di Luca; oggi la zia ha 3x anni. Tra 12 anni Luca avrà x + 12 anni e la zia 3x + 12 anni, quindi 3x + 12 = 2(x + 12). Svolgendo i calcoli: 3x + 12 = 2x + 24, da cui x = 12. Oggi Luca ha 12 anni (e la zia 36).",
            table: null,
            svg: null
          }
        ]
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
        exercises: [
          {
            id: "piano-1-01",
            text: "Su una mappa a quadretti, parti dall'origine (0;0) e ti sposti di 4 unità a destra sull'asse x e di 2 unità in alto sull'asse y per raggiungere il punto A.\nQuali sono le coordinate del punto A? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(4;2)",
            accepted: ["(4;2)"],
            tolerance: 0,
            exact: true,
            explanation: "La prima coordinata (ascissa) indica lo spostamento a destra sull'asse x: 4. La seconda coordinata (ordinata) indica lo spostamento in alto sull'asse y: 2. Quindi il punto A ha coordinate (4;2).",
            table: null,
            svg: null
          },
          {
            id: "piano-1-02",
            text: "Nel piano cartesiano, il punto P ha coordinate P(7;3).\nQual è l'ascissa del punto P?",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "In una coppia di coordinate (x;y), il primo numero è sempre l'ascissa (la coordinata x) e il secondo è l'ordinata (la coordinata y). Nel punto P(7;3), l'ascissa è quindi 7.",
            table: null,
            svg: null
          },
          {
            id: "piano-1-03",
            text: "Durante una gara di orientamento, una bandierina si trova nel punto B(2;6).\nQual è l'ordinata del punto B?",
            answer: "6",
            accepted: ["6"],
            tolerance: 0,
            exact: false,
            explanation: "La seconda coordinata di un punto (x;y) rappresenta sempre l'ordinata, cioè il valore sull'asse verticale y. Nel punto B(2;6), l'ordinata è 6.",
            table: null,
            svg: null
          },
          {
            id: "piano-1-04",
            text: "Osserva il piano cartesiano nella figura.\nQuali sono le coordinate del punto A? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(3;5)",
            accepted: ["(3;5)"],
            tolerance: 0,
            exact: true,
            explanation: "Partendo dall'origine O(0;0), il punto A si trova in corrispondenza di 3 sull'asse orizzontale x e di 5 sull'asse verticale y. Le sue coordinate sono quindi (3;5).",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con griglia da 0 a 8 e punto A alle coordinate (3;5)">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <circle cx="115" cy="115" r="5.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <text x="124" y="108" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
</svg>`
          },
          {
            id: "piano-1-05",
            text: "Un piccolo robot parte dall'origine (0;0) di una griglia di prova, avanza di 6 unità verso destra e poi sale di 5 unità verso l'alto fino al punto R.\nQuali sono le coordinate del punto R? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(6;5)",
            accepted: ["(6;5)"],
            tolerance: 0,
            exact: true,
            explanation: "Lo spostamento verso destra corrisponde all'ascissa x = 6, mentre lo spostamento verso l'alto corrisponde all'ordinata y = 5. Il punto R si trova quindi alle coordinate (6;5).",
            table: null,
            svg: null
          },
          {
            id: "piano-1-06",
            text: "Nel piano cartesiano sono segnati tre punti: A, B e C.\nQuali sono le coordinate del punto B? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(6;2)",
            accepted: ["(6;2)"],
            tolerance: 0,
            exact: true,
            explanation: "Osservando il punto B, scendendo in verticale fino all'asse x leggiamo 6, mentre spostandoci in orizzontale fino all'asse y leggiamo 2. Quindi B ha coordinate (6;2).",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con griglia da 0 a 8 e i punti A, B e C">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <circle cx="65" cy="140" r="5.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <text x="74" y="133" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
  <circle cx="190" cy="190" r="5.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <text x="199" y="183" fill="#F8FAFC" font-size="13" font-weight="700">B</text>
  <circle cx="140" cy="65" r="5.5" fill="#FBBF24" stroke="#0F172A" stroke-width="1.5" />
  <text x="149" y="58" fill="#F8FAFC" font-size="13" font-weight="700">C</text>
</svg>`
          },
          {
            id: "piano-1-07",
            text: "Il punto M ha coordinate M(5;0).\nIl punto M si trova sull'asse x o sull'asse y? (Rispondi scrivendo solo x oppure y)",
            answer: "x",
            accepted: ["x", "asse x"],
            tolerance: 0,
            exact: true,
            explanation: "Il punto M(5;0) ha ascissa 5 e ordinata 0. Poiché ci spostiamo di 5 unità a destra sull'asse orizzontale senza salire (y = 0), il punto si trova sull'asse x.",
            table: null,
            svg: null
          },
          {
            id: "piano-1-08",
            text: "Dall'origine (0;0), un drone si sposta di 7 unità in alto (asse y) e di 1 unità a destra (asse x), fermandosi nel punto D.\nQuali sono le coordinate del punto D? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(1;7)",
            accepted: ["(1;7)"],
            tolerance: 0,
            exact: true,
            explanation: "Attenzione all'ordine: nelle coordinate (x;y) si scrive sempre prima l'ascissa (spostamento a destra, x = 1) e poi l'ordinata (spostamento in alto, y = 7). Le coordinate di D sono quindi (1;7).",
            table: null,
            svg: null
          },
          {
            id: "piano-1-09",
            text: "Il punto N ha coordinate N(0;8).\nIl punto N si trova sull'asse x o sull'asse y? (Rispondi scrivendo solo x oppure y)",
            answer: "y",
            accepted: ["y", "asse y"],
            tolerance: 0,
            exact: true,
            explanation: "Il punto N(0;8) ha ascissa x = 0 e ordinata y = 8. Non ci si sposta a destra dall'origine, ma solo di 8 unità verso l'alto: il punto si trova quindi sull'asse y.",
            table: null,
            svg: null
          },
          {
            id: "piano-1-10",
            text: "Osserva il piano cartesiano con i punti P, Q ed R.\nQuali sono le coordinate del punto R? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(7;0)",
            accepted: ["(7;0)"],
            tolerance: 0,
            exact: true,
            explanation: "Il punto R si trova esattamente sull'asse orizzontale x in corrispondenza del valore 7, quindi la sua ascissa è 7 e la sua ordinata è 0. Le coordinate di R sono (7;0).",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con griglia da 0 a 8 e i punti P, Q ed R">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <circle cx="90" cy="65" r="5.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <text x="99" y="58" fill="#F8FAFC" font-size="13" font-weight="700">P</text>
  <circle cx="165" cy="140" r="5.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <text x="174" y="133" fill="#F8FAFC" font-size="13" font-weight="700">Q</text>
  <circle cx="215" cy="240" r="5.5" fill="#F472B6" stroke="#0F172A" stroke-width="1.5" />
  <text x="215" y="229" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">R</text>
</svg>`
          }
        ]
      },
      {
        level: 2,
        title: "Quadranti e distanze su una retta",
        blueprint: "Determina il quadrante di appartenenza di un punto o calcola la distanza tra due punti su rette orizzontali o verticali.",
        exercises: [
          {
            id: "piano-2-01",
            text: "In un videogioco di esplorazione, un tesoro si trova nel punto A(−4;3).\nIn quale quadrante del piano cartesiano si trova il punto A? (Rispondi con I, II, III o IV)",
            answer: "II",
            accepted: ["ii", "2"],
            tolerance: 0,
            exact: true,
            explanation: "I quadranti hanno segni fissi: I (+;+), II (−;+), III (−;−) e IV (+;−). Il punto A(−4;3) ha ascissa negativa (x = −4) e ordinata positiva (y = 3), quindi si trova nel II quadrante.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-02",
            text: "Su una mappa cartesiana, una stazione meteorologica è posizionata nel punto B(5;−2).\nIn quale quadrante si trova il punto B? (Rispondi con I, II, III o IV)",
            answer: "IV",
            accepted: ["iv", "4"],
            tolerance: 0,
            exact: true,
            explanation: "Ricorda i segni nei quattro quadranti: I (+;+), II (−;+), III (−;−) e IV (+;−). Poiché B(5;−2) ha ascissa positiva (x = 5) e ordinata negativa (y = −2), appartiene al IV quadrante.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-03",
            text: "Un sottomarino viene rilevato dal radar alle coordinate P(−6;−1).\nIn quale quadrante si trova il punto P? (Rispondi con I, II, III o IV)",
            answer: "III",
            accepted: ["iii", "3"],
            tolerance: 0,
            exact: true,
            explanation: "Nei quadranti i segni sono: I (+;+), II (−;+), III (−;−) e IV (+;−). Il punto P(−6;−1) ha sia l'ascissa sia l'ordinata negative, quindi si trova nel III quadrante.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-04",
            text: "Un drone parte dall'origine (0;0), si sposta di 3 unità a destra e di 7 unità in alto, fermandosi nel punto D.\nIn quale quadrante si trova il punto D? (Rispondi con I, II, III o IV)",
            answer: "I",
            accepted: ["i", "1"],
            tolerance: 0,
            exact: true,
            explanation: "Spostandosi a destra e in alto dall'origine si ottengono coordinate entrambe positive: D(3;7). I segni dei quadranti sono I (+;+), II (−;+), III (−;−) e IV (+;−), quindi D si trova nel I quadrante.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-05",
            text: "Su una mappa a quadretti, due panchine si trovano nei punti A(−3;2) e B(4;2).\nQual è la distanza tra il punto A e il punto B?",
            answer: "7",
            accepted: ["7"],
            tolerance: 0,
            exact: false,
            explanation: "I punti A(−3;2) e B(4;2) hanno la stessa ordinata (y = 2), quindi si trovano sulla stessa retta orizzontale. La distanza è la differenza tra le ascisse: 4 − (−3) = 4 + 3 = 7.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-06",
            text: "Nel piano cartesiano, due segnali si trovano nei punti C(5;−4) e D(5;5).\nQual è la distanza tra C e D?",
            answer: "9",
            accepted: ["9"],
            tolerance: 0,
            exact: false,
            explanation: "I punti C(5;−4) e D(5;5) hanno la stessa ascissa (x = 5), quindi sono allineati verticalmente. La distanza si calcola facendo la differenza tra le ordinate: 5 − (−4) = 5 + 4 = 9.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-07",
            text: "In un progetto su carta millimetrata, due paletti sono fissati nei punti E(−11;−3) e F(−3;−3).\nQual è la distanza tra E ed F?",
            answer: "8",
            accepted: ["8"],
            tolerance: 0,
            exact: false,
            explanation: "Entrambi i punti si trovano nel III quadrante (I (+;+), II (−;+), III (−;−), IV (+;−)) e hanno la stessa ordinata (y = −3). La distanza orizzontale è la differenza tra le ascisse: −3 − (−11) = −3 + 11 = 8.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-08",
            text: "Un corriere si sposta in linea retta dal punto G(−4;−7) fino al punto H(−4;6).\nQual è la distanza percorsa da G a H?",
            answer: "13",
            accepted: ["13"],
            tolerance: 0,
            exact: false,
            explanation: "I due punti hanno la stessa ascissa (x = −4), quindi il percorso è verticale (dal III quadrante (−;−) al II quadrante (−;+)). La distanza è la differenza tra le ordinate: 6 − (−7) = 6 + 7 = 13.",
            table: null,
            svg: null
          },
          {
            id: "piano-2-09",
            text: "Nel piano cartesiano è dato il punto P(4;−5).\nQuali sono le coordinate del punto P', simmetrico di P rispetto all'asse x? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(4;5)",
            accepted: ["(4;5)"],
            tolerance: 0,
            exact: true,
            explanation: "Il simmetrico rispetto all'asse x mantiene la stessa ascissa e cambia il segno dell'ordinata. Il punto P(4;−5) passa così dal IV quadrante (+;−) al I quadrante (+;+), ottenendo coordinate (4;5).",
            table: null,
            svg: null
          },
          {
            id: "piano-2-10",
            text: "Un architetto disegna il punto Q(3;−6) e vuole tracciarne il simmetrico rispetto all'asse y.\nQuali sono le coordinate del punto simmetrico Q'? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(-3;-6)",
            accepted: ["(-3;-6)"],
            tolerance: 0,
            exact: true,
            explanation: "Il simmetrico rispetto all'asse y cambia il segno dell'ascissa e mantiene invariata l'ordinata. Così Q(3;−6) passa dal IV quadrante (+;−) al III quadrante (−;−), con coordinate (−3;−6).",
            table: null,
            svg: null
          }
        ]
      },
      {
        level: 3,
        title: "Poligoni nel piano",
        blueprint: "Calcola perimetro o area di un poligono semplice disegnato nel piano cartesiano a partire dai suoi vertici.",
        exercises: [
          {
            id: "piano-3-01",
            text: "Osserva il rettangolo ABCD disegnato nel piano cartesiano con vertici A(1;2), B(6;2), C(6;5) e D(1;5).\nQual è il perimetro del rettangolo ABCD?",
            answer: "16",
            accepted: ["16"],
            tolerance: 0,
            exact: false,
            explanation: "I lati del rettangolo sono paralleli agli assi. La base orizzontale AB misura 6 − 1 = 5 e l'altezza verticale BC misura 5 − 2 = 3. Il perimetro è 2 × (5 + 3) = 2 × 8 = 16.",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con rettangolo ABCD di vertici A(1;2), B(6;2), C(6;5), D(1;5)">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <polygon points="65,190 190,190 190,115 65,115" fill="rgba(56, 189, 248, 0.18)" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="65" cy="190" r="4.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="190" cy="190" r="4.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="190" cy="115" r="4.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="65" cy="115" r="4.5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <text x="53" y="204" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
  <text x="198" y="204" fill="#F8FAFC" font-size="13" font-weight="700">B</text>
  <text x="198" y="109" fill="#F8FAFC" font-size="13" font-weight="700">C</text>
  <text x="53" y="109" fill="#F8FAFC" font-size="13" font-weight="700">D</text>
</svg>`
          },
          {
            id: "piano-3-02",
            text: "Su una mappa digitale, un'area rettangolare PQRS ha i vertici nei punti P(−2;1), Q(5;1), R(5;6) e S(−2;6).\nQual è il perimetro del rettangolo PQRS?",
            answer: "24",
            accepted: ["24"],
            tolerance: 0,
            exact: false,
            explanation: "I lati PQ e RS sono orizzontali (stessa ordinata) e misurano 5 − (−2) = 5 + 2 = 7. I lati QR e SP sono verticali (stessa ascissa) e misurano 6 − 1 = 5. Il perimetro è 2 × (7 + 5) = 2 × 12 = 24.",
            table: null,
            svg: null
          },
          {
            id: "piano-3-03",
            text: "Un rettangolo EFGH nel piano cartesiano ha vertici E(−4;−3), F(2;−3), G(2;1) e H(−4;1).\nQual è il perimetro del rettangolo EFGH?",
            answer: "20",
            accepted: ["20"],
            tolerance: 0,
            exact: false,
            explanation: "La base orizzontale EF misura 2 − (−4) = 2 + 4 = 6. L'altezza verticale FG misura 1 − (−3) = 1 + 3 = 4. Quindi il perimetro è 2 × (6 + 4) = 2 × 10 = 20.",
            table: null,
            svg: null
          },
          {
            id: "piano-3-04",
            text: "Osserva il rettangolo ABCD disegnato nel piano cartesiano con vertici A(1;1), B(7;1), C(7;5) e D(1;5).\nQual è l'area del rettangolo ABCD?",
            answer: "24",
            accepted: ["24"],
            tolerance: 0,
            exact: false,
            explanation: "La base AB è parallela all'asse x e misura 7 − 1 = 6. L'altezza BC è parallela all'asse y e misura 5 − 1 = 4. L'area del rettangolo è base × altezza = 6 × 4 = 24.",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con rettangolo ABCD di vertici A(1;1), B(7;1), C(7;5), D(1;5)">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <polygon points="65,215 215,215 215,115 65,115" fill="rgba(52, 211, 153, 0.18)" stroke="#34D399" stroke-width="2.5" />
  <circle cx="65" cy="215" r="4.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="215" cy="215" r="4.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="215" cy="115" r="4.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="65" cy="115" r="4.5" fill="#34D399" stroke="#0F172A" stroke-width="1.5" />
  <text x="53" y="229" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
  <text x="222" y="229" fill="#F8FAFC" font-size="13" font-weight="700">B</text>
  <text x="222" y="109" fill="#F8FAFC" font-size="13" font-weight="700">C</text>
  <text x="53" y="109" fill="#F8FAFC" font-size="13" font-weight="700">D</text>
</svg>`
          },
          {
            id: "piano-3-05",
            text: "Nella planimetria di un giardino, un'aiuola rettangolare KLMN ha vertici K(−5;2), L(4;2), M(4;−1) e N(−5;−1).\nQual è l'area del rettangolo KLMN?",
            answer: "27",
            accepted: ["27"],
            tolerance: 0,
            exact: false,
            explanation: "La base orizzontale KL misura 4 − (−5) = 4 + 5 = 9. L'altezza verticale LM misura 2 − (−1) = 2 + 1 = 3. L'area è 9 × 3 = 27.",
            table: null,
            svg: null
          },
          {
            id: "piano-3-06",
            text: "Nel piano cartesiano, un rettangolo TUVW ha vertici T(−6;−5), U(−1;−5), V(−1;2) e W(−6;2).\nQual è l'area del rettangolo TUVW?",
            answer: "35",
            accepted: ["35"],
            tolerance: 0,
            exact: false,
            explanation: "La base orizzontale TU misura −1 − (−6) = −1 + 6 = 5. L'altezza verticale UV misura 2 − (−5) = 2 + 5 = 7. L'area del rettangolo è 5 × 7 = 35.",
            table: null,
            svg: null
          },
          {
            id: "piano-3-07",
            text: "Osserva il triangolo rettangolo ABC disegnato nel piano cartesiano con vertici A(1;2), B(7;2) e C(1;6).\nQual è l'area del triangolo ABC?",
            answer: "12",
            accepted: ["12"],
            tolerance: 0,
            exact: false,
            explanation: "I cateti AB e AC sono paralleli agli assi e perpendicolari tra loro in A. Il cateto orizzontale AB misura 7 − 1 = 6 e il cateto verticale AC misura 6 − 2 = 4. L'area del triangolo rettangolo è (6 × 4) / 2 = 24 / 2 = 12.",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con triangolo rettangolo ABC di vertici A(1;2), B(7;2), C(1;6)">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <polygon points="65,190 215,190 65,90" fill="rgba(244, 114, 182, 0.18)" stroke="#F472B6" stroke-width="2.5" />
  <polyline points="65,178 77,178 77,190" fill="none" stroke="#F472B6" stroke-width="1.5" />
  <circle cx="65" cy="190" r="4.5" fill="#F472B6" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="215" cy="190" r="4.5" fill="#F472B6" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="65" cy="90" r="4.5" fill="#F472B6" stroke="#0F172A" stroke-width="1.5" />
  <text x="53" y="204" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
  <text x="222" y="204" fill="#F8FAFC" font-size="13" font-weight="700">B</text>
  <text x="53" y="84" fill="#F8FAFC" font-size="13" font-weight="700">C</text>
</svg>`
          },
          {
            id: "piano-3-08",
            text: "Nel piano cartesiano, un triangolo rettangolo PQR ha i cateti paralleli agli assi e vertici P(−3;−2), Q(4;−2) e R(4;4).\nQual è l'area del triangolo PQR?",
            answer: "21",
            accepted: ["21"],
            tolerance: 0,
            exact: false,
            explanation: "Il cateto orizzontale PQ misura 4 − (−3) = 4 + 3 = 7. Il cateto verticale QR misura 4 − (−2) = 4 + 2 = 6. L'area del triangolo rettangolo è (7 × 6) / 2 = 42 / 2 = 21.",
            table: null,
            svg: null
          },
          {
            id: "piano-3-09",
            text: "Tre vertici di un rettangolo ABCD con i lati paralleli agli assi sono A(2;2), B(7;2) e C(7;6).\nQuali sono le coordinate del quarto vertice D del rettangolo? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(2;6)",
            accepted: ["(2;6)"],
            tolerance: 0,
            exact: true,
            explanation: "Poiché i lati del rettangolo sono paralleli agli assi, il lato AD è verticale (stessa ascissa di A: x = 2) e il lato CD è orizzontale (stessa ordinata di C: y = 6). Il quarto vertice D ha quindi coordinate (2;6).",
            table: null,
            svg: `<svg viewBox="0 0 280 280" width="280" height="280" role="img" aria-label="Piano cartesiano con tre vertici A(2;2), B(7;2) e C(7;6) di un rettangolo">
  <line x1="65" y1="40" x2="65" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="90" y1="40" x2="90" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="115" y1="40" x2="115" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="140" y1="40" x2="140" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="165" y1="40" x2="165" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="190" y1="40" x2="190" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="215" y1="40" x2="215" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="240" y1="40" x2="240" y2="240" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="215" x2="240" y2="215" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="190" x2="240" y2="190" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="165" x2="240" y2="165" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="140" x2="240" y2="140" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="115" x2="240" y2="115" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="90" x2="240" y2="90" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="65" x2="240" y2="65" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="40" x2="240" y2="40" stroke="#334155" stroke-width="1" />
  <line x1="40" y1="240" x2="256" y2="240" stroke="#94A3B8" stroke-width="2" />
  <polygon points="256,236 264,240 256,244" fill="#94A3B8" />
  <line x1="40" y1="240" x2="40" y2="24" stroke="#94A3B8" stroke-width="2" />
  <polygon points="36,24 40,16 44,24" fill="#94A3B8" />
  <text x="269" y="244" fill="#F8FAFC" font-size="13" font-weight="700">x</text>
  <text x="40" y="12" fill="#F8FAFC" font-size="13" font-weight="700" text-anchor="middle">y</text>
  <text x="30" y="254" fill="#94A3B8" font-size="11" text-anchor="middle">0</text>
  <text x="65" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">1</text>
  <text x="90" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">2</text>
  <text x="115" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">3</text>
  <text x="140" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">4</text>
  <text x="165" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">5</text>
  <text x="190" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">6</text>
  <text x="215" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">7</text>
  <text x="240" y="256" fill="#94A3B8" font-size="11" text-anchor="middle">8</text>
  <text x="28" y="219" fill="#94A3B8" font-size="11" text-anchor="end">1</text>
  <text x="28" y="194" fill="#94A3B8" font-size="11" text-anchor="end">2</text>
  <text x="28" y="169" fill="#94A3B8" font-size="11" text-anchor="end">3</text>
  <text x="28" y="144" fill="#94A3B8" font-size="11" text-anchor="end">4</text>
  <text x="28" y="119" fill="#94A3B8" font-size="11" text-anchor="end">5</text>
  <text x="28" y="94" fill="#94A3B8" font-size="11" text-anchor="end">6</text>
  <text x="28" y="69" fill="#94A3B8" font-size="11" text-anchor="end">7</text>
  <text x="28" y="44" fill="#94A3B8" font-size="11" text-anchor="end">8</text>
  <polyline points="90,190 215,190 215,90" fill="none" stroke="#38BDF8" stroke-width="2.5" />
  <circle cx="90" cy="190" r="5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="215" cy="190" r="5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <circle cx="215" cy="90" r="5" fill="#38BDF8" stroke="#0F172A" stroke-width="1.5" />
  <text x="78" y="204" fill="#F8FAFC" font-size="13" font-weight="700">A</text>
  <text x="222" y="204" fill="#F8FAFC" font-size="13" font-weight="700">B</text>
  <text x="222" y="84" fill="#F8FAFC" font-size="13" font-weight="700">C</text>
</svg>`
          },
          {
            id: "piano-3-10",
            text: "Un rettangolo PQRS ha i lati paralleli agli assi e tre dei suoi vertici si trovano in P(−4;−1), Q(3;−1) e R(3;4).\nQuali sono le coordinate del quarto vertice S? (Scrivi la risposta nel formato (x;y), es. (3;2))",
            answer: "(-4;4)",
            accepted: ["(-4;4)"],
            tolerance: 0,
            exact: true,
            explanation: "Poiché i lati del rettangolo sono paralleli agli assi, il lato PS è verticale (stessa ascissa di P: x = −4) e il lato RS è orizzontale (stessa ordinata di R: y = 4). Quindi il quarto vertice S ha coordinate (−4;4).",
            table: null,
            svg: null
          }
        ]
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
