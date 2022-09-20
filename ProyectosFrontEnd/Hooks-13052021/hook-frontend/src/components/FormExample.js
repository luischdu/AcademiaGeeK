import React, { useState, useEffect } from 'react'

const FormExample = () => {

    const [state, setState] = useState({
        name: '',
        lastName: ''
    })
    const { name, lastName } = state

    useEffect(() => {
        console.log('Hook: Use effect');
    }, [state])

    const handleInputChange = ({ target }) => {
        setState({
            ...state,
            [target.name]: target.value
        })
    }

    return (
        <div className='form-group container'>
            <h1>UseEffect</h1>
            <input className='form-control mb-3'
                value={name}
                name='name'
                placeholder='Name'
                onChange={handleInputChange}></input>
            <input className='form-control mb-3'
                value={lastName}
                name='lastName'
                placeholder='Last Name'
                onChange={handleInputChange}></input>
        </div>
    )
}

export default FormExample
