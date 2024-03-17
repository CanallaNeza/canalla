// Importaciones necesarias
'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
// Importa el hook de Firebase Analytics que creaste o, si sigues este ejemplo, importa directamente desde Firebase
import { getAnalytics, logEvent } from 'firebase/analytics';
import { app } from '../config/firebaseConfig'; // Asegúrate de tener esta configuración preparada

const Home = () => {
  // Envío de evento a Firebase Analytics cuando el componente se monta
  useEffect(() => {
    const analytics = getAnalytics(app); // Inicializa Analytics con la configuración de Firebase
    logEvent(analytics, 'page_view', {
      page_title: 'Home', // Puedes personalizar estos parámetros según necesites
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <section id='home' className='flex justify-center items-center h-[80vh]'>
      <Image
        src='/logo.png' // Asegúrate de actualizar la ruta de tu logo aquí
        alt='Logo'
        width={325} // Ajusta el tamaño según necesites
        height={325}
        priority
      />
    </section>
  );
};

export default Home;
