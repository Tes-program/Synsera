'use client'

import { useState, useEffect } from 'react'
import { MatrixSeveranceLoader } from '@/components/animations/MatrixSeveranceLoader'

interface LoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Always show the loader - it's part of the brand experience
    // The user expects this epic loading every time they visit
    setIsLoading(true)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return (
      <MatrixSeveranceLoader 
        onComplete={handleLoadingComplete} 
        duration={6000}
      />
    )
  }

  return <>{children}</>
}