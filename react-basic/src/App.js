import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import "./App.css";
import Propiedades from "./components/propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7, MasEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Pdf from "./components/Pdf";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizado from "./components/ComponentesEstilizados";
import Pdf2 from "./components/pdfText";

function App() {
  let nombre = "juan";
  let auth = false;
  const estaciones = ["Primavera", "Otoño", "Verano", "Invierno"];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Editando <code>src/App.js</code> and save to reload. {nombre}
            </p>
            <p>
              {auth
                ? "El usuario esta logueado"
                : "El usuario NO esta logueado"}
            </p>
            <p>{2 + 3}</p>
            <ul>
              {estaciones.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </section>
          <section>
            <hr />
            <Componente msg="Hola soy un componente funcional desde prop"></Componente>
            <hr />
            <Propiedades
              cadena="Este es una cadena de texto"
              numero={19}
              booleano={true}
              array={[1, 2, 3]}
              objeto={{ nombre: "Juan", email: "jotaclopez@hotmail.com" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={
                <Componente msg="SOy un componente pasado como props"></Componente>
              }
            ></Propiedades>
            <hr />
            <Estado />
            <hr />
            <Pdf />
            <hr />
            <Pdf2 />
            <hr />

            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosES6 />
            <hr />
            <EventosES7 />
            <hr />
            <MasEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
            <hr />
            <AjaxApis />
            <hr />
            <ContadorHooks />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
            <hr />
            <HooksPersonalizados />
            <hr />
            <Referencias />
            <hr />
            <Formularios />
            <hr />
            <Estilos />
            <hr />
            <ComponentesEstilizado />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </section>
        </header>
      </div>
      <div>Otro div</div>
    </>
  );
}

export default App;
