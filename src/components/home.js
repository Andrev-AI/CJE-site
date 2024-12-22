import React from 'react';
import logo from "./assets/logo.png";
import Conteudo from "./conteudo.js";
import background from "./assets/background.JPG";

const Home = () => {
  return (
    <div className="h-full w-full">
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        className="w-full h-screen"
      >
        <div className="w-full flex flex-row items-start justify-center ">
          <img src={logo} alt="logo terceiro informática" className="w-[28rem]" />
        </div>
        <div className="w-full text-[33px] flex flex-col items-center justify-center font-semibold font-[yatra-one-regular] text-white">
          <div style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>Campeonato de Jogos Eletrônicos</div>
          <div  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>Instituto Federal Goiano</div>
          <div className="w-full text-[28px] flex items-center justify-center font-semibold font-[yatra-one-regular] mt-3"  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
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
