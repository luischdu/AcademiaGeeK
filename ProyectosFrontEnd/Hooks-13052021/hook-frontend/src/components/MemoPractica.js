import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const MemoPractica = () => {
  const { state, incremento } = useCounter(1);
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1><Small value={state}/></h1>
      <button className="btn btn-outline-info" onClick={incremento}>
        Incrementar +1
      </button>
      <button className='btn btn-danger' onClick={()=>setShow(!show)}>
          Show/Hide
      </button>
    </div>
  );
};

export default MemoPractica;
