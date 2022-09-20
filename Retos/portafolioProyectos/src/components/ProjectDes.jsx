import React from 'react'
import { Col } from 'react-bootstrap'
import { BodyRegular2 } from '../styles/Body'
import { Headline2, Headline4 } from '../styles/Headline'
import {Row2} from '../styles/RowContainer'
import styled from 'styled-components'

import '../styles/BodyRegular1.css';

const H1Style = styled.h1`
    display:block;
`


const ProjectDes = () => {
    return (
        <Row2 style={{ color: "#0F0E17" }}>
            <Col xs={12} md={7}>
                <H1Style><Headline2 name="Parece magia, funciona con código." /></H1Style>
            </Col>
            <Col>
                <H1Style><BodyRegular2 name="A lo largo de mi aprendizaje de Frontend, he tenido el privilegio de realizar proyectos retadores e increíbles." /></H1Style>
            </Col>
        </Row2>
    )
}

export default ProjectDes
