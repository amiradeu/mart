import styled from 'styled-components'

import Header from '../Header'
import ProductGrid from '../ProductGrid'

function Home() {
    return (
        <Wrapper>
            <Header />
            <ProductGrid />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-inline: 2rem;
    padding-block: 1rem 4rem;
`
export default Home
