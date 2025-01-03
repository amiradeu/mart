import React from 'react'
import styled from 'styled-components'

function Loading({ progress = 98 }) {
    console.log('Loading')
    return (
        <Wrapper>
            <Loader>loading your experience</Loader>
            <Counter>{progress}</Counter>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--color-secondary);

    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader = styled.h2`
    font-weight: 300;
`

const Counter = styled.h2`
    position: fixed;
    right: 0;
    bottom: 0;

    font-size: 8rem;
    line-height: 90%;

    margin-inline-end: 8px;
    margin-block-end: 8px;
`

export default Loading
