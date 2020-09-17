import React,{Component} from 'react';
import Cabecera from './CabeceraIMCApp';
import Cuerpo from './CuerpoIndice';

export default class DetalleIMCApp extends Component{
    // {nombre:"Oscar", apellido: "Mesa", edad: 29}
    constructor(props){
        console.log(props);
        super(props);
        this.state = {

        }
    }

    render(){
        return (<section className="panel">
                    <Cabecera/>
                    <Cuerpo App = {this.props.App}/>
                </section>
        );
    }
}