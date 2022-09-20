import React from 'react'
import { useSelector } from 'react-redux'

const CardTwo = () => {

    const article = useSelector(state => state.article)

    return (
        <div>
            <div class="col-md-4 pt-3">
                <div class="card-section border rounded p-3">
                    <CardHeader class="card-header-first rounded pb-5  ">
                        <h2 class="card-header-title text-white pt-4 text-center">Redes Sociales</h2>
                    </CardHeader>
                    <div class="card-body text-start">
                        <strong className="d-inline-block mb-2 text-success">Design</strong>
                        <h3 className="mb-0">Post title</h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat malesuada, volutpat fermentum eu ac faucibus pellentesque torquent nullam gravida et, ut nam massa purus congue class mi nunc.</p>
                        <button className="btn btn-warning">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTwo
