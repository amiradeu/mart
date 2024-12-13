import React, { useState } from 'react'
import styled from 'styled-components'

import { CATEGORIES } from '../../data'

const ALL = 'ALL'

function CategoryFilter({ category, onChange }) {
    return (
        <Wrapper>
            <Group>
                <Radio
                    name='current-category'
                    id={ALL}
                    value={ALL}
                    checked={ALL === category}
                    onChange={(event) => {
                        onChange(event.target.value)
                    }}
                />
                <Label htmlFor={ALL}>{ALL}</Label>
            </Group>

            {CATEGORIES.map(({ name }) => (
                <Group key={name}>
                    <Radio
                        name='current-category'
                        id={name}
                        value={name}
                        checked={name === category}
                        onChange={(event) => {
                            onChange(event.target.value)
                        }}
                    />
                    <Label htmlFor={name}>{name}</Label>
                </Group>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    gap: 16px 4px;

    padding: 16px 0;
    border-radius: 2em;
`

const Group = styled.div``

const Radio = styled.input.attrs({ type: 'radio' })`
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    transition: 0.2s all linear;

    &:checked + label {
        background-color: black;
        color: white;
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
        color: white;
        box-shadow: inset 0 -40px 0 -1px black;
        /* background-color: var(--color-secondary); */
    }
`

export default CategoryFilter
