import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { CartContext } from '../CartProvider'
import SlideUpText from '../SlideUpText'

function Header() {
    const { totalItems, toggleCart, cartRef, updateCartPosition } =
        useContext(CartContext)

    useEffect(() => {
        updateCartPosition()
        window.addEventListener('resize', updateCartPosition)

        return () => {
            window.removeEventListener('resize', updateCartPosition)
        }
    }, [])

    return (
        <Wrapper>
            <HomeLink to='/'>Sticker Mart</HomeLink>
            <CartButton onClick={toggleCart} ref={cartRef}>
                Cart
                {totalItems !== 0 && (
                    <>
                        (<SlideUpText>{totalItems}</SlideUpText>)
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

const HomeLink = styled(Link)`
    font-size: 1rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -2%;

    color: inherit;
    text-decoration: none;

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
