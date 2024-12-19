import { useState, useCallback, useEffect } from 'react'

import { PRODUCTS } from '../data'

const LOCAL_STORAGE = 'myCart'

function useCartLogic() {
    // store a list of products in cart
    const [cart, setCart] = useState(() => {
        // retrieve cart from localStorage
        const storedCart = localStorage.getItem(LOCAL_STORAGE)
        return storedCart ? JSON.parse(storedCart) : []
    })

    // store unique items in cart
    const totalCart = cart.length
    // store total quantity of each items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    // store the total price
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    // Function to sort cart based on productsData
    const sortCart = (cart) => {
        const productOrderMap = PRODUCTS.reduce((acc, product, index) => {
            acc[product.title] = index // Use product title as key and its position in the list as value
            return acc
        }, {})

        return [...cart].sort(
            (a, b) => productOrderMap[a.title] - productOrderMap[b.title]
        )
    }

    const addToCart = useCallback((item) => {
        setCart((currentCart) => {
            const existingItemIndex = currentCart.findIndex(
                (cartItem) => cartItem.title === item.title
            )

            if (existingItemIndex !== -1) {
                // update quantity
                return sortCart(
                    currentCart.map((item, index) =>
                        index === existingItemIndex
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                )
            }

            // add to cart
            return sortCart([...currentCart, { ...item, quantity: 1 }])
        })
    })

    // Update quantity for a specific product
    const addQuantity = useCallback((title) => {
        setCart((currentCart) =>
            currentCart.map((product) =>
                product.title === title
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        )
    }, [])

    const subtractQuantity = useCallback((title) => {
        setCart(
            (currentCart) =>
                currentCart
                    .map((product) =>
                        product.title === title
                            ? { ...product, quantity: product.quantity - 1 }
                            : product
                    )
                    .filter((product) => product.quantity > 0) // Remove product if quantity reaches 0
        )
    }, [])

    const deleteFromCart = useCallback((title) => {
        setCart((currentCart) =>
            currentCart.filter((product) => product.title !== title)
        )
    })

    const getCartLength = useCallback(() => {
        return cart.length
    })

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(cart))
    }, [cart])

    return {
        cart,
        addToCart,
        addQuantity,
        subtractQuantity,
        deleteFromCart,
        totalItems,
        subtotal,
        totalCart,
    }
}

export default useCartLogic
