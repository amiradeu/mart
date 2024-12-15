import React, { memo, useContext, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'

import { CartContext } from '../CartProvider'
import Cart from '../Cart'
import { QUERIES } from '../../constants'
import SlideUpText from '../SlideUpText'

function CartShelf() {
    const asideRef = useRef()
    const closeRef = useRef()
    const checkoutRef = useRef()

    const { cart, totalItems, subtotal, isCartOpen, closeCart } =
        useContext(CartContext)

    return (
        <Aside ref={asideRef} isCartOpen={isCartOpen}>
            <Wrapper>
                <Header>
                    <h3>My Cart</h3>
                    <CloseButton ref={closeRef} onClick={closeCart}>
                        X
                    </CloseButton>
                </Header>
                <Body>
                    {cart.length === 0 && <p>Your cart is currently empty.</p>}
                    {cart.map((item, index) => (
                        <Cart key={index} {...item} />
                    ))}
                </Body>
                <Footer>
                    <Total>
                        <p>
                            Subtotal
                            {totalItems !== 0 ? (
                                <>
                                    &nbsp;(
                                    {totalItems}
                                    &nbsp;items)
                                </>
                            ) : (
                                ''
                            )}
                        </p>
                        <TextWrapper>
                            <div>MYR&nbsp;</div>
                            {subtotal}
                        </TextWrapper>
                    </Total>
                    <MyCartLink to='/mycart' ref={checkoutRef}>
                        view cart
                    </MyCartLink>
                </Footer>
            </Wrapper>
        </Aside>
    )
}

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`

const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`

const Aside = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    width: 480px;
    height: 100%;

    background-color: var(--color-background);

    @media ${QUERIES.tabletAndDown} {
        width: 360px;
    }

    animation: ${({ isCartOpen }) => (isCartOpen ? slideIn : slideOut)} 0.3s
        forwards;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 20px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-left: 1px solid black;
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
    color: inherit;

    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
    }
`

const Body = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    row-gap: 12px;
`

const Footer = styled.div`
    border-top: 1px solid black;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`

const TextWrapper = styled.div`
    display: flex;
    align-items: baseline;
`

const MyCartLink = styled(Link)`
    display: inline-block;
    text-align: center;
    text-decoration: none;

    width: 100%;
    padding: 16px 0px;

    border: 1px solid black;
    border-radius: 2rem;

    background-color: var(--color-secondary);
    color: inherit;

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
