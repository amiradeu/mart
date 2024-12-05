import { useEffect, useState } from 'react'

function useWindowSizes() {
    const [sizes, setSizes] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
    })

    useEffect(() => {
        function handleWindowResize() {
            setSizes({
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: Math.min(window.devicePixelRatio, 2),
            })
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return sizes
}

export default useWindowSizes
