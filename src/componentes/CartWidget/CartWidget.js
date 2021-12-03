import React from 'react'
import pouch from "../Images/pouch.png"
import { useCartContext } from '../../context/cartContext'
    
const CartWidget = () => {
    const {cartList} = useCartContext()

    return (
        <span>           
            
            <img width="65px" src={pouch}  alt="logoDelCarrito"/><span>{cartList.length}</span>
        </span>
    )
}

export default CartWidget
