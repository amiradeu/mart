import React from 'react'
import styled from 'styled-components'

function SliderCart({ closeSlider }) {
    return (
        <Aside>
            <Wrapper>
                <Header>
                    <h3>My Cart</h3>
                    <CloseButton onClick={closeSlider}>X</CloseButton>
                </Header>
                <Body>
                    <p>Your cart is currently empty.</p>
                </Body>
                <Footer>
                    <Total>
                        <p>Subtotal</p>
                        <p>MYR</p>
                    </Total>
                    <CheckoutButton>checkout</CheckoutButton>
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

export default SliderCart
