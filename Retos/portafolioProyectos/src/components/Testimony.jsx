import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import { Col, Image} from 'react-bootstrap'
import {Row2} from '../styles/RowContainer'

const PStyle = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
    font-family: Lora;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2.5rem;
`

const ProfileStyle = styled(Image)`
    width: 3rem;
    height: 3rem;
    border-radius:100%;
`

class Testimony extends Component {

    constructor({ personas }) {
        super()
        this.state = {
            names: personas[0],
            testimonios: personas[1],
            imagen: personas[2]
        }
    }

    render() {
        return (
            <>
                <Col xs = {12} md={4}>
                    <Row2 >
                        <Col md={2} xs={2} style={{ marginBottom: "16px" }} >
                            <ProfileStyle src={this.state.imagen} alt="Img usuario" />
                        </Col>
                        <Col>
                            <h1 style={{ color: "#ffffff"}}><PStyle name={this.state.names} /></h1>
                        </Col>
                    </Row2>
                    <p className = "intento">{this.state.testimonios} </p>
                    
                </Col>
            </>
        )
    }
}

export default Testimony
