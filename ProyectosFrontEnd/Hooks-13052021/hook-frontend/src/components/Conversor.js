import React from "react";
import useConversor from "../hooks/useConversor";

const Conversor = () => {
  //const { state, dolarAPeso, pesoADolar } = useConversor();
  return (
    <div className="d-flex flex-column m-2">
      <h1>Conversor de divisas</h1>
      <label> Moneda de entrada</label>
      <select className="form-select form-select-sm">
        <option>USD</option>
        <option>COP</option>
        <option>ARG</option>
      </select>
      <input
        type="number"
        className=""
        placeholder="Divisa a convertir"
      ></input>

      <label> Moneda de salida</label>
      <select className="form-select form-select-sm">
        <option>COP</option>
        <option>USD</option>
        <option>ARG</option>
      </select>
      <input className="form-control disabled"></input>
    </div>
  );
};

export default Conversor;
