// src/components/providers/SmoothScrollProvider.tsx
'use client'

import { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

interface SmoothScrollProviderProps {
  children: React.ReactNode
}

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locomotiveRef = useRef<LocomotiveScroll | null>(null)

  useEffect(() => {
    if (!scrollRef.current) return

    // Initialize Locomotive Scroll
    locomotiveRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8, // Lower = smoother but less responsive
      lerp: 0.05, // Lower = smoother
      class: 'is-reveal',
      smartphone: {
        smooth: false, // Disable on mobile for better performance
      },
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
    })

    // Update locomotive scroll
    const handleResize = () => {
      locomotiveRef.current?.update()
    }

    // Scroll to top on load
    locomotiveRef.current.scrollTo(0, { duration: 0 })

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      locomotiveRef.current?.destroy()
    }
  }, [])

  // Update on route change
  useEffect(() => {
    locomotiveRef.current?.update()
  })

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  )
}