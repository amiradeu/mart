import { useContext, useEffect } from 'react'
import Home from './components/Home'
import { LenisContext } from './components/LenisProvider'

function App() {
    const { scrollToTop } = useContext(LenisContext)
    useEffect(() => {
        scrollToTop()
    }, [])

    console.log('App')

    return <Home />
}

export default App
