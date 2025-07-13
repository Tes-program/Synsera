// src/components/ui/AnimatedText.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

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

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  const MotionTag = motion[tag] as any

  // For gradient-flow, use CSS animation instead of JS
  if (animation === 'gradient-flow') {
    return (
      <MotionTag
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {text}
      </MotionTag>
    )
  }

  // Simplified animations for better performance
  const words = text.split(' ')
  
  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: wordIndex * 0.1,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  )
}