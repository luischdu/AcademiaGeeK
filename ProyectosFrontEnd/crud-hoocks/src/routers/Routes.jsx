import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AgregarProducto from "../components/AgregarProducto";
import EditarProducto from "../components/EditarProducto";
import Productos from "../components/Productos";
import Navbar from "../components/Navbar.jsx";
import Producto from "../components/Producto";
import ProductoLista from "../components/ProductoLista";
import axios from "axios";

const Routes = () => {
  const [productos, guardarProductos] = useState([]);
  const [recargarProductos, guardarRecargarProductos] = useState(true);

  useEffect(() => {
    if (recargarProductos) {
      const consultarApi = async () => {
        // consultar la api de json-server
        const resultado = await axios.get("http://localhost:4000/restaurante/");
        console.log(resultado.data);
        guardarProductos(resultado.data);
      };
      consultarApi();

      // Cambiar a false la recarga de los productos
      guardarRecargarProductos(false);
    }
  }, [recargarProductos]);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Productos
                productos={productos}
                guardarRecargarProductos={guardarRecargarProductos}
              />
            )}
          />
          <Route exact path="/" component={Productos} />
          <Route exact path="/edit/:id" component={EditarProducto} />
          <Route
            exact
            path="/product/edit/:id"
            render={(props) => {
              // tomar el ID del producto
              const idProducto = parseInt(props.match.params.id);

              // el producto que se pasa al state
              const producto = productos.filter(
                (producto) => producto.id === idProducto
              );

              return (
                <EditarProducto
                  producto={producto}
                  guardarRecargarProductos={guardarRecargarProductos}
                />
              );
            }}
          />
          <Route exact path="/add" component={AgregarProducto} />
          <Route exact path="/product-list" component={ProductoLista} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
