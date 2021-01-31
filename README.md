# Museo Informatica
Applicazione realizzata per il museo dell'informatica
## Caratteristiche
L'applicazione permette di cercare gli oggetti presenti nel museo dell'informatica dell'istituto, con la possibilità di ricercarli.
È possibile cercare gli oggetti tramite i QR code presenti nel museo
## Installazione
### Prerequisiti
Per installare l'applicazione è necessario disporre dei seguenti programmi

> node versione 12.20.1
> nativescript (installabile tramite ```npm install -g nativescript```)

Per il server è necessario avere
> server mysql 
È possibile usare docker-compose per installare il server mysql in alternativa
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

# Creazione del container per mysql (solamente se non si dispone di un server mysql installato sul computer)
docker-compose up -d

# Creazione degli utenti e inserimento di questi nel database (se si dispone del server mysql installato)
mysql -u root -p -A -h 127.0.0.1 < settings.sql
mysql -u root -p -A -h 127.0.0.1 museo_informatica < dati.sql

# Avvio del server in ascolto sulla porta 3000
npm run dev

```

## Debug
Per facilitare il debug dell'applicazione è possibile usare l'applicativo vue-devtools.
Per abilitarlo è necessario decommentare le righe 5 e 6 del file /src/main.js
Per avviare il programma di debug bisogna usare il seguente comando
``` bash
npx run vue-devtools
```


