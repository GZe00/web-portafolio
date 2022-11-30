import React from 'react';
import GermanIcon from "../../images/countries/germany.png";
import USIcon from "../../images/countries/united-states.png";
import MexicoIcon from "../../images/countries/mexico.png";

interface PropsComponent {
    languaje: "es" | "en" | "de",
    responsive?: boolean
}

const LabelLenguaje = ({ languaje, responsive }: PropsComponent) => {


    return <>
        {
            languaje === "es" ?
                <div className='flex items-center'>
                    <img className="w-5 mr-2" src={MexicoIcon} alt="icono referente al idioma español" />
                    
                    <p>Español</p>
                </div>
                : null
        }
        {
            languaje === "en" ?
                <div className='flex items-center'>
                    <img className="w-5 mr-2" src={USIcon} alt="icono referente al idioma inglés" />
                    <p>Inglés</p>
                </div>
                : null
        }
        {
            languaje === "de" ?
                <div className='flex items-center'>
                    <img className="w-5 mr-2" src={GermanIcon} alt="icono referente al idioma alemán" />
                    <p>Alemán</p>
                </div>
                : null
        }
    </>
}

export default LabelLenguaje