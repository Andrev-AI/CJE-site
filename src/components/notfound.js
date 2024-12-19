const Notfound = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center text-white space-y-6 flex flex-col px-6 sm:px-10 md:px-20">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 animate__animated animate__fadeIn">
            404
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
            A página que você está procurando não foi encontrada.
          </p>
          <a
            href="/"
            className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Voltar para o início
          </a>
  
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <a
              href="/regulamento"
              className="w-full bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            >
              Ir para: Regulamento
            </a>
            <a
              href="https://forms.gle/CB8cGGHrSf3nMUKV6"
              className="w-full bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
            >
              Inscrever
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Notfound;
  