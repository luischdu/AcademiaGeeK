import React, { useRef } from "react";

const RefFocus = () => {
  const refFocus = useRef();

  const handleClick = () => {
    refFocus.current.select();
  };

  return (
    <div>
      <h1>RefFocus</h1>
      <hr />
      <input
        className="container form-control"
        placeholder="Nombre"
        ref={refFocus}
      />
      <button className="btn btn-outline-primary" onClick={() => handleClick}>
        Focus
      </button>
    </div>
  );
};

export default RefFocus;
