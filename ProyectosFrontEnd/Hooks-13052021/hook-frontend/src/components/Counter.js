import React from 'react'
import { useCounter } from '../hooks/useCounter'

const Counter = () => {
    const { state, incremento, decremento, reset } = useCounter()
    return (
        <div>
            <h1>Ejercicio 3</h1>
            <h2>CustomHook</h2>
            <h3>Contador {state} </h3>
            <button className='btn btn-secondary' onClick={() => incremento()}>Aumenta +1</button>
            <button className='btn btn-danger' onClick={() => decremento()}>Disminuye -1</button>
            <button className='btn btn-primary' onClick={()=>reset()} >Resetear</button>
        </div>
    )
}

export default Counter
