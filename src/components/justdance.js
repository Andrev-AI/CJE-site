import React from 'react'

function Justdance() {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-5 bg-gray-100 rounded-lg shadow-lg'>
        <h1 className='text-3xl'>add video coerente a versão do justdance</h1>
      {/* <video src={fifavideo} className='w-full max-w-2xl rounded-lg lg:mr-5' controls={false} autoPlay loop muted /> */}
      <div className='text-center mt-10 lg:mt-0 lg:ml-5'>
      <h3 className='text-3xl font-bold text-gray-800 mb-5'>JUST DANCE *versão aqui*</h3>
        <p className='text-gray-600 mt-2 text-xl'>
          Lorem Ipsum
        </p>
          <a href='/' className='mt-10 flex items-center justify-center w-full h-10 bg-green-500 rounded-lg text-lg p-3'>Inscrever-se</a>
      </div>
    </div>
  )
}

export default Justdance