import { useState } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';


export const useFav = () => {
    
    const initialState = ""
    const [favorites, setFavorites] = useState(initialState);
    const uid = useSelector(state => state.auth.uid)
    
    const reset = () => {
        setFavorites( initialState );
    }

    const handleInputSave = async(data) => {
        if (data){
            await db.collection(`favoritos/users/${uid}`)
            .add(data)
            .then(res => {
                return (Swal.fire({
                    position: "center",
                    icon: "success",
                    title: '¡Se guardado con exito!',
                    showConfirmButton: false,
                    timer: 1500,
                  }))
            })
            .catch(res => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: '¡Lo sentimos hay problemas de conexion!',
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }) 
        }
    
    }

    return [ favorites, setFavorites, handleInputSave ];
}