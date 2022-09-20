import { types } from "../types/types";
import { db } from "../firebase/config";
import { setSingle } from "./setSingleProduct";

export const loadProducts = (product) => {
  return {
    type: types.dbProductos,
    payload: {
      product,
    },
  };
};

export const load = (datos) => {
  return (dispatch) => {
    db.collection(`app/productos/${datos}`)
      .get()
      .then((snap) => {
        const productosArr = [];

        snap.forEach((hijo) => {
          productosArr.push({
            ...hijo.data(),
          });
        });
        console.log(productosArr);
        dispatch(loadProducts(productosArr));
      });
  };
};

export const loadProductsCart = (product) => {
  return {
    type: types.dbCart,
    payload: product,
  };
};

export const setModal = (product) => {
  return {
    type: types.dbCartModal,
    payload: product,
  };
};
export const loadCompraProducto = (producto, sabor) => {
  return (dispatch) => {
    db.collection(`app/productos/${producto}`).onSnapshot((snap) => {
      const productos = [];
      snap.forEach((snapHijo) => {
        snapHijo.id === sabor &&
          productos.push({
            ...snapHijo.data(),
          });

        console.log(snapHijo.id);
      });
      dispatch(setSingle(productos[0]));
    });
  };
};
