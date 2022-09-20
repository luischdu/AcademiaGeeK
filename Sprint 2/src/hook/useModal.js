import {useState} from 'react';

//esto cambia el estado del modal y es quien activa la ventana de Modal.js
export function useModal(inicial) {

    const [verModal, setVerModal] = useState(inicial);

    const openModal = () => {
        setVerModal(prev => !prev);
    };

    return {verModal, setVerModal, openModal};
};







