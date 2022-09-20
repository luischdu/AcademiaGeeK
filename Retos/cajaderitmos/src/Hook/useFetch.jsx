import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  const refMount = useRef(true);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    //Etapa inicial y actualización
    return () => {
      //Etapa final del componente
      refMount.current = false;
    };
  }, []);

  useEffect(() => {
    fetch(url)
      .then((answer) => answer.json())
      .then((data) => {
        if (refMount.current) {
          setstate({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("No se puede cargar");
        }
      });
  }, [url]);

  return state;
};
