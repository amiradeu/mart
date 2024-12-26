import styled from 'styled-components'
import React, { useState } from 'react'

import Superheader from '../Superheader'
import Header from '../Header'
import CategoryFilter from '../CategoryFilter'
import ProductGrid from '../ProductGrid'
import CartShelf from '../CartShelf'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')

    return (
        <Wrapper>
            <ContentWrapper>
                <Superheader />
                <Header />
                <Main>
                    <CategoryFilter
                        category={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <ProductGrid category={selectedCategory} />
                </Main>
            </ContentWrapper>
            <SliderWrapper>
                <CartShelf />
            </SliderWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    isolation: isolate;
    padding-block-start: 50px;
    padding-block-end: 4rem;
`

const Main = styled.main`
    isolation: isolate;
`

const ContentWrapper = styled.div`
    z-index: 1;
`

const SliderWrapper = styled.div`
    position: relative;
    z-index: 2;
`
export default Home
