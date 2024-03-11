import React from 'react';
import Image from 'next/image';

// Define tus habilidades
const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'Python' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Jupyter Notebooks' },
];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          Acerca de mí
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              ¡Conóceme!
            </h1>
            <p>
              Hola, mi nombre es Carlos Boyzo Oregón y soy un ingeniero de software{' '}
              <span className='font-bold'>altamente ambicioso</span>,
              <span className='font-bold'> auto motivado</span>, y
              <span className='font-bold'> apasionado</span> con sede en México.
            </p>
            <br />
            <p>
              Me gradué de la Universidad Estatal de California, Northridge en 2019
              con una Licenciatura en Ingeniería Informática y he estado trabajando en
              el campo desde entonces.
            </p>
            <br />
            <p>
              Tengo una amplia gama de pasatiempos y pasiones que me mantienen ocupado.
              Desde leer, practicar deportes, viajar, hasta hacer videos en YouTube,
              siempre estoy buscando nuevas experiencias y me encanta mantenerme
              comprometido y aprender cosas nuevas.
            </p>
            <br />
            <p>
              Creo que nunca debes dejar de crecer y eso es lo que me esfuerzo por hacer.
              Tengo una pasión por la tecnología y un deseo de siempre empujar los límites
              de lo que es posible. Estoy emocionado de ver a dónde me lleva mi carrera y
              siempre estoy abierto a nuevas oportunidades. 🙂
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>Mis Habilidades</h1>
            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src='/hero-image.png'
              alt=''
              width={185}
              height={185}
              className='hidden md:block md:relative md:bottom-4  md:left-32 md:z-0  md:top-4 '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
