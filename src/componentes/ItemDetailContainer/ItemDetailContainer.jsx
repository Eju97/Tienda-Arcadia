import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { getFirestore } from '../../data/getFirebase';

const ItemDetailContainer = ({nombre}) => {  
    
    let  productoEncontrado = {};
  const [productos, setProductos] = useState([]);
  
useEffect(() =>{

  const db = getFirestore()
  db.collection('productos').get()
  .then(resp => setProductos(resp.docs.map( item => ({id: item.id, ...item.data()}))));

}, []);

   productoEncontrado = productos.find( item => item.nombre === nombre );
       return (
        <div className="container centrarItem text-center">
           {productoEncontrado && <ItemDetail item={productoEncontrado}/>}
        </div>
    );
};

export default ItemDetailContainer