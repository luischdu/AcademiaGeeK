import React from 'react'

const VerDestacados = () => {
    return (
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.misiontic2022.gov.co/746/articles-172570_foto_marquesina.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                    </div>
                        <div className="carousel-item">
                            <img src="https://www.mintic.gov.co/portal/715/articles-176141_foto_marquesina.jpg" className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5></h5>
                                    <p></p>
                                </div>
                        </div>
                            <div className="carousel-item">
                                <img src="https://www.mintic.gov.co/portal/715/articles-176075_foto_marquesina.png" className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5></h5>
                                        <p></p>
                                    </div>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
    )
}

export default VerDestacados
