// src/components/sections/Hero.tsx
'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { gsap } from 'gsap'
import { AnimatedText } from '@/components/ui/AnimatedText'

export const Hero = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  // Enhanced magnetic cursor effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black"
    >
      {/* Enhanced Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-electric-indigo rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="absolute inset-0 bg-electric-indigo rounded-full animate-pulse opacity-30" />
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 via-blue-500 to-electric-indigo rounded-full blur-3xl"
        />
        
        {/* Animated Grid Pattern */}
        <motion.div 
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border border-electric-indigo/20"
                animate={{ borderColor: ['rgba(99, 102, 241, 0.1)', 'rgba(99, 102, 241, 0.3)', 'rgba(99, 102, 241, 0.1)'] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.01 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <AnimatedText
            text="TECH & DESIGN AGENCY"
            animation="shimmer"
            className="text-electric-indigo font-mono text-sm md:text-base tracking-wider uppercase"
            tag="p"
          />
        </motion.div>

        {/* Epic Main Heading */}
        <div className="mb-8">
          <AnimatedText
            text="Crafting Digital"
            animation="split"
            className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none block mb-4"
            tag="h1"
            staggerDelay={0.1}
          />
          <AnimatedText
            text="Experiences"
            animation="gradient-flow"
            className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none block"
            tag="span"
            staggerDelay={0.15}
          />
        </div>

        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-warm-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We blend cutting-edge technology with exceptional design to create 
            <span className="text-electric-indigo font-semibold"> award-winning digital solutions</span> that captivate and convert.
          </p>
        </motion.div>

        {/* Enhanced CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA with Enhanced Effects */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.3)',
              background: 'linear-gradient(45deg, #6366F1, #8B5CF6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 overflow-hidden transition-all duration-300"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight 
              size={20} 
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(99, 102, 241, 1)',
              color: '#6366F1'
            }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-electric-indigo/50 text-electric-indigo px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 hover:bg-electric-indigo/10 transition-all duration-300"
          >
            <Play size={20} className="group-hover:animate-pulse" />
            Watch Our Magic
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-warm-gray text-xs font-mono tracking-wider">SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-electric-indigo via-purple-500 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}