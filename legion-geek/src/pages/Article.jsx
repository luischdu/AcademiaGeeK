import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Fixed = styled.div`
    top: 2rem;
`

const CardStyle = styled.div`
    width: 400px;
    border: none;
    border-radius: 10px;
    background-image:
    radial-gradient(
      circle at top right,
      #ad38fb,
      #ad89c4 60%
    );
`
const Stats = styled.div`
    background: #f2f5f8 !important;
    color: #000 !important;
`
const Span = styled.span`
    ${props => props.article && `
        font-size: 10px;
        color: #a1aab9;
    `
    }
    ${props => props.followers && `
        font-size: 10px;
        color: #a1aab9;
    `}
    ${props => props.rating && `
        font-size: 10px;
        color: #a1aab9;
    `}    
    ${props => props.numbers && `
        font-weight: 500
    `
    }

`
const Article = () => {
    const { id } = useParams();
    const articles = useSelector(state => state.articles.allArticles);
    const focusArticle = articles.find( el => el.id === id);

    return (
        <div className="container mb-5">

            <div className="row g-5">
                <div className="col-md-8">
                    <h1 className="mt-4 mb-4 border-bottom" >{focusArticle.title}</h1>
                    <img className="img-fluid mb-3" src={`${focusArticle.img}`} alt="" />
                    {
                        focusArticle && (<div dangerouslySetInnerHTML={{ __html: focusArticle.content }}/>
                        )
                    }


                </div>

                <div className="col-md-4">
                    <Fixed className="position-sticky" >
                        {/* Card Profile */}
                        <div className="p-2 mb-3 mt-2 rounded ">
                                <CardStyle className="card p-3 bg-primary">
                                    <div className="d-flex align-items-center ">
                                        <div className="image"> <img src={`${focusArticle.imgProfile}`} className="rounded" width="155"/> </div>
                                            <div className="ms-3 w-100 ">
                                                <h4 className="mb-0 mt-0 text-white">{focusArticle.createUserID}</h4> <Span>Front-End Developer</Span>
                                                <Stats className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className="d-flex flex-column"> <Span article>Articles</Span> <Span number>1</Span> </div>
                                                    <div className="d-flex flex-column"> <Span followers>Followers</Span> <Span number>3</Span> </div>
                                                    <div className="d-flex flex-column"> <Span rating>Rating</Span> <Span number>9.1</Span> </div>
                                                </Stats>
                                                {/* <div className="button mt-2 d-flex flex-row align-items-center">
                                                    <button className="btn btn-sm btn-outline-primary w-100">Chat</button> 
                                                    <button className="btn btn-sm btn-primary w-100 ml-2">Follow</button> 
                                                </div> */}
                                            </div>
                                        </div>
                                    </CardStyle>
                            </div>

                            <div className="p-4">
                                <h4 className="fst-italic">Informacion de Interes</h4>
                                <h6>Card en Construccion</h6>

                            </div>
                            <div className="p-4 ">
                                <h4 className="fst-italic">Redes Sociales</h4>
                                <ol className="list-unstyled d-flex gap-5 justify-content-center">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                </ol>
                            </div>
                        </Fixed>
                    </div>
                </div>
            </div>


    )
}

export default Article
