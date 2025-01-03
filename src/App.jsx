import { useContext, useEffect } from 'react'
import Home from './components/Home'
import { LenisContext } from './components/LenisProvider'
import { LoadingContext } from './components/LoadingProvider'

function App() {
    const { scrollToTop } = useContext(LenisContext)
    const { resetProgress } = useContext(LoadingContext)

    useEffect(() => {
        scrollToTop()
        resetProgress()
    }, [])

    console.log('App')

    return <Home />
}

export default App
