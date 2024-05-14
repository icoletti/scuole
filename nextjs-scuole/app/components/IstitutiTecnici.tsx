import React, { useState } from 'react';
import { School } from '../components/School';


const IstitutiTecnici = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div>
            {/* Titolo istituti professionali */}
            <div className='titolo-quadriennali'>
                <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
                    <h1 className='text-primary-orange'>ISTI</h1>
                    <h1 className='text-primary-orange'>TUTI</h1>
                    <h1 className='text-primary-orange'>TEC</h1>
                    <h1 className='text-primary-orange'>NICI</h1>
                </div>
                <div className='pt-20 pb-16'></div>
                <div className='container-stacco-storto2'>
                    <img src="/triangolino-bianco.png" alt="" />
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            <div className='pt-20 pb-16'></div>

            {/* Informazioni sul MARCONI */}
            <div>
                <img src="/LogoMarconi.png" alt="MARCONI" />
                <p>Il progetto per il nuovo quadriennio nasce da stimoli innovativi di natura didattico-metodologica come l’utilizzo di metodologie attive basate sulle discipline STEM e da sollecitazioni provenienti dal mondo industriale (Industry 4.0) ed economico (Transizione Verde – Green Deal).
</p>
                <div>
                    {/* Pulsante per il sito ufficiale del MARCONI */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.marconirovereto.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del MARCONI*/}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/marconi.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>
            <div className='pt-20 pb-16'></div>
            {/* Informazioni sul FONTANA */}
            
                <div>
                <img src="/LogoFontana.png" alt="FONTANA" />
                <p>L’indirizzo sperimentale CAT 4.0, che si allinea con i percorsi europei, realizzato con il contributo del Collegio dei Geometri e Geometri Laureati della P.A.T., si pone l’obiettivo di formare figure professionali che rispondano alle esigenze legate al mondo delle costruzioni senza perdere di vista la tutela dell’ambiente e del territorio. Questo indirizzo prevede un rafforzamento del curriculum sulle materie STEAM e utilizza una metodologia fortemente incentrata sulla didattica laboratoriale.
</p>
                </div>
                <div>
                    {/* Pulsante per il sito ufficiale del FONTANA */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://fgfontana.eu/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del FONTANA*/}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/Fontana.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                
            </div>
            <div className='pt-20 pb-16'></div>
            {/* Informazioni sul DON MILANI */}
            
            <div>
                <img src="/LogoDonMilani.png" alt="DON MILANI" />
                <p>Offre progetti di partnership tra scuola e aziende, sviluppano idee, modelli organizzativi e prodotti tecnologicamente innovativi.
Coniugano in modo innovativo la cultura del sapere con la cultura del fare. Coltivano grandi sogni e grandi obiettivi.
Garantendo qualità dell’insegnamento, aggiornamento tecnico e culturale.
</p>
                </div>
                <div>
                    {/* Pulsante per il sito ufficiale del DON MILANI */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"http://www.domir.it/it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del DON MILANI*/}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/DonMilani.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
            </div>
            <div className='pt-20 pb-16'></div>
            <div className='pt-20 pb-16'></div>
            {/* Footer */}
            <div className='pt-20 pb-16'></div>
            <div className='pt-20 pb-16'></div>
            <footer className='bg-primary-orange text-white text-center px-3 py-3'>
                <p>Contatti | Privacy | Cookie Policy | Preferenze Cookie</p>
            </footer>
        </div>
    );
}

export default IstitutiTecnici;
