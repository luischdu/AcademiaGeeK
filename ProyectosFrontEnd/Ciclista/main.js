'use strict'
import {Alumno, sumar, PI, nombre} from './js/functions.js'
import Ciclista from './js/Ciclista.js'

const CICLISTAS = []

/*
let ciclista = new CiclistaCarlos();
ciclista.nombre = "Juan Carlos"
ciclista.registrarTiempo("carrera2", 80)
console.log("La suma es ", sumar(2, 5))
console.log(ciclista.correr())

console.log(PI * 2)
    
console.log(nombre) */
    
    
function llenarArregloCiclistas(){
    let juan = new Ciclista()
    juan.nombre = "Juan Perez"
    registrarTiempos(juan)

    let pedro = new Ciclista()
    pedro.nombre = "Pedro del Río"
    registrarTiempos(pedro)
    
    let camila = new Ciclista()
    camila.nombre = "Camila Cardenas"
    registrarTiempos(camila)
    
    CICLISTAS.push(pedro, juan)
    CICLISTAS.unshift(camila)

}

function registrarTiempos(c){
    for (let i = 1; i <= 5; i++) {
        c.registrarTiempo('carrera'+i, Math.floor(Math.random() * 100))
    }
}
  
window.addEventListener('load', e => {
    llenarArregloCiclistas()
    document.querySelector("#tbl-ciclistas tbody").innerHTML = ""
    CICLISTAS.forEach((ciclista, i) => {
        document.querySelector("#tbl-ciclistas tbody").innerHTML += `<tr>
                                                                        <td>${i+1}</td>
                                                                        <td>${ciclista.nombre}</td>
                                                                        <td>${ciclista.registroTiempos.carrera1}</td>
                                                                        <td>${ciclista.registroTiempos.carrera2}</td>
                                                                        <td>${ciclista.registroTiempos.carrera3}</td>
                                                                        <td>${ciclista.registroTiempos.carrera4}</td>
                                                                        <td>${ciclista.registroTiempos.carrera5}</td>
                                                                        <td><a href class = "btn btn-link">Acciones</a></td>
                                                                    </tr>`
    })
    console.log(CICLISTAS)
})

/*
document.querySelector("#btn_adicionar_ciclista").addEventListener('click', e => {
    console.log(e)
    e.preventDefault()
})*/

document.querySelector("#frm-adicionar-ciclista").addEventListener('submit', e => {
    console.log(e);
    e.preventDefault()
})

/*var y ;
llenarArregloCiclistas()
console.log(x)

function llenarArregloCiclistas(){
    console.log("Llenando arreglo!!!!!")
}

const x = 4 */
