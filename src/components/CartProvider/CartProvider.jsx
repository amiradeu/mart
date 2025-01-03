import React, { createContext, useMemo } from 'react'
import useCartLogic from '../../hooks/useCartLogic'
import useCartUI from '../../hooks/useCartUI'

export const CartContext = createContext()

function CartProvider({ children }) {
    const cartState = useCartLogic()
    const cartUI = useCartUI()

    const value = useMemo(() => ({
        ...cartState,
        ...cartUI,
    }))

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
