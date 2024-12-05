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
    justify-content: space-between;
`

const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    padding-block-end: 14px;
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
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${QUERIES.tabletAndDown} {
        height: revert;
    }
`

const SubtitleWrapper = styled.div``

const Subtitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 300;
    padding-block-end: 4px;
    line-height: 1;
    letter-spacing: -2%;
`
const Price = styled.p`
    font-size: 1.2rem;
    letter-spacing: 2%;
    font-weight: 300;
`
const Description = styled.p``

export default ProductCard
