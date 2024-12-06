import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ArrowUpRight } from 'react-feather'

function Superheader() {
    const contentRef = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(contentRef.current.clientWidth)
    }, [])

    return (
        <Wrapper>
            <Link href='https://linktr.ee/fundsforgaza' target='_blank'></Link>
            <Marquee
                style={{ '--contentWidth': `${width}px` }}
                aria-hidden='true'
            >
                {[...Array(20)].map((number, index) => (
                    <Content key={index} ref={contentRef}>
                        <span>Free Palestine </span>
                        <ArrowUpRight size={14} />
                        <Donate>10% goes to Donation</Donate>
                    </Content>
                ))}
            </Marquee>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50px;
    overflow: hidden;

    background-color: #262626;
    color: var(--color-white);

    isolation: isolate;

    display: flex;
`

const Marquee = styled.div`
    --gap: 12px;

    height: 100%;

    display: flex;
    align-items: center;

    position: relative;

    animation: scroll 10s linear infinite;

    @keyframes scroll {
        to {
            transform: translateX(calc(-1 * var(--contentWidth)));
        }
    }
`

const Content = styled.div`
    font-size: 0.9rem;
    padding: 0 var(--gap);
    white-space: nowrap;
`

const Link = styled.a`
    color: var(--color-white);
    text-decoration: none;
    font-weight: 500;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
        color: deeppink;
        // pause animation
        ${Content} {
            animation-play-state: paused;
        }
    }
`

const Donate = styled.span`
    margin-inline-start: 12px;
`

export default Superheader
