import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import useFetch from 'react-hook-usefetch';

//Inicio de los Estilos
const MainStyle = styled.main`
    max-width: 800px;
    margin: 0px auto;
    overflow: hidden;
`

const DivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Img = styled.img`
    text-align: center;
    height: 150px;
    width: 150px;
    padding-bottom: 20px;
`

const Guajolota = styled.h1`
font-size: 28px;
margin: 0;
padding: 0;
`

const Price = styled.h1`
font-size: 28px;
color: #FA4A0C;
margin: 0;
padding: 0;
`
const Container = styled.div`
    position: relative;
`

const Slideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;

`
const Slide = styled.div`
    margin-left: 18px;
    min-width: 90%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 9;
`
const Dimg = styled.div`
    text-align: center;
   
`
const Controls = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
`
const ButtonS = styled.button`
    font-size: 25px;
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
 
    ${props => props.derecho ? 'right: 0px' : 'left: 0px'}
`
// Fin de los Estilos

// Inicio del componente
export const Slider = (props) => {
    const [state, setstate] = useState({})
    const [control, setcontrol] = useState(true)
    //const [moveState, setmoveState] = useState({})
    //const [controlTwo, setcontrolTwo] = useState(false)
    //const [pastelear, setpastelear] = useState({})
    const slideshow = useRef(null);

    const remake = (res) => {
        let idArr = [];
        for (let index = 0; index < res.length; index++) {
            idArr = [...idArr, res[index].id];
        }
        let i = idArr.indexOf(props.producto)
        //console.log(props.producto.replace(/[a-z\-]/g,''));
        let arrOne = res.slice(i,);
        let arrTwo = res.slice(0, i);
        let arrTotal = [...arrOne, ...arrTwo];
        setstate(arrTotal)
        // let moveRight = arrOne.map(el => el.id.replace(/[a-z\-]/g, ''))
        // let moveLeft = arrTwo.map(el => el.id.replace(/[a-z\-]/g, '') * -1)
        // setmoveState([...moveRight, ...moveLeft])
    }

    if (control) {
        if (props.categoria) {
            axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${props.categoria}`)
                .then(res => remake(res.data))
            setcontrol(false)
        }
    }

    const next = () => {
        // Comprobamos que el slideshow tenga elementos
        if (slideshow.current.children.length > 0) {
            //Estado Booleano a false
            props.boolean && props.setboolean(false);
            console.log('Siguiente')
            // Obtenemos el primer elemento del slideshow.
            const primerElemento = slideshow.current.children[0];
            // Establecemos la transicion para el slideshow.
            slideshow.current.style.transition = `300ms ease-out all`;
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            const transicion = () => {
                // Reiniciamos la posicion del Slideshow.
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento);
                slideshow.current.removeEventListener('transitionend', transicion)

            }
            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion);
            let item = slideshow.current.children[slideshow.current.children.length - 4].id;
            props.handleProducto(item)
        }
    }

    const prev = () => {
        console.log('Anterior');
        props.boolean && props.setboolean(false);
        if (slideshow.current.children.length > 0) {
            // Obtenemos el ultimo elemento del slideshow.
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
            let item = slideshow.current.children[0].id;
            props.handleProducto(item);

        }
    }

    const Change = () => {
        if (slideshow.current != null) {
            console.log('Anterior');
            let nuevoProducto = props.producto.replace(/[a-z\-]/g, '')
            console.log(nuevoProducto)
            let primerElemento = slideshow.current.children[0].id.replace(/[a-z\-]/g, '');
            console.log(primerElemento);
            if (nuevoProducto < primerElemento) {
                // Obtenemos el deseado por props
                const index = props.producto;
                console.log(slideshow);
                const seleccion = slideshow.current.children[index];
                slideshow.current.insertBefore(seleccion, slideshow.current.firstChild);
                slideshow.current.style.transition = 'none';
                const tamañoSlide = slideshow.current.children[0].offsetWidth;
                slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

                setTimeout(() => {
                    slideshow.current.style.transition = `300ms ease-out all`;
                    slideshow.current.style.transform = `translateX(0)`;
                }, 30);
            } else {
                const index = props.producto;

                const seleccion = slideshow.current.children[index];
                slideshow.current.insertBefore(seleccion, slideshow.current.firstChild);
                slideshow.current.style.transition = 'none';
                const tamañoSlide = slideshow.current.children[0].offsetWidth;
                slideshow.current.style.transform = `translateX(${tamañoSlide}px)`;

                setTimeout(() => {
                    slideshow.current.style.transition = `300ms ease-out all`;
                    slideshow.current.style.transform = `translateX(0)`;
                }, 30);

            }




            // const arr = slideshow.current.children;
            // console.log(moveState);
            // const zeroState = slideshow.current.children[0].id
            // console.log(zeroState);
            // let idArr = [];
            // //Obtener posicion del Producto
            // for (let index = 0; index < state.length; index++) {
            //     idArr = [...idArr, state[index].id.replace(/[a-z\-]/g,'')];
            // }
            // let posicion = idArr.indexOf(props.producto.id.replace(/[a-z\-]/g,''));
            // console.log(posicion);
            // console.log(idArr);
            // let arrOne = idArr.slice(posicion,);
            // console.log(arrOne);
            // let arrTwo = idArr.slice(0,posicion);
            // console.log(arrTwo);

            // arrTwo = arrTwo.map(el => {el * -1})
            // console.log(arrTwo.find(el => el === 5));


        }
    }

    /* useEffect( () => {
        axios.get(`https://api-fake-sprint-guappjalotas.herokuapp.com/${props.categoria}`)
            .then(res =>  setstate(res.data))             
    }, []) */

    useEffect(() => {
        Change()
    }, [props.producto])



    return (
        !state.length
            ? <h1>Cargando.....</h1>
            : <MainStyle><Container><Slideshow ref={slideshow}> {state.map(product =>
                <Slide key={product.id} id={product.id}>
                    <Dimg><Img src={product.imageUrl} alt={product.name} id={product.id} /></Dimg>
                    <DivStyle><Guajolota>{product.name}</Guajolota>
                        <Price>${product.price} MXN</Price></DivStyle></Slide>
            )}</Slideshow>
                <Controls id="Controles">
                    <ButtonS onClick={prev} >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </ButtonS>
                    <ButtonS derecho onClick={next}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </ButtonS>
                </Controls></Container>
            </MainStyle>

    )
}
