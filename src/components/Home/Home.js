import styled from 'styled-components'
import { useState } from 'react'

import Superheader from '../Superheader'
import Header from '../Header'
import ProductGrid from '../ProductGrid'

import CategoryFilter from '../CategoryFilter/CategoryFilter'
import Cart from '../Cart/Cart'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')
    console.log(selectedCategory)

    return (
        <Wrapper>
            <Superheader />
            <Header />
            <Main>
                <CategoryFilter
                    category={selectedCategory}
                    onChange={setSelectedCategory}
                />
                <ProductGrid category={selectedCategory} />
            </Main>
            {/* <Cart /> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-block-start: 50px;
    padding-block-end: 4rem;
`

const Main = styled.main`
    padding-block-start: 1rem;
`
export default Home
