import React, { useState, Fragment } from 'react'

const TextExample = () => {
    const [textState, setTextState] = useState(false)
    return (
        <Fragment>
            <button onClick={() => setTextState(true)} className='btn btn-danger'>
                Enviar
            </button>
            { textState && <h1>El estado cambio</h1>}
        </Fragment>
    )
}

export default TextExample
