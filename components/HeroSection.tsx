// Utilizamos "use client" para indicar que este es un componente del lado del cliente
'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <>
      <section
        id='home'
        className='flex flex-col items-center justify-center my-10 py-16 text-center animate-fadeIn animation-delay-2 sm:py-32 md:flex-row md:space-x-4  md:text-left'>
        <div className='flex-shrink-0 md:w-1/2 lg:flex lg:justify-center'>
          <Image
            src='/head.gif' // Reemplaza "/miImagen.png" con la ruta a tu imagen de perfil
            alt='Carlos Armando Boyzo Oregón, Diseñador UX y Desarrollador Front End'
            width={325}
            height={325}
            className='rounded-full shadow-2xl'
            priority // Esto asegura que la imagen se cargue con prioridad
          />
        </div>
        <div className='md:w-3/5'>
          <h1 className='mt-6 text-4xl font-bold md:mt-0 md:text-4xl'>
            ¡Hola, soy Carlos Armando Boyzo Oregón!
          </h1>
          <p className='mt-4 mb-6 text-lg md:text-2xl'>
            Soy un{' '}
            <span className='font-semibold text-teal-600'>
              Diseñador UX y Desarrollador Front End
            </span>{' '}
            con una pasión por integrar el arte en la tecnología, creando
            experiencias digitales únicas que mejoran la vida de las personas.
          </p>
          <Link
            to='projects'
            className='inline-block px-6 py-3 text-neutral-100 bg-teal-600 rounded shadow font-semibold hover:bg-teal-700 transition-colors duration-300 ease-in-out'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Conoce más
          </Link>
        </div>
      </section>
      <div className='my-10 py-16 flex flex-row items-center text-center justify-center '>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
