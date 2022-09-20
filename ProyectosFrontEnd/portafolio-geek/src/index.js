// Se debe importar React - React-dom e insertar element en el app
import React from 'react';
import ReactDom from 'react-dom';
// Referencia al componente About
import App from './containers/App';

/* 
-COMPONENTE : es la plantilla para crear
- ELEMENTOS en React hacen render
- Component => About.jsx /-> para usarlo <About /> o <About></About>
*/

//Usando ReactDOM
//Usar solo render, tomara el ultimo(
//¿Qué elemento voy a mostar?,
//¿Cómo lo voy a mostrar?
//)
ReactDom.render(
    <App />, 
    document.getElementById('app')
);

