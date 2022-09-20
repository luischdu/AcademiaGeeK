import React from 'react';
import { useBuscar } from '../hook/useBuscar';
import { SpanBuscador, SectionBuscador, InputBuscador, FormBuscador, ButtonBuscador, GlobalStyle, IBuscador, ContenedorModalBuscador, CierreBotonModalBuscador, ContenedorBotonesBuscador, DivBuscador } from '../Styles/Style';
import CardMainPage from './CardMainPage.jsx'

//esta es la ventana que se ve al hacer las busquedas
export const Modal = ({ verModal, setVerModal }) => {

    //aqui cargo los valores a lllevar a useBuscar.js quien me hace la busqueda
    const { buscar, escribir, comidas } = useBuscar("");

    //convierto la lista de comidas en objetos para integrarlo con el CardMainPage.jsx
    const prueba={data:comidas}

    return (
        <>
            {verModal ? (
                <ContenedorModalBuscador verModal={verModal}>
                    <GlobalStyle />
                    <ContenedorBotonesBuscador>
                        <FormBuscador modal>
                            <ButtonBuscador><IBuscador className="fas fa-search"></IBuscador></ButtonBuscador>
                            <InputBuscador value={buscar} placeholder="Sabor de guajolota, bebida..." onChange={escribir} type="text" inputColor="rebeccapurple" />
                        </FormBuscador>
                        <DivBuscador modal>
                            <CierreBotonModalBuscador onClick={() => setVerModal(prev => !prev)} value="cancelar"><SpanBuscador>Cancelar</SpanBuscador></CierreBotonModalBuscador>
                        </DivBuscador>
                    </ContenedorBotonesBuscador>
                    {/* me carga los objetos que coincidieron en la busqueda del useBuscar.js y lo redirije a la seccion del CardMain.jsx*/}
                    <SectionBuscador>
                        {CardMainPage(prueba)}
                    </SectionBuscador>
                </ContenedorModalBuscador>
            ) : null}
        </>
    );
};