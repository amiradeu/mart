import React from 'react'
import styled, { keyframes } from 'styled-components'

function SlideUpText({ children }) {
    return (
        <Wrapper key={children}>
            <Text>{children}</Text>
        </Wrapper>
    )
}

const slideUp = keyframes`
  from { transform: translateY(100%)}
`

const Wrapper = styled.span`
    display: inline-block;
    position: relative;
    overflow: hidden;

    white-space: nowrap;
    /* border: 1px solid black; */
`

const Text = styled.div`
    animation: ${slideUp} 1s cubic-bezier(0.25, 1, 0.5, 1);
`

export default SlideUpText
