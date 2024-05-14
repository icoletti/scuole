import React, {useState} from 'react'
import { School } from '../components/School';

// Definizione delle scuole
const schools: School[] = [
    {
        name: 'CFP OPERA ARMIDA BARELLI',
        addresses: ['Acconciatura', 'Estetica', 'T.O.S.S.'],
        logo: '/LogoBarelli.png',
        video: 'https://drive.google.com/file/d/1HCBQ215sui6fFvI2B4OqVXNMeNcXmOi5/view',
        websiteUrl: 'https://operaarmidabarelli.org/'
    },
    {
        name: 'POLO GIUSEPPE VERONESI CFP - MADE++',
        addresses: ['MADE', 'STEAM', 'DIGITAL MANUFACTURING DESIGNER'],
        logo: '/LogoVeronesi.png',
        video: 'https://drive.google.com/file/d/1DoV5F6avsv4k1yWBsqoe3oGclc34nWp0/view',
        websiteUrl: '  '
    },
    {
        name: 'ISTITUTO DI FORMAZIONE PROFESSIONALE ALBERGHIERO',
        addresses: ['Panificazione e Pasticceria', 'Cucina', 'Sala e Bar', 'Capes'],
        logo: '/LogoAlberghiero.png',
        video: 'https://drive.google.com/file/d/1tpFJw2h4syTrfTa8IYz9cRSpOx2qccrz/view',
        websiteUrl: 'https://www.alberghierorovereto.it/'
    },
]

const ScuolaFormProf = () => {
    const [showVideo, setShowVideo] = useState(false);

    // Funzione per gestire il click sul pulsante del video
    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div>
            <div className='titolo-formazione'>
                <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
                    <h1 className='text-primary-orange'>SCUOLA</h1>
                    <h1 className='text-primary-orange'>DI FORMA</h1>
                    <h1 className='text-primary-orange'>ZIONE</h1>
                    <h1 className='text-primary-orange'>PROFES</h1>
                    <h1 className='text-primary-orange'>SIONALE</h1>
                </div>
                <div className='pt-20 pb-16'></div>
                <div className='container-stacco-storto2'>
                    <img src="/triangolino-bianco.png" alt="" />
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Mostra le informazioni della prima scuola */}
            <div>
                <img src="/LogoBarelli.png" alt="CFP OPERA ARMIDA BARELLI" />
                <p>L’Opera Armida Barelli offre agli studenti in entrata la possibilità di iscriversi a
                     due qualifiche professionali triennali (acconciatura ed estetica)
                      presenti in entrambe le sedi e ad un percorso quadriennale per l’ottenimento del diploma tecnico di operatore socio sanitario presente solo presso la sede di Rovereto.
                </p>
                <div>
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://operaarmidabarelli.org/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                    {showVideo && (
                        <video controls width="500">
                        <source src="/Barelli.mp4" type="video/mp4" />
                        </video>
                    )}
                    </button>
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Mostra le informazioni della seconda scuola */}
            <div>
                <img src="/LogoAlberghiero.png" alt="Alberghiero" />
                <p>Questa scuolav assume la persona come valore fondamentale per l’espletamento della propria attività formativa. Pone al centro i ragazzi, fissa la massima attenzione sull’inclusione e sullo sviluppo delle competenze personali; mira a formare persone che intendano il lavoro come espressione di sé, persone che siano orientate al lavoro ben fatto, alla precisione.
                </p>
                <div>
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.alberghierorovereto.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                    {showVideo && (
                        <video controls width="500">
                        <source src="/Alberghiero.mp4" type="video/mp4" />
                        </video>
                    )}
                    </button>
                </div>
            </div>

            <div className='pt-20 pb-16'></div>

            {/* Mostra le informazioni della terza scuola */}
            <div>
                <img src="/LogoVeronesi.png" alt="Veronesi" />
                <p>Offre progetti di partnership tra scuola e aziende, sviluppano idee, modelli organizzativi e prodotti tecnologicamente innovativi.
                Coniugano in modo innovativo la cultura del sapere con la cultura del fare. Coltivano grandi sogni e grandi obiettivi.
                Garantendo qualità dell’insegnamento, aggiornamento tecnico e culturale.
                </p>
                <div>
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.poloveronesi.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                    {showVideo && (
                        <video controls width="500">
                        <source src="/Veronesi.mp4" type="video/mp4" />
                        </video>
                    )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ScuolaFormProf
