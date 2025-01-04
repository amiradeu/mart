import styled from 'styled-components'
import { CartContext } from '../CartProvider'
import { useContext, useEffect, useRef } from 'react'
import Balancer from 'react-wrap-balancer'
import { Link } from 'react-router'
import { X, Download } from 'react-feather'
import { toPng } from 'html-to-image'

import { LenisContext } from '../LenisProvider'

function Receipt() {
    const receiptRef = useRef()
    const downloadRef = useRef()

    const { cart, totalItems, subtotal, totalWeight } = useContext(CartContext)

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

    const handleDownload = async () => {
        // temporarily hide the download button
        downloadRef.current.style.visibility = 'hidden'

        try {
            const dataUrl = await toPng(receiptRef.current, { cacheBust: true })
            const link = document.createElement('a')
            link.download = 'stickermart-myorder.png'
            link.href = dataUrl
            link.click()
        } catch (error) {
            console.log('Failed to generate image:', error)
        } finally {
            // show the download button again
            downloadRef.current.style.visibility = 'visible'
        }
    }

    return (
        <Wrapper onClick={(e) => e.stopPropagation()}>
            <CloseLink to='/'>X</CloseLink>
            <EmptyWrapper />
            <ReceiptWrapper>
                <ReceiptContentWrapper ref={receiptRef} className='receipt'>
                    <Top>
                        <DownloadButton
                            onClick={handleDownload}
                            ref={downloadRef}
                        >
                            <Download />
                        </DownloadButton>
                        <Title>Sticker Mart</Title>
                        <Title>Receipt</Title>
                        <DateWrapper>{today}</DateWrapper>
                    </Top>
                    <Content>
                        <ItemDashedWrapper>
                            <div>NO.</div>
                            <ItemName>ITEM</ItemName>
                            <ItemQty>QTY</ItemQty>
                            <ItemQty>Gram</ItemQty>
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
                                <ItemQty>{item.weight}</ItemQty>
                                <ItemPrice>{item.price.toFixed(2)}</ItemPrice>
                            </ItemWrapper>
                        ))}
                    </Content>
                    <Footer>
                        <DashedWrapper>
                            <FooterWrapper>
                                <span>Sticker Count:</span>
                                <span>{totalItems}</span>
                            </FooterWrapper>
                            <FooterWrapper>
                                <span>Total Weight:</span>
                                <span>{totalWeight} g</span>
                            </FooterWrapper>
                            <FooterWrapper>
                                <span>Total Price:</span>
                                <span>MYR {subtotal.toFixed(2)}</span>
                            </FooterWrapper>
                        </DashedWrapper>
                        <Instruction>
                            Please download the receipt and send it to{' '}
                            <SocialLink href='https://www.instagram.com/amiradeuraseh/'>
                                @amiradeuraseh
                            </SocialLink>{' '}
                            via DM to confirm your order and make the payment.
                        </Instruction>
                        <Ending>Thank you for visiting!</Ending>
                        <Website>mart.amiradeuraseh.com</Website>
                    </Footer>
                </ReceiptContentWrapper>
            </ReceiptWrapper>
            <EmptyWrapper />
        </Wrapper>
    )
}

const EmptyWrapper = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    isolation: isolate;
    min-height: 100vh;
    background-color: var(--color-secondary);
`
const DashedWrapper = styled.div`
    border-top: 1px dashed black;
    border-bottom: 1px dashed black;
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
    color: inherit;
    border: none;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-gray-200);
    }
`

const CloseLink = styled(Link)`
    position: absolute;
    top: 16px;
    right: 16px;

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
        background-color: var(--color-purple);
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
    max-width: 400px;
    font-family: monospace;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;
    gap: 4px;

    border: 1px solid black;
    padding-inline: 16px;
    padding-block: 32px;

    background-color: var(--color-background);

    @media (max-width: 400px) {
        max-width: 320px;
    }
`

const Top = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

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
        minmax(30px, 1fr)
        minmax(100px, 10fr)
        minmax(44px, 1fr)
        minmax(44px, 1fr)
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

// FOOTER --------------------------
const Footer = styled.footer`
    margin-top: 8px;
`
const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
const Instruction = styled.p`
    margin-block-start: 8px;
`
const Ending = styled.p`
    margin-block-start: 16px;
    text-align: center;
`
const SocialLink = styled.a`
    color: var(--color-secondary);
    background-color: black;
    padding-inline: 2px;
`

const Website = styled.p`
    text-transform: lowercase;
    text-align: center;
`

export default Receipt
