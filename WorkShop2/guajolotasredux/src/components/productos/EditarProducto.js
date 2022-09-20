import React, { useEffect } from 'react'
import Modal from "react-bootstrap/Modal"
import { useModal } from '../../hooks/useModal'
import { startLoadingProducts, startDeleting, startUploading, activeProduct, startSaveProduct } from '../../actions/products'
import { useSelector, useDispatch } from 'react-redux'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const EditarProducto = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    useEffect(() => {
        if (products) {
            dispatch(startLoadingProducts());
        }
    }, [dispatch]);

    const [isOpen, values, showModal, hideModal, handleInputChange, handleChange] = useModal();
    const { id, name, price, flavor, img, type } = values;

    const deleteProduct = (e, id, type) => {
        dispatch(startDeleting(id, type));
    }

    const handlePicture = () => {
        document.querySelector('#fileSelected').click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        dispatch(startUploading(file));
    }

    const handleEdit = (e, product) => {
        dispatch(
            activeProduct(
                product.id,
                {
                    ...product
                }
            )
        )
        handleInputChange(product)
        showModal()
    }

    const handleSave = (e, id, name, price, flavor, img, type) => {
        let productSave = { id, name, price, flavor, img, type }
        dispatch(startSaveProduct(productSave));
        hideModal()
    }

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="text-center">
                <Link
                    className="btn btn-success mt-3"
                    to="/crear-producto"
                >Ir a Agregar Productos</Link>
            </div>
            <table className="table text-center">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <tr key={product.id}>
                                <td valign="middle">{product.name}</td>
                                <td valign="middle">{product.price}</td>
                                <td valign="middle"><img
                                    src={product.img}
                                    alt="Img"
                                    style={{ height: '60px' }}
                                />
                                </td>
                                <td valign="middle">
                                    <div className="col">
                                        <span className="btn btn-danger" aria-hidden="true" onClick={(e) => { deleteProduct(e, product.id, product.type) }} style={{ cursor: 'pointer' }}>&times;</span>
                                        <span className="btn btn-primary" aria-hidden="true" onClick={(e) => { handleEdit(e, product) }} style={{ cursor: 'pointer' }}><FaEdit /></span>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Modal show={isOpen} onHide={hideModal} backdrop="static">
                <Modal.Header>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group py-3">
                        <input
                            type="text" id="producto-name"
                            className="form-control"
                            placeholder="Nombre del Producto"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="number" id="producto-price"
                            className="form-control"
                            placeholder="Precio del Producto"
                            name="price"
                            value={price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mt-3">
                            <input
                                type="text" id="producto-flavor"
                                className="form-control"
                                placeholder="URL de la Imagen Flavor"
                                name="flavor"
                                value={flavor}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <input
                                type="text" id="producto-img"
                                className="form-control"
                                placeholder="URL de la Imagen del Producto"
                                name="img"
                                value={img}
                                onChange={handleChange}
                            />
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-danger" onClick={hideModal}>Cancelar</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => { handleSave(e, id, name, price, flavor, img, type) }}>Guardar</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EditarProducto

