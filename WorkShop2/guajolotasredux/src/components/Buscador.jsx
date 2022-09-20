import React from 'react';
import { H1Buscador, InputBuscador, FormBuscador, ButtonBuscador, IBuscador, DivBuscador } from '../styles/Style';
import { useModal } from '../hooks/useModal';
import { Modal } from './Modal';

// Pagina Principal del buscador, solo muestra el input y el titulo de la app

function Buscador() {

    //llamo los valores a cargar del useModal.js que sale cuando hago click en el buscador
    const { verModal, setVerModal, openModal } = useModal(false);

    return (
        <DivBuscador>
            <DivBuscador>
                <H1Buscador modal>Nada como una Guajolota para empezar el día</H1Buscador>
            </DivBuscador>
            {/* En este formulario tanto el boton como el input estan de adornos y solo llaman a la ventana del modal */}
            <FormBuscador>
                <ButtonBuscador><IBuscador className="fas fa-search" onClick={openModal}></IBuscador></ButtonBuscador>
                <InputBuscador onClick={openModal} placeholder="Sabor de guajolota, bebida..." type="text" readOnly />
                {/* aqui esta el modal que carga la paina Modal.js */}
                <Modal verModal={verModal} setVerModal={setVerModal} />
            </FormBuscador>
        </DivBuscador>
    )
}

export default Buscador
