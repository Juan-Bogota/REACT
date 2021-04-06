import React, { Component } from 'react';

export class EventosES6 extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);

    }

    sumar() {
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar() {
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en componentes de Clase ES6</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>

        )
    }
}

export class EventosES7 extends Component {

    
    state = {
        contador: 0,
    };

    //Arrow fuction

    sumar = (e) => {
        console.log("sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => { 
        console.log("restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }
    render(){
        return(
            <div>
                <h2>Eventos en componentes de Clase ES7</h2>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>

        )
    }
}
const Boton = (props) => ( <button onClick={props.myonClick}>Soy un boton</button>)

export class MasEventos extends Component {

    handleClick(e, mensaje) {
        console.log(e);
        console.log(e.nativeEvent);
        
        console.log(e.target);
        console.log(e.nativeEvent.target);

        console.log(mensaje);
        
    }
    render() {
        return (
        <div>
            <h2>Mas sobre eventos</h2>
            <button onClick={(e) => this.handleClick(e, 'Hola pasando parametro desde react')}>Saludar</button>

            {/* Evento Personalizado */}
            {/*<Boton onClick={(e) => this.handleClick(e, 'Hola pasando parametro desde react')} />*/}

            <Boton myonClick={(e) => this.handleClick(e, 'Hola pasando parametro desde react')} />
        </div>
        )
    }
}