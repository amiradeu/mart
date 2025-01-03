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
    gap: 0px 4px;

    margin: 16px 0;
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

    /* Animate Label when radio is selected */
    &:checked + label {
        color: white;
    }

    &:checked + label::before {
        transform: translateY(0);
    }
`

const Label = styled.label`
    cursor: pointer;
    padding: 8px 24px;
    border: 1px solid black;
    border-radius: 4em;
    transition: color 0.5s ease-in-out;

    position: relative;
    display: inline-block;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4em;
        background-color: black;
        transform: translateY(100%);
        transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
        z-index: -1;
    }
`

export default CategoryFilter
