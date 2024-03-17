// Importaciones optimizadas y uso de 'use client' para indicar que el componente solo debe ejecutarse en el cliente.
'use client';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <section
      id='home'
      className='flex justify-center items-center h-[80vh]'> {/* Ajustado para centrar y tomar el alto completo de la pantalla */}
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
