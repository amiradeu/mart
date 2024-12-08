import React from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'
import { QUERIES } from '../../constants'

function ProductCard({ title, subtitle, price, image, description, category }) {
    return (
        <Wrapper>
            <TopWrapper>
                <Title>{title}</Title>
                {/* <span>{category.symbol}</span> */}
            </TopWrapper>
            <ImageWrapper>
                <Image
                    src={`products/${image}.jpg`}
                    alt={`cover photo for ${title}`}
                ></Image>
            </ImageWrapper>
            <BottomWrapper>
                <SubtitleWrapper>
                    <Balancer>
                        <Subtitle>{subtitle}</Subtitle>
                    </Balancer>
                    <Button>+</Button>
                </SubtitleWrapper>
                <Price>MYR{price}</Price>
            </BottomWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const Title = styled.h2`
    font-size: 1rem;
    font-weight: 300;
    padding-block-end: 4px;
`
const ImageWrapper = styled.div`
    padding-block-end: 14px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const BottomWrapper = styled.div`
    width: 100%;
    /* height: 100px; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${QUERIES.tabletAndDown} {
        height: revert;
    }
`

const SubtitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding-block-end: 12px;
`

const Subtitle = styled.h3`
    font-size: 1.2rem;
    font-weight: 300;
    padding-block-end: 4px;
    line-height: 1;
    letter-spacing: -2%;
`
const Price = styled.p`
    font-size: 1rem;
    letter-spacing: 2%;
    line-height: 150%;
    font-weight: 300;
`
const Description = styled.p``

const Button = styled.button`
    width: 24px;
    height: 24px;

    background-color: transparent;
    color: inherit;
    border: 1px solid black;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);

    &:hover {
        background-color: black;
        color: white;
    }
`

export default ProductCard
