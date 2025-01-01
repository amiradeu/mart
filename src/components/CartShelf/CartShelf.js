import React, { memo, useContext, useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { X, ArrowRight } from 'react-feather'

import { CartContext } from '../CartProvider'

import { QUERIES } from '../../constants'
import Cart from '../Cart'

function CartShelf() {
    const closeRef = useRef()

    const { cart, totalItems, subtotal, closeCart } = useContext(CartContext)

    const styles =
        cart.length === 0
            ? {
                  pointerEvents: 'none',
                  backgroundColor: 'gray',
                  cursor: 'not-allowed',
              }
            : null

    return (
        <Backdrop onClick={(e) => e.stopPropagation()}>
            <Header>
                <Title>My Cart</Title>
                <CloseButton ref={closeRef} onClick={closeCart}>
                    <X size={20} />
                </CloseButton>
            </Header>
            <Body data-lenis-prevent>
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

                <ReceiptLink to='/mycart' onClick={closeCart} style={styles}>
                    <span>Generate Receipt</span>
                </ReceiptLink>
            </Footer>
        </Backdrop>
    )
}

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

const Body = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    row-gap: 12px;

    overflow-y: scroll;
    overscroll-behavior: contain;

    padding: 0 16px;

    @media ${QUERIES.tabletAndDown} {
        padding: 0 8px;
    }
`

const Footer = styled.footer`
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

const ReceiptLink = styled(Link)`
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width: 100%;
    padding: 8px 0px;

    border: 1px solid black;
    /* border-radius: 2rem; */

    background-color: var(--color-secondary);
    color: inherit;

    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;

    cursor: pointer;

    &:hover,
    &:active {
        text-decoration: underline;
        background-color: black;
        color: white;
    }
`

export default memo(CartShelf)
