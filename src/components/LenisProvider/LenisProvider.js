import React, { createContext, useCallback, useMemo, useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

export const LenisContext = createContext()

function LenisProvider({ children }) {
    const lenisRef = useRef()

    const lenis = useLenis((lenis) => {
        console.log('lenis in callback', lenis)
    })

    const stopLenis = useCallback(() => {
        if (lenis) {
            lenis.stop()
        }
    })

    const startLenis = useCallback(() => {
        if (lenis) {
            lenis.start()
        }
    })

    const scrollToTop = useCallback(() => {
        if (lenis) {
            lenis.scrollTo(0, 0)
        }
    })

    const value = useMemo(() => ({
        lenisRef,
        stopLenis,
        startLenis,
        scrollToTop,
    }))

    return (
        <LenisContext.Provider value={value}>
            <ReactLenis root ref={lenisRef}>
                {children}
            </ReactLenis>
        </LenisContext.Provider>
    )
}

export default LenisProvider
