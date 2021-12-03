import React from 'react'
import {createContext, useState, useContext } from 'react';
import { getFirestore } from '../data/getFirebase.js';
import firebase from "firebase"
import 'firebase/firestore'

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children}){
    const [cartList, setCartList] = useState([])

    const agregarItem = (item, quantity, mostrar, setMostrar) => {
        const index = cartList.findIndex(i => i.item.id === item.id)//-1, pos
    
          if (index > -1) {
            const oldQy = cartList[index].quantity
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, quantity: quantity + oldQy}])
          }
          else {
            setCartList([...cartList, {item, quantity}])
          }
          setMostrar(!mostrar);
      }
      
    const precioTotal = () => {
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.item.precio)), 0) 
    }    


    const removerItem = (itemId) =>{
        let filtrarCarrito = cartList.filter((item) => item.item.nombre !== itemId);
            setCartList(filtrarCarrito);
        };

    function vaciarCarrito(){
        setCartList([])
    }
    

     const crearOrdenDePedido = (orden) =>{

         let precioTotal = 0
         let items = []

         const user = {
            name: 'User',
            phone: 3413601755,
            email: 'example@hotmail.com'
        }

        const itemEnLaOrden = (orden) => {
            cartList.map(itemCart => items.push({
                id: itemCart.item.id,
                name: itemCart.item.nombre,
                price: itemCart.item.precio,
            }))
            return items
        }

        const db = getFirestore();
        const dbOrders = db.collection('ordenes');
     
        dbOrders.add({
            comprador: user,
            item: itemEnLaOrden(orden),
            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
            total: precioTotal
        })
        .then( res => alert(`Su orden de compra es: ${res.id}`))
        .catch(err => console.log(err));
    
        setCartList([])
    }
    return(
        <CartContext.Provider value= {{
            cartList,
            agregarItem,
            removerItem,
            vaciarCarrito,
            crearOrdenDePedido,
            precioTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider