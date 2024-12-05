import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Router Pages
import App from './App'
import Error from './components/Error'

import GlobalStyles from './components/GlobalStyles'

const root = createRoot(document.querySelector('#root'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <GlobalStyles />
    </React.StrictMode>
)
