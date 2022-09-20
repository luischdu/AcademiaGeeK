import React from 'react'
import { Button, Container, Image, Row } from 'react-bootstrap'
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
//Components
import DescriptionProyects from '../components/ProjectDes'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Proyect1 from '../components/Proyect'
import Service from '../components/Service'
import Testimony from '../components/Testimony'
import Footer from '../components/Footer';
import Contacto from '../components/Contacto';
//Containers
import Hello from './Hello'
import Proyects from './Proyects'
import Services from './Services'
import Testimonials from './Testimonials'
import Contact from './Contact';
//Styles
import { Headline2, Headline4 } from '../styles/Headline'
import { Container2, Row2 } from '../styles/RowContainer'
//Imagenes
import Banner from '../images/Escritorio.png'
import JAntonio from '../images/JAntonio.png'
import AFlores from '../images/AFlores.png'
import DRobertson from '../images/DRobertson.png'
import JCooper from '../images/JCooper.png'
import EPena from '../images/EPena.png'
import GHawkins from '../images/GHawkins.png'
import Img from '../images/appAdopcion.png'
import Img2 from '../images/principeFresco.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const StyledImageBanner = styled(Image)`
    width: 100%;
    height: auto;
`

const StyleDivMasProyectos = styled.div`
    text-align : center;
    margin-top: 13%;
    &:hover {
        color: white; 
    }
`
const StyledButton = styled(Button)`
    width: 297px;
    height: 64px;
    border: solid 1.5px #33ccff;
    color: #33ccff;
    &:hover ${StyledButton} {
    background-color: #33ccff;
    border: solid 1.5px #33ccff;
    }

    @media (max-width: 768px) {
        width:100%;
        height: 64px;
    }
`
const StyledIcon = styled(FontAwesomeIcon)`
    width: 24px;
    height: 24px; 
    color: #33ccff; 
    margin-left: 0px;
    margin-bottom: -5px;

    &:hover{
        color: #ffffff; 
    }
`

const H1Style = styled.h1`
    display:block;
    color: white;
    margin-bottom:48px;
    @media (max-width: 768px) {
        display:none;
    }
`


const App = () => {
    return (
        <>
            <Navbar />
            <Hello>
                <Header />
            </Hello>
            <Proyects>
                <DescriptionProyects />
                <Row2 style={{ textAlign: "center" }}>
                    <Proyect1 proyectos={["Adopción de mascotas", "Projecto de diseño de una App para adoptar mascotas.", Img, "https://github.com/luischdu/appAdopcion", "https://luischdu.github.io/appAdopcion/"]} />
                    <Proyect1 proyectos={["Príncipe fresco", "Diseño de un Ecomerce para venta de ropa.", Img2, "https://github.com/luischdu/EcomerceWorkshop", "https://luischdu.github.io/EcomerceWorkshop/"]} />
                </Row2>
                <StyleDivMasProyectos>
                    <a href="https://github.com/luischdu" target="_blank"><StyledButton variant="outline-danger">Ver más proyectos <StyledIcon icon={faArrowRight} /></StyledButton></a>
                </StyleDivMasProyectos>
            </Proyects>
            <Services>
                <Service />
            </Services>
            <Testimonials>
                <H1Style><Headline2 name="Testimonios" /></H1Style>
                <Container2 fluid>
                    <Row2>
                        <Testimony personas={["Juan Antonio", "Tengo algunos años trabajando con Javascript y aún así aprendí varias cosas importantes de Luis y como utiliza Javascript en el día a día.", JAntonio]} />
                        <Testimony personas={["Albert Flores", "Me gusto ver el porqué de las cosas del core de React, saber la magia que ocurre por detrás, excelente compañera Luis gran vocación.", AFlores  ]} />
                        <Testimony personas={["Darlene Robertson", "Ayuda a entender el porqué de las cosas, lo cual nos da el poder de aprovechar mejor el lenguaje y las herramientas que tenemos.", DRobertson  ]} />
                    </Row2>
                    <Row2>
                        <Testimony personas={["Jane Cooper", "La forma como realiza y trabaja los temas Luis, me ha ayudado a comprender y sacarle el mayor provecho a HTML y CSS.", JCooper ]} />
                        <Testimony personas={["Eleanor Pena", "Luis ha sido de gran ayuda para acelerar ciertos esfuerzos de desarrollo. Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses.", EPena ]} />
                        <Testimony personas={["Guy Hawkins", "Luis ha superado mis expectativas desde el diseño hasta el desarrollo.", GHawkins ]} />
                    </Row2>
                </Container2>
            </Testimonials>
            <StyledImageBanner src={Banner} alt="Imagen de banner representativa" fluid />
            <Contact>
                <Contacto />
            </Contact>
            <Footer />
        </>
    )
}

export default App
