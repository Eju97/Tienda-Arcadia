import React from 'react'
import { useCartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import "./Cart.css"
import 'firebase/firestore'

const Cart = () => {
    const {cartList, vaciarCarrito, removerItem, crearOrdenDePedido, precioTotal} = useCartContext()

    return (
        <div className="text-center container fondito">
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
                <hr />
                <h1>TOTAL: $ {precioTotal()} </h1>
                <div>
                {cartList.length === 0 ? <div> <hr /> <h3>Parece que el carrito esta vacio, ve y compra algo</h3> <Link to="/productos"><button className="btn btn-info">SEGUIR COMPRANDO</button></Link></div> : null}                            
                {cartList.length !== 0 && <button className="btn btn-warning botones" onClick={()=>vaciarCarrito()}>Vaciar Bolsita</button>}
                {cartList.length !== 0 && <button className="btn btn-success" onClick={()=> crearOrdenDePedido(cartList)}>Terminar compra</button>}
                
                </div>               
        </div>
    );
                };

export default Cart