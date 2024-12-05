import React from 'react'
import styled from 'styled-components'

function ProductCard({ title, subtitle, price, image, description }) {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <ImageWrapper>
                <Image
                    src={`products/${image}.jpg`}
                    alt={`cover photo for ${title}`}
                ></Image>
            </ImageWrapper>
            <PriceWrapper></PriceWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    grid-column: span 3;

    display: flex;
    flex-direction: column;

    border: 1px solid white;
    border-radius: 2rem;
    padding: 2rem 1rem;
`

const Title = styled.h2`
    align-self: center;
`
const Subtitle = styled.h3`
    align-self: center;
`
const ImageWrapper = styled.div``
const Image = styled.img`
    width: 100%;
    height: 100%;
`

const PriceWrapper = styled.div``

export default ProductCard
