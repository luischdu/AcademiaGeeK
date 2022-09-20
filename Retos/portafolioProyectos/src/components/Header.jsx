import React from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Image } from 'react-bootstrap';
import { Headline1 } from '../styles/Headline'
import { Row2, Container2 } from '../styles/RowContainer'
import Img from '../images/foto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../styles/BodyRegular1.css';

const MainStyle = styled(Container2)`
    color:white;
`
const MainText = styled(Col)`
    margin-top:50px;
`

const H1Style = styled.h1`
    display:block;
`

const ImgStyle = styled(Image)`
    height: 28.8rem;
    width: 25rem;
    margin-top:3.12rem;
`

const IconStyle = styled(FontAwesomeIcon)`
    width: 56px !important; 
    height: 56px; 
    color: #33ccff;
    margin-top: 32px;
`

const Header = () => {
    return (
        <>
            <MainStyle fluid>
                <Row2 xs={1} md={2} >
                    <MainText md={{ order: 1 }} xs={{ order: 2 }}>
                        <H1Style><Headline1 name="¡Hola a todos!" /></H1Style>
                        <H1Style><Headline1 name="Soy Luis Chávez" /></H1Style>
                        <p className="intento"> Developer que le encanta implementar diseños que
                                                inspiran y atraen a las personas.</p>
                        <a href="#projects" >
                            <IconStyle icon={faArrowDown} />
                        </a>
                    </MainText>
                    <Col xs={{ order: 1 }} md={{ order: 2 }} style={{ textAlign: "center" }}>
                        <ImgStyle src={Img} alt="Imagen de perfil" fluid />
                    </Col>
                </Row2>
            </MainStyle>
        </>
    )
}
export default Header