import { useContext, useEffect } from 'react'
import Home from './components/Home'
import { LenisContext } from './components/LenisProvider'

function App() {
    const { scrollToTop } = useContext(LenisContext)
    useEffect(() => {
        scrollToTop()
    }, [])

    return <Home />
}

export default App
