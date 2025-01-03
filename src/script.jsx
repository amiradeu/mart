import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

// Global Components
import AppProvider from './components/AppProvider'
import GlobalStyles from './components/GlobalStyles'

// Router Pages
import Error from './components/Error'
import Loading from './components/Loading'

const LazyApp = lazy(() => import('./App'))
const LazyReceipt = lazy(() => import('./components/Receipt'))

const root = createRoot(document.querySelector('#root'))
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <LazyApp />
            </Suspense>
        ),
        errorElement: <Error />,
    },
    {
        path: '/mycart',
        element: (
            <Suspense fallback={<Loading />}>
                <LazyReceipt />
            </Suspense>
        ),
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
