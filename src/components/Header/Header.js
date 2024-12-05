import React from 'react'
import styled from 'styled-components'
import { QUERIES } from '../../constants'

function Header() {
    return (
        <MainHeader>
            <Title>Sticker Mart</Title>
            <AuthorLink href='https://www.instagram.com/amiradeuraseh/'>
                by AmiraDeuraseh
            </AuthorLink>
        </MainHeader>
    )
}

const MainHeader = styled.div`
    display: flex;

    gap: 1em;

    align-items: baseline;
    justify-content: center;

    padding: 16px;

    @media ${QUERIES.tabletAndDown} {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const Title = styled.h1`
    font-size: 4rem;
    line-height: 1;
    letter-spacing: -2%;
`

const AuthorLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export default Header
