import Comentario from './Comentario'
import 'bootstrap';
import './sass/style.scss'
  
let micomentario = new Comentario()

async function llamadoComentariosAsync () {
  let data = await micomentario.asynAxiosObtenerComentarios()
  console.log(data)
}

async function llamarComentarios () {
  try {
    console.log('Se llamo la promesa')
    //let promesa = micomentario.promesaObtenerComentarios()
    let respuesta = await micomentario.promesaObtenerComentarios()
    console.log(respuesta)
    console.log('Termino la promesa')
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Termino el programa')
  }
}
llamadoComentariosAsync()
//llamarComentarios()
/*promesa
  .then(r => {
    console.log(JSON.parse(r))
    return "mensaje para la siguiente promesa"
  })
  .then(r => {
      console.log(r)
  })
  .catch(r => {
    console.log(JSON.parse(r))
  })
  .finally(() => {
      console.log("Finally")
  })*/