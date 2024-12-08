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
        border-color: black;
        background-color: var(--color-secondary);
        color: black;
    }
`

const Label = styled.label`
    cursor: pointer;
    padding: 4px 16px;
    border: 1px solid var(--color-gray-200);
    border-radius: 1em;

    &:hover {
        background-color: var(--color-gray-100);
    }
`

export default CategoryFilter
