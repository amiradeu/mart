import React from 'react'
import { Provider } from 'react-wrap-balancer'
import CartProvider from '../CartProvider'
import LenisProvider from '../LenisProvider'
import LoadingProvider from '../LoadingProvider'

function AppProvider({ children }) {
    return (
        <Provider>
            <LoadingProvider>
                <CartProvider>
                    <LenisProvider>{children}</LenisProvider>
                </CartProvider>
            </LoadingProvider>
        </Provider>
    )
}

export default AppProvider
