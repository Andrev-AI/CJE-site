import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import Home from "./components/home";
import Fifa from "./components/fifa";
import Justdance from "./components/justdance";
import Arealivre from "./components/arealivre";
import Alimentos from "./components/alimentos";
import Regulamento from "./components/regulamento";
import Robotica from "./components/robotica";
import Notfound from './components/notfound';

const LoadingScreen = () => (
  <div className='w-full h-full flex flex-col items-center justify-center gap-20'>
    <h1 className='text-2xl text-center'>Carregando página...</h1>
    <HashLoader size={140} color="#3498db" />
  </div>
);

const RouteHandler = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const location = useLocation();

  // Função para verificar se o dispositivo é mobile
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    const loadImages = async () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar imagens:', error);
      }
    };

    loadImages();
  }, [location]);

  useEffect(() => {
    // Forçar o loading por um tempo mínimo (1 segundo)
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [location]);

  // Exibir o loader se showLoader for true ou as imagens não estiverem carregadas
  if (showLoader || !imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fifa" element={<Fifa />} />
      <Route path="/justdance" element={<Justdance />} />
      <Route path="/arealivre" element={<Arealivre />} />
      <Route path="/alimentos" element={<Alimentos />} />
      <Route path="/regulamento" element={<Regulamento />} />
      <Route path="/robotica" element={<Robotica />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

const App = () => (
  <div className="w-screen h-screen">
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  </div>
);

export default App;