import { useState, useMemo } from 'react';
import { useBd } from './useBd';
import { useListadoDeComidas } from './useListadoDeComidas'

//busca los datos de la base de datos y los compara con el objeto a buscar
export const useBuscar = (inicial) => {

    //baja la informacion de la Api haciendo las peticciones desde el useBd
    const { data } = useBd(`https://api-fake-sprint-guappjalotas.herokuapp.com/db`);

    //el estado de busqueda, quien inicializa todo
    const [buscar, setBuscar] = useState(inicial);

    //manda los cambios cada que se escribe algo
    const escribir = (b) => setBuscar(b.target.value);

    //guarda la lista de objetos que se esta buscando
    const comidas = useMemo(() => {
        if (!buscar) {
            return [{ "name": "Escriba la comida a buscar" }];
        } else {
            return (useListadoDeComidas(data).filter((comida) => {
                return (
                    comida.name.toLowerCase().includes(buscar.toLowerCase()) || comida.type.toLowerCase().includes(buscar.toLowerCase())
                );
            }));

        };
    }, [buscar]);

    return { buscar, escribir, comidas };
};