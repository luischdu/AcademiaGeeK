import React from 'react'
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'



const VerFooter = () => {
    return (
        <footer className="text-center footer-style mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-col">
                        <h3>Legión Geek</h3>
                        <ul className="list-inline text-center align-content-center">
                            <li>
                                <img style={{ width: '80%' }} src='https://i.imgur.com/Zf6ls2t.png' />
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4 footer-col">
                        <h3>Contactanos</h3>
                        <p>legiongeek01@gmail.com</p>
                        <p>Telefono: 3209387246</p>
                        <p>Bogotá D.C, Colombia</p>
                        <p>Medellin, Colombia</p>

                    </div>
                    <div className="col-md-4 footer-col">
                        <h3>Síguenos en:</h3>
                        <ul className="list-inline d-flex justify-content-around">

                            <li className='text-center'>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/legiongeek" target="_blank" rel="intagram">   <FontAwesomeIcon icon={faInstagram} className="fs-4" /></a>

                            </li>
                            <li className='text-center'>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/legiongeek" target="_blank" rel="intagram">   <FontAwesomeIcon icon={faFacebookSquare} className="fs-4" /></a>

                            </li>
                            <li className='text-center'>
                                <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.instagram.com/legiongeek" target="_blank" rel="intagram">   <FontAwesomeIcon icon={faTwitter} className="fs-4" /></a>

                            </li>

                        </ul>
                    </div>

                </div>
                <hr />

                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()}    LEGION GEEK | <a style={{ textDecoration: 'none', color: 'white' }} href="https://drive.google.com/file/d/1lRlyC2xYfDPIeavICVRhvfLL5FL8UPz-/view?usp=sharing" target="_blank" rel="politica de privacidad"> Politica de privacidad </a>
                    </p>
                </div>
            </div>
            {/*  | All right reserved  */}
        </footer>
    )
}

export default VerFooter
