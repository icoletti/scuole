import React, {useState} from 'react'
import { School } from '../components/School';

const schools: School[] = [
    {
        name: 'ISTITUTO TECNICO TECNOLOGICO “G. MARCONI”',
        addresses: ['Scienze Umane', 'Economico Sociale'],
        logo: `/LogoMarconi.png`,
        video: '',
        websiteUrl: 'https://www.marconirovereto.it/'
      },
      {
        name: 'ITET FONTANA',
        addresses: ['Costruzioni, Ambiente e Territorio', 'Tecnologie del Legno nelle Costruzioni', 
        'Quadriennale CAT 4.0', 'Amministrazione Finanza e marketing', 
        'Relazioni Internazionali per il Marketing', 'Sistemi Informativi Aziendali',
        'Chimica, Materiali e Biotecnologie - articolazione Biotecnologie Ambientali',
        'Amministrazione Finanza e Marketing – Curvatura Sportiva'],
        logo: '/LogoFontana.png',
        video: 'https://drive.google.com/file/d/1p4jzXxtzdWH5xoICshWG95D2x9sI8ESg/view',
        websiteUrl: 'https://fgfontana.eu/'
      },
      {
        name: 'POLO GIUSEPPE VERONESI CFP - MADE++',
        addresses: ['MADE', 'STEAM', 'DIGITAL MANUFACTURING DESIGNER'],
        logo: '',
        video: 'https://drive.google.com/file/d/1DoV5F6avsv4k1yWBsqoe3oGclc34nWp0/view',
        websiteUrl: 'https://www.poloveronesi.it/'
      }
]
const Quadriennali = () => {
    const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };
    return (
        <div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15708.29063153806!2d11.03135941181952!3d45.89411890987007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sscuole%20superiori%20rovereto!5e0!3m2!1sit!2sit!4v1714727888398!5m2!1sit!2sit" width="600" height="450" ></iframe> */}


            <div className='titolo-quadriennali'>
                <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
                    <h1 className='text-primary-orange'>QUADRI</h1>
                    <h1 className='text-primary-orange'>ENNALI</h1>
                </div>
                <div className='container-stacco-storto2'>
                    <img src="/triangolino-bianco.png" alt="" />
                </div>
            </div>
            
            <div>
                <img src="/LogoVeronesi.png" alt="Polo Veronesi" />
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
    <div>
                <img src="/LogoMarconi.png" alt="Marconi" />
                <p>Il progetto per il nuovo quadriennio nasce da stimoli innovativi di natura didattico-metodologica come l’utilizzo di metodologie attive basate sulle discipline STEM e da sollecitazioni provenienti dal mondo industriale (Industry 4.0) ed economico (Transizione Verde – Green Deal).
</p>
                <div>
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.marconirovereto.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                    {showVideo && (
                        <p>Video non disponibile</p>
                    )}
                    </button>
                </div>
            </div>
            <div>
                <img src="/LogoFontana.png" alt="Fontana" />
                <p>L’indirizzo sperimentale CAT 4.0, che si allinea con i percorsi europei, realizzato con il contributo del Collegio dei Geometri e Geometri Laureati della P.A.T., si pone l’obiettivo di formare figure professionali che rispondano alle esigenze legate al mondo delle costruzioni senza perdere di vista la tutela dell’ambiente e del territorio. Questo indirizzo prevede un rafforzamento del curriculum sulle materie STEAM e utilizza una metodologia fortemente incentrata sulla didattica laboratoriale.</p>
                <div>
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://fgfontana.eu/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                    {showVideo && (
                        <video controls width="500">
                        <source src="/Fontana.mp4" type="video/mp4" />
                        </video>
                    )}
                    </button>
                </div>
            </div>
            



            <footer className='bg-primary-orange text-white text-center px-3 py-3'>
                <p>Contatti | Privacy | Cookie Policy | Preferenze Cookie</p>
            </footer>

        </div>


    );
}

export default Quadriennali
