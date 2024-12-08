import styled from 'styled-components'
import { useState } from 'react'

import Superheader from '../Superheader'
import Header from '../Header'
import CategoryFilter from '../CategoryFilter'
import ProductGrid from '../ProductGrid'
import SliderCart from '../SliderCart'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')
    const [cartOpen, setCartOpen] = useState(true)

    const toggleCartOpen = () => {
        setCartOpen((currentCartOpen) => !currentCartOpen)
    }
    console.log(selectedCategory)

    return (
        <Wrapper>
            <ContentWrapper>
                <Superheader />
                <Header onChange={toggleCartOpen} />
                <Main>
                    <CategoryFilter
                        category={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <ProductGrid category={selectedCategory} />
                </Main>
            </ContentWrapper>
            <SliderWrapper>
                {cartOpen && <SliderCart closeSlider={toggleCartOpen} />}
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
    padding-block-start: 1rem;
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
