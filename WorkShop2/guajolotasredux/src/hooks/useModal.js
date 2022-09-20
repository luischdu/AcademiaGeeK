import { useState } from 'react';

export const useModal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState('');

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };

    const handleInputChange = (product) => {
        setValues({
            id: product.id,
            name: product.name,
            price: product.price,
            flavor: product.flavor,
            img: product.img,
            type: product.type
        });
    }

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ isOpen, values, showModal, hideModal, handleInputChange, handleChange ];

}
