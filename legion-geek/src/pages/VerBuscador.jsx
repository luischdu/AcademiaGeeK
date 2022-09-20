import React from "react";

const VerBuscador = () => {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default VerBuscador;
