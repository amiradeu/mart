import React, { createContext, useCallback, useMemo, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const totalCart = cart.length

    console.log('total: ', totalCart)

    const addToCart = useCallback((item) => {
        setCart((currentCart) => {
            const existingItemIndex = currentCart.findIndex(
                (cartItem) => cartItem.title === item.title
            )

            if (existingItemIndex !== -1) {
                // update quantity
                return currentCart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                // add to cart
                return [...currentCart, { ...item, quantity: 1 }]
            }
        })
    })

    const deleteFromCart = useCallback((title) => {
        setCart((currentCart) =>
            currentCart.filter((product) => product.title !== title)
        )
    })

    const getCartLength = useCallback(() => {
        return cart.length
    })

    const value = useMemo(() => {
        return {
            cart,
            setCart,
            addToCart,
            deleteFromCart,
            getCartLength,
            totalCart,
        }
    })

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
