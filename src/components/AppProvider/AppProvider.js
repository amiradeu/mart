import React from 'react'
import { Provider } from 'react-wrap-balancer'
import CartProvider from '../CartProvider'
import LenisProvider from '../LenisProvider'

function AppProvider({ children }) {
    return (
        <Provider>
            <CartProvider>
                {/* <LenisProvider> */}
                {children}
                {/* </LenisProvider> */}
            </CartProvider>
        </Provider>
    )
}

export default AppProvider
