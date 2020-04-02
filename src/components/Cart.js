import React, { useContext, Fragment } from 'react';
import {CartContext} from './CartContext'

const Cart = props => {

  const [cart, setCart] = useContext(CartContext)

  const confirmDelete = (id) => {    //use the imgsrc as the id since they
    const choice = window.confirm("Are you sure you want to remove this item from your cart?");
    if (choice) {
      let oldCart = [...cart]
      let index = 0;
      while (index < cart.length) {
        if (id === cart[index].id) {
          oldCart.splice(index, 1);
          break
        }
        index++
      }
      setCart(oldCart)
    }
  }

    return (
      <div style = {{textAlign:"center"}}>
      <h2 style = {{marginTop:"25px"}}>Your Cart</h2>   
      <div className="cartContainer">
        {cart.length > 0 ? cart.map((product) => (
          <div className = "cartResultsSegment">
            <img alt = "placeholder" src = "imgs/close.png" className="cartItemDelete" onClick = {confirmDelete.bind(this, product.id)}/>
            <img alt = "productImg" src = {product.imgsrc} className="cartResultsSegmentImg"/>
            <p className="cartResultsSegmentName">
              {product.name}
            </p>
            <p className="cartResultsSegmentInfo">
              Price: {product.price} <span style = {{marginLeft:"15px"}}> Size: {product.size} </span> <span style = {{marginLeft:"15px"}}> Style: {product.style} </span>
            </p>
            
          </div>
        ))
      : 
      <p> No items currently in cart</p>}
      </div>
      <button onClick = {props.handleClose} className = "cartButton"> Continue Shopping </button>
       </div>
    );
  }

export default Cart;
