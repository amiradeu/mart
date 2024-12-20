import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-router-dom'
import { X, ArrowRight } from 'react-feather'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'

import { CartContext } from '../CartProvider'
import Cart from '../Cart'
import { QUERIES } from '../../constants'
import SlideUpText from '../SlideUpText'
import useKeydown from '../../hooks/use-keydown'

function CartShelf() {
    const asideRef = useRef()
    const closeRef = useRef()
    const checkoutRef = useRef()

    const { cart, totalItems, subtotal, isCartOpen, closeCart } =
        useContext(CartContext)

    const styles = {
        '--isCartOpen': isCartOpen,
    }
    useKeydown('Escape', () => {
        closeCart()
    })

    return (
        <ReactFocusLock returnFocus={true}>
            <RemoveScroll>
                <Wrapper ref={asideRef} style={styles} onClick={closeCart}>
                    <Backdrop>
                        <Header>
                            <Title>My Cart</Title>
                            <CloseButton ref={closeRef} onClick={closeCart}>
                                <X size={20} />
                            </CloseButton>
                        </Header>
                        <Body>
                            {cart.length === 0 && (
                                <p>Your cart is currently empty.</p>
                            )}
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
                                <span>view cart </span>
                                <ArrowRight />
                                <ArrowRight />
                            </MyCartLink>
                        </Footer>
                    </Backdrop>
                </Wrapper>
            </RemoveScroll>
        </ReactFocusLock>
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

const Wrapper = styled.aside`
    position: fixed;
    top: 0;
    right: 0;

    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 100%;

    backdrop-filter: blur(3px);

    animation: ${slideIn} 0.3s forwards;
`

const Backdrop = styled.div`
    width: 480px;

    background-color: var(--color-background);

    @media ${QUERIES.tabletAndDown} {
        width: 90%;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border-left: 1px solid black;
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-inline-start: 16px;
    margin-bottom: 20px;

    height: 50px;
    border-bottom: 1px solid black;

    @media ${QUERIES.tabletAndDown} {
        margin-bottom: 12px;
    }
`

const Title = styled.h3`
    font-weight: 300;
`

const CloseButton = styled.button`
    width: 50px;
    height: 50px;
    margin-inline-end: 16px;

    background-color: transparent;
    border: none;
    color: inherit;

    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-100);
    }
`

const Body = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    row-gap: 12px;

    padding: 0 16px;

    @media ${QUERIES.tabletAndDown} {
        padding: 0 8px;
    }
`

const Footer = styled.div`
    border-top: 1px solid black;
    margin-block-end: 16px;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-block: 12px 4px;
`

const TextWrapper = styled.div`
    display: flex;
    align-items: baseline;
`

const MyCartLink = styled(Link)`
    align-self: flex-end;

    display: inline-block;
    text-align: center;
    text-decoration: none;

    width: 100%;
    padding: 8px 0px;

    /* border: 1px solid black; */
    /* border-radius: 2rem; */

    /* background-color: var(--color-secondary); */
    color: inherit;

    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;

    cursor: pointer;

    &:hover,
    &:active {
        text-decoration: underline;
        background-color: var(--color-gray-100);
        /* color: white; */
    }
`

export default memo(CartShelf)
