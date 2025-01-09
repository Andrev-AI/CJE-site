import React from 'react';

const MenuItem = ({ name, description, history, options, image, pricing }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="h-48 bg-gradient-to-r from-yellow-400 to-red-500 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center">
          <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
        </div>
        
        <p className="mt-3 text-gray-600">{description}</p>
        
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800">Descrição</h4>
          <p className="mt-2 text-gray-600">{history}</p>
        </div>

        {options && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">{name === 'Refrigerantes' ? 'Opções' : 'Ingredientes Tradicionais'}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {options.map((option) => (
                <span
                  key={option}
                  className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}

        {pricing && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-800">Preços</h4>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              {pricing.map((price, index) => (
                <li key={index}>{price}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Alimentos = () => {
  const menu = [
    {
      name: 'Hot Dog Tradicional',
      description: 'O clássico cachorro-quente brasileiro, uma tradição em festas e eventos',
      history: 'O cachorro-quente chegou ao Brasil no início do século XX e se transformou com nossa cultura. Está disponível no evento para todos.',
      options: ['Pão Macio', 'Salsicha', 'Batata Palha', 'Molho de Tomate'],
      image: '🌭',
      pricing: [
        '1 salsicha: R$8,00',
        '2 salsichas: R$10,00'
      ]
    },
    {
      name: 'Refrigerantes',
      description: 'As bebidas que refrescam gerações de brasileiros',
      history: 'Os refrigerantes fazem parte da cultura brasileira desde o início do século XX, sendo presença garantida em todas as comemorações e eventos.',
      options: ['Coca-Cola', 'Guaraná', 'Fanta Laranja', 'Fanta Uva', 'Água Mineral'],
      image: '🥤',
      pricing: [
        'Coca, Guaraná, Fanta (lata): R$5,00',
        'Água Mineral: R$2,50'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900">Alimentos vendidos no evento:</h1>
          <p className="mt-4 text-xl text-gray-600">Lista de Comidas e Bebidas disponíveis para compra no evento</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menu.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alimentos;
