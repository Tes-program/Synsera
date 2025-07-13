// src/components/sections/Hero.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export const Hero = () => {
  const controls = useAnimation()
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  
  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Parallax transforms
  const backgroundX = useTransform(mouseX, [-1, 1], [-30, 30])
  const backgroundY = useTransform(mouseY, [-1, 1], [-30, 30])
  const textX = useTransform(mouseX, [-1, 1], [-15, 15])
  const textY = useTransform(mouseY, [-1, 1], [-15, 15])
  
  const [isHovered, setIsHovered] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Experiences', 'Solutions', 'Innovations', 'Excellence']
  
  // Interactive canvas for dynamic effects
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<any[]>([])
  const animationFrameRef = useRef<number>()
  const mousePositionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start('animate')
    }
  }, [isInView, controls])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      
      mouseX.set(x)
      mouseY.set(y)
      
      mousePositionRef.current = { x: clientX, y: clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  // Interactive particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      targetX: number
      targetY: number
      color: string
      angle: number
      waveAmplitude: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.targetX = this.x
        this.targetY = this.y
        this.color = ['#6366F1', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 3)]
        this.angle = Math.random() * Math.PI * 2
        this.waveAmplitude = Math.random() * 50 + 20
      }

      update() {
        // Wave motion
        this.angle += 0.02
        this.x += Math.sin(this.angle) * 0.5
        this.y += Math.cos(this.angle) * 0.3

        // Mouse interaction
        const dx = mousePositionRef.current.x - this.x
        const dy = mousePositionRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          this.x -= (dx / distance) * force * 5
          this.y -= (dy / distance) * force * 5
        }

        // Natural movement
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas!.width
        if (this.x > canvas!.width) this.x = 0
        if (this.y < 0) this.y = canvas!.height
        if (this.y > canvas!.height) this.y = 0

        // Fade based on movement
        this.opacity = Math.sin(this.angle) * 0.3 + 0.4
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 15
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Create particles
    const particleCount = 80
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 100) * 0.2
            ctx.strokeStyle = '#6366F1'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
      particlesRef.current = []
    }
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Morphing gradient orbs with parallax */}
        <motion.div
          style={{ x: backgroundX, y: backgroundY }}
          className="absolute inset-0"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />
        </motion.div>

        {/* Animated grid with perspective */}
        <motion.div 
          className="absolute inset-0"
          style={{
            perspective: '1000px',
            opacity: isHovered ? 0.15 : 0.05,
          }}
          animate={{
            rotateX: isHovered ? 5 : 0,
            rotateY: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              transform: 'rotateX(60deg)',
              transformOrigin: 'center center',
            }}
          />
        </motion.div>
      </div>

      {/* Main Content with parallax */}
      <motion.div 
        style={{ x: textX, y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-electric-indigo/10 to-purple-500/10 border border-electric-indigo/30 rounded-full px-6 py-3 backdrop-blur-sm relative overflow-hidden group cursor-pointer"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-indigo/20 to-purple-500/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <Sparkles className="w-4 h-4 text-electric-indigo animate-pulse relative z-10" />
            <span className="text-electric-indigo font-mono text-sm tracking-wider uppercase relative z-10">
              TECH & DESIGN AGENCY
            </span>
          </motion.div>
        </motion.div>

        {/* Epic Main Heading with split text effect */}
        <motion.div 
          className=""
        >
          {/* First Line with character animation */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[0.9] font-bold"
            >
              {'Crafting Digital'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0, rotateX: -90 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1, 
                    rotateX: 0,
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5 + i * 0.03,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block"
                  style={{ transformOrigin: 'bottom center' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2) translateY(-10px)'
                    e.currentTarget.style.color = '#6366F1'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)'
                    e.currentTarget.style.color = '#FFFFFF'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>
          
          {/* Second Line with rotating words */}
          <div className="overflow-hidden h-[3em] md:h-[5.7em] relative mb-6">
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.9] font-bold absolute w-full"
            >
              {words.map((word, index) => (
                <motion.span
                  key={word}
                  className="absolute w-full block bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{
                    y: currentWord === index ? 0 : -100,
                    opacity: currentWord === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  style={{
                    backgroundSize: '200% 100%',
                    animation: 'gradient-flow 3s ease infinite',
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>
        </motion.div>

        {/* Animated Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <motion.p 
            className="text-warm-gray text-base sm:text-lg md:text-xl leading-relaxed"
            animate={{
              opacity: isHovered ? 1 : 0.8,
            }}
          >
            We blend cutting-edge technology with exceptional design to create{' '}
            <motion.span 
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10 text-electric-indigo font-semibold bg-electric-indigo/10 px-2 py-1 rounded">
                award-winning digital solutions
              </span>
              <motion.span
                className="absolute inset-0 bg-electric-indigo/20 rounded blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.span>{' '}
            that captivate and convert.
          </motion.p>
        </motion.div>

        {/* Enhanced CTAs with magnetic effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          {/* Primary CTA with liquid effect */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden"
          >
            {/* Liquid background */}
            <motion.div
              className="absolute inset-0 bg-electric-indigo"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, transparent 0%, rgba(139, 92, 246, 0.8) 100%)',
                  'radial-gradient(circle at 80% 50%, transparent 0%, rgba(236, 72, 153, 0.8) 100%)',
                  'radial-gradient(circle at 20% 50%, transparent 0%, rgba(139, 92, 246, 0.8) 100%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            
            <span className="relative z-10 flex items-center gap-3 text-white">
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
          </motion.button>

          {/* Secondary CTA with morph effect */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative border-2 border-electric-indigo/50 px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-electric-indigo/0 group-hover:bg-electric-indigo/10"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-3 text-electric-indigo group-hover:text-white transition-colors duration-300">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Play size={20} />
              </motion.div>
              Watch Our Magic
            </span>
          </motion.button>
        </motion.div>

        {/* Interactive Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            className="flex flex-col items-center gap-4 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-warm-gray text-xs font-mono tracking-wider uppercase">
              Scroll to Explore
            </span>
            <motion.div
              className="relative w-6 h-10 border-2 border-electric-indigo/50 rounded-full"
            >
              <motion.div
                className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-electric-indigo rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating UI Elements */}
      <motion.div
        className="absolute top-20 right-10 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl border border-white/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 hidden lg:block"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-white/10" />
      </motion.div>
    </section>
  )
}