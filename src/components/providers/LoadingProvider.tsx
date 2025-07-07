'use client'

import { useState, useEffect } from 'react'
import { SeveranceLoader } from '@/components/animations/SeveranceLoader'

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already seen the loading animation in this session
    const hasSeenLoader = sessionStorage.getItem('synsera-loaded')
    
    if (hasSeenLoader) {
      setIsLoading(false)
      setHasLoaded(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    sessionStorage.setItem('synsera-loaded', 'true')
    setIsLoading(false)
    setHasLoaded(true)
  }

  if (isLoading) {
    return <SeveranceLoader onComplete={handleLoadingComplete} duration={5000} />
  }

  return <>{children}</>
}