import { db } from "../firebase/config";
import { types } from "../types/types";


export const  setSingle = (product) => {
    return {
        type: types.setProductView,
        payload: product,
    };
};

export const setSingleProduct = (producto, sabor) => {    
    
    return (dispatch) => {
        db.collection(`app/productos/${producto}`)
        .onSnapshot( snap => {
          const productos = [];
           snap.forEach(snapHijo => {
             snapHijo.id === sabor && productos.push({
              ...snapHijo.data()
            })
            
            console.log(snapHijo.id);
  
          })
          dispatch(setSingle(productos[0]))
        });   
    }
  }