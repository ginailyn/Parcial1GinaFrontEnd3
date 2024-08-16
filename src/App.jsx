import { useState } from 'react'
import Card from "./Components/Card";
import './App.css'

function App() {

  const [inputNombre, setInputNombre] = useState("");
  const [inputColor, setInputColor] = useState("");
  const [error, setError] = useState("");
  const [datosValidos, setDatosValidos] = useState(false);

  const validarNombre = (nombre) => {

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    // La expresión regular permite letras, incluyendo acentos y caracteres especiales en nombres.
    // Permite un nombre o un nombre seguido de apellidos, sin espacios al inicio ni al final.
    return regex.test(nombre) && nombre.length >= 3;

    //const regex = /^[A-Za-z]{3,}$/; // Al menos 3 letras sin espacios
    //return regex.test(nombre);
  };

  const validarColor = (color) => {
    const regex = /^#[0-9A-Fa-f]{6}$/; // Código hexadecimal de 6 caracteres
    return regex.test(color);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarNombre(inputNombre) && validarColor(inputColor)) {
      setDatosValidos(true);
      setError("");
    } else {
      setError("Por favor chequea que la información sea correcta");
      setDatosValidos(false);
    }
  };

  return (
    <>
      {!datosValidos ? (
        <form onSubmit={handleSubmit}>
          <h2>Formulario de Registro</h2>
          <h4>Introduzca su nombre y un color (en formato hexadecimal)</h4>
          <div>
            <label>Nombre: </label>
            <input
              type="text"
              value={inputNombre}
              onChange={(e) => setInputNombre(e.target.value)}
              name="inputNombre"
            />
          </div>
          <div>
            <label>Color: </label>
            <input
              type="text"
              value={inputColor}
              onChange={(e) => setInputColor(e.target.value)}
              name="inputColor"
            />
          </div>
          <button type="submit">Enviar</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      ) : (
        <Card nombre={inputNombre} color={inputColor} />
      )}
    </>
  );
};

export default App;
