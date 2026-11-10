
import { Route } from '../../../routes/__root'
import Services from './Services';
import Aboutus from './Aboutus';
import Locations from './Locations'
import Login from '../Login/Login'

const Home = () => {    
    return (
      <>
        <section data-aos="zoom-in" className="relative bg-no-repeat bg-center bg-cover bg-neutral-primary dark:bg-[url('')] pt-24 md:pt-32 pb-12 overflow-hidden border-b border-default
">
        {/* Capa de degradado sutil para asegurar que las letras se lean sobre la imagen de fondo */}
        <div className="absolute inset-0 bg-linear-to-r  z-0 pointer-events-none"></div>
        
        <div className="py-8 px-5 mx-auto max-w-7xl text-center lg:py-16 z-10 relative">
          {/* BANNER DE ALERTA: Descuento y correo */}
          <div className="w-auto inline-flex items-center p-1 pe-3 mb-6 text-sm text-fg-brand-strong rounded-full bg-brand-softer border border-brand-subtle animate-pulse shadow-sm" role="alert">
            <span className="bg-yellow-400 text-zinc-900 font-bold text-xs py-0.5 px-3 rounded-full uppercase tracking-wider">
              Nuevo
            </span>
            <div className="ms-2 text-xs md:text-sm font-medium">
              Obten un descuento enviando un correo a:{' '}
              <a href="mailto:jose.luis.plata.gg@gmail.com" className="font-bold underline hover:no-underline text-brand">
                jose.luis.plata.gg@gmail.com
              </a>
            </div>
            <svg className="w-4 h-4 ms-2 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
            </svg>
          </div>

          {/* TÍTULO PRINCIPAL (H1) */}
          <div className="max-w-4xl text-left">
          <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-normal md:tracking-tight text-white dark:text-emerald-700 uppercase leading-[1.1] drop-shadow-sm flex flex-wrap items-center gap-x-4">
            <span>Soluciones</span>
            <br className="hidden md:block" />  
            <span className="flex items-center gap-x-4">
              Tecnológicas
              {/* Reactor integrado como un elemento en línea (Inline Mini Reactor) */}
              <span className="inline-flex items-center justify-center relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 backdrop-blur-xs  shadow-inner overflow-hidden shrink-0 transform translate-y-1">
                
                {/* Órbita Alfa */}
                <div className="absolute rotate-45 animate-[spin_4s_linear_infinite] text-cyan-500 dark:text-cyan-400 opacity-40">
                  <svg width="100%" height="100%" viewBox="0 0 160 80" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="80" cy="40" rx="76" ry="36" strokeDasharray="8 6" />
                  </svg>
                </div>

                {/* Órbita Beta */}
                <div className="absolute -rotate-45 animate-[spin_3s_linear_infinite_reverse] text-fuchsia-500 dark:text-fuchsia-400">
                  <svg width="85%" height="85%" viewBox="0 0 120 60" fill="none" stroke="currentColor" strokeWidth="5">
                    <ellipse cx="60" cy="30" rx="56" ry="26" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Partícula */}
                <div className="absolute rotate-120 animate-[spin_1.5s_linear_infinite] text-white opacity-80 w-[75%] h-[75%]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] absolute top-1/2 left-0 -translate-y-1/2" />
                </div>

                {/* Núcleo */}
                <div className="absolute flex items-center justify-center animate-pulse duration-700">
                  <div className="absolute w-6 h-6 rounded-full bg-cyan-500 blur-md animate-ping" />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-cyan-400 font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 7.76l1.41-1.41" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                </div>

              </span>
            </span>
          </h1>
        </div>

          

          {/* SUBTÍTULO: Años de experiencia */}
          <p className="text-left mb-10 text-emerald-700 dark:text-emerald-900 font-extrabold text-lg md:text-2xl tracking-wide uppercase">
            Pasión y Tecnología
          </p>          
                
        </div>
      </section>
      <div data-aos="fade-up-left">
          <Aboutus />
        </div>

        <div data-aos="fade-up">
          <Services />
        </div>
        
        <div data-aos="fade-up">
          <Locations />
        </div>
      </>
    
  );
}

const GearMechanism = () => {
  return (
    <div className="flex flex-col items-center justify-center my-12 p-6 rounded-2xl bg-neutral-secondary/40 backdrop-blur-xs border border-neutral-secondary/20 max-w-xl mx-auto shadow-inner">
      <div className="relative w-64 h-48 flex items-center justify-center">
        
        {/* Engrane Principal (Grande - Giro Horario) */}
        <div className="absolute top-4 left-8 animate-[spin_12s_linear_infinite] text-brand dark:text-blue-500 opacity-80">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        {/* Engrane Mediano (Conectado abajo a la derecha - Giro Antihorario) */}
        <div className="absolute bottom-6 right-12 animate-[spin_8s_linear_infinite_reverse] text-amber-500 dark:text-amber-400 opacity-90">
          <svg width="76" height="76" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        {/* Engrane Pequeño (Conectado arriba a la derecha - Giro Horario rápido) */}
        <div className="absolute top-6 right-6 animate-[spin_5s_linear_infinite] text-zinc-500 dark:text-zinc-400">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      </div>
      
      {/* Texto indicador de pasos */}
      <span className="text-xs font-mono uppercase tracking-widest text-white dark:text-white mt-2 animate-pulse">
        Procesando Soluciones Activas
      </span>
    </div>
  );
};

const Antena = () =>{
  return (
  <div className="flex flex-col items-center justify-center my-12 p-6 rounded-2xl bg-amber-50/50 backdrop-blur-xs border border-neutral-secondary/20 max-w-xl mx-auto shadow-inner">
    <div className="relative w-64 h-48 flex items-center justify-center">
      {/* Onda Exterior (Grande - Pulso lento) */}
      <div className="absolute animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] text-brand dark:text-blue-500 opacity-20">
        <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>

      {/* Onda Intermedia (Mediana - Pulso normal) */}
      <div className="absolute animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] text-emerald-500 dark:text-emerald-400 opacity-40">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="7" />
        </svg>
      </div>

      {/* Nodo Central / Antena (Fijo con brillo interior) */}
      <div className="absolute text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12" />
          <path d="M12 6a6 6 0 0 1 6 6c0 3.314-2.686 6-6 6S6 15.314 6 12" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </div>
    </div>

    {/* Texto indicador de éxito / conexión */}
    <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mt-2 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      Sistemas Sincronizados
    </span>
  </div>
);

}


export default Home;

