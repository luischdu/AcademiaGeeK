import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { Button, Col, Image} from 'react-bootstrap';
import { Headline5 } from '../styles/Headline';
import {  BodyRegular2 } from '../styles/Body';
import {Row2} from '../styles/RowContainer'
import '../styles/BodyRegular1.css';




const StyledDivImage = styled.div`
   height: 520px;
   margin-bottom:112px;
   @media (max-width: 768px) {
        width: 340px;
        margin-bottom:56px;
    }
`
const StyledDivI = styled.div`
    background-color:#0F0E17;
    width:511px;
    height:316px;
    position: relative;
    bottom: 265px;
    padding: 64px 24px 24px 24px;
    text-align:left;
    right: 10px;
    box-shadow: 12px 16px 32px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
        padding: 40px 24px 24px 24px;
        width: 320px;
        height: 365px;
        bottom: 120px;
        margin-left: 20px;
        margin-right: 20px;
    }
`

const StyledImg = styled(Image)`
    width: 575px;
    margin-top: 96px;
    @media (max-width: 768px) {
        width: 320px;
        margin-top: 40px;
        margin-left:25px;
    }
`

const StyledTitulo1 = styled.h1`
    display:block;
    margin-bottom: 48px; 
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        margin-bottom: 30px; 
    }
`
const StyledButton1 = styled(Button)`
    width:215px;
    background-color: #33ccff;
    border: none;
    &:hover ${StyledButton1} {
    background-color: #33ccff;
    }
    @media (max-width: 768px) {
        width:100%;
        height: 48px;
    }
`
const StyledButton2 = styled(Button)`
    width:215px;
    border: solid 1.5px #33ccff;
    color: #33ccff;
    &:hover ${StyledButton2} {
    background-color: #33ccff;
    border: solid 1.5px #33ccff;
    }
    @media (max-width: 768px) {
        width:100%;
        height: 48px;
    }
`

class Proyect extends Component {

    constructor({ proyectos }) {
        super()
        this.state = {
            titulo: proyectos[0],
            description: proyectos[1],
            imagen: proyectos[2],
            linkRepositorio: proyectos[3],
            linkPagina: proyectos[4]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <>
                <Col className="project-tile">
                    <StyledDivImage>
                        <StyledImg src={this.state.imagen} alt="Imagen de proyecto" />
                        <StyledDivI>
                            <div style={{ color: "white" }}>
                                <Headline5 name={this.state.titulo} />
                            </div>
                            <div style={{ color: "#A7A9BE" }}>
                                <StyledTitulo1><p className="intento">{this.state.description}</p></StyledTitulo1>
                                <StyledTitulo2><BodyRegular2 name={this.state.description} /></StyledTitulo2>
                            </div>
                            <Row2 xs={1} md={2}>
                                <Col xs={12} md={12} md={{ order: 1 }} xs={{ order: 2 }} >
                                    <a href={this.state.linkPagina} target="_blank"><StyledButton1 variant="danger" className="me-5">Ver proyecto completo</StyledButton1>
                                    </a>
                                </Col>
                                <Col xs={12} md={{ order: 2 }} xs={{ order: 1 }} style={{ marginBottom: "16px" }}>
                                    <a href={this.state.linkRepositorio} target="_blank"><StyledButton2 variant="outline-danger">Ver codigo</StyledButton2></a>
                                </Col>
                            </Row2>
                        </StyledDivI>
                    </StyledDivImage>
                </Col>
            </>
        )
    }
}

export default Proyect
