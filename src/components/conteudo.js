import React from 'react';
import { FaCalendarAlt, FaGamepad, FaUtensils, FaRegFileAlt, FaRobot } from 'react-icons/fa'; // Ícones modernos
import fifacapa from './assets/fifabanner.webp';
import justdancecapa from './assets/justdance.jpg';
import arealivre from './assets/arealivre.jpg';
import alimentacao from './assets/alimentação.jpg';
import regulamento from './assets/regulamento.jpg';
import thalita from './assets/thalita.jpeg';
import marcelo from './assets/marcelo.jpeg';
import robo from './assets/robosumo.webp';

const EventCard = ({ title, description, imageSrc, icon: Icon, link }) => (
  <div className="w-full max-w-sm mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl">
    <div className="relative h-48 sm:h-[200px] overflow-hidden">
      <img 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        src={imageSrc} 
        alt={title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <Icon className="text-white w-6 h-6" />
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
      <a 
        href={link} 
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
      >
        Ver mais
      </a>
    </div>
  </div>
);

const EventPage = () => {
  const events = [
    {
      title: "FIFA 2024",
      description: "Campeonato competitivo de FIFA 2024 com premiações. Venha mostrar suas habilidades no futebol virtual!",
      icon: FaGamepad,
      imageSrc: fifacapa,
      link: "/fifa"
    },
    {
      title: "Just Dance",
      description: "Competição de dança estilo batalha. Dois jogadores se enfrentam nas melhores músicas do momento!",
      icon: FaGamepad,
      imageSrc: justdancecapa,
      link: "/justdance"
    },
    {
      title: "Área Livre",
      description: "Jogos livres para todo mundo fora do compeonato",
      icon: FaGamepad,
      imageSrc: arealivre,
      link: "/arealivre"
    },
    {
      title: "Área de Alimentação",
      description: "Deliciosos lanches e bebidas disponíveis durante todo o evento. Experimente nosso cachorro-quente!",
      icon: FaUtensils,
      imageSrc: alimentacao,
      link: "/alimentos"
    },
    {
      title: "Regulamento ilustrado",
      description: "Veja o regulamento de forma ilustrada. E também o PDF na íntegra. Importante para todos os participantes.",
      icon: FaRegFileAlt,
      imageSrc: regulamento,
      link: "/regulamento"
    },
    {
      title: "Robôs Sumô",
      description: "Campeonato do Projeto de robótica. Fase 2, Robôs de sumô autônomos. Acesse o regulamento também.",
      icon: FaRobot,
      imageSrc: robo,
      link: "/robotica"
    }
  ];

  const additionalInfo = [
    {
      icon: FaCalendarAlt,
      title: "Data e Local",
      description: "29 de Janeiro 2025, IF Goiano - Campus Campos Belos. Auditório"
    },
    {
      icon: FaGamepad,
      title: "Inscrições",
      description: "Gratuitas, realizar no formulário (obrigatório):",
      link: "https://forms.gle/CB8cGGHrSf3nMUKV6"
    },
    {
      icon: FaUtensils,
      title: "Praça de Alimentação",
      description: "Deliciosos lanches e bebidas disponíveis durante todo o evento."
    },
    {
      icon: FaRobot,
      title: "Área Livre",
      description: "Jogos diversos (Mortal Kombat, Tênis, Brawlhalla e outros)."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-black text-white">
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Campeonato de Jogos Eletrônicos
            </h1>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-white w-6 h-6" />
              <span className="text-lg sm:text-xl text-white">29 de Janeiro 2025</span>
            </div>
            <p className="text-base sm:text-lg text-gray-100">
              Evento organizado pelo 3º Informática do IF Goiano CB. Evento <strong className='font-bold'>Gratuito!</strong> Participe das competições de FIFA, Just Dance e Mario Kart ou divirta-se na área livre de jogos!
            </p>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2"> Organizadores:</h2>
              <p className="text-gray-100 text-sm sm:text-base">Thalita Cintra, Marcelo Brandão, André Moura, André Wild, Thiago C., Guilherme Costa, Gusthavo Oliveira, 3º Info</p>
              <h2 className="mt-6 text-lg sm:text-xl font-semibold mb-2">Apoiadores:</h2>
              <p className="text-gray-100 text-sm sm:text-base">Amarildo, Thiago Dias, Guilherme Costa, Gusthavo Oliveira, Darsílvio e outros</p>
            </div>
          </div>

          {/* Right images column */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10" /> {/* Efeito de fundo com z-index negativo */}
            <div className="col-span-1">
              <img
                className="w-full rounded-lg shadow-2xl"
                src={thalita}
                alt="Thalita"
              />
            </div>
            <div className="col-span-1">
              <img
                className="w-full rounded-lg shadow-2xl"
                src={marcelo}
                alt="Marcelo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Programação do Evento</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Informações Adicionais</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {additionalInfo.map((info, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-colors">
              <info.icon className="w-8 h-8 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mt-4">{info.title}</h3>
              <p className="text-gray-300 mt-2">{info.description}</p>
              {info.link && (
                <a href={info.link} className="mt-4 inline-block text-blue-400 hover:text-blue-300 transition" target='_blank' rel="noreferrer">
                  Acessar formulário
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventPage;