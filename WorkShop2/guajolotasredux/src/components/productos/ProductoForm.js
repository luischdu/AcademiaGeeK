import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewProduct } from '../../actions/products'
import { Link } from 'react-router-dom'

export const ProductoForm = () => {

    const dispatch = useDispatch();

    const handleSaveProduct = (e) => {
        e.preventDefault();
        const select = document.getElementById("type");

        let name = document.getElementById("producto-name").value;
        let price = document.getElementById("producto-price").value;
        let imgFlavor = document.getElementById("producto-flavor").value;
        let img = document.getElementById("producto-img").value;
        let type = select.options[select.selectedIndex].value;
        dispatch(startNewProduct(name, price, imgFlavor, img, type));
        resetInputs();
    }

    const resetInputs = () => {
        document.getElementById("producto-name").value = "";
        document.getElementById("producto-price").value = "";
        document.getElementById("producto-flavor").value = "";
        document.getElementById("producto-img").value = "";
        document.getElementById("type").value = "guajolotas";
    }

    return (
        <div className="container text-center ">
            <div className="">

                <div className="card-body ">

                    <h1 className="h4">Agregar Producto</h1>

                    <form id="product-form">
                        <div className="form-group py-3">
                            <input
                                type="text" id="producto-name"
                                className="form-control"
                                placeholder="Nombre del Producto"
                                name="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="number" id="producto-price"
                                className="form-control"
                                placeholder="Precio del Producto"
                                name="price"
                                required
                            />
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="text" id="producto-flavor"
                                className="form-control"
                                placeholder="URL de la Imagen Flavor"
                                name="flavor"
                                required
                            />
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="text" id="producto-img"
                                className="form-control"
                                placeholder="URL de la Imagen del Producto"
                                name="img"
                                required
                            />
                        </div>

                        <div className="form-group mt-3">
                            <select id="type" className="form-select" defaultValue={'guajolotas'} required>
                                <option value={"guajolotas"} >Guajolota</option>
                                <option value={"drinks"}>Bebida</option>
                                <option value={"tamales"}>Tamal</option>
                            </select>
                        </div>

                        <button className="btn btn-primary mt-3" id="btn-task-form" onClick={handleSaveProduct}>
                            Guardar Producto
                       </button>
                        <div>
                            <Link
                            className="btn btn-success mt-3"
                                to="/editar-productos"
                            >Editar productos</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
