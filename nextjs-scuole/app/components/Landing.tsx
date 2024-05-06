import React from 'react'
import Navbar from './Navbar'
import MyCarousel from './MyCarousel'
import Quadriennali from './Quadriennali'

function Landing() {
  return (
    <div>
      <Navbar />
      <div className='titolo'>
        <div className=' text-9xl font-semibold pt-20 pb-16 ml-9'>
          <h1 className='text-primary-orange'>ORIE<span className='text-primary-blue'>-</span></h1>
          <h1 className='text-primary-orange'>NTAM</h1>
          <h1 className='text-primary-orange'>ENTO</h1>


        </div>

        <div className='container-stacco'>
          <img src="/triangolino.png" alt="" />
        </div>

      </div>


      <div className='bg-primary-blue'>
        <div className='flex mb-4 pt-20'>
          <p className='text-white italic w-1/2 p-4 text-sm'>Siamo qui per offrirti una prospettiva più chiara sul futuro,
            guidandoti nella scelta migliore per valorizzare al massimo il
            tuo potenziale. Il nostro sito è stato cerato con questo obbiettivo:
            aiutarti a prendere decisioni informate e vantaggiose che ti porteranno
            verso un futuro più luminoso</p>
          <div className=' p-4 ml-10'>
            <h2 className='text-white text-5xl w-1/2'>METTIAMO </h2>
            <h2 className='text-white text-5xl w-1/2 text-nowrap'>IN CHIARO </h2>
            <h2 className='text-white text-5xl w-1/2 text-nowrap'>IL FUTURO</h2>
          </div>

        </div>
        <div className='prova-carro pt-20'>
          <h2 className='text-white font-semibold pt-20 text-center'>Le scuole si presentano</h2>
          <div className='nonSo'>
            <MyCarousel />
          </div>
        </div>
        
        <div className='bottoni-bg'>
        <div className='container-stacco-storto'>
          <img src="/triangolino.png" alt="" />
        </div>
        <div className='bottoni'>
          <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'>QUADRIENNALI</button>
          <br />
          <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl '>ISTITUTI PROFESSIONALI</button>
          <br />
          <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl '>LICEI</button>
          <br />
          <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl '>SCUOLA DI FORMAZIONE PROFESSIONALE</button>
          <br />
          <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl '>ISTITUTI TECNICI</button>
        </div>
        <div className='container-stacco'>
          <img src="/triangolino.png" alt="" />
        </div>
        </div>
        <div className='mappa-container'>
          <h2 className='text-white font-semibold text-center'>Trova le scuole</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15708.29063153806!2d11.03135941181952!3d45.89411890987007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sscuole%20superiori%20rovereto!5e0!3m2!1sit!2sit!4v1714727888398!5m2!1sit!2sit" width="600" height="450" className='nonSo'></iframe>
        </div>
        <div className='bg-white'>
          <div className='container-stacco-storto'>
            <img src="/triangolino.png" alt="" />
          </div>
          <div className='bott mb-20 mt-20'>
            <h2 className='text-center text-primary-orange font-semibold'>Scopri gli Open Day!</h2>
            <br />
            <button className='bg-primary-orange text-white px-3 py-2 rounded-3xl'>Scopri</button>
          </div>
          <br />
        </div>


        <footer className='bg-primary-orange text-white text-center px-3 py-3'>
<p>Contatti | Privacy | Cookie Policy | Preferenze Cookie</p>
</footer>
      </div>
    </div>
  )
}

export default Landing