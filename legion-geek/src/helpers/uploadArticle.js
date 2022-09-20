import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config"


export const uploadArticle = (article) => {
    db.collection('articles')
        .add(article)
        .then(  
            Swal.fire({
                title: 'Exito!',
                text: '¡El Articulo se Ha Subido Con Exito!',
                icon: 'success',
                confirmButtonText: 'Cool'
              })  
        )
        .catch( e => {
            Swal.fire({
                title: 'Error!',
                text: e,
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            
            
        })
}

