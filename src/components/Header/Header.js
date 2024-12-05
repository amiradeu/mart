import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <MainHeader>
            <h1>Sticker Mart</h1>
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

    padding-block: 2em;
`

const AuthorLink = styled.a`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

export default Header
