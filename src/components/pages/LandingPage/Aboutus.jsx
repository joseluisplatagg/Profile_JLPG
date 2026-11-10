import Hero from "../../layouts/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye } from '@fortawesome/free-solid-svg-icons';
import pasion from '/pasion.gif'
import SkillsComponent from "../../layouts/Skills";
import JobsComponent from "../../layouts/Jobs";

const Aboutus = () =>{

    const descripcion = `Apasionado a la tecnologia y en constante motivacion para enfocar la atencion al detalle
                          en la mejora de procesos, flujos de operacion y rendimiento. `;

    const descripcion2 = `Profesionalidad en cada uno de nuestros procesos y en constante mejora y actualización de las mejores
                          herramientas del mercado para ofrecer soluciones a cualquier bolsillo `;


     const mision = `Guiar y acompañar a nuestros clientes en su transformación digital, diseñando e implementando soluciones 
                      tecnológicas personalizadas que optimicen sus procesos internos, garanticen la seguridad de sus datos y 
                      potencien su crecimiento sostenible en el mercado.`;

    const vision = `Ser reconocidos como la consultora tecnológica líder y de referencia en el sector, destacando por nuestra 
                    capacidad de innovación constante, la excelencia de nuestros profesionales y nuestra contribución al éxito competitivo de 
                    nuestros clientes a nivel global.`;

    return(
        <>
           <div className="">
                <Hero data-aos="fade-up" title={"Quiénes somos"} image={""} className=""/>                
            </div> 

              <section data-aos="zoom-out" className="w-full max-w-7xl mx-auto px-5 ssm:pt-10 md:py-16 flex flex-col gap-10">
      
                {/* BLOQUE 1: LA HISTORIA */}
                <div data-aos="flip-up" className="bg-neutral-primary-soft p-6 md:p-10 border border-default rounded-2xl shadow-xl">
                  <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                    
                    {/* Contenedor de Imagen Simétrico */}
                    <div className="w-full md:w-2/5 h-64 md:h-80 rounded-xl overflow-hidden shadow-md shrink-0">
                      <img 
                        className="object-cover w-full h-full block hover:scale-105 transition-transform duration-300" 
                        src={pasion}
                        alt=""
                      />
                    </div>
                    
                    {/* Contenedor de Texto */}
                    <div className="w-full md:w-3/5 flex flex-col text-start justify-center">
                      <span className="text-emerald-800 dark:text-emerald-700 font-bold text-sm uppercase tracking-wider mb-2">
                        Nuestra Historia
                      </span>
                      <h5 className="mb-4 text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-black">
                        Pasión y Tecnología
                      </h5>
                      <div className="space-y-4 text-gray-600 dark:text-gray-700 font-medium leading-relaxed text-justify text-sm md:text-base">
                        <p>{descripcion}</p>
                        <p>{descripcion2}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* BLOQUE 2: MISIÓN Y VISIÓN (Grid de 2 Columnas Simétricas) */}
                <div data-aos="flip-up" className="grid grid-cols-1 md:grid-cols-2 bg-neutral-primary-soft border border-default rounded-2xl shadow-xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-default">
                  
                  {/* TARJETA: MISIÓN */}
                  <div className="flex flex-col items-center justify-between p-8 text-center bg-white/40 dark:bg-cyan-700/40 hover:bg-emerald-800 dark:hover:bg-emerald-800 transition-colors duration-300">
                    <div className="flex flex-col items-center w-full">
                      {/* Contenedor del Icono con un toque más cálido */}
                      <div className="w-20 h-20 bg-cyan-50 dark:bg-cyan-950/40 rounded-full flex items-center justify-center shadow-inner mb-6">
                        <FontAwesomeIcon icon={faBullseye} className="text-4xl text-white font-extrabold" />
                      </div>
                      <h3 className="text-2xl font-black text-heading uppercase tracking-wider dark:text-white mb-4">
                        Misión
                      </h3>
                      <p className="text-gray-600 dark:text-gray-100 font-medium leading-relaxed text-justify text-sm md:text-base px-2 md:px-6">
                        {mision}
                      </p>
                    </div>
                  </div>

                  {/* TARJETA: VISIÓN */}
                  <div className="flex flex-col items-center justify-between p-8 text-center bg-white/40 dark:bg-cyan-700/40 hover:bg-emerald-800 dark:hover:bg-emerald-800 transition-colors duration-300">
                    <div className="flex flex-col items-center w-full">
                      <div className="w-20 h-20 bg-amber-50 dark:bg-amber-950/40 rounded-full flex items-center justify-center shadow-inner mb-6">
                        <FontAwesomeIcon icon={faEye} className="text-4xl text-white font-extrabold" />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                        Visión
                      </h3>
                      <p className="text-gray-600 dark:text-gray-100 font-medium leading-relaxed text-justify text-sm md:text-base px-2 md:px-6">
                        {vision}
                      </p>
                    </div>
                  </div>

                </div>

                <div data-aos="slide-up" className="bg-neutral-primary-soft border border-default rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-black text-heading text-center uppercase tracking-wider dark:text-black mb-4">
                    Experiencia Laboral
                  </h3>
                  <JobsComponent />
                </div>

                <div data-aos="zoom-in" className="bg-neutral-primary-soft border border-default rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-black text-heading text-center uppercase tracking-wider dark:text-black mb-4">
                    Skills
                  </h3>
                  <SkillsComponent />
                </div>
                </section>                
        </>
    );
}
export default Aboutus;