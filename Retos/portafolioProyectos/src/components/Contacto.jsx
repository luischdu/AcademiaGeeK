import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'
import { BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4 } from '../styles/Headline'
import { Button2 } from '../styles/Button'

const StyledDiv = styled.div`
    background-color:#0F0E17;
    width: 546px;
    height: 733px;
    padding: 48px;

    @media (max-width: 768px) {
        width: 320px;
        padding: 20px;
    }
`

const StyledFormControl = styled(Form.Control)`
    width: 450px;
    height: 64px;
    margin-bottom: 16px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;  

    @media (max-width: 768px) {
        width: 100%;
    }
`
const StyledButtonForm = styled(Button)`
    width: 450px;
    height: 64px;
    border:none;
    background-color: #33ccff;
    &:hover ${StyledButtonForm} {
    background-color: rgba(51, 204, 255, 0.788);
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`

const StyledTitulo1 = styled.h1`
    display:block;
    color: white;
    text-align:left;
    @media (max-width: 768px) {
        display:none;
    }
`
const StyledTitulo2 = styled.h1`
    display:none;
    @media (max-width: 768px) {
        display:block;
        color: white;
        text-align:left;
    }
`
class Contacto extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const email = target.email;
        const message = target.message;

        this.setState({
            [name]: event.target.value,
            [email]: event.target.value,
            [message]: event.target.value
        });
    }

    handleSubmit(event) {
        const enviarMail = document.querySelector("#correo")
        event.preventDefault()
        enviarMail.setAttribute('href', `mailto:luischdu@gmail.com?subject=Me gustaria trabajar contigo!&body=${this.state.message}`)
        enviarMail.click()
    }

    render() {
        return (
            <StyledDiv>
                <StyledTitulo1><Headline2 name="Contacto" /></StyledTitulo1>
                <StyledTitulo2><Headline4 name="Contacto" /></StyledTitulo2>
                <h2 style={{ marginBottom: "48px", textAlign: "left", color: "#A7A9BE" }}><BodyRegular2 name="Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto." /></h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <StyledFormControl type="text" placeholder="Nombre completo" name="name" value={this.state.name} onChange={this.handleInputChange} required />
                        <StyledFormControl type="email" placeholder="Correo electronico" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                        <StyledFormControl style={{ height: "181px", padding: "0.375rem 0.75rem" }} as="textarea" rows={7} placeholder="Mensaje" name="message" value={this.state.message} onChange={this.handleInputChange} required />
                    </Form.Group>
                    <StyledButtonForm variant="danger" type="submit">
                        <Button2 name="Enviar mensaje" />
                    </StyledButtonForm>
                </Form>
                <a href="mailto:me@luischdu@gmail.com" id="correo" style={{ display: "none" }}>link
                </a>
            </StyledDiv>
        )
    }
}

export default Contacto
