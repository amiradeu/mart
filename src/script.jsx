import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Router Pages
import App from './App'
import Error from './components/Error'
import MyCart from './components/MyCart'

import { Provider } from 'react-wrap-balancer'
import CartProvider from './components/CartProvider'
import LenisProvider from './components/LenisProvider'
import GlobalStyles from './components/GlobalStyles'

const root = createRoot(document.querySelector('#root'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },
    {
        path: '/mycart',
        element: <MyCart />,
    },
])

root.render(
    <React.StrictMode>
        <Provider>
            <CartProvider>
                {/* <LenisProvider> */}
                <RouterProvider router={router} />
                <GlobalStyles />
                {/* </LenisProvider> */}
            </CartProvider>
        </Provider>
    </React.StrictMode>
)
