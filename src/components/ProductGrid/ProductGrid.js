import React from 'react'
import styled from 'styled-components'

import { PRODUCTS } from '../../data'

import ProductCard from '../ProductCard/ProductCard'

function ProductGrid() {
    return (
        <Wrapper>
            {PRODUCTS.map((product, index) => {
                return <ProductCard key={index} {...product} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;

    gap: 1rem;
`
export default ProductGrid
