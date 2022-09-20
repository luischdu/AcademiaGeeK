import React, { useState, useMemo } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";
import procesoPesado from "../helpers/ProcesoPesado";

const HookMemo = () => {
  const { state, incremento } = useCounter(1);
  const [show, setShow] = useState(true);
  const memoProceso = useMemo(() => procesoPesado(state), [state]);

  return (
    <div>
      <h1>
        <Small value={state} />
      </h1>
      <button className="btn btn-outline-info" onClick={incremento}>
        Incrementar +1
      </button>
      <button className="btn btn-danger" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default HookMemo;
