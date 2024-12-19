import React, { useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

function LenisProvider({ children }) {
    const lenisRef = useRef()

    const lenis = useLenis((lenis) => {
        console.log('lenis in callback', lenis)
    })

    return (
        <ReactLenis
            root
            options={{ autoRaf: true }}
            className='lenisWrapper'
            ref={lenisRef}
        >
            {children}
        </ReactLenis>
    )
}

export default LenisProvider
