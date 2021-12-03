import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom';


const Item = ({id, nombre, precio, stock, imagen}) => {
    const onAdd = (clicks) => {
        alert(`Agregaste ${clicks} ${nombre} al carrito al carrito`);
    };
    
    return (      
            <div className="card text-center border-primary m-2" style={{width:"14rem"}}>                    
                <img className="card-img-top" src={imagen} alt="producto"/>
                <div className="card-body">                    
                    <h5 className="card-title">{nombre}</h5>                    
                    <p className="card-text">${precio}</p>
                    <Link to={`/productos/${nombre}`}>
                    <button className="btn btn-success">+ Info</button>
                    </Link>
                </div>                    
            </div>   
    );
};

export default Item