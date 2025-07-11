'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation, easeInOut } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  animation?: 'magnetic' | 'wave' | 'glitch' | 'shimmer' | 'morph' | 'gradient-flow' | 'split-reveal' | 'liquid'
  staggerDelay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export const AnimatedText = ({
  text,
  className = '',
  animation = 'split-reveal',
  staggerDelay = 0.03,
  tag = 'h1'
}: AnimatedTextProps) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()
  const [characters, setCharacters] = useState<string[]>([])

  useEffect(() => {
    // Split into characters for smoother animations
    setCharacters(text.split(''))
  }, [text])

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  const getAnimation = () => {
    switch (animation) {
      case 'magnetic':
        return {
          initial: { y: 100, opacity: 0, filter: 'blur(8px)' },
          animate: { y: 0, opacity: 1, filter: 'blur(0px)' },
          transition: { 
            type: 'spring' as const, 
            damping: 12, 
            stiffness: 200,
            mass: 0.8
          }
        }
      
      case 'liquid':
        return {
          initial: { 
            y: 100, 
            opacity: 0, 
            scaleY: 0.3,
            filter: 'blur(10px)'
          },
          animate: { 
            y: 0, 
            opacity: 1, 
            scaleY: 1,
            filter: 'blur(0px)'
          },
          transition: { 
            type: 'spring' as const,
            damping: 15,
            stiffness: 150,
            mass: 1.2
          }
        }
      
      case 'split-reveal':
        return {
          initial: { 
            y: '100%', 
            opacity: 0,
            rotateX: 90
          },
          animate: { 
            y: '0%', 
            opacity: 1,
            rotateX: 0
          },
          transition: { 
            duration: 0.8, 
            ease: easeInOut
          }
        }
      
      case 'glitch':
        return {
          initial: {
            x: 0,
            opacity: 1,
            filter: 'hue-rotate(0deg)'
          },
          animate: {
            x: [0, -3, 3, -2, 2, 0],
            opacity: [1, 0.8, 1, 0.9, 1],
            filter: [
              'hue-rotate(0deg)',
              'hue-rotate(90deg)',
              'hue-rotate(0deg)',
              'hue-rotate(-90deg)',
              'hue-rotate(0deg)'
            ]
          },
          transition: { 
            duration: 0.6, 
            repeat: Infinity, 
            repeatDelay: 3,
            ease: easeInOut
          }
        }
      
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 }
        }
    }
  }

  const getWrapperStyle = () => {
    switch (animation) {
      case 'shimmer':
      case 'gradient-flow':
        return {
          background: 'linear-gradient(110deg, transparent 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 70%, transparent 100%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          animation: `shimmer 3s ease-in-out infinite`,
          willChange: 'background-position'
        }
      default:
        return {}
    }
  }

  const MotionTag = motion[tag] as any

  return (
    <MotionTag
      ref={ref}
      className={`inline-block ${className}`}
      style={{ 
        perspective: '1000px',
        ...getWrapperStyle()
      }}
    >
      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: -200% 0; }
          50% { background-position: 200% 0; }
        }
      `}</style>
      
      {animation === 'split-reveal' || animation === 'magnetic' || animation === 'liquid' ? (
        <span style={{ display: 'inline-block', overflow: 'hidden' }}>
          {characters.map((char, index) => (
            <motion.span
              key={index}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'bottom center'
              }}
              variants={getAnimation()}
              initial="initial"
              animate={controls}
              transition={{
                ...getAnimation().transition,
                delay: index * staggerDelay
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ) : (
        <motion.span
          variants={getAnimation()}
          initial="initial"
          animate={animation === 'glitch' ? 'animate' : controls}
          style={{ display: 'inline-block' }}
        >
          {text}
        </motion.span>
      )}
    </MotionTag>
  )
}