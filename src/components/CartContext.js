import React, {useState, createContext} from 'react';
export const CartContext = createContext();
export const CartProvider = props => {
  const [cart, setCart] = useState([])
  const [id, setId] = useState(0)
    return (
      <CartContext.Provider value = {[cart, setCart, id, setId]}>
        {props.children}
      </CartContext.Provider>
    );
  }