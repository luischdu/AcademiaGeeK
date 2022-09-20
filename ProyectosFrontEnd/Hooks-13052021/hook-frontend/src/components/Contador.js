import React, { useState } from 'react'

const Contador = () => {

    const [count, setCount] = useState({
        numero1: 10,
        numero2: 20,
        numero3: 30,
        numero4: 40,
        numero5: 50,
    })
    const { numero1, numero2 } = count;
    return (
        <div>
            <h1>Contador : {numero1}</h1>
            <h1>Contador : {numero2}</h1>
            <button className='btn btn-primary' onClick={() => setCount({ ...count, numero1: numero1 + 1, numero2: numero2 + 2 })}>
                Aumentar
            </button>

        </div>
    )
}

export default Contador
