import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    }

}