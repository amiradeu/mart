import React from 'react'

function useKeydown(key, callback) {
    React.useEffect(() => {
        function handleEscapeKey(event) {
            if (event.code === key) callback(event)
        }
        window.addEventListener('keydown', handleEscapeKey)

        return () => {
            window.removeEventListener('keydown', handleEscapeKey)
        }
    }, [])
    return null
}

export default useKeydown
