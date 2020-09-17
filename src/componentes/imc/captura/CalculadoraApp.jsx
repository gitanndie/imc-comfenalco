import React from 'react';
import CabeceraCalculo from './CabeceraCalculo'
import CuerpoCalculo from './CuerpoCalculo'

let CalculadoraApp = (props) => {
    return(
        <section className="panel">
            <CabeceraCalculo titulo="Calculadora de IMC" 
                            nombre_clase="cabecera-calculo"
            />
            <CuerpoCalculo App={props.App} />
        </section>
    );
}

export default CalculadoraApp;