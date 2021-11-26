import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../data/getFirebase';
import firebase from "firebase"
import 'firebase/firestore'

const Cart = () => {
    const {cartList, vaciarCarrito, removerItem, crearOrdenDePedido} = useCartContext()
    console.log(cartList);

    const generarOrden = () =>{
        const db = getFirestore();
      //  const ordersCol = db.collection('orders');
        
        let orden = {}        
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { nombre: 'Ernesto', telefono: '3413601755', email: 'ejubessone@hotmail.com'}
      //  orden.total = totalPrecio;
      console.log(cartList)
        orden.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const titulo = cartItem.item.nombre;
            const precio = cartItem.item.precio * cartItem.quantity;

            return {id, titulo, precio}
        })
        console.log(orden)

        const dbQuery = getFirestore()
        const orderQuery = dbQuery.collection('orders')
        orderQuery.add(orden)
        .then(result => alert('el id de la compra es'+ result.id))
        .catch(err => console.log(err))

    }




    return (
        <div className="text-center">
        <h1>Carrito</h1>
        <table className="table">
            <thead>
            <tr>
                <th className="m-2">Nombre</th>
                <th className="m-2">Cantidad</th>
                <th className="m-2">Precio unitario</th>
                <th className="m-2">Subtotal</th>
                <th className="m-2">Eliminar</th>
            </tr>
            </thead>

                {cartList.map(item =>
                <tbody key={item.item.id}>
                
                <tr>
                    <td className="m-1"><h3>{item.item.nombre}</h3></td>
                    <td className="m-1"><h3>{item.quantity}</h3></td>
                    <td className="m-1"><h3>${item.item.precio}</h3></td>
                    <td className="m-1"><h3>${item.quantity*item.item.precio}</h3></td>
                    <td className="m-1"><button onClick={()=>removerItem(item.item.nombre)}>X</button></td>
                    </tr>
                </tbody>)}                
        </table>        
                <h1>TOTAL:{cartList.reduce(function(valorAnterior,ValorActual){
                    return ValorActual.quantity*ValorActual.item.precio
                },0)}</h1>
                <button className="btn btn-warning botones" onClick={()=>vaciarCarrito()}>Vaciar Bolsita</button>
                <button onClick={()=> crearOrdenDePedido(cartList)}>Terminar compra</button>
                <button onClick={()=> generarOrden()}>COMPRAR</button>
                
        </div>
    );
                };

export default Cart