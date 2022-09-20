import React from 'react'

const TeamWork = () => {
    return (
        <div className="container col-xxl-12 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="https://res.cloudinary.com/romajs/image/upload/v1623908987/Desarrollo-web_uuhlv8.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Acerca de nosotros</h1>
                    <p className="lead"><span style={{ fontWeight: "bold" }}>Legion geek</span>  es una propuesta para brindar información, conocimiento para usuarios con poca capacitación en herramientas TIC para que puedan aprovechar al maximo los beneficios teclogicos!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
                </div>
            </div>
        </div>
    )
}

export default TeamWork
