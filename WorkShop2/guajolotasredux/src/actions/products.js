
import { db } from '../firebase/config';
import { types } from '../types/types';
import { loadProduct} from '../helpers/loadProduct';
import { fileUpload } from '../helpers/fileUpload';

export const startNewProduct = (name, price, imgFlavor, img, type) => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const newProduct = {
            name: name,
            price: price,
            flavor: imgFlavor,
            img: img,
            type: type
        }

        const doc = await db.collection(`app/productos/${type}`).add(newProduct);
        dispatch( activeProduct( doc.id, newProduct ) );
        dispatch( addnewProduct( doc.id, newProduct ) );

    }
}

export const activeProduct = ( id, products ) => ({
    type: types.productActive,
    payload: {
        id,
        ...products
    }
});

export const addnewProduct = ( id, product ) => ({
    type: types.productAddNew,
    payload: {
        id,
        ...product
    }
})

export const startLoadingProducts= () => {
    return async( dispatch ) => {
        const products = await loadProduct();
        dispatch(setProducts(products));
    }
}

export const setProducts = ( products ) => ({
    type: types.productLoad,
    payload: products
});


export const startSaveProduct = ( product ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !product.url ){
            delete product.url;
        }

        const productToFirestore = { ...product };
        delete productToFirestore.id;

        await db.doc(`app/productos/${product.type}/${ product.id }`).update( productToFirestore );

        dispatch(startLoadingProducts(uid));
    }
}

export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { active:activeProduct} = getState().products;
        const fileUrl = await fileUpload( file );
        activeProduct.url = fileUrl;
        dispatch(startSaveProduct( activeProduct ))
    }
}

export const startDeleting = ( id, type ) => {
    return async( dispatch, getState ) => {
        const uid = getState().auth.uid;
        await db.doc(`app/productos/${type}/${id}`).delete();

        dispatch( deleteProduct(id) );
    }
}

export const deleteProduct = (id) => ({
    type: types.productDelete,
    payload: id
});

export const productLogout = () => ({
    type: types.productLogoutCleaning
});
