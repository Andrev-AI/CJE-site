import React from 'react';
import mortalKombatImage from "./assets/mortalkombat.png";
import brawlhallaImage from "./assets/brawlhalla.jpg";
import marioImage from "./assets/mario.png";
import tennisImage from "./assets/tennis.jpg";

function Arealivre() {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-gray-800'>
      {/* Título */}
      <h1 className='text-5xl font-bold text-white mb-12 text-center'>
        Arealivre
        <span className='block text-2xl text-gray-400 mt-2'>Jogos clássicos e modernos com controles de Super Nintendo</span>
      </h1>

      {/* Grid de Jogos */}
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Card: Mortal Kombat */}
        <div className='relative group bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105'>
          <img src={mortalKombatImage} alt="Mortal Kombat" className='w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity' />
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>Mortal Kombat</h3>
            <p className='text-gray-400'>
              Lutas intensas com gráficos impressionantes e controles precisos.
            </p>
            <div className='mt-4 flex gap-3'>
              <a href='/regulamento-mk' className='flex-1 text-center bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Regras
              </a>
              <a href='https://forms.gle/UDUEp2JutKHY2Yyj6' target='_blank' rel="noreferrer" className='flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Inscrever-se
              </a>
            </div>
          </div>
        </div>

        {/* Card: Brawlhalla */}
        <div className='relative group bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105'>
          <img src={brawlhallaImage} alt="Brawlhalla" className='w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity' />
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>Brawlhalla</h3>
            <p className='text-gray-400'>
              Batalhas épicas em plataformas com diversos modos de jogo.
            </p>
            <div className='mt-4 flex gap-3'>
              <a href='/regulamento-brawlhalla' className='flex-1 text-center bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Regras
              </a>
              <a href='https://forms.gle/UDUEp2JutKHY2Yyj6' target='_blank' rel="noreferrer" className='flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Inscrever-se
              </a>
            </div>
          </div>
        </div>

        {/* Card: Mario */}
        <div className='relative group bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105'>
          <img src={marioImage} alt="Mario" className='w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity' />
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>Mario</h3>
            <p className='text-gray-400'>
              Reviva a nostalgia com os clássicos jogos do Mario.
            </p>
            <div className='mt-4 flex gap-3'>
              <a href='/regulamento-mario' className='flex-1 text-center bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Regras
              </a>
              <a href='https://forms.gle/UDUEp2JutKHY2Yyj6' target='_blank' rel="noreferrer" className='flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Inscrever-se
              </a>
            </div>
          </div>
        </div>

        {/* Card: Tênis */}
        <div className='relative group bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105'>
          <img src={tennisImage} alt="Tênis" className='w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity' />
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>Tênis</h3>
            <p className='text-gray-400'>
              Competições rápidas e emocionantes em um jogo de tênis clássico.
            </p>
            <div className='mt-4 flex gap-3'>
              <a href='/regulamento-tenis' className='flex-1 text-center bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Regras
              </a>
              <a href='https://forms.gle/UDUEp2JutKHY2Yyj6' target='_blank' rel="noreferrer" className='flex-1 text-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors'>
                Inscrever-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arealivre;