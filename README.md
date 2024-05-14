# Documentazione del progetto
## Tecnologie ustate
Web Application realizzata con **NextJs**, come API principale invece hop utilizzato **Strapi**.
Questa documentazione fornisce una panoramica del progetto, istruzioni sull'installazione, configurazione e l'utilizzo del progetto.

## Panoramica del progetto
Scuole è una piattaforma web sviluppata utilizzando Next.js, un framework React per la creazione di applicazioni web moderne. Il progetto è stato realizzato con l'obiettivo di riunire tutte le scuole superiori presenti a Rovereto, per aiutare gli studenti di terza media a fare una scelta per l'anno prossimo.


## Procedura di installazione
1. Clonare il progetto nel proprio codespace o nella cartella del proprio PC (se si sviluppa il porgetto in locale, insallare Node e npm):
`git clone https://github.com/icoletti/scuole`
2. Controllare le versioni di node e npm `node --version` `npm --version`
3. Se necessario aggiornare le dipendenze `npm update`
4. Entrare nella cartella strapi-scuole da terminale: `cd strapi-scuole`
5. Avviare strapi `npm run develop`
6. Aprire un nuovo terminale
7. Entrare nella cartella nextjs-scuole da terminale: `cd nextjs-scuole`
8. Installare le librerie utilizzate dal progetto `npm install`
9. Avviare l'applicazione  next.js `npm run dev`

## Documentazione
Tutto il codice del progetto è stato opportunamente commentato.

## Componenti
Nel porgetto possiamo trovare:
- Una cartella components, che contiene i componenti
    - Landing.tsx, dove troviamo la pagina principale/home e un richiamo alla navbar
    - Licei.tsx, pagina dedicata ai diversi licei che si trovano all'interno della città di rovereto. In questa pagina abbiamo link ai siti ufficiali dei licei e video di presentazione
    - MyCarousel.tsx, pagina che si occupa della creazione di un carousel, dove troviamo le diverse tessere delle varie scuole.
    - Navbar.tsx, componente di base del mio progetto, contiene i link alle pagine delle diverse tipologie di scuole
    - Openday.tsx, gestisce il contenuto del mio strapi e lo "stampa" come contenuto nella mia pagina
    - OpendayCard.tsx, gestisce i singoli elementi presenti nel mio backend
    - Quadriennali.tsx, pagina che si occupa delle scuole quadriennali presenti a Rovereto, torviamo un link ai siti ufficiali delle scuole e un video di presentazione delle scuole
    - ScuolaFormProf.tsx, pagina che raggruppa tutte le Scuole di formazione professionale presenti a Rovereto, torviamo un link ai siti ufficiali delle scuole e un video di presentazione delle scuole

## Risorse aggiuntive
Per ulteriori informazioni su Next.js, consultare la [documentazione ufficiale di Next.js](https://nextjs.org/docs).

Per saperne di più su Strapi, consultare la [documentazione ufficiale di Strapi](https://docs.strapi.io/).