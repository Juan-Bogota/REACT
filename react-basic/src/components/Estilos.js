import React from "react";
import "./Estilos.css";
import moduleStyle from "./Estilos.module.css";
import "./Estilos.scss";

const Estilos = () => {
  let myStyles = {
    borderRadius: "0.5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      <h3
        className="bg-react"
        style={{ borderRadius: "0.25rem", margin: "1rem" }}
      >
        Estilos en linea(atributo style)
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Estilos en linea(variable)
      </h3>
      <br />
      <h3 className="bg-react">Normalize</h3>
      <code> @import-normalize;</code>

      <h3 className={moduleStyle.error}>Estilos con Modulos</h3>
      <h3 className={moduleStyle.success}>Estilos con Modulos</h3>

      <br />
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
};

export default Estilos;
