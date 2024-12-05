import React from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'

function ProductCard({ title, subtitle, price, image, description }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <PriceWrapper>
                <Price>MYR{price}</Price>
            </PriceWrapper>
            <ImageWrapper>
                <Image
                    src={`products/${image}.jpg`}
                    alt={`cover photo for ${title}`}
                ></Image>
            </ImageWrapper>

            <Balancer>
                <Subtitle>→ {subtitle}</Subtitle>
            </Balancer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    grid-column: span 3;

    display: flex;
    flex-direction: column;

    border-radius: 2rem;
    padding: 2rem 1rem;

    position: relative;
`

const Title = styled.h2`
    font-weight: normal;
`
const Subtitle = styled.h3`
    align-self: center;
    font-weight: normal;
`
const ImageWrapper = styled.div``
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const PriceWrapper = styled.div`
    position: absolute;
    bottom: 20%;
    left: 0%;

    padding-inline: 12px;
    padding-block: 8px;

    background-color: #e4ff5f;
    border-radius: 0.2em;

    display: flex;
    align-items: center;
    justify-content: center;
`
const Price = styled.p``
const Description = styled.p``
export default ProductCard
