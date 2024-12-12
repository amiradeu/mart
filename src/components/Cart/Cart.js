import React, { useContext } from 'react'
import styled from 'styled-components'

import { CartContext } from '../CartProvider'

function Cart({ title, subtitle, quantity, image, price }) {
    const { deleteFromCart } = useContext(CartContext)

    return (
        <Wrapper>
            <ImageWrapper>
                <Image
                    src={`products/${image}.jpg`}
                    alt={`cover photo for ${title}`}
                ></Image>
            </ImageWrapper>
            <TitleWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
            <QuantityWrapper>
                <MinusButton>-</MinusButton>
                <Quantity>{quantity}</Quantity>
                <AddButton>+</AddButton>
            </QuantityWrapper>
            <Price>MYR {price}</Price>
            <RemoveButton onClick={() => deleteFromCart(title)}>
                Remove
            </RemoveButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 150px 3fr 1fr;
    grid-template-areas:
        'image title price'
        'image quantity remove';
    gap: 16px;
`

const ImageWrapper = styled.div`
    grid-area: image;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const TitleWrapper = styled.div`
    grid-area: title;
`
const Title = styled.div``
const Subtitle = styled.div``

const QuantityWrapper = styled.div`
    grid-area: quantity;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    width: 100px;
    border: 1px solid black;
    border-radius: 100px;
`

const Quantity = styled.div`
    min-width: 2rem;
    text-align: center;
`

const Button = styled.button`
    flex: 1;
    background: transparent;
    border: none;
    height: 100%;
    /* padding: 8px 16px; */

    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`
const MinusButton = styled(Button)`
    border-radius: 100px 0 0 100px;
`
const AddButton = styled(Button)`
    border-radius: 0 100px 100px 0;
`

const Price = styled.div`
    grid-area: price;
    white-space: nowrap;
`

const RemoveButton = styled.button`
    grid-area: remove;

    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-100);
    }
`

export default Cart
