import React from 'react'
import Navbar from './Navbar'
import MyCarousel from './MyCarousel'

function Landing() {
  return (
    <div>
      <Navbar />
      <div className='container-titolo'>
        <h1 className='text-primary-orange'>ORIE-</h1>
        <h1 className='text-primary-orange'>NTAM</h1>
        <h1 className='text-primary-orange'>ENTO</h1>
      </div>

      <div className='container-stacco'>

      </div>


      <div className='bg-primary-blue'>
        <div>
          <p className='text-white italic'>Siamo qui per offrirti una prospettiva più chiara sul futuro,
            guidandoti nella scelta migliore per valorizzare al massimo il
            tuo potenziale. Il nostro sito è stato cerato con questo obbiettivo:
            aiutarti a prendere decisioni informate e vantaggiose che ti porteranno
            verso un futuro più luminoso</p>
          <h2>METTIAMO IN CHIARO IL FUTURO</h2>
        </div>
        <div>
          <MyCarousel />
        </div>
      </div>

    </div>
  )
}

export default Landing