import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import {BorrarActionCita} from '../actions/ActionCita'

const ListarCitas = () => {

    const agenda = useSelector((state) => state.citas)
    const dispatch = useDispatch()
    console.log(agenda)


    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">Agenda</h2>

                <div className="lista-citas">

                    <table className="table">
                        <thead>

                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Fractura</th>
                                <th scope="col">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agenda.citas.map(cita => (
                                <tr key={cita.id}>
                                    <td>{cita.nombre}</td>
                                    <td>{cita.fecha}</td>
                                    <td>{cita.hora}</td>
                                    <td>{cita.sintomas}</td>
                                    <td><button className="btn btn-danger"
                                    onClick={()=> dispatch(BorrarActionCita(cita.id))}>
                                        Borrar &times;
                                        </button>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default ListarCitas