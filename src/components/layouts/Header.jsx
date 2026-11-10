import React, {useState, useEffect} from 'react';
import { Link, Navigate } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faUsersViewfinder, faComputer, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../../public/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    /* CONTENEDOR FLOTANTE INVISIBLE: Controla la posición fija y la animación de ocultar */
    <div data-aos="fade-up"
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 transition-transform duration-300 flex justify-center bg-transparent pointer-events-none
        ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      {/* LA CÁPSULA OVALADA (Fondo Emerald 900 garantizado) */}
      <nav 
        className="w-full max-w-full relative bg-linear-to-r from-emerald-950 via-emerald-800 to-cyan-700 shadow-2xl rounded-full shadow-emerald-950/40 pointer-events-auto "
      >
        <div className="flex items-center justify-between mx-auto p-3 px-6">
          
          {/* LOGOTIPO */}
          <div className="flex items-center gap-3 group"> 
            <img  
              src={logoImg} 
              alt="Logotipo" 
              className="h-9 w-9 rounded-full object-cover transition-transform duration-200 group-hover:scale-110" 
            />
            <div className="flex flex-col">
              {/* Texto en blanco para resaltar sobre el fondo oscuro emerald-900 */}
              <span className="font-black text-emerald-600  tracking-wide text-base leading-none mt-1">
                JLPG Services
              </span>
              <span className="text-2xs font-bold text-emerald-500 uppercase tracking-widest mt-1.5">
                Servicios y Soluciones
              </span>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button 
            onClick={toggleMenu} 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-100 rounded-full md:hidden hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600" 
            aria-controls="navbar-default" 
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
          </button>
  
          {/* MENÚ DE ENLACES (Estilizado para fundirse en fondo oscuro y bordes redondeados) */}
          <div 
            className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto absolute md:relative top-16 md:top-0 left-0 right-0 bg-emerald-900 md:bg-transparent p-5 md:p-0 shadow-xl md:shadow-none rounded-3xl md:rounded-none border border-emerald-800 md:border-none`} 
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col md:flex-row md:space-x-4 lg:space-x-6 mt-0 border-0 gap-1 md:gap-05">
              
              <Link 
                to="/home" 
                activeProps={{ className: 'py-2 px-4 text-emerald-600 md:hover:text-white' }}
                className="flex flex-col items-center justify-center text-center group transition-all duration-200"
              >
                {/* Contenedor del Icono */}
                <div className="w-12 h-12 bg-cyan-500 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-2 transition-colors group-hover:bg-emerald-800">
                  <FontAwesomeIcon icon={faHouseChimney} className="text-xl text-cyan-600 dark:text-cyan-400 font-extrabold" />
                </div>
                
                {/* Texto */}
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Inicio
                </span>
              </Link>

              <Link 
                to="/aboutus" 
                activeProps={{ className: 'py-2 px-4 text-emerald-600 md:hover:text-white' }}
                className="flex flex-col items-center justify-center text-center group"
              >
                {/* Contenedor del Icono */}
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-2 transition-colors group-hover:bg-emerald-800">
                  <FontAwesomeIcon icon={faUsersViewfinder} className="text-xl text-cyan-600 dark:text-cyan-400 font-extrabold" />
                </div>
                
                {/* Texto */}
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Nosotros
                </span>
              </Link>

              <Link 
                to="/services" 
                activeProps={{ className: 'py-2 px-4 text-emerald-600 md:hover:text-white' }}
                className="flex flex-col items-center justify-center text-center group"
              >
                {/* Contenedor del Icono */}
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-2 transition-colors group-hover:bg-emerald-800">
                  <FontAwesomeIcon icon={faComputer} className="text-xl text-cyan-600 dark:text-cyan-400 font-extrabold" />
                </div>
                
                {/* Texto */}
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Servicios
                </span>
              </Link>

             <Link 
                to="/locations" 
                activeProps={{ className: 'py-2 px-4 text-emerald-600 md:hover:text-white' }}
                className="flex flex-col items-center justify-center text-center group"
              >
                {/* Contenedor del Icono */}
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-2 transition-colors group-hover:bg-emerald-800">
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xl text-cyan-600 dark:text-cyan-400 font-extrabold" />
                </div>
                
                {/* Texto */}
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Contacto
                </span>
              </Link>

              {/* <Link 
                to="/login" 
                activeProps={{ className: 'py-2 px-4 text-emerald-600 md:hover:text-white' }}
                className="flex flex-col items-center justify-center text-center group"
              >
                {/* Contenedor del Icono 
                <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-2 transition-colors group-hover:bg-emerald-800">
                  <FontAwesomeIcon icon={faArrowRightToBracket} className="text-xl text-cyan-600 dark:text-cyan-400 font-extrabold" />
                </div>
                
                {/* Texto 
                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                  Perfil
                </span>
              </Link> */}
            </ul>
          </div>
  
        </div>
      </nav>
    </div>
  );
};

export default Header;