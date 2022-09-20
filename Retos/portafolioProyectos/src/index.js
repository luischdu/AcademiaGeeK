import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'


import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Nunito', 'Poppins', 'Lora']
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app'))