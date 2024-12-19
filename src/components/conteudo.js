import React from 'react';
import fifacapa from './assets/fifabanner.webp';
import justdancecapa from './assets/justdancecapa.jpg';
import cachorroquentecapa from './assets/cachorroquentecapa.jpg';
import thalita from './assets/thalita.jpeg';
import marcelo from './assets/marcelo.jpeg';

// [Previous icon components remain the same]
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const GamepadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
  </svg>
);

const UtensilsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 21v-2.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M4.5 3h15M5 3v18m14-18v18" />
  </svg>
);

const EventCard = ({ title, description, imageSrc, icon: Icon, link }) => (
  <div className="w-full max-w-sm mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105">
    <div className="relative h-48 sm:h-[200px] overflow-hidden">
      <img 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        src={imageSrc} 
        alt={title} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <Icon />
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
      icon: GamepadIcon,
      imageSrc: fifacapa,
      link: "/fifa"
    },
    {
      title: "Just Dance",
      description: "Competição de dança estilo batalha. Dois jogadores se enfrentam nas melhores músicas do momento!",
      icon: GamepadIcon,
      imageSrc: justdancecapa,
      link: "/justdance"
    },
    {
      title: "Área de Alimentação",
      description: "Deliciosos lanches e bebidas disponíveis durante todo o evento. Experimente nosso famoso cachorro-quente!",
      icon: UtensilsIcon,
      imageSrc: cachorroquentecapa,
      link: "/alimentacao"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-500 to-black text-white">
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left content column */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Campeonato de Jogos Eletrônicos
            </h1>
            <div className="flex items-center gap-2">
              <CalendarIcon />
              <span className="text-lg sm:text-xl text-blue-400">29 de Janeiro 2025</span>
            </div>
            <p className="text-base sm:text-lg text-gray-300">
              Evento organizado pelo 3º Informática do IF Goiano CB para a disciplina de Educação Física.
              Participe das competições de FIFA 2024 e Just Dance, ou divirta-se na área livre de jogos!
            </p>
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold mb-2">Apoiadores:</h2>
              <p className="text-gray-300 text-sm sm:text-base">Thalica Cintra, Marcelo Brandão e outros</p>
            </div>
          </div>

          {/* Right images column */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl -z-10" />
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
        <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Informações Adicionais</h2>
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Local: IF Goiano - Campus Campos Belos. Auditório</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Inscrições: Gratuitas, realizar no formulário *por link*</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Área livre para jogos diversos (FIFA, Mortal Kombat e outros)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Praça de alimentação com lanches e bebidas</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EventPage;