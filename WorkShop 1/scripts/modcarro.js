function moduloCarro(){
//Variables
const carrito = document.getElementById('carrito');
const productos = document.getElementById('adding');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Cuando de presiona agregar carrito
    productos.addEventListener('click', comprarProducto);

    //Cuando se presiona X en producto del carrito
    carrito.addEventListener('click', eliminarProducto);

    //Al presionar Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar DOM mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

//Funciones

function comprarProducto(e) {
    e.preventDefault();
        
    //Delegation agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const producto = e.target.parentElement.parentElement
        //Enviar datos card elemento seleccionado
        leerDatosProducto(producto);
    }
}

function leerDatosProducto(producto){
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio span').textContent,
        id: producto.querySelector('p').getAttribute('data-id')
    }
    
    insertarCarrito(infoProducto);
}

//Mostrar producto seleccionado
function insertarCarrito(infoProducto){
    const row = document.createElement('tr');
    row.innerHTML=`
    <td><img width="100" src="${infoProducto.imagen}" /></td>
    <td>${infoProducto.titulo}</td>
    <td>${infoProducto.precio}</td>
    <td><a href="#" class="borrar-curso" data-id="${infoProducto.id}">X<a/></td>
    `;

    listaProducto.appendChild(row);
    guardarProductoLocalStorage(infoProducto);
}

//Eliminar producto del carrito en el DOM
function eliminarProducto(e){
    e.preventDefault();
    
    let producto, productoId;
    if(e.target.classList.contains('borrar-producto')){
        producto = e.target.parentElement.parentElement;
        productoId = producto.querySelector('a').getAttribute('data-id');
        e.target.parentElement.parentElement.remove();
    }
    eliminarProductoLocalStorage(productoId);
}

//Eliminar todos los producto del carrito en el DOM
function vaciarCarrito(){
    // innerHTML vs while
    while(listaProductos.firstChild){ // el sig pasa a ser el primero
        listaProductos.removeChild(listaProductos.firstChild)
    }

    //vaciar localStorage
    vaciarLocalStorage();

    return false;
}

//Almacenar curso del carrito en el localStorage

function guardarProductoLocalStorage(producto){
    let productos;

    productos = obtenerProductosLocalStorage();

    //producto seleccionado se agrega al arreglo vacio o al final de los elementos existentes
    productos.push(producto);
    
    localStorage.setItem('productos', JSON.stringify(productos))
}

//Comprobar elementos en localStorage
function obtenerProductosLocalStorage() {
    let productosLS;

    //comprobar si hay algo en localSotrage
    if(localStorage.getItem('productos')===null){
        productosLS = [];
    }else{
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }

    return productosLS;
}

//Imprimir productos de localStorage
function leerLocalStorage () {
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function (productos) {
        //construir template
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img width="100" src="${producto.imagen}" /></td>
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td><a href="#" class="borrar-producto" data-id="${producto.id}">X<a/></td>
        `;

        listaProducto.appendChild(row);
    })
}

//Eliminar producto por el data-id en el localStorage
function eliminarProductoLocalStorage(productoId){
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(productoLS, index){
        if (productoLS.id === productoId){
            productosLS.splice(index, 1);
        }
    });

    localStorage.setItem('productos', JSON.stringify(productosLS));
}

//Eliminar todos los cursos de localStorage
function vaciarLocalStorage(){
    localStorage.clear();
}

}
export default moduloCarro