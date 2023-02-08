# backend-challenge
(per mancanza di tempo + la mia scarsa conoscenza del argomento, non ho potuto sviluppare i test per i servizi)

STACK:

ho utilizzato node.js insieme ad express.js, con aggiunta di diverse librerie/dipendenze:

-nodemon: usato per riavviare il server in automatico quando dovevo fare delle modifiche al codice.
-multer: usato per la gestione di dati multipart/form, che viene utilizzato principalmente per il caricamento di file.
-sharp: usato per ridimensionare un immagine.

per testare le chiamate API ho utilizzato POSTMAN.

STRUTTURA DEL PROGETTO:

Il progetto è composto da una cartella chiamata "services", in cui all interno c'è un file javascript(file.js) usato per gestire i metodi CRUD.
per formattare il codice, rendendolo più "pulito" ho utilizzato ESlint.
c'è anche un file docker per poter avviare il programma senza scaricare il necessario per avviare il progetto
I file package.json e package-lock.json contengono le varie librerie e dipendenze, e infine il server.js contiene i vari endpoints, necessari per poter:

-caricare un immagine(POST)
-monstrare tutte le immagini attraverso il loro nome(GET)
-eliminare un immagine(DELETE)
-ridimensionare un immagine passandogli come parametro la larghezza e la lunghezza.(GET)

START SULLA MACCHINA LOCALE:

Avendo precedentemente installato Node & npm, E' possibile scaricare la repo: 
git clone https://github.com/Berheruben/backend-challenge.git
../backend-challenge npm install
../backend-challenge npm start

una volta avviato il progetto, il programma vi creerà una cartella all interno del progetto chiamato "uploads" dove all interno, conterranno le immagini che avete inserito. 



