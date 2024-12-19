import React from 'react';
import logo from "./assets/logo2.png";
import Conteudo from "./conteudo.js";
import background from "./assets/background.jpg";

const Home = () => {
  return (
    <div className="h-full w-full">
      {/* Imagem de fundo fixa */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'sepia(60%) saturate(200%) hue-rotate(-10deg)',
        }}
        className="w-full h-screen"
      >
        {/* Conteúdo sobre o background */}
        <div className="w-full flex flex-row items-start justify-center ">
          <img src={logo} alt="logo terceiro informática" className="w-[28rem]" />
        </div>
        <div className="w-full text-[33px] flex flex-col items-center justify-center font-semibold font-[helvetica] text-white">
          <div style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>Campeonato de Jogos Eletrônicos</div>
          <div  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>Instituto Federal Goiano</div>
          <div className="w-full text-[28px] flex items-center justify-center font-semibold font-[helvetica] mt-3"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            29 Janeiro • Campos Belos - GO
          </div>
          <div className="w-full text-[28px] flex items-center justify-center font-semibold font-[helvetica] mt-14"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            Cerrado Digital
          </div>
        </div>
      </div>
        <Conteudo />
      </div>
  );
};

export default Home;
