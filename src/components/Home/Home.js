import styled from 'styled-components'

import Header from '../Header'
import ProductGrid from '../ProductGrid'
import MaxWidthWrapper from '../MaxWidthWrapper'

function Home() {
    return (
        <Wrapper>
            <Header />
            <MaxWidthWrapper>
                <ProductGrid />
            </MaxWidthWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-inline: 2rem;
    padding-block: 1rem 4rem;
`
export default Home
