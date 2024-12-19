import React from 'react';

const Regulamento = () => {
  const sections = [
    {
      title: "Games & Equipes",
      icon: "🎮",
      content: [
        "FIFA 2024 - PS4, PS5, Xbox One, Nintendo Switch.",
        "Just Dance - Xbox 360 com Kinect",
        "Área livre - PS4",
        "Competição de Robô de sumor - Robôs autônomos"
      ]
    },
    {
      title: "Formato do torneio",
      icon: "🏆",
      content: [
        "FIFA: Partidas individuais, formato de eliminação com repescagem",
        "Just Dance: Duplas competem, duas músicas por round",
        "Robô sumo: Três rounds de 1 minuto cada, melhor de três vitórias"
      ]
    },
    {
      title: "Tempo",
      icon: "⏰",
      content: [
        "Data: Janeiro 29, 2025",
        "Começo: 13:30",
        "Término: 16:30",
        "Encerramento final: 17:00"
      ]
    },
    {
      title: "Regra dos participantes",
      icon: "👥",
      content: [
        "Chegar 5 minutes antes do horário referido anteriormente",
        "Jogo limpo, respeito mútuo e mostrar espírito esportivo",
        "Siga regras e formatos específicos do jogo",
        "Não é permitido desrespeito verbal"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Regras do torneio</h1>
        <p className="text-gray-600">IF Goiano Campus Campos Belos - Campeonato de Jogos Eletrônicos (CJE)</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <div className="flex items-center">
          <span className="text-2xl mr-2">⚠️</span>
          <div>
            <h3 className="font-bold">IMPORTANTE</h3>
            <p>Todos os participantes devem estar inscritos no formulário.</p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <ul className="space-y-2">
              {section.content.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">📞</span>
          <h2 className="text-xl font-semibold">Contact Information</h2>
        </div>
        <div className="space-y-2">
          <p>Para dúvidas e suporte:</p>
          <p>• Email: jogoseletronicosif@gmail.com</p>
          <p>• Telefone/WhatsApp: (62)996721213</p>
          <p>• Disponível quarta e quinta, 13:30 - 17:30</p>
        </div>
        <div className='mt-5 text-red-600 font-bold cursor-pointer'><a href='https://docs.google.com/document/d/1rPc_Z7cQ2fNyC22KNRzAT-ZPJHntQAQhRBXvDvnomT0/edit?tab=t.0'>Clique para baixar PDF do regulamento completo.</a></div>
      </div>
    </div>
  );
};

export default Regulamento;