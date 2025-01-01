import React, { memo, useContext, useRef } from 'react'
import styled from 'styled-components'
import ReactFocusLock from 'react-focus-lock'
import { AnimatePresence, motion } from 'motion/react'

import { CartContext } from '../CartProvider'
import useKeydown from '../../hooks/use-keydown'

import CartShelf from '../CartShelf'

function AsideSlider() {
    const asideRef = useRef()

    const { isCartOpen, closeCart } = useContext(CartContext)

    useKeydown('Escape', () => {
        closeCart()
    })

    return (
        <ReactFocusLock returnFocus={true}>
            <AnimatePresence>
                {isCartOpen && (
                    <Aside
                        ref={asideRef}
                        onClick={closeCart}
                        as={motion.aside}
                        transition={{
                            duration: 0.5,
                        }}
                        initial={{
                            transform: 'translateX(100%)',
                        }}
                        animate={{
                            transform: 'translateX(0%)',
                            opacity: 1,
                        }}
                        exit={{
                            transform: 'translateX(100%)',
                            opacity: 0,
                        }}
                    >
                        <CartShelf />
                    </Aside>
                )}
            </AnimatePresence>
        </ReactFocusLock>
    )
}

const Aside = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
`

export default memo(AsideSlider)
