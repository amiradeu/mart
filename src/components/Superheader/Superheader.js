import React from 'react'
import styled from 'styled-components'

function Superheader() {
    return (
        <Wrapper>
            <Link href='https://linktr.ee/fundsforgaza'>
                <Marquee aria-hidden='true'>
                    {[...Array(12)].map((number, index) => (
                        <Content key={index}>Free Palestine</Content>
                    ))}
                </Marquee>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 50px;

    background-color: #262626;
    color: var(--color-white);

    isolation: isolate;
`

const Marquee = styled.div`
    --gap: 16px;

    height: 100%;
    overflow: hidden;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: var(--gap);

    position: relative;
`

const Content = styled.div`
    white-space: nowrap;

    animation: scroll 4s linear infinite;

    @keyframes scroll {
        to {
            transform: translateX(calc(-100% - var(--gap)));
        }
    }
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

export default Superheader
