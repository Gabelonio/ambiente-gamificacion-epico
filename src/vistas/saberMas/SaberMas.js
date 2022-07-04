import './saberMas.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function SaberMas(props) {

    useEffect(() => {
      Aos.init({duration : 1500});
    }, []);

    return(
        <div>
            <div className='sm_title' data-aos = "fade-in" data-aos-once="true">
                <div>
                    <h1> Promueve la motivación <br/>en el aprendizaje.</h1>
                </div>
                <div>
                    <p>
                    La motivación es el aspecto vital del por qué iniciamos,<br/> 
                    continuamos y terminamos nuestros compromisos y<br/>
                    proyectos.
                    </p>
                </div>
            </div>
            <div className='saberMas_contenedor'>
                <div className="sm_text" data-aos = "fade-right" data-aos-once="true">

                    <h1>Crea un aula divertida para tus alumnos</h1>
                    <p>Promueve el compromiso de los alumnos a través de retos, niveles y puntos.  
                    Genera expectativas y objetivos que fomenten sus capacidades.</p>
                </div>
                <div  className="sm_img" data-aos = "fade-right" data-aos-once="true">
                    <img alt='Img de presenatcion' src='https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg'/>
                </div>
                <div className="sm_text" data-aos = "fade-left" data-aos-once="true">
                    <h1>Elige un personaje e inicia una experiencia alternativa de aprendizaje</h1>
                    <p>Crea un personaje con habilidades únicas que te ayudarán en el 
                        cumplimiento de los retos. Consigue puntos de experiencia para fortalecer
                        a tu personaje y realizar retos más desafiantes.</p>
                </div>
                <div  className="sm_img" data-aos = "fade-left" data-aos-once="true">
                    <img alt='Img de presenatcion' src='https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg'/>
                </div>
            </div>
        </div>
    )
}