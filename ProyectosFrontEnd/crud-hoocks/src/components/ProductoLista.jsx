import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const url = "";

const ProductoLista = ({ producto, guardarRecargarProductos }) => {
  const eliminarProducto = (id) => {
    console.log("eliminando", id);

    // TODO: Eliminar los registros
    Swal.fire({
      title: "¿Estas Seguro?",
      text: "Un Platillo eliminado no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          const url = `http://localhost:4000/restaurante/${id}`;
          const resultado = await axios.delete(url);
          if (resultado.status === 200) {
            Swal.fire("Eliminado!", "El Producto se ha eliminado", "success");
            // Consultar la api nuevamente
            guardarRecargarProductos(true);
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            type: "error",
            title: "Error",
            text: "Hubo un error, vuelve a intentarlo",
          });
        }
      }
    });
  };

  return (
    <li
      data-categoria={producto.categoria}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <p>
        {producto.nombre}{" "}
        <span className="font-weight-bold">${producto.precio}</span>
      </p>

      <div>
        <Link
          to={`/product/edit/${producto.id}`}
          className="btn btn-success mr-2"
        >
          Editar{" "}
        </Link>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => eliminarProducto(producto.id)}
        >
          Eliminar &times;
        </button>
      </div>
    </li>
  );
};

export default ProductoLista;
