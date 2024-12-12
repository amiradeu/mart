import React, { memo, useContext, useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { CartContext } from '../CartProvider'

import Cart from '../Cart'

function CartShelf() {
    const asideRef = useRef()
    const closeRef = useRef()
    const checkoutRef = useRef()

    const { cart } = useContext(CartContext)

    useGSAP((context, contextSafe) => {
        let tl = gsap.timeline()
        tl.from(asideRef.current, {
            x: '100%',
            duration: 0.5,
        })
        tl.from(checkoutRef.current, {
            y: '150%',
            duration: 0.1,
        })

        const clickRestart = contextSafe(() => {
            // console.log('reverse')
            tl.restart()
        })

        const clickReverse = contextSafe(() => {
            // console.log('reverse')
            tl.reverse()
        })

        closeRef.current.addEventListener('click', clickReverse)

        return () => {
            closeRef.current.removeEventListener('click', clickReverse)
        }
    })

    return (
        <Aside ref={asideRef}>
            <Wrapper>
                <Header>
                    <h3>My Cart</h3>
                    <CloseButton ref={closeRef}>X</CloseButton>
                </Header>
                <Body>
                    {cart.length === 0 && <p>Your cart is currently empty.</p>}
                    {cart.map((item, index) => (
                        <Cart key={index} {...item} />
                    ))}
                </Body>
                <Footer>
                    <Total>
                        <p>Subtotal</p>
                        <p>MYR</p>
                    </Total>
                    <CheckoutButton ref={checkoutRef}>checkout</CheckoutButton>
                </Footer>
            </Wrapper>
        </Aside>
    )
}

const Aside = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    width: 400px;
    height: 100%;

    background-color: aliceblue;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 20px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const CloseButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: var(--color-secondary);
    border: 1px solid black;
    border-radius: 100%;

    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`

const Body = styled.div`
    flex: 1;
    overflow-y: scroll;
`

const Footer = styled.div`
    border-top: 1px solid black;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`

const CheckoutButton = styled.button`
    width: 100%;
    padding: 16px 0px;

    border: 1px solid black;
    border-radius: 2rem;

    background-color: var(--color-secondary);

    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;

    cursor: pointer;

    &:hover,
    &:active {
        background-color: black;
        color: white;
    }
`

export default memo(CartShelf)
