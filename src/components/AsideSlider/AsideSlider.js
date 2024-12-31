import React, { memo, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
import ReactFocusLock from 'react-focus-lock'
import { AnimatePresence, motion } from 'motion/react'

import { CartContext } from '../CartProvider'
import { LenisContext } from '../LenisProvider'
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
                        initial={{
                            transform: 'translateX(100%)',
                        }}
                        animate={{
                            transform: 'translateX(0%)',
                        }}
                        exit={{
                            transform: 'translateX(100%)',
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

    backdrop-filter: blur(3px);
`

export default memo(AsideSlider)
