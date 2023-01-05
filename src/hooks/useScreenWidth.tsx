import { useEffect, useState } from 'react'


const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])
    
    const isMobile = width <= 768
  return {isMobile}
}

export default useScreenWidth