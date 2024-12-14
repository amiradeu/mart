import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import Balancer from 'react-wrap-balancer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Plus } from 'react-feather'

import { CartContext } from '../CartProvider'
import { QUERIES } from '../../constants'

function ProductCard({ title, subtitle, price, image, category, description }) {
    const { addToCart, cartPosition } = useContext(CartContext)
    const circleRef = useRef()

    const { contextSafe } = useGSAP(() => {})

    const handleClick = contextSafe(() => {
        addToCart({ title, subtitle, image, price })

        // const tl = gsap.timeline()
        // const { right, y } = circleRef.current.getBoundingClientRect()
        // // console.log('circle', right, y)

        // tl.set(circleRef.current, {
        //     opacity: 100,
        // })

        // tl.to(circleRef.current, {
        //     x: cartPosition.x - right + 'px',
        //     y: -y + 'px',
        //     duration: 2,
        // })
    })

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
                    <ButtonWrapper>
                        <Button onClick={handleClick}>+</Button>
                        <Circle ref={circleRef}></Circle>
                    </ButtonWrapper>
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

const ButtonWrapper = styled.div`
    position: relative;
`

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

const Circle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 24px;
    height: 24px;
    border-radius: 100px;

    background-color: deeppink;
    opacity: 0;
`

export default ProductCard
