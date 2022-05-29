import "./App.css";
import logoHenry from "./imagenes/henry.png";
import Boton from "./componentes/boton";
import Pantalla from "./componentes/pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const agregarInput = (val) => {
    setInput(input + val);
  };
  const resultado = () => {
    if (input) setInput(evaluate(input));
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <div className="logo-henry-contenedor">
        <img className="henry-logo" src={logoHenry} alt="logo de henry" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={clear}>CE</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={resultado}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
