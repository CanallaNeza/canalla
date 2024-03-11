'use client'; // this is a client component
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IconType } from 'react-icons';
import { FaHome } from 'react-icons/fa';
import cboLogo from '/cbo-logo.png'; // Importa la imagen

interface NavItem {
  label: string;
  page: string;
  icon?: IconType;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
    icon: FaHome,
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  const themeButton =
    currentTheme === 'dark' ? (
      <button
        onClick={() => setTheme('light')}
        className='bg-gray-100 p-2 rounded-xl relative'>
        <RiSunLine size={25} color='black' />
      </button>
    ) : (
      <button onClick={toggleTheme} className='p-2 rounded-xl'>
        <RiMoonFill size={25} />
      </button>
    );
  // Función para cambiar el tema

  return (
    <header className='w-full mx-auto p-2 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-gray-950 '>
      <div className='justify-between md:items-center md:flex'>
        <div>
          <div className='section'>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}>
              <Link to='home'>
                <div className='container flex items-center space-x-2'>
                  <img
                    src='/cbo-logo.png'
                    alt='CBO Logo'
                    className='h-4 w-auto'
                  />{' '}
                  {/* Reemplaza h2 con img */}
                </div>
              </Link>
              <div className='md:hidden'>
                <button
                  className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                  onClick={() => setNavbar(!navbar)}>
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}>
            <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
              {NAV_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.page}
                    to={item.page}
                    className='block lg:inline-block text-neutral-900 hover:text-neutral-500 dark:text-neutral-100 text-right'
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}>
                    {item.icon ? <item.icon size={25} /> : item.label}
                  </Link>
                );
              })}
              {/* boton de tema de color  */}
              {themeButton}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
