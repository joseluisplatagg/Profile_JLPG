import { Card, Carousel } from "flowbite-react";
import React, { useState  } from 'react';
import Hero from "../../layouts/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from "../../layouts/ProjectCard";

const Services = () => {
const [selectedId, setSelectedId] = useState(null);


  // 2. Arreglo con la información y descripciones breves de tus servicios
  const servicios = [
    {
      id: 1,
      titulo: "Proyectos personales",
      descripcion: `Si buscas la mejor alternativa a la hora de seleccionar el stack tecnológico para la implementación de 
                                proyectos pequeños como generación de boletos QR, páginas web, administración del hogar y orientación técnica. `,
      icon: faTrophy
    },
    {
      id: 2,
      titulo: " Proyectos MyPymes o para tu negocio",
      descripcion: `Construcción de sistemas adecuados a la operación para mejorar el rendimiento
                                de los procesos acompañados de gráficas e indicadores para la toma de desiciones."`,
      icon: faTrophy
    },
    {
      id: 3,
      titulo: "Proyectos Especializados",
      descripcion: "Implementaciones en la nube, estadisticas y metricas con IA, entrenamiento de modelos ",
      icon: faTrophy
    }
  ];
    return(
        <>
        <Hero title={"Servicios"} image={""} className=""/>
       {/* 1. Ajustamos las alturas del contenedor padre para que quepa todo el contenido en móvil (h-[550px]) y escritorio (md:h-[450px]) */}
        {/* ESTO FORZARÁ AL CARRUSEL A SALIRSE DE LA MITAD DE LA PANTALLA EN SERVICES */}
       
        <div data-aos="zoom-in" className="w-full max-w-7xl mx-auto px-4 ssm:pt-80 md:pt-10 pb-10">
      
          {/* 2. REJILLA DINÁMICA: 1 columna en móvil, 3 columnas en pantallas medianas/grandes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {servicios.map((servicio) => {
              const isSelected = selectedId === servicio.id;
              const hasSelection = selectedId !== null;
              const isDimmed = hasSelection && !isSelected;

              return (
                <div
                  key={servicio.id}
                  onClick={() => setSelectedId(servicio.id)}
                  className={`relative flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 shadow-xl
                    ${isSelected 
                      ? 'bg-linear-to-tr from-emerald-700 via-emerald-500 to-cyan-300 border-emerald-900 scale-[1.03] text-white z-10'
    
                      : isDimmed
                        ? 'bg-gray-50/50 dark:bg-blue-700/30 border-transparent opacity-30 scale-[0.97]'
                        : 'bg-linear-to-tr from-emerald-950 via-cyan-950 to-cyan-900 border border-cyan-800/50 text-white dark:text-white'
                    }`}
                >
                  {/* Contenedor del Icono superior */}
                  <div className="mb-4 flex justify-center items-center w-16 h-16 rounded-full bg-amber-50 dark:bg-zinc-800 shadow-inner">
                    <FontAwesomeIcon 
                      icon={servicio.icon} 
                      className={`text-3xl transition-colors duration-300
                        ${isSelected ? 'text-amber-300' : 'text-cyan-400'}`}
                    />
                  </div>

                  {/* Contenido de la Tarjeta */}
                  <div className="flex flex-col items-center">
                    <h4 className={`font-sans font-stretch-semi-expanded italic uppercase tracking-wider font-bold text-xl mb-2
                      ${isSelected ? 'no-underline' : 'underline decoration-cyan-500'}`}>
                      {servicio.titulo}
                    </h4>
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-300
                      ${isSelected ? 'text-white' : 'text-white dark:text-gray-100'}`}>
                      {servicio.descripcion}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Botón para restablecer el estado y activar todas las tarjetas de nuevo */}
          {selectedId !== null && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setSelectedId(null)}
                className="px-5 py-2 text-sm bg-zinc-900 text-white dark:bg-emerald-700 dark:text-white rounded-full font-bold shadow-md hover:scale-105 transition-transform duration-200"
              >
                Mostrar todos los servicios
              </button>
            </div>
          )}

          <Carousel data-aos="flip-left"  className="mt-10" slide={true} slideInterval={3000}>

            <ProjectCard 
              title={<span>ERP</span>} 
              description={<span>Gestión de Recursos Empresariales</span>}
              progress={50}
              tags={["ERP", "Gestión", "Empresarial"]}
              image="/ERP_SYSTEM.png"
              imageAlt="Captura del sistema ERP"
              demoUrl="https://main.d3ni7ejue8eozh.amplifyapp.com/"
              
              />

              <ProjectCard 
              title={<span>E-COMMERCE</span>} 
              status="en-curso"
              description={<span>Gestión de E-COMMERCE</span>}
              progress={55}
              tags={["E-COMMERCE", "Ventas", "Marketing", "Promoción","Carrito de Compras"]}
              image="/ECOMMERCE_SYSTEM.jpeg"
              imageAlt="Captura del sistema de E-COMMERCE"
              />

              <ProjectCard 
              title={<span>RESERVACIONES</span>} 
              description={<span>Gestión de Reservaciones</span>}
              progress={85}
              tags={["Reservaciones", "Gestión", "Agenda", "Calendario"]}
              image="/RESERVATION_SYSTEM.png"
              imageAlt="Captura del sistema de Reservaciones"
              demoUrl="https://thankful-moss-045907c1e.5.azurestaticapps.net"
              />

              <ProjectCard 
              title={<span>POS</span>} 
              description={<span>Gestión de Punto de Venta</span>}
              progress={77}
              tags={["Punto de Venta", "Gestión", "Ventas", "Inventario"]}
              image="/POS_SYSTEM.png"
              imageAlt="Captura del sistema de Punto de Venta"
              demoUrl="https://delightful-wave-009a56f1e.6.azurestaticapps.net"
              />

              <ProjectCard 
              title={<span>Landing Pages</span>} 
              status="terminado"
              description={<span>Gestión de Landing Pages</span>}
              progress={100}
              tags={["Landing Pages", "Gestión", "Marketing", "Promoción"]}
              image="/LANDING_SYSTEM.png"
              imageAlt="Captura del sistema de Landing Pages"
              demoUrl="https://thankful-moss-045907c1e.5.azurestaticapps.net"
              />

            </Carousel>

        </div>
         
        </>
    )
}

export default Services;

