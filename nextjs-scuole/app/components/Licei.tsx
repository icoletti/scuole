import React, { useState } from 'react';
import { School } from '../components/School';

// Definizione dell'array di scuole
const schools: School[] = [
    {
        name: 'LICEO INTERNAZIONALE ARCIVESCOVILE',
        addresses: ['Liceo Internazionale LIA'],
        logo: '',
        video: 'https://drive.google.com/file/d/1727afftTOWorGyHe40LYSWEz7AN_6FpG/view',
        websiteUrl: 'https://www.arcivescoviletrento.it/offerta/secondaria-2/rovereto/liceo-internazionale-lia/benvenuto/'
    },
    {
        name: 'LICEO STEAM INTERNATIONAL',
        addresses: ['Steam'],
        logo: '/LogoSteam.png',
        video: 'https://drive.google.com/file/d/1727afftTOWorGyHe40LYSWEz7AN_6FpG/view',
        websiteUrl: 'https://www.arcivescoviletrento.it/offerta/secondaria-2/rovereto/liceo-internazionale-lia/benvenuto/'
    },
];

const Licei = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div>
            {/* Titolo dei licei */}
            <div className='titolo-licei'>
                <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
                    <h1 className='text-primary-orange'>LI<a className='text-primary-blue'>-</a></h1>
                    <h1 className='text-primary-orange'>CEI</h1>
                </div>
                <div className='pt-20 pb-16'></div>
                <div className='container-stacco-storto2'>
                    <img src="/triangolino-bianco.png" alt="" />
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Informazioni sul Liceo Rosmini */}
            <div>
                <img src="/LogoLiceoRosmini.jpeg" alt="Liceo Rosmini" />
                <p>Il Rosmini è un liceo composto da diversi indirizzi, i quali sono: classico, linguistico, scientifico, scientifico scienze applicate,
                    scientifico sportivo. Il Liceo deve il suo nome, assunto solo nel secondo dopoguerra,
                    al sacerdote e filosofo roveretano Antonio Rosmini che nel 1809 entra “nella prima scuola latina del ginnasio patrio”.
                </p>
                <div>
                    {/* Pulsante per il sito ufficiale del Liceo Rosmini */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://liceorosmini.eu/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del Liceo Rosmini */}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/LiceoRosmini.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Informazioni sul Liceo Fabio Filzi */}
            <div>
                <img src="/LogoFilzi.png" alt="Filzi" />
                <p>Il liceo Fabio Filzi fornisce una preparazione specifica nell’ambito delle scienze del comportamento,
                    inoltre è anche attento alla lettura e alla comprensione dei fenomeni sociali ed economici del mondo contemporaneo, grazie anche allo studio di due lingue straniere.
                    Oltre alle discipline comuni a tutti i licei, qui troverai altre materie di indirizzo.
                </p>
                <div>
                    {/* Pulsante per il sito ufficiale del Liceo Fabio Filzi */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.liceofilzi.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del Liceo Fabio Filzi */}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/LiceoFilzi.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>

            <div className='pt-20 pb-16'></div>
            {/* Informazioni sul Liceo Depero */}
            <div>
                <img src="/LogoLiceoDepero.png" alt="Depero" />
                <p>Il Depero, nato come scuola di progettazione grafica, si è adattato nel tempo ai cambiamenti dei linguaggi della comunicazione e del design.
                    Il percorso liceale fornisce competenze critiche e creative agli studenti, mentre le attività pratiche favoriscono lo sviluppo individuale.
                    Grazie alla collaborazione con il territorio, gli studenti lavorano su progetti esterni e partecipano a concorsi nazionali e internazionali,
                    rendendo il Depero un ambiente formativo stimolante e adatto alla società contemporanea.
                </p>
                <div>
                    {/* Pulsante per il sito ufficiale del Liceo Depero */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.istitutodellearti.tn.it/liceo-depero-rovereto"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del Liceo Depero */}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/LiceoArtisticoDepero.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Informazioni sull'Arcivescovile */}
            <div>
                <img src="/LogoArcivescovile.png" alt="Arcivescovile" />
                <p>I nostri ragazzi sono stimolati a sviluppare solide competenze utili ad affrontare i percorsi universitari italiani ed internazionali.
                    Questo grazie ad una didattica trasversale e multidisciplinare che consente di esplorare discipline scientifiche ed umanistiche, senza dimenticare un approccio moderno e attento alla persona.
                </p>
                <div>
                    {/* Pulsante per il sito ufficiale dell'Arcivescovile */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.arcivescoviletrento.it/offerta/secondaria-2/rovereto/liceo-internazionale-lia/benvenuto/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione dell'Arcivescovile */}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/LIA.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            {/* Informazioni sul Liceo STEAM International */}
            <div>
                <img src="/LogoSteam.png" alt="Steam" />
                <p>I nostri ragazzi sono stimolati a sviluppare solide competenze utili ad affrontare i percorsi universitari italiani ed internazionali.
                    Questo grazie ad una didattica trasversale e multidisciplinare che consente di esplorare discipline scientifiche ed umanistiche, senza dimenticare un approccio moderno e attento alla persona.
                </p>
                <div>
                    {/* Pulsante per il sito ufficiale del Liceo STEAM International */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://liceosteam.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del Liceo STEAM International */}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/Veronesi.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>

            <div className='pt-20 pb-16'></div>
            <div className='pt-20 pb-16'></div>

            {/* Footer */}
            <footer className='bg-primary-orange text-white text-center px-3 py-3'>
                <p>Contatti | Privacy | Cookie Policy | Preferenze Cookie</p>
            </footer>
        </div>
    );
}

export default Licei;
