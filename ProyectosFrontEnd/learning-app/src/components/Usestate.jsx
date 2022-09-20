import React, { useState } from 'react'
export const Usestate = () => {
    // const [entero, setEntero] = useState(0);
    // const [texto, setTexto] = useState("Gustavo!!!")
    const [boolean, setBoolean] = useState(true)
    //Listas 
    const [lista, setLista] = useState([
        {
            item: 0
        },
        {
            item: 1
        }
    ]);

    const [_json, setJson] = useState({
        enteros: 0,
        texto: 'Ebmw',
        boolean: false,
    })
    return (
        <div>
            <p>{_json.enteros}
            </p>
            <button onClick={() => {
                setJson({
                    ..._json,
                    enteros: _json.enteros + 1
                })
            }}>Click</button>
            <p>{_json.texto}
            </p>
            <input type="text" onChange={(e) => {
                setJson({
                    ..._json,
                    texto: e.target.value
                })
            }} />
            <p>{_json.boolean ? "true" : "false"}</p>
            <input type="checkbox" onChange={(e) => {
                setJson({
                    ..._json,
                    boolean: e.target.checked
                })
            }} />
            {/* Render lista */}
            <br/>
            <button onClick = {() => {
                let tlista = lista;
                tlista.push({
                item: lista.length
                });
                setLista(tlista);
                setBoolean(!boolean);
                console.log(boolean);
            }}>Agregar</button>
            <ul>
                {
                   lista.map((item, index) => (
                        <li key = {index}>{item.item}</li>
                    ))            
                }
            </ul>
        </div>
    )
}