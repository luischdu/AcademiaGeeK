import React, { useEffect, useState } from "react";

const Hijo = (props) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("componentDiMount");
    console.log("componentDiUpdate");
    return () => {
      console.log("componentWillUpmount");
    };
  });

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
};

const UseEffect = (props) => {
  const [verHijo, setVerHijo] = useState(true);
  return (
    <div>
      <h1>Use effect</h1>
      {verHijo ? <Hijo /> : null}
      <br />
      <button
        onClick={() => {
          setVerHijo(!verHijo);
        }}
      >
        {verHijo ? "Ocultar" : "Ver"}
      </button>
    </div>
  );
};

export default UseEffect;
