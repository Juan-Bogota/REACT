import React, { useState } from "react";

const Formularios = () => {
  //const [nombre, setNombre] = useState("");
  // const [sabor, setSabor] = useState("");
  //const [language, setLanguage] = useState("");
  //const [terminos, setTerminos] = useState(false);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("El formulario se ha enviado");
  };
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          //onChange={(e) => setNombre(e.target.value)}
          onChange={handleChange}
        />
        <p>Elige tu Sabor JS Favorito:</p>
        <input
          type="radio"
          id="Vanilla"
          name="sabor"
          value="Vanilla"
          //onChange={(e) => setSabor(e.target.value)}}
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="Vanilla">Vanilla</label>
        <input
          type="radio"
          id="React"
          name="sabor"
          value="React"
          //onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="React">React</label>
        <input
          type="radio"
          id="Vuejs"
          name="sabor"
          value="Vuejs"
          //onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="Vuejs">Vuejs</label>
        <input
          type="radio"
          id="Angular"
          name="sabor"
          value="Angular"
          //onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="Angular">Angular</label>
        <input
          type="radio"
          id="Svelte"
          name="sabor"
          value="Svelte"
          //onChange={(e) => setSabor(e.target.value)}
          onChange={handleChange}
        />
        <label htmlFor="Svelte">Svelte</label>+
        <p>Elige tu lenguaje de programacion favorito</p>
        <select
          name="lenguaje"
          //onChange={(e) => setLanguage(e.target.value)}
          onChange={handleChange}
          defaultValue=""
        >
          <option value="">--------</option>
          <option value="Ruby">Ruby</option>
          <option value="JS">JavaScript</option>
          <option value="C">C</option>
          <option value="Python">Python</option>
          <option value="Scala">Scala</option>
          <option value="Assembler">Assembler</option>
        </select>
        <br />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          //onChange={(e) => setTerminos(e.target.checked)}
          onChange={handleChecked}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Formularios;
