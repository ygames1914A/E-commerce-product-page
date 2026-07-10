import React, { createContext, useState } from "react";
import { useContext } from "react";

const cartContext = createContext();

export default function CartContext({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartToggle, setCartToggle] = useState(false);
    return (
        <>
            <cartContext.Provider
                value={{ cartItems, setCartItems, cartToggle, setCartToggle }}
            >
                {children}
            </cartContext.Provider>
        </>
    );
}

export const useCart = () => useContext(cartContext);
