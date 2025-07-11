// Enhanced Hero.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { AnimatedText } from '@/components/ui/AnimatedText'

export const Hero = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  // Magnetic mouse effect for enhanced interactivity
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
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
      {/* Enhanced Background with Depth */}
      <div className="absolute inset-0">
        {/* Primary Gradient Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-cyan-500 via-blue-500 to-electric-indigo rounded-full blur-3xl"
        />
        
        {/* Interactive Particle System */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-indigo/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dynamic Grid Pattern */}
        <motion.div 
          animate={{ 
            opacity: [0.02, 0.1, 0.02],
            scale: [1, 1.02, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border border-electric-indigo/10"
                animate={{ 
                  borderColor: [
                    'rgba(99, 102, 241, 0.05)', 
                    'rgba(99, 102, 241, 0.3)', 
                    'rgba(99, 102, 241, 0.05)'
                  ] 
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: i * 0.02,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Animated Subtitle with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={controls}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-electric-indigo/10 border border-electric-indigo/30 rounded-full px-6 py-3 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-electric-indigo animate-pulse" />
            <AnimatedText
              text="TECH & DESIGN AGENCY"
              animation="shimmer"
              className="text-electric-indigo font-mono text-sm tracking-wider uppercase"
              tag="span"
            />
          </div>
        </motion.div>

        {/* Epic Main Heading with Liquid Animation */}
        <div className="mb-8 space-y-4">
          <div className="overflow-hidden">
            <AnimatedText
              text="Crafting Digital"
              animation="liquid"
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none block"
              tag="h1"
              staggerDelay={0.05}
            />
          </div>
          <div className="overflow-hidden">
            <AnimatedText
              text="Experiences"
              animation="gradient-flow"
              className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none block bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 bg-clip-text text-transparent"
              tag="span"
              staggerDelay={0.08}
            />
          </div>
        </div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={controls}
          transition={{ duration: 1, delay: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-12"
        >
          <p className="text-warm-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We blend cutting-edge technology with exceptional design to create{' '}
            <span className="relative">
              <span className="text-electric-indigo font-semibold bg-electric-indigo/10 px-2 py-1 rounded">
                award-winning digital solutions
              </span>
            </span>{' '}
            that captivate and convert.
          </p>
        </motion.div>

        {/* Enhanced CTAs with Magnetic Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 1, delay: 1.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA with Advanced Effects */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(99, 102, 241, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 overflow-hidden transition-all duration-500"
          >
            {/* Animated Background Layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative z-10 flex items-center gap-3">
              Start Your Project
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-2" 
              />
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(99, 102, 241, 1)',
              backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group border-2 border-electric-indigo/50 text-electric-indigo px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 transition-all duration-300 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Play size={20} className="group-hover:text-white transition-colors duration-300" />
            </motion.div>
            <span className="group-hover:text-white transition-colors duration-300">
              Watch Our Magic
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-4">
            <span className="text-warm-gray text-xs font-mono tracking-wider uppercase">
              Scroll to Explore
            </span>
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-px h-20 bg-gradient-to-b from-electric-indigo via-purple-500 to-transparent" />
              <motion.div
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-electric-indigo rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}