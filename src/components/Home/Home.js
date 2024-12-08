import styled from 'styled-components'
import { useState } from 'react'

import Superheader from '../Superheader'
import Header from '../Header'
import ProductGrid from '../ProductGrid'

import CategoryFilter from '../CategoryFilter/CategoryFilter'

function Home() {
    const [selectedCategory, setSelectedCategory] = useState('ALL')
    console.log(selectedCategory)

    return (
        <Wrapper>
            <Superheader />
            {/* <Header /> */}
            <CategoryFilter
                category={selectedCategory}
                onChange={setSelectedCategory}
            />
            <ProductGrid category={selectedCategory} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-block-start: 50px;
    padding-block-end: 4rem;
`
export default Home
