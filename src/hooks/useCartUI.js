import { useRef, useState, useCallback } from 'react'

function useCartUI() {
    const cartRef = useRef()
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartPosition, setCartPosition] = useState({
        x: 0,
        y: 0,
    })

    const toggleCart = useCallback(() => {
        setIsCartOpen((previousState) => !previousState)
    })

    const openCart = useCallback(() => {
        setIsCartOpen(true)
    })

    const closeCart = useCallback(() => {
        setIsCartOpen(false)
    })

    const updateCartPosition = useCallback(() => {
        if (cartRef.current) {
            // console.log(cartRef.current.getBoundingClientRect())

            const { x, width, y } = cartRef.current.getBoundingClientRect()

            // console.log('cart', x, y)

            setCartPosition({
                x: x + width / 2,
                y: 24,
            })
        }
    })

    return {
        cartRef,
        isCartOpen,
        toggleCart,
        openCart,
        closeCart,
        cartPosition,
        updateCartPosition,
    }
}

export default useCartUI
