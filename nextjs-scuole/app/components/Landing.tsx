import React from 'react'
import Navbar from './Navbar'
import MyCarousel from './MyCarousel'

function Landing() {
  return (
    <div>
      <Navbar />
      <div className='text-9xl font-semibold my-6 ml-9'>
        <h1 className='text-primary-orange'>ORIE<span className='text-primary-blue'>-</span></h1>
        <h1 className='text-primary-orange'>NTAM</h1>
        <h1 className='text-primary-orange'>ENTO</h1>
      </div>

      <div className='container-stacco'>
        <img src="/triangolino.png" alt="" />
      </div>


      <div className='bg-primary-blue '>
        <div className='flex mb-4'>
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
        <div>
          <MyCarousel />
        </div>
      </div>
    </div>
  )
}

export default Landing