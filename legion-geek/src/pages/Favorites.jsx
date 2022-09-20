import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { useSelector } from 'react-redux';
import { db } from '../firebase/firebase-config';

const Favorites = () => {
    const [state, setstate] = useState('')
    const uid = useSelector(state => state.auth.uid)

    const handleClickD = (e) => {
        let id = e.target.id
        const x = state.filter( el => el.id !== id)
        console.log(id);
        db.collection(`favoritos/users/${uid}`)
            .doc(`${id}`)
            .delete()
            .then(res => {
                setstate(x)
            })
    }

    useEffect(async () => {
        const data = [];
        await db.collection(`favoritos/users/${uid}`)
            .onSnapshot(snap => {
                snap.forEach(snapHijo => {
                    data.push({
                        id: snapHijo.id,
                        ...snapHijo.data()
                    })
                })
                setstate(data)
            })
    }, [uid])


    return (
        <div className="container-md">
            <h1 className="mt-5">Favoritos</h1>
            <hr />
            <div className="d-flex flex-wrap">
                
                {
                    state.length > 0 && state.map(data => (
                        <div key={data.id} className="col-xl-4 py-3">
                            <div className="card" style={{ width: "23rem" }}>
                                <video src={data.video} controls />
                                <div className="card-body">
                                    <h3 className="card-title text-end">
                                        <a href={data.descarga}>
                                            <FontAwesomeIcon style={{ color: "#153E90" }} icon={faArrowAltCircleDown} />
                                        </a>
                                        <button id={data.id} type="button" onClick={handleClickD} className="btn btn-danger ms-3"> X </button>
                                    </h3>
                                    <p className="card-text text-start">{data.description}</p>
                                </div>
                                <div class="card-footer">
                                    <div className="row align-content-center">
                                        <div className="col-10">
                                            <h6 className="card-title text-center pt-2" style={{ color: "black" }}> Siguenos en nuestras redes sociales!</h6>
                                        </div>
                                        <div className="col text-center">
                                            <a href="https://www.instagram.com/legiongeek/" target="_blank">
                                                <FontAwesomeIcon className="fs-1" style={{ color: "#EF4F4F" }} icon={faInstagramSquare} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Favorites

