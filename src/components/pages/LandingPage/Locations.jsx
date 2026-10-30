import Contacto from "./Contacto";
import Hero from "../../layouts/Hero";
import { createRoute } from '@tanstack/react-router'
import { Route } from '../../../routes/__root'
import SocialMedia from './SocialMedia'
import Email from "../../layouts/Email";

const Locations = () => {
    return(
            <>
            <Hero title={"Contacto"} image={""} className=""/>

            <div className="w-full max-w-7xl mx-auto p-6 bg-neutral-primary-soft rounded-base shadow-xl my-8">
    
            {/* REJILLA DIRECTA: 1 columna en móvil, 2 columnas iguales en escritorio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                
                {/* LADO IZQUIERDO: EL MAPA */}
                {/* 'w-full h-80 md:h-[450px]' le da una altura fija y proporcional en cualquier pantalla */}
                <div className="w-full h-80 md:h-112.5 rounded-xl overflow-hidden shadow-md">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d234.92258673649636!2d-98.97342500577763!3d19.5947207470695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1792499174371!5m2!1sen!2smx" 
                        className="w-full h-full border-0"
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* LADO DERECHO: EL FORMULARIO DE CONTACTO */}
                {/* Eliminamos el 'px-15' fijo que desbordaba el diseño en pantallas medianas */}
                <div className="w-full px-2 md:px-6">
                    <Contacto />
                </div>    

            </div>  

            <SocialMedia />
            <Email />
        </div>

            </>
        )
};

export default Locations;

