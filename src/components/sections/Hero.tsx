'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { gsap } from 'gsap'

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

  // Magnetic cursor effect
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

  const textRevealVariants = {
    initial: { y: '100%' },
    animate: { y: '0%' }
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 bg-electric-indigo rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
      />

      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-indigo/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-indigo/5 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-electric-indigo/20" />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={controls}
        >
          {/* Subtitle */}
          <div className="overflow-hidden mb-6">
            <motion.p
              variants={textRevealVariants}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="text-electric-indigo font-mono text-sm md:text-base tracking-wider uppercase"
            >
              Tech & Design Agency
            </motion.p>
          </div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              variants={textRevealVariants}
              transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none"
            >
              Crafting Digital
              <br />
              <span className="text-electric-indigo">Experiences</span>
            </motion.h1>
          </div>

          {/* Description */}
          <div className="overflow-hidden mb-12">
            <motion.p
              variants={textRevealVariants}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.4 }}
              className="text-warm-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We blend cutting-edge technology with exceptional design to create 
              award-winning digital solutions that captivate and convert.
            </motion.p>
          </div>

          {/* CTAs */}
          <div className="overflow-hidden">
            <motion.div
              variants={textRevealVariants}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-electric-indigo/25"
              >
                Start Your Project
                <ArrowRight 
                  size={20} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group border border-electric-indigo text-electric-indigo px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 hover:bg-electric-indigo hover:text-white transition-all duration-300"
              >
                <Play size={20} />
                Watch Our Work
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-warm-gray text-xs font-mono tracking-wider">SCROLL</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-px h-12 bg-gradient-to-b from-electric-indigo to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}