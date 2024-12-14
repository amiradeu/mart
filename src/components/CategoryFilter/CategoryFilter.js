import React, { useState } from 'react'
import styled from 'styled-components'

import { CATEGORIES } from '../../data'

function CategoryFilter({ category, onChange }) {
    return (
        <Wrapper>
            {CATEGORIES.map(({ name }) => (
                <InputWrapper key={name}>
                    <RadioInput
                        name='current-category'
                        id={name}
                        value={name}
                        checked={name === category}
                        onChange={(event) => {
                            onChange(event.target.value)
                        }}
                    />
                    <Label htmlFor={name}>{name}</Label>
                </InputWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 20px 4px;

    padding: 16px 0;
    border-radius: 2em;
`

const InputWrapper = styled.div`
    &:has(input[type='radio']:checked) {
        animation: bounce 1s;

        @keyframes bounce {
            from {
                scale: 0.8;
            }

            to {
                scale: 1;
            }
        }
    }
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    transition: 0.2s all ease-in;

    &:checked + label {
        color: white;
        box-shadow: inset 0 -40px 0 -1px black;
    }
`

const Label = styled.label`
    cursor: pointer;
    padding: 8px 24px;
    border: 1px solid black;
    border-radius: 4em;
    box-shadow: inset 0 0 0 -1px black;
    transition: all 0.5s ease-in-out;

    &:hover {
        /* color: white;
        box-shadow: inset 0 -40px 0 -1px black; */
        /* background-color: var(--color-secondary); */
    }
`

const Svg = styled.svg``

export default CategoryFilter
