import Title from "../../layouts/Title";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJarWheat, faClock,faEarthAmericas,faEnvelope,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


const Contacto = () => {

    return(
      <>
        <div className="w-full max-w-2xl mx-auto p-6 md:p-8 bg-linear-to-tr from-emerald-950 via-cyan-950 to-cyan-900 border border-cyan-800/50 rounded-2xl shadow-xl my-8 text-white relative overflow-hidden after:absolute after:top-0 after:right-0 after:w-48 after:h-48 after:bg-radial after:from-cyan-400/30 after:to-transparent after:blur-xl after:pointer-events-none">
    
            {/* ENCABEZADO DE SECCIÓN */}
            <div className="flex flex-col items-center text-center pb-6 border-b border-default mb-6">
                <div className="w-16 h-16 bg-amber-50 dark:bg-amber-950/40 rounded-full flex items-center justify-center shadow-inner mb-3">
                    <FontAwesomeIcon 
                        icon={faJarWheat}
                        className="text-3xl text-amber-700 dark:text-white font-extrabold"
                    />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white uppercase tracking-wide">
                    Horarios y medios de comunicación
                </h3>
            </div>

            {/* LISTA DE INFORMACIÓN (Alineación perfecta por filas) */}
            <div className="flex flex-col gap-6">
                
                {/* FILA 1: HORARIOS */}
                <div className="flex flex-col ssm:flex-row items-center ssm:items-start text-center ssm:text-start gap-4 p-3 rounded-xl hover:bg-white/40 dark:hover:bg-cyan-400 transition-colors duration-200">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl text-amber-600 dark:text-white">
                        <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-gray-100 tracking-wider">Horario de atención</span>
                        <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 mt-0.5">
                            Lunes a Domingo de 06:00 - 23:00
                        </p>
                    </div>
                </div>

                {/* FILA 2: DIRECCIÓN */}
                <div className="flex flex-col ssm:flex-row items-center ssm:items-start text-center ssm:text-start gap-4 p-3 rounded-xl hover:bg-white/40 dark:hover:bg-cyan-400 transition-colors duration-200">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl text-amber-600 dark:text-white">
                        <FontAwesomeIcon icon={faEarthAmericas} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-gray-100 tracking-wider">Dirección</span>
                        <p className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200 mt-0.5 leading-relaxed">
                            Pico de Águila 313, Acolman, Estado de México, C.P. 55883
                        </p>
                    </div>
                </div>

                {/* FILA 3: CORREO */}
                <div className="flex flex-col ssm:flex-row items-center ssm:items-start text-center ssm:text-start gap-4 p-3 rounded-xl hover:bg-white dark:hover:bg-cyan-400 transition-colors duration-200">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl text-amber-600 dark:text-white">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-gray-100 tracking-wider">Correo Electrónico</span>
                        <a href="mailto:jose.luis.plata.gg@gmail.com" className="text-sm md:text-base font-semibold text-white underline hover:no-underline mt-0.5">
                            jose.luis.plata.gg@gmail.com
                        </a>
                    </div>
                </div>

                {/* FILA 4: TELÉFONO */}
                <div className="flex flex-col ssm:flex-row items-center ssm:items-start text-center ssm:text-start gap-4 p-3 rounded-xl hover:bg-white/40 dark:hover:bg-cyan-400 transition-colors duration-200">
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center text-2xl text-amber-600 dark:text-white">
                        <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs uppercase font-bold text-gray-100 tracking-wider">Teléfonos de contacto</span>
                        <p className="text-sm md:text-base font-black text-gray-900 dark:text-white tracking-wide mt-0.5">
                            (55) 3884 - 4860 y (55) 3564 - 9184
                        </p>
                    </div>
                </div>

            </div>
        </div>

      </>
    )
    
}

export default Contacto;