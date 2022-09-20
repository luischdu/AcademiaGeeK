import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { Nav, Button, Navbar } from 'react-bootstrap'
import { BodyRegular2 } from '../styles/Body'

const ButtonStyle = styled.nav`
    margin-left: 40%;
    margin-right: 72px;
    @media (max-width: 768px) {
        margin-left: 0;
        margin-right: 0;
        display:none;
    } 
`
const NavbarStyle = styled(Navbar)`
    height: 96px;
    width:100%;
    background-color: #0F0E17;
    padding: 31px 72px 24px 72px;
    position: fixed;
    z-index: 100;
    @media (max-width: 768px) {
        padding:10px;
    }
`


const StyleButton = styled(Button)`
    width: 206px;
    height: 48px;
    border: solid 1.5px #33ccff;
    color: #33ccff;
    &:hover ${StyleButton} {
    background-color: #33ccff;
    border: solid 1.5px #33ccff;
    }
`
const StyledNavLink = styled(Nav.Link)`
    &:hover {
    color: #33ccff;
  }
`


const StyledNavCollapse = styled(Navbar.Collapse)`
    @media (max-width: 768px) {
        background-color: #0F0E17 !important;
        padding: 15px;
        margin-left: -10px;
        margin-right: -10px;
    }
`

const StyledNavBarHeart = styled(Navbar.Brand)`
    @media (max-width: 768px) {
        margin-left: 20%;
    }
`
const StyleButtonCollapse = styled(Button)`
    width: 206px;
    height: 48px;
    display:none;
    border: solid 1.5px #33ccff;
        color: #33ccff;
    &:hover ${StyleButtonCollapse} {
    background-color: #33ccff;
    }
    @media (max-width: 768px) {
        display: block;
        border: solid 1.5px #33ccff;
        color: #33ccff;
    }
`

class NavH extends Component {

    fbShare() {
        window.open('HV_LuisMiguelChávezDuque.pdf');
    }

    render() {
        return (
            <NavbarStyle collapseOnSelect expand="lg" variant="dark" id="navbar">
                <StyledNavBarHeart className="animate__animated animate__heartBeat animate__slower" href="#welcome-section">

                </StyledNavBarHeart>
                <Navbar.Brand>
                    <a href="HV_LuisMiguelChávezDuque.pdf" download="" style={{ textDecoration: "none" }}>
                        <StyleButtonCollapse variant="outline-danger">Descargar Curriculum</StyleButtonCollapse>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ position: "absolute" }} />
                <StyledNavCollapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <StyledNavLink href="#welcome"><BodyRegular2 name="Hola" /></StyledNavLink>
                        <StyledNavLink href="#Projects"><BodyRegular2 name="Proyectos" /></StyledNavLink>
                        <StyledNavLink href="#Service"><BodyRegular2 name="Servicios" /></StyledNavLink>
                        <StyledNavLink href="#Testimonials"><BodyRegular2 name="Testimonios" /></StyledNavLink>
                        <StyledNavLink href="#Contact"><BodyRegular2 name="Contacto" /></StyledNavLink>
                    </Nav>
                    <ButtonStyle>
                        <a href="HV_LuisMiguelChávezDuque.pdf" download="" style={{ textDecoration: "none" }}>
                            <StyleButton variant="outline-danger">Descargar Curriculum</StyleButton>
                        </a>
                    </ButtonStyle>
                </StyledNavCollapse>
            </NavbarStyle>
        )
    }
}


export default NavH