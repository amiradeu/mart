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
    /* background-color: #d0aaf1; */

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1px;
`

const ProductWrapper = styled.a`
    /* background-color: #f2f2f2; */

    border: 1px solid var(--color-gray-200);
    /* &:not(:last-of-type) {
        border-bottom: 1px solid var(--color-gray-200);
    } */

    cursor: pointer;
    &:hover {
        background-color: var(--color-gray-100);
    }
`
export default ProductGrid
