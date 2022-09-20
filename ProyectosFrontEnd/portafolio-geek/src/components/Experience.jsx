import React from 'react'
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = () => {
    return (
        <div className='Experience'>
            <H2Styled name='Experiencia' />
            <div className="Experience-container">
                <H3Styled name='Infarvet SAS' />
                <PStyled name='Ingeniero de calidad' />
            </div>
        </div>
    )
}

export default Experience

