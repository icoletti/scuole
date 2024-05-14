import React, { useState } from 'react';
import { School } from '../components/School';


const IstitutiProfessionali = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleClick = () => {
        setShowVideo(true);
    };

    return (
        <div>
            {/* Titolo istituti professionali */}
            <div className='titolo-professionali'>
                <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
                    <h1 className='text-primary-orange'>ISTITU</h1>
                    <h1 className='text-primary-orange'>TI PRO</h1>
                    <h1 className='text-primary-orange'>FESSIO</h1>
                    <h1 className='text-primary-orange'>NALI</h1>
                </div>
                <div className='pt-20 pb-16'></div>
                <div className='container-stacco-storto2'>
                    <img src="/triangolino-bianco.png" alt="" />
                </div>
            </div>
            <div className='pt-20 pb-16'></div>

            <div className='pt-20 pb-16'></div>

            {/* Informazioni sull'Istituto professionale */}
            <div>
                <img src="/LogoUPT.png" alt="Steam" />
                <div>
                    {/* Pulsante per il sito ufficiale del UPT */}
                    <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'><a href={"https://www.cfpupt.it/"} target="_blank" rel="noopener noreferrer">sito ufficiale</a></button>
                    {/* Pulsante per il video di presentazione del UPT*/}
                    <button className='bg-primary-blue text-white px-3 py-2 rounded-3xl' onClick={handleClick}> video presentazione
                        {showVideo && (
                            <video controls width="500">
                                <source src="/UPT.mp4" type="video/mp4" />
                            </video>
                        )}
                    </button>
                </div>
            </div>
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

export default IstitutiProfessionali;
