import { db } from '../firebase/config';

export const loadProduct= async (type) => {

    const productGuajolota = await db.collection('app/productos/guajolotas').get();
    const productBebidas = await db.collection('app/productos/drinks').get();
    const productTamal = await db.collection('app/productos/tamales').get();

    const products = [];

    productGuajolota.forEach( snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    productBebidas.forEach( snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    productTamal.forEach( snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return products;
}
