# Android App Development
# Technical Specification
### Matteo Canton, 09/01/2021 - 05/02/2021
## Abstract
Questa applicazione svolge la funzione di informare i visitatori del museo dell'informatica di visionare le informazioni sugli oggetti presenti. La ricerca degli oggetti può essere fatta in base al nome, o tramite lo scanner QR code, con le etichette applicate ai singoli oggetti presenti nel museo.

## General Technical Data
- [X] Activity
  - 1 activity principale vista dal manifest, le altre schermate sono caricate tramite il code js
- [ ] Service
  - Nessun servizio
- [ ] Broadcast Reciver
  - Non usati
- [ ] Content Provider
  - Non usati
- [ ] Intent
  - Non presenti in quanto una sola Activity presente
- [ ] Fragment
  - Non usati
- [X] AsyncTask
  - Presenti molteplici task asicnrone, si dividono nelle seguenti categorie
    1. Richieste http: presenti nel file `src/api/museo.js`, servono a fare le richieste al server. Le funzioni in cui sono contenute gli ritornano come Promise
    2. Utilizzo API fotocamera: presenti nel file  `src/api/QRCode.js`, servono a utilizzare le librerie per leggere il QR code e eseguono il  `then()` con il risultato della lettura
    3. Animazioni: servono per gestire le animazioni presenti nel componente `src/components/InfoApp.vue`, servono a rendere più elegante l'applicazione
- [ ] Threads and Handlers
  - L'applicazione non utilizza il mutithread, la gestione parallela viene gestita tramite  `Promise`
- [ ] SQLite database engine
  - Non usato
- [X] External DBMS connection
  - Utilizzato tramite REST API
- [X] Internet Connectivity
  - Usata per fare le richieste al sito  che lo gestisce
- [ ] Geo-location
  - Non usata
- [ ] Localization
  - Italia
- [ ] Multiple device layout and resolution support
  - In previsione supporto per dispositivi iOS, teoricamente funzionante ma non ancora testata
- [X] Hardware features
  - Uso Fotocamera
- [ ] Google Mobile Services
  - Non usata
- [X] Web application/web service interaction
  - Utilizzo di un server in `NodeJS` per la gestione degli oggetti nel museo e per la ricerca (guardare parte dedicata)
- [X] Third party libraries  
  - Innumerevoli, le radici dell'albero delle dipendenze sono presenti nel file `package.json`, l'elenco completo è ottenibile tramite il comando `npm list`
- [X] Other embedded or involved technologies
  - Lettore di QR Code
- [X] Other
  - Elementi specifici del linguaggio:
    - Componenti
      1. `App.vue`: pagina principale, contiene il navigator
      2. `Cerca.vue`: componente che contiene una barra di ricerca e un `ListaOggetti`
      3. `Home.vue`: presenta 4 pulsnti direzionali e il nome dell'applicazione
      4. `InfoOggetto.vue`: pagina che contine le infomrazioni dettagliate su un signolo oggetto
      5. `InformazioniApp.vue`: contiene informazioni sull'applicazione
      6. `ListaOggetti.vue`: lista degli oggetti, carica un insieme in maniera dinamica di `ListaOggettiOggetto.vue`
      7. `ListaOggettiOggetto.vue`: singolo elemento della lista
      8. `Navigatore.vue`: contiene la barra sotto e tutti gli oggetti; permette di muoversi tra le schermate
      9. `QRScan.vue`: schermata che permette l'accesso al lettore del QR code
