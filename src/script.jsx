import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Router Pages
import App from './App'
import Error from './components/Error'
import MyCart from './components/MyCart'

// Global Components
import AppProvider from './components/AppProvider'
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
        <AppProvider>
            <RouterProvider router={router} />
            <GlobalStyles />
        </AppProvider>
    </React.StrictMode>
)
