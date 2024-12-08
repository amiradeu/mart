import React from 'react'
import styled from 'styled-components'

function Cart() {
    return (
        <Aside>
            <Wrapper>
                <Header>
                    <span>←</span>
                    <h3>My Cart</h3>
                </Header>
                <Body>
                    <p>Your cart is currently empty.</p>
                </Body>
                <Footer>
                    <Total>
                        <p>Subtotal</p>
                        <p>MYR</p>
                    </Total>
                    <Button>checkout</Button>
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
    margin-bottom: 20px;
`

const Body = styled.div`
    flex: 1;
`

const Footer = styled.div`
    border-top: 1px solid black;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 16px 0;
`

const Button = styled.button`
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

export default Cart
