import bodega from './inventario.js'
// import moduloCarro from './modcarro.js'
// moduloCarro()
document.querySelector('#min1').addEventListener('click',agrandarMiniatura)
document.querySelector('#min2').addEventListener('click',agrandarMiniatura)
document.querySelector('#min3').addEventListener('click',agrandarMiniatura)
document.querySelector('#precioPrenda').innerHTML = '$' + bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
document.querySelector('#precioInter').innerHTML = '$ '+bodega[1].tallaM
document.querySelector('#precio2').innerHTML = '$ '+bodega[2].tallaM
document.querySelector('#precio3').innerHTML = '$ '+bodega[3].tallaM
function agrandarMiniatura(){
    document.querySelector('#bigPhoto').src = this.getAttribute('src')
}
let seleccion = 0
document.querySelectorAll('#moreClothes')[0].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[1].addEventListener('click',cambiarCatalogo)
document.querySelectorAll('#moreClothes')[2].addEventListener('click',cambiarCatalogo)

function cambiarCatalogo(){

     seleccion = this.getAttribute('index')
     //responsive
     document.querySelector('#carrousel-1').src = bodega[seleccion].imagenNo1
     document.querySelector('#carrousel-2').src = bodega[seleccion].imagenNo2
     document.querySelector('#carrousel-3').src = bodega[seleccion].imagenNo3

    
    if (seleccion==1){
        if(document.querySelectorAll('#moreClothes')[0].src== bodega[1].imagenNo2 ){
            document.querySelectorAll('#moreClothes')[0].src = bodega[0].imagenNo1
            document.querySelector('#textoInter').innerHTML = bodega[0].nombre
            document.querySelector('#precioInter').innerHTML = '$ '+bodega[0].tallaM
            //responsive
            document.querySelector('#carrousel-1').src = bodega[1].imagenNo1
            document.querySelector('#carrousel-2').src = bodega[1].imagenNo2
            document.querySelector('#carrousel-3').src = bodega[1].imagenNo3

        }else{
            document.querySelectorAll('#moreClothes')[0].src =bodega[1].imagenNo2
            document.querySelector('#textoInter').innerHTML = bodega[1].nombre
            document.querySelector('#precioInter').innerHTML = '$ '+bodega[1].tallaM
            //responsive
            document.querySelector('#carrousel-1').src = bodega[0].imagenNo1
            document.querySelector('#carrousel-2').src = bodega[0].imagenNo2
            document.querySelector('#carrousel-3').src = bodega[0].imagenNo3
            seleccion = 0
            }
    }    
    document.querySelector('#min1').src = bodega[seleccion].imagenNo1
    document.querySelector('#min2').src = bodega[seleccion].imagenNo2
    document.querySelector('#min3').src = bodega[seleccion].imagenNo3
    document.querySelector('#bigPhoto').src = bodega[seleccion].imagenNo1
    document.querySelector('#nombrePrenda').innerHTML = bodega[seleccion].nombre
    document.querySelector('#precioPrenda').innerHTML = '$' + bodega[seleccion].tallaM
    window.scrollTo(0, 0)
}
document.querySelector('#s-xs').addEventListener('click',cambioPrecio)
document.querySelector('#s-s').addEventListener('click',cambioPrecio)
document.querySelector('#s-m').addEventListener('click',cambioPrecio)
document.querySelector('#s-l').addEventListener('click',cambioPrecio)
document.querySelector('#s-xl').addEventListener('click',cambioPrecio)
document.querySelector('#s-xxl').addEventListener('click',cambioPrecio)

function cambioPrecio (){
    
    let talla = this.getAttribute('id')
    console.log(seleccion)
    
    function preciosTalla(talla) {
        const tamaños = {
            's-xs': bodega[seleccion].tallaXS,
            's-s': bodega[seleccion].tallaS,
            's-m': bodega[seleccion].tallaM,
            's-l': bodega[seleccion].tallaL,
            's-xl': bodega[seleccion].tallaXL,
            's-xxl': bodega[seleccion].tallaXXL,
        } 
        return tamaños[talla]
    }
    preciosTalla(talla)
    document.querySelector('#precioPrenda').innerHTML = '$' + preciosTalla(talla)
    
}                        

   