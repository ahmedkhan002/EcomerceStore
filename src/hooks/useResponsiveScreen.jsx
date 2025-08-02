import { useState, useEffect } from 'react'

const useResponsiveScreen = () => {
  const [isXs, setIsXs] = useState(false)
  const [isXl, setIsXl] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsXs(width <= 400)        
      setIsXl(width >= 1160)        
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isXs, isXl }
}

export default useResponsiveScreen
