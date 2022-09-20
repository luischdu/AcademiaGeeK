//funcion para enlistar todo lo de la base de datos
export  const ListadoDeComidas=(data)=> {
    //variable donde guardar el listado de comidas
    var listadoDeComidas = []

    //busca dentro de las categorias
    for (const categoria in data) {
        //acojo los arreglos dentro de la categoria
        var arreglosInternos = data[categoria]
        //busco dentro de los arreglos
        for (const element of arreglosInternos) {
            //guardo todos los objetos en un solo arreglo
            listadoDeComidas.push(element)
        }
    }
    return listadoDeComidas
}