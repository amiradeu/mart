import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import Superheader from '../Superheader'
import Header from '../Header'

import { CartContext } from '../CartProvider'
import Cart from '../Cart'
import { LenisContext } from '../LenisProvider'
import { LoadingContext } from '../LoadingProvider'

function MyCart() {
    const { cart, totalItems, subtotal } = useContext(CartContext)

    const { scrollToTop } = useContext(LenisContext)
    const { resetProgress } = useContext(LoadingContext)

    useEffect(() => {
        scrollToTop()
        resetProgress()
    }, [])

    return (
        <Wrapper>
            <Superheader />
            <Header />
            <Main>
                {cart.length === 0 && <p>Your cart is currently empty.</p>}
                <CartWrapper>
                    {cart.map((item, index) => (
                        <Cart key={index} {...item} />
                    ))}
                </CartWrapper>

                <Footer>
                    <Total>
                        <p>
                            Subtotal
                            {totalItems !== 0 ? ` (${totalItems} items)` : ''}
                        </p>
                        <p>MYR {subtotal}</p>
                    </Total>
                </Footer>
            </Main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    isolation: isolate;
    padding-block-start: 50px;
    padding-block-end: 4rem;
`

const Main = styled.main`
    margin: 24px;
`

const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-block-end: 12px;
`

const Footer = styled.div`
    padding-block-end: 2px;
    border-top: 1px solid black;

    background-color: var(--color-background);
    position: sticky;
    bottom: 0;
    left: 0;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`

export default MyCart
