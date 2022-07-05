import Aos from 'aos';
import { useEffect } from 'react';
import './home.css';

export default function Home(){

    useEffect(() => {
        Aos.init({duration : 1500});
      }, []);

    return(
        <div className="contenedor" data-aos = "fade-right" data-aos-once="true">
            <div className="text" >
                <h1>Una nueva manera de conectar con alumnos</h1>
                <button className='bt_home'>Unete</button>
            </div>
            <div  className="imagen">
            <img alt='Img de presenatcion' src='https://www.pandasecurity.com/es/mediacenter/src/uploads/2020/07/pandasecurity-juegos-online.jpg'/>
            </div>
        </div>
    )
}