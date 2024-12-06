import styled from 'styled-components'
import { useState } from 'react'

import MaxWidthWrapper from '../MaxWidthWrapper'
import Superheader from '../Superheader'
import Header from '../Header'
import ProductGrid from '../ProductGrid'

import { PRODUCTS } from '../../data'
import { CATEGORY } from '../../data'

function Home() {
    const [data, setData] = useState(PRODUCTS)
    const [filter, setFilter] = useState('none')

    return (
        <Wrapper>
            <Superheader />
            <Header />
            <ProductGrid />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-block-start: 50px;
    padding-block-end: 4rem;
`
export default Home
