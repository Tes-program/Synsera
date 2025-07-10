// src/components/ui/AnimatedText.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, cubicBezier, easeInOut } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  animation?: 'split' | 'wave' | 'glitch' | 'shimmer' | 'morph' | 'gradient-flow'
  staggerDelay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

export const AnimatedText = ({
  text,
  className = '',
  animation = 'split',
  staggerDelay = 0.05,
  tag = 'h1'
}: AnimatedTextProps) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [words, setWords] = useState<string[]>([])

  useEffect(() => {
    setWords(text.split(' '))
  }, [text])

  const getAnimation = () => {
    switch (animation) {
      case 'split':
        return {
          initial: { y: 100, opacity: 0, rotateX: 90 },
          animate: { y: 0, opacity: 1, rotateX: 0 },
          transition: { duration: 0.8, ease: cubicBezier(0.43, 0.13, 0.23, 0.96) }
        }
      case 'wave':
        return {
          initial: { y: 0 },
          animate: { y: [-10, 0, -10] },
          transition: { duration: 2, repeat: Infinity, ease: easeInOut }
        }
      case 'glitch':
        return {
          initial: { x: 0 },
          animate: { x: [0, -2, 2, -2, 2, 0] },
          transition: { duration: 0.5, repeat: Infinity, repeatDelay: 3 }
        }
      case 'shimmer':
        return {
          initial: { backgroundPosition: '0% 50%' },
          animate: { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] },
          transition: { duration: 3, repeat: Infinity, ease: easeInOut }
        }
      case 'morph':
        return {
          initial: { scale: 1, rotateZ: 0 },
          animate: { 
            scale: [1, 1.05, 0.95, 1.02, 1],
            rotateZ: [0, 2, -2, 1, 0]
          },
          transition: { duration: 4, repeat: Infinity, ease: easeInOut }
        }
      default:
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 }
        }
    }
  }

  const getTextStyle = () => {
    switch (animation) {
      case 'shimmer':
        return {
          background: 'linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899, #F59E0B, #6366F1)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }
      case 'gradient-flow':
        return {
          background: 'linear-gradient(45deg, #00FFFF, #6366F1, #8B5CF6, #00FFFF)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient-flow 3s ease-in-out infinite'
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
      style={getTextStyle()}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={getAnimation()}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{
              ...getAnimation().transition,
              delay: index * staggerDelay
            }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 && <span className="inline-block w-2" />}
        </span>
      ))}
    </MotionTag>
  )
}