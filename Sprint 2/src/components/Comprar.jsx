import React from 'react';
import { Slider } from './subCompra/Slider';
import { Amount } from './subCompra/Amount';
import { Navbar } from './subCompra/Navbar';
import { Flavours } from './subCompra/Flavours';
import Addcart from './subCompra/Addcart';
import { useParams } from 'react-router';
import AddedComboDescription from './AddedComboDescription';
import CardOrderSection from './CardOrderSection';

export const Comprar = () => {
  //Props para el Slide
  const [Producto, setProducto] = React.useState('');
  const [Categoria, setCategoria] = React.useState('');
  const [Boolean, setBoolean] = React.useState(false);
  const [Total, setTotal] = React.useState(1);
  const [Combo, setCombo] = React.useState(null);
  //Obtener Props del Componente sabores
  const handleClick = (eleccion) => {
    setProducto(eleccion);
  };
  //Obetener id con react-router
  const { id } = useParams();
  //Obtener Categoria a partir del parametro
  const actData = () => {
    let newid = id.replace(/[1-9\-]/g,'')
    newid === 'gua' && setCategoria('guajolotas');
    newid === 'tam' && setCategoria('tamales');
    newid === 'dri' && setCategoria('bebidas');
  } 
  //Actualizar Categoria y Producto
  React.useEffect(() => {
    actData()
    setProducto(id)
  }, [id])

  return (
    <>
      <Navbar />
      <Slider
        handleProducto={handleClick}
        categoria={Categoria}
        producto={Producto}
        boolean={Boolean}
        setboolean={setBoolean}
      />
      <Amount Total={Total} setTotal={setTotal} />
      <Flavours
        clickProducto={handleClick}
        categoria={Categoria}
        test={Producto}
        boolean={Boolean}
        setboolean={setBoolean}
      />
      <AddedComboDescription categorie={Categoria}/>
      <CardOrderSection categorie={Categoria} setCombo={setCombo}/>
      <Addcart categoria={Categoria} Total={Total} Producto={Producto} Combo={Combo}  />
    </>
  );
};
