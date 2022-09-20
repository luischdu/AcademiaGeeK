import React from 'react'
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
//Importar los elementos según los vamos utilizando
import Main from '../components/Main';

const App = () => {
    return (
        <Main>
            <About />
            <Education />
            <Experience/>
        </Main>
    )
}

export default App
