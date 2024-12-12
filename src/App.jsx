import CartProvider from './components/CartProvider'
import { Provider } from 'react-wrap-balancer'

import Home from './components/Home'

function App() {
    return (
        <CartProvider>
            <Provider>
                <Home />
            </Provider>
        </CartProvider>
    )
}

export default App
