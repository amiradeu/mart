import React, { createContext, useCallback, useMemo } from 'react'

export const LoadingContext = createContext()

function LoadingProvider({ children }) {
    const [progress, setProgress] = React.useState(0)

    const randomIncrement = useCallback(() => {
        setProgress((prev) => {
            const next = prev + Math.floor(Math.random() * 10) + 1
            return next >= 100 ? 100 : next
        })
    })

    const resetProgress = useCallback(() => {
        setProgress(0)
    })

    const startLoading = useCallback(() => {
        const delay = Math.floor(Math.random() * 200) + 50
        const timeout = setTimeout(randomIncrement, delay)

        return () => clearTimeout(timeout)
    })

    const value = useMemo(() => ({
        progress,
        startLoading,
        resetProgress,
    }))

    return (
        <LoadingContext.Provider value={value}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider
