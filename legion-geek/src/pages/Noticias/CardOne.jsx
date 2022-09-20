import React from 'react'
import { useSelector } from 'react-redux'

const CardOne = () => {
    const article = useSelector(state => state.article)
    
    return (
        <div className="row mb-2">
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">Featured post</h3>
                        <div className="mb-1 text-muted">Nov 12</div>
                        <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <Img src="https://static.vecteezy.com/system/resources/previews/000/537/403/non_2x/vector-colorful-modern-template-with-colorful-design.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <Img className="img-thumpnail" src="https://static.vecteezy.com/system/resources/previews/000/537/403/non_2x/vector-colorful-modern-template-with-colorful-design.jpg" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOne
