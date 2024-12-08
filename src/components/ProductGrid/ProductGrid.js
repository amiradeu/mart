import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import ProductCard from '../ProductCard/ProductCard'
import { PRODUCTS } from '../../data'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function ProductGrid({ category }) {
    const containerRef = useRef()

    const filteredProducts =
        category === 'ALL'
            ? PRODUCTS
            : PRODUCTS.filter((product) => {
                  // console.log(product.category.name)
                  return product.category.name === category
              })
    // console.log('filtered: ', filteredProducts)

    useGSAP(
        () => {
            gsap.from('.products', {
                scrollTrigger: {
                    trigger: '.products',

                    // trigger element -> hits the -> viewport
                    start: 'top 80%',
                    end: 'bottom bottom',
                    // end: () => '+=' + '.products'.clientHeight,

                    // viewport: go into view, go pass view, go back to view, pass the start
                    toggleActions: 'restart none none none',

                    // markers: true,
                },
                stagger: {
                    each: 0.1,
                },
                y: '60px',
                opacity: 0,
                duration: 1,
            })
        },
        { scope: containerRef }
    )

    return (
        <Wrapper ref={containerRef}>
            {filteredProducts.map((product, index) => (
                <ProductWrapper className='products' key={index}>
                    <ProductCard {...product} />
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
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
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
