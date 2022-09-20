import { useState, useMemo } from "react";
import { useBd } from "./useBd";
import { ListadoDeComidas } from "./useListadoDeComidas";
import { db } from "../firebase/config";
import { keepSearch } from "../actions/search";
import { useDispatch } from "react-redux";

//busca los datos de la base de datos y los compara con el objeto a buscar
export const useBuscar = (inicial) => {
  const dispatch = useDispatch();
  let plato = {};
  const load = (snap) => {
    const productosArr = [];

    snap.forEach((hijo) => {
      productosArr.push({
        ...hijo.data(),
      });
    });
    return dispatch(keepSearch(productosArr));
  };
  //el estado de busqueda, quien inicializa todo

  const [buscar, setBuscar] = useState("tamales");

let productos = db.collection(`app/productos/${buscar}`);

/* if (!buscar.trim()){
  productos
  .where("category", "==", `${buscar}`)
  .get()
  .then(load);
} */
  
productos
  .where("category", "==", `${buscar}`)
  .get()
  .then(load);
 

  //baja la informacion de la Api haciendo las peticciones desde el useBd
  const { data } = useBd(
    `https://api-fake-sprint-guappjalotas.herokuapp.com/db`
  );

  //manda los cambios cada que se escribe algo
  const escribir = (b) => setBuscar(b.target.value);

  //guarda la lista de objetos que se esta buscando
  const comidas = useMemo(() => {
    if (!buscar) {
      return [{ name: "Escriba la comida a buscar" }];
    } else {
      return ListadoDeComidas(data).filter((comida) => {
        return (
          comida.name.toLowerCase().includes(buscar.toLowerCase()) ||
          comida.type.toLowerCase().includes(buscar.toLowerCase())
        );
      });
    }
  }, [buscar]);

  return { buscar, escribir, comidas, plato };
};
