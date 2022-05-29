import React from "react";
import "../hoja-de-estilos/boton-clear.css";

const BotonClear = (props) => (
  <div className="boton-clear" onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
