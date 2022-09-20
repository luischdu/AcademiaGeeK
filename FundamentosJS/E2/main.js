// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');

// Cambiamos su contenido con innerHTML
titleElement.innerHTML = 'Bienvenida';

// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + ', geek girl';