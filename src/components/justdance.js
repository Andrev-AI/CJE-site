import React from 'react'
import jdv from "./assets/jdv.mp4"

function Fifa() {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-5 bg-gray-100 rounded-lg shadow-lg'>
      <video src={jdv} className='w-full max-w-2xl rounded-lg lg:mr-5' controls={false} autoPlay loop muted />
      <div className='text-center mt-10 lg:mt-0 lg:ml-5'>
      <h3 className='text-3xl font-bold text-black mb-5'>JUST DANCE</h3>
        <p className='text-black mt-2 text-xl font-bold'>
        O Just Dance 2023 chega trazendo uma experiência de dança envolvente, com gráficos vibrantes, coreografias incríveis e uma playlist repleta de sucessos. 
        No nosso evento, você poderá desafiar uma pessoa em uma batalha de dança e mostrar o seu talento na pista! O vencedor avança para a próxima rodada e pode conquistar prêmios caso esteja no pódio. 
        Usaremos o kinect do Xbox para capturar cada movimento. Esteja pronto(a) para brilhar! 💃🕺 <br/>
        </p>
        <div className='w-full h-10 grid grid-cols-2 mt-10 gap-x-3'>
          <a href='/regulamento' className='h-12 flex items-center justify-center bg-rose-500 hover:bg-rose-700 rounded-lg text-lg p-3'>Leia as regras aqui</a>
          <a href='https://forms.gle/UDUEp2JutKHY2Yyj6' className='h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-lg text-lg p-3'>Inscrever-se</a>
        </div>
      </div>
    </div>
  )
}

export default Fifa