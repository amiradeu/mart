import React, { useContext } from 'react'
import styled from 'styled-components'

import { CartContext } from '../CartProvider'
import { QUERIES } from '../../constants'
import Balancer from 'react-wrap-balancer'

function Cart({ title, subtitle, quantity, image, price }) {
    const { deleteFromCart, addQuantity, subtractQuantity } =
        useContext(CartContext)

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
                <Balancer>
                    <Subtitle>{subtitle}</Subtitle>
                </Balancer>
            </TitleWrapper>
            <QuantityWrapper>
                <MinusButton onClick={() => subtractQuantity(title)}>
                    -
                </MinusButton>
                <Quantity>{quantity}</Quantity>
                <AddButton onClick={() => addQuantity(title)}>+</AddButton>
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
    grid-template-columns: minmax(120px, 2fr) 3fr 1fr;
    grid-template-areas:
        'image title price'
        'image quantity remove';
    gap: 16px;

    @media ${QUERIES.tabletAndDown} {
        gap: 8px;
    }
`

const ImageWrapper = styled.div`
    grid-area: image;

    aspect-ratio: 1/1;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const TitleWrapper = styled.div`
    grid-area: title;
`
const Title = styled.div`
    font-size: 1rem;
`
const Subtitle = styled.div`
    font-size: 0.9rem;
    font-weight: 300;
    color: var(--color-gray-700);
`

const QuantityWrapper = styled.div`
    grid-area: quantity;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 36px;
    width: 100px;
    border: 1px solid black;
    border-radius: 100px;

    @media ${QUERIES.tabletAndDown} {
        height: 32px;
    }
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
    color: inherit;
`
const AddButton = styled(Button)`
    border-radius: 0 100px 100px 0;
    color: inherit;
`

const Price = styled.p`
    grid-area: price;
    white-space: nowrap;

    font-size: 0.9rem;
    text-align: center;
`

const RemoveButton = styled.button`
    grid-area: remove;

    background-color: transparent;
    color: inherit;

    border: none;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-100);
    }
`

export default Cart
