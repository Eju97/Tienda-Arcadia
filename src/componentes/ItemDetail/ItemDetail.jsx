import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const {cartList, agregarItem} = useCartContext()
      
    const onAdd = (clicks) => {
    console.log(clicks);
      setShow(false);
};

  const [show, setShow] = useState(true)

    return (
      <div className="card text-center d-flex" style={{width:"18rem"}}>                    
          <img className="card-img-top" src={item.imagen} alt="producto"/>
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">${item.precio}</p>
              <p className="card-text">{item.descripcion}</p>

              {show? 
              ( <ItemCount mostrar={show} setMostrar={setShow} item={item} onAdd={onAdd} initial={1}/> )
              : ( <Link to={`/cart`}> <button className="btn btn-warning botones p-3 m-3" onClick={()=>setShow(!show)}>Finalizar Compra</button></Link> )} 
                <Link to={"/productos"}> <button className="btn btn-warning botones p-3 m-3" onClick={()=>setShow(!show)}>Seguir Comprando</button></Link>           
            </div>                 
      </div> 
    );
};
export default ItemDetail;