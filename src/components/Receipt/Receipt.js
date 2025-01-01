import styled from 'styled-components'
import Superheader from '../Superheader'
import Header from '../Header'

function Receipt() {
    return (
        <Wrapper>
            <Superheader />
            <Header showCart={false} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    isolation: isolate;
    padding-block-start: 50px;
    padding-block-end: 4rem;
`

export default Receipt
