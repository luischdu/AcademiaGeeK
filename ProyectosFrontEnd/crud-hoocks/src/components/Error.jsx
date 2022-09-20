import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
