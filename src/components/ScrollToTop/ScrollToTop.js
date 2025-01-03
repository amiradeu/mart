import { useEffect } from 'react'
import { useLocation } from 'react-router'

function ScrollToTop() {
    const location = window.location
    console.log('location', location.hash)

    useEffect(() => {
        console.log('Page changed: ', location)
        window.scrollTo(0, 0)
    }, [location])
}

export default ScrollToTop
