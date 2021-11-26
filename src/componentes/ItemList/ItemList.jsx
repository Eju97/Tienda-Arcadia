import React from 'react'
import { useEffect, useState } from 'react'
import Item from '../Item/Item';
import { getFirestore } from '../../data/getFirebase.js';

const ItemList = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() =>{
        try{
        const db = getFirestore()
        db.collection('productos').get()
        .then(resp => setProductos(resp.docs.map(e => ({id: e.id, ...e.data()}))));}
        catch (error) {
        alert("Algo fallo, intentelo de nuevo");
  }
}, []);
 // console.log(productos)    

    return (
        <div>
            {
            productos.length ? (
                <>
                {
                    productos.map((producto) => {
                        return (
                            <div key={producto.id}>
                                <Item     
                                    id={producto.id}                           
                                    nombre={producto.nombre}
                                    precio={producto.precio}
                                    stock={producto.stock}
                                    imagen={producto.imagen}
                                />
                            </div>
                        );
                    })
                }
                </>            
        ) : (
            <p className="text-center">Revolviendo el inventario...</p>
        )
        }
        </div>
    );
};

export default ItemList
