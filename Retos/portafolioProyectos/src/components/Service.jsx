import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { Col } from 'react-bootstrap'
import { Row2 } from '../styles/RowContainer'
import { BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4, Headline5 } from '../styles/Headline'


import '../styles/BodyRegular1.css';

const H1Style = styled.h1`
    display:block;
    margin-bottom : 28px;
    color:#0F0E17;
`

const Service = () => {
    return (
        <>
            <H1Style><Headline2 name="Servicios" /></H1Style>
            <H1Style><Headline4 name="Servicios" /></H1Style>
            <Row2>
                <Col xs={12} md={4}>
                    <H1Style><Headline4 name="Diseño" /></H1Style>
                    <H1Style><BodyRegular2 name="Experiencia de usuario" /></H1Style>
                    <H1Style><BodyRegular2 name="Interfaz de usuario" /></H1Style>
                    <H1Style><BodyRegular2 name="Aplicaciones web" /></H1Style>
                    <H1Style style={{ marginBottom: "56px" }}><BodyRegular2 name="Prueba de concepto" /></H1Style>
                </Col>
                <Col xs={12} md={4}>
                    <H1Style><Headline4 name="Desarrollo" /></H1Style>
                    <H1Style><BodyRegular2 name="Aplicaciones móviles" /></H1Style>
                    <H1Style><BodyRegular2 name="Sitios web" /></H1Style>
                    <H1Style style={{ marginBottom: "56px" }}><BodyRegular2 name="Aplicaciones web progresivas" /></H1Style>
                </Col>
                <Col xs={12} md={4}>
                    <H1Style><Headline4 name="Marca" /></H1Style>
                    <H1Style><BodyRegular2 name="Identidad de la marca" /></H1Style>
                    <H1Style style={{ marginBottom: "56px" }}><BodyRegular2 name="Estrategia de marca" /></H1Style>
                </Col>
            </Row2>
        </>
    )
}


export default Service
