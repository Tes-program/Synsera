'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface CursorProviderProps {
  children: React.ReactNode
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    
    if (!cursor || !follower) return

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 0,
        opacity: 0,
        duration: 0.3,
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Custom Cursor - Only show on desktop */}
      <div className="hidden lg:block">
        <div
          ref={cursorRef}
          className="fixed w-4 h-4 bg-electric-indigo rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        <div
          ref={followerRef}
          className="fixed w-8 h-8 border border-electric-indigo rounded-full pointer-events-none z-50"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </div>
      {children}
    </>
  )
}