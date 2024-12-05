import React from 'react'
import styled from 'styled-components'

import { PRODUCTS } from '../../data'

import ProductCard from '../ProductCard/ProductCard'

function ProductGrid() {
    return (
        <Wrapper>
            {PRODUCTS.map((product, index) => (
                <ProductWrapper>
                    <ProductCard key={index} {...product} />
                </ProductWrapper>
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    gap: 1rem;
`

const ProductWrapper = styled.div`
    min-width: 360px;
    flex: 1;
`
export default ProductGrid
