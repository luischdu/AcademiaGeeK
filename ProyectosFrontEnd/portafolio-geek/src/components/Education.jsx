import React from 'react'
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

// Componentes como funciones Stateless ([Return implicito])
const Education = () => (
    <div>
        <H2Styled name='Estudios' />
        <div className="Education-contariner">
            <div className="Education-item">
                <H3Styled name='U. Sabana -2019' />
                <PStyled name='Ingeniero Químico' />
            </div>
            <div className="Education-item">
                <H3Styled name='Academia Geek' />
                <PStyled name='Front End Dev' />
            </div>
        </div>
    </div>
);


export default Education
