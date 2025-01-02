import styled from 'styled-components'
import { CartContext } from '../CartProvider'
import { useContext, useEffect } from 'react'
import Balancer from 'react-wrap-balancer'
import { Link } from 'react-router-dom'
import { X, Download } from 'react-feather'

import { LenisContext } from '../LenisProvider'

function Receipt() {
    const { cart, totalItems, subtotal } = useContext(CartContext)

    const { scrollToTop } = useContext(LenisContext)
    useEffect(() => {
        scrollToTop()
    }, [])

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const date = new Date()
    const today = date.toLocaleDateString('en-US', options)

    const handleDownload = () => {}

    return (
        <Wrapper onClick={(e) => e.stopPropagation()}>
            <ButtonWrapper onClick={handleDownload}>
                <CloseLink to='/'>X</CloseLink>
            </ButtonWrapper>
            <ReceiptWrapper>
                <ReceiptContentWrapper>
                    <Top>
                        <DownloadButton>
                            <Download />
                        </DownloadButton>
                        <Title>Receipt</Title>
                        <DateWrapper>{today}</DateWrapper>
                    </Top>
                    <Content>
                        <ItemDashedWrapper>
                            <div>NO.</div>
                            <ItemName>ITEM</ItemName>
                            <ItemQty>QTY</ItemQty>
                            <ItemPrice>PRICE</ItemPrice>
                        </ItemDashedWrapper>

                        {cart.map((item, index) => (
                            <ItemWrapper key={index}>
                                <div>{String(index + 1).padStart(2, '0')}</div>

                                <ItemName>
                                    <Balancer>
                                        {item.title} - {item.subtitle}
                                    </Balancer>
                                </ItemName>

                                <ItemQty>{item.quantity}</ItemQty>
                                <ItemPrice>{item.price}</ItemPrice>
                            </ItemWrapper>
                        ))}
                    </Content>
                    <Footer>
                        <ItemCount>
                            <span>Item Count:</span>
                            <span>{totalItems}</span>
                        </ItemCount>
                        <Subtotal>
                            <span>Subtotal:</span>
                            <span>MYR {subtotal}</span>
                        </Subtotal>
                    </Footer>
                </ReceiptContentWrapper>
            </ReceiptWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    isolation: isolate;
    min-height: 100%;
`
const DateWrapper = styled.div`
    padding-block-start: 8px;
    align-self: flex-start;
`

const DownloadButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;

    background-color: var(--color-gray-100);
    border: none;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    padding-block-start: 16px;
    padding-inline-end: 16px;
`

const CloseLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border-radius: 100%;

    background-color: black;
    border: none;
    color: white;
    text-decoration: none;

    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-100);
        color: revert;
    }
`

const ReceiptWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const ReceiptContentWrapper = styled.div`
    max-width: 500px;
    font-family: monospace;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    gap: 4px;

    border: 1px solid black;
    padding-inline: 16px;
    padding-block-start: 8px;
    padding-block-end: 32px;

    margin-block-start: 16px;
    margin-block-end: 32px;
    margin-inline: 16px;
`

const Top = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    position: relative;
`

const Title = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const ItemWrapper = styled.div`
    display: grid;
    width: 100%;

    grid-template-columns:
        minmax(44px, 1fr)
        minmax(100px, 10fr)
        minmax(40px, 1fr)
        minmax(60px, 1fr);
`

const ItemDashedWrapper = styled(ItemWrapper)`
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
`

const ItemNo = styled.div``
const ItemName = styled.div``
const ItemQty = styled.div`
    justify-self: end;
`
const ItemPrice = styled.div`
    justify-self: end;
`

const Footer = styled.footer`
    margin-top: 16px;
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
`

const ItemCount = styled.div`
    display: flex;
    justify-content: space-between;
`
const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
`

export default Receipt
