import React, { Fragment } from "react";
import ProductoLista from "./ProductoLista";

const Productos = ({ productos, guardarRecargarProductos }) => {
  return (
    <Fragment>
      <h1 className="text-center">Precios</h1>
      <hr />
      <ul className="list-group mt-5">
        {productos.map((producto) => (
          <ProductoLista 
          key={producto.id}
          producto={producto}
          guardarRecargarProductos={guardarRecargarProductos}
      />
        ))}
      </ul>
    </Fragment>
  );
};

export default Productos;
