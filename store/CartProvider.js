import {useState} from 'react';
import CartContext from './CartContext';

const CartProvider = props => {
  const [cart, setCart] = useState([]);
  const ProviderValue = {
    cart,
    setCart,
  };
  return (
    <CartContext.Provider value={ProviderValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
