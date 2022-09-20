import { useState } from "react";

const useConversor = (factor) => {
  const dolar = 0.00027;
  const peso = 3650;
  const [state, setState] = useState(factor);
  const dolarAPeso = () => {
    setState(state * peso);
  };
  const pesoADolar = () => {
    setState(state * dolar);
  };
  return dolarAPeso, pesoADolar, state;
};

export default useConversor;
