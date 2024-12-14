import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { CartContext } from '../CartProvider'
import SlideUpText from '../SlideUpText'

function Header() {
    const { totalCart, toggleCart } = useContext(CartContext)

    return (
        <Wrapper>
            <Title>Sticker Mart</Title>
            <CartButton onClick={toggleCart}>
                Cart
                {totalCart !== 0 && (
                    <>
                        (<SlideUpText>{totalCart}</SlideUpText>)
                    </>
                )}
            </CartButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    z-index: 2;
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--color-background);
    border-bottom: 1px solid black;

    display: flex;
    gap: 1em;

    align-items: baseline;

    padding: 0px 32px;
`

const Title = styled.h1`
    font-size: 1rem;
    line-height: 1;
    letter-spacing: -2%;

    margin-right: auto;
`

const CartButton = styled.button`
    display: flex;

    padding: 16px 16px;
    background-color: transparent;
    color: inherit;
    font-size: 16px;
    margin-left: auto;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

const AuthorLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export default Header
