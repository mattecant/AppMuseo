# Museo Informatica
Applicazione realizzata per il museo dell'informatica
## Caratteristiche
L'applicazione permette di cercare gli oggetti presenti nel museo dell'informatica dell'istituto, con la possibilità di ricercarli.
È possibile cercare gli oggetti tramite i QR code presenti nel museo
## Installazione
### Prerequisiti
Per installare l'applicazione è necessario disporre dei seguenti programmi

> node versione 12.20.1
>
> nativescript (installabile tramite ```npm install -g nativescript```)

Per il server è necessario avere
> server mysql 
>
> node versione 12.20.1
### Compilazione applicazione
``` bash
# Installa le librerie necessarie (può richiedere un po' di tempo)
npm install

# Eseguire tramite Nativescript Preview
tns preview

# Eseguire l'applicazione nell'emulatore o in un dispositivo collegato
tns run

# Compilare l'applicazione per una piattaforma (testato solamente su android)
tns build <platform>
```
### Esecuzione del server
Se si vuole modificare il server al quale vengono richieste le informazioni è necessario, oltre seguire la procedura di installazione, anche modificare la variabile ```servername``` alla riga 4 del file /src/api/museo.js
``` bash
# Spostarsi nella cartella server
cd Server

# Installare le librerie necessarie
npm install

# Creazione degli utenti e inserimento di questi nel database (se si dispone del server mysql installato)
mysql -u root -p -A -h 127.0.0.1 < settings.sql
mysql -u root -p -A -h 127.0.0.1 museo_informatica < dati.sql

# Avvio del server in ascolto sulla porta 3000
npm run dev
# In alternativa è presente lo script start_server presente nella cartella, che salva anche il risultato

```

### Debug
Per facilitare il debug dell'applicazione è possibile usare l'applicativo vue-devtools.
Per abilitarlo è necessario decommentare le righe 5 e 6 del file /src/main.js
Per avviare il programma di debug bisogna usare il seguente comando
``` bash
npx run vue-devtools
```
## Struttura file
La struttura di base del progetto è la seguente
```
.
├── App_Resources
├── Server
├── src
├── LICENSE
├── nativescript.config.ts
├── node_modules
├── package.json
├── package-lock.json
├── platforms
├── README.md
└── webpack.config.js
```
Le cartelle principali sono la 
### Cartella `src`
Questa cartella contine i codici sorgenti del codice js.
La struttura è la seguente:
```
>src/
>├── api 
>│   ├── museo.js
>│   └── QRCode.js
>├── components
>│   ├── App.vue
>│   ├── Cerca.vue
>│   ├── Home.vue
>│   ├── InfoOggetto.vue
>│   ├── InformazioniApp.vue
>│   ├── ListaOggettiOggetto.vue
>│   ├── ListaOggetti.vue
>│   ├── Navigatore.vue
>│   └── QRScan.vue
>├── app.scss
>├── fonts
>├── main.js
>└── routes.js
```
La cartella `api` contiene gli script per le API utilizzate per collegarsi al server e prendere i dati (`museo.js`), e per scannerizzare i QR code(`QRCode.js`).

La cartella components contiene i componenti presenti nell'applicazione.
La struttura grerarchica di questi è descritta successivamente.

### Cartella Server
Questa cartella contiene i dati per l'esecuzione in locale o in remoto del server node che fornisce i dati di cui l'applicazione ha bisogno. Questi dati sono contenuti nel file `dati.sql` (in questa repository solo una parte dei dati è stata caricata). I comandi per inizzializzare il database sono invece contenuti nel file `settings.sql`.

### Cartella App_Resources
Questa cartella contiene i file che verranno utilizzati dall'applicazione durante la composizione del file installabile nel dispositivo mobile. In particolare è possibile osservare il file `Androidanifest.xml`, che è classico delle applicazioni android e descrive il funzionamento di base dell'applicazione.

## Note importanti dello sviluppo
Al momento l'applicazione è stata compilata e testata solo in ambiente Android. La mancanza dei test in iOS, data la mancanza di un dispositivo capace di compilare per questo ambiente, comporta che l'applicazione non sia stata ne compilata ne testata in suddetto ambiente. L'esecuzione potrebbe causare problemi, quali il blocco non voluto dell'applicazione, o la mancanza dell'avvio di questa. Il supporto a questo ambiente sarà fornito quanto prima possibile.