import styled from 'styled-components'

import Header from '../Header'
import ProductGrid from '../ProductGrid'
import MaxWidthWrapper from '../MaxWidthWrapper'
import { useState } from 'react'

import { PRODUCTS } from '../../data'
import { CATEGORY } from '../../data'

function Home() {
    const [data, setData] = useState(PRODUCTS)
    const [filter, setFilter] = useState('none')

    return (
        <Wrapper>
            <Header />
            <ProductGrid />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-block-end: 4rem;
`
export default Home
