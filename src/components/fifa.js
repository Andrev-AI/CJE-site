import React from 'react'
import fifavideo from "./assets/fifav.mp4"

function Fifa() {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-5 bg-gray-100 rounded-lg shadow-lg'>
      <video src={fifavideo} className='w-full max-w-2xl rounded-lg lg:mr-5' controls={false} autoPlay loop muted />
      <div className='text-center mt-10 lg:mt-0 lg:ml-5'>
      <h3 className='text-3xl font-bold text-gray-800 mb-5'>FIFA 2024</h3>
        <p className='text-gray-600 mt-2 text-xl'>
          O FIFA 2024 traz uma experiência de jogo ainda mais realista com gráficos aprimorados, novas mecânicas de jogo e modos de jogo emocionantes. Ele estará disponível no nosse evento para ser jogado. Jogadores competirão entre sí em uma partida onde o vencedor jogará outras e poderá ganhar um prêmio. Você poderá jogar com controle de playstation ou xbox então esteje preparado. Esteje pronto!
        </p>
          <a href='/' className='mt-10 flex items-center justify-center w-full h-10 bg-green-500 rounded-lg text-lg p-3'>Inscrever-se</a>
      </div>
    </div>
  )
}

export default Fifa