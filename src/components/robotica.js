import sumo1 from "./assets/sumo1.jpg";

const Robotica = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-950 to-fuchsia-950">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-100 to-white">
            PROJETO DE ROBÓTICA
          </h1>
          <h2 className="text-3xl font-bold text-rose-400">
            LUTA DE ROBÔS DE SUMÔ
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 shadow-xl hover:shadow-rose-500/20 transition-all duration-300">
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-rose-500/30 pb-4">
              Sobre o Projeto
            </h3>
            <div className="space-y-6 text-gray-100">
              <p className="text-lg leading-relaxed">
                Projeto do professor Marcelo Brandão convida os membros a estrear 
                a fase 2 deste projeto desenvolvido ao longo do segundo semestre 
                de 2024. Nessa fase, os robôs combatem de forma autônoma até 
                que um saia da arena.
              </p>
              <p className="text-lg leading-relaxed">
                Os combates são uma prova de resistência com duração de 1 minuto 
                por round, seguindo até a fase final em um total de 3 rounds, 
                conforme as regras descritas. Data máxima para inscrição da comunidade interna: 17/01/2025  
              </p>
              <p className="text-lg leading-relaxed">
                Para quem não estiver no projeto (inclusive comunidade externa) e quiser participar do campeonato, envie um email antecipado para <strong>marcelo.santos@ifgoiano.edu.br</strong>   e ter um robô pronto 
                seguindo as regras estabelecidas. Prazo máximo: 26/01/2024.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/regulamento" 
                 className="flex-1 py-3 px-6 bg-rose-500 hover:bg-rose-600 
                          rounded-lg text-white text-lg font-semibold 
                          transition-colors duration-300 text-center
                          shadow-lg hover:shadow-rose-500/50">
                Regras Ilustradas
              </a>
              <a target='_blank' rel="noreferrer" href="https://docs.google.com/document/d/1nkYwgOTVPCrx7XjXT38MHQnxf3sFXpTKD1EQOWYWO2M/edit?usp=sharing"
                 className="flex-1 py-3 px-3 bg-white/20 hover:bg-white/30 
                          rounded-lg text-white text-lg font-semibold 
                          transition-colors duration-300 text-center
                          backdrop-blur-sm">
                Ver regras íntegra (15 → 16 )
              </a>
            </div>
          </div>
            <div className="relative w-full h-[250px] md:h-[340px] rounded-2xl overflow-hidden shadow-xl">
            <img 
                src={sumo1} 
                alt="Robô de Sumô"
                className="object-contain w-full h-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robotica;