'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MatrixSeveranceLoaderProps {
  onComplete: () => void
  duration?: number
}

interface MatrixColumn {
  id: number
  x: number
  speed: number
  chars: string[]
  opacity: number[]
  glitching: boolean
  lastUpdate: number
}

interface DataPacket {
  id: number
  value: string
  x: number
  y: number
  processed: boolean
  category: 'raw' | 'processing' | 'refined' | 'complete'
}

export const MatrixSeveranceLoader = ({ onComplete, duration = 6000 }: MatrixSeveranceLoaderProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const columnsRef = useRef<MatrixColumn[]>([])
  const lastFrameTimeRef = useRef(0)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([])
  const [refinedData, setRefinedData] = useState<number[]>([])
  const [systemMessages, setSystemMessages] = useState<string[]>([])
  const [glitchActive, setGlitchActive] = useState(false)
  const [currentTime, setCurrentTime] = useState<string>('')
  const [isMounted, setIsMounted] = useState(false)

  // Performance optimizations while maintaining 60fps
  const TARGET_FPS = 60
  const FRAME_INTERVAL = 1000 / TARGET_FPS

  // Memoized phases
  const phases = useMemo(() => [
    { 
      label: 'INITIALIZING MATRIX PROTOCOL', 
      progress: 0, 
      message: 'Establishing connection to mainframe...',
      color: '#64748B'
    },
    { 
      label: 'LOADING DATA STREAMS', 
      progress: 15, 
      message: 'Downloading personnel files...',
      color: '#6366F1'
    },
    { 
      label: 'PROCESSING MACRODATA', 
      progress: 35, 
      message: 'Analyzing behavioral patterns...',
      color: '#6366F1'
    },
    { 
      label: 'REFINING OUTPUT MATRICES', 
      progress: 60, 
      message: 'Compiling departmental metrics...',
      color: '#4F46E5'
    },
    { 
      label: 'SYNCHRONIZING PROTOCOLS', 
      progress: 80, 
      message: 'Establishing secure channels...',
      color: '#4338CA'
    },
    { 
      label: 'SYNSERA MATRIX ONLINE', 
      progress: 100, 
      message: 'Welcome to the future of digital excellence.',
      color: '#6366F1'
    },
  ], [])

  // Full character sets for rich visuals
  const matrixChars = useMemo(() => '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン', [])
  const numberChars = useMemo(() => '0123456789', [])

  // Handle client-side mounting
  useEffect(() => {
    setIsMounted(true)
    setCurrentTime(new Date().toLocaleTimeString())
    
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  // Optimized matrix initialization with object pooling
  const initializeMatrix = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return []

    const columns: MatrixColumn[] = []
    const columnWidth = 20
    const numColumns = Math.floor(canvas.width / columnWidth)

    for (let i = 0; i < numColumns; i++) {
      columns.push({
        id: i,
        x: i * columnWidth,
        speed: Math.random() * 3 + 1,
        chars: Array(50).fill(0).map(() => matrixChars[Math.floor(Math.random() * matrixChars.length)]),
        opacity: Array(50).fill(0).map(() => Math.random()),
        glitching: false,
        lastUpdate: 0
      })
    }
    return columns
  }, [matrixChars])

  // High-performance matrix animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', {
      alpha: false, // Better performance
      desynchronized: true, // Allows async rendering
    })
    if (!ctx) return

    ctxRef.current = ctx

    // Optimized canvas setup
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2) // Cap DPR for performance
      
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      
      ctx.scale(dpr, dpr)
      
      // Set text rendering optimizations
      ctx.textBaseline = 'top'
      ctx.font = '16px monospace'
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize columns once
    if (columnsRef.current.length === 0) {
      columnsRef.current = initializeMatrix()
    }

    // Pre-calculate color values for better performance
    const colorCache = new Map<string, string>()
    const getPhaseColor = (phase: typeof phases[0], opacity: number) => {
      const key = `${phase.color}-${opacity.toFixed(2)}`
      if (colorCache.has(key)) {
        return colorCache.get(key)!
      }
      
      const rgbColor = phase?.color === '#64748B' ? '100, 116, 139' :
                      phase?.color === '#6366F1' ? '99, 102, 241' :
                      phase?.color === '#4F46E5' ? '79, 70, 229' :
                      phase?.color === '#4338CA' ? '67, 56, 202' : '99, 102, 241'
      
      const color = `rgba(${rgbColor}, ${opacity})`
      colorCache.set(key, color)
      return color
    }

    const animate = (currentTime: number) => {
      // Maintain 60fps but with optimized rendering
      if (currentTime - lastFrameTimeRef.current < FRAME_INTERVAL) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      
      lastFrameTimeRef.current = currentTime

      // Clear with fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const phase = phases[currentPhase]

      // Batch DOM reads and writes
      const visibleColumns = columnsRef.current.filter(col => 
        col.x >= -50 && col.x <= canvas.width + 50
      )

      // Render visible columns only
      visibleColumns.forEach((column) => {
        column.chars.forEach((char, charIndex) => {
          const y = charIndex * 20
          
          // Skip if outside visible area
          if (y < -20 || y > canvas.height + 20) return

          // Decay opacity
          const opacity = Math.max(0, column.opacity[charIndex] - 0.02)
          column.opacity[charIndex] = opacity

          if (opacity > 0.01) { // Skip very transparent characters
            // Use cached colors
            ctx.fillStyle = getPhaseColor(phase, opacity)

            // Glitch effect with reduced frequency for performance
            let renderChar = char
            if (column.glitching && Math.random() > 0.8) {
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
              renderChar = numberChars[Math.floor(Math.random() * numberChars.length)]
            }

            // Batch font changes
            if (Math.random() > 0.95) {
              ctx.font = 'bold 16px monospace'
            } else {
              ctx.font = '16px monospace'
            }

            ctx.fillText(renderChar, column.x, y)

            // Bright head character
            if (charIndex === 0 && opacity > 0.5) {
              ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
              ctx.fillText(renderChar, column.x, y)
            }
          }
        })

        // Update column state less frequently but maintain visual richness
        if (Math.random() > 0.98) {
          column.chars.shift()
          column.chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)])
          column.opacity.shift()
          column.opacity.push(1)
        }

        // Glitch activation
        if (Math.random() > 0.995) {
          column.glitching = !column.glitching
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [currentPhase, initializeMatrix, phases, matrixChars, numberChars, FRAME_INTERVAL])

  // Phase progression
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase(prev => prev + 1)
        
        // Trigger glitch effect
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 300)
        
        // Add system message
        setSystemMessages(prev => [...prev.slice(-3), phases[currentPhase + 1].message])
      } else {
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 1000)
        }, 1000)
        clearInterval(interval)
      }
    }, duration / phases.length)

    return () => clearInterval(interval)
  }, [currentPhase, duration, onComplete, phases])

  // Rich data packet generation - keep the full experience
  useEffect(() => {
    const generatePackets = () => {
      const packets: DataPacket[] = []
      for (let i = 0; i < 20; i++) {
        packets.push({
          id: i,
          value: Math.floor(Math.random() * 999999).toString().padStart(6, '0'),
          x: Math.random() * 100,
          y: Math.random() * 100,
          processed: false,
          category: 'raw'
        })
      }
      setDataPackets(packets)
    }

    generatePackets()

    // Batch state updates for better performance
    const interval = setInterval(() => {
      setDataPackets(prev => prev.map(packet => ({
        ...packet,
        value: Math.floor(Math.random() * 999999).toString().padStart(6, '0'),
        category: currentPhase > 2 ? 'processing' : 'raw'
      })))
    }, 150)

    return () => clearInterval(interval)
  }, [currentPhase])

  // Rich refined data generation
  useEffect(() => {
    if (currentPhase >= 3) {
      const interval = setInterval(() => {
        setRefinedData(prev => {
          const newData = Array.from({ length: 8 }, () => Math.floor(Math.random() * 999999))
          return newData
        })
      }, 100)

      return () => clearInterval(interval)
    }
  }, [currentPhase])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className={cn(
            'fixed inset-0 z-50 bg-deep-black overflow-hidden',
            glitchActive && 'animate-pulse'
          )}
        >
          {/* High-performance Matrix Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ 
              filter: glitchActive ? 'hue-rotate(90deg) contrast(1.2)' : 'none',
              willChange: 'filter' // Optimize for animations
            }}
          />

          {/* Rich UI Overlay */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-electric-indigo/30 bg-deep-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-2xl md:text-3xl text-white tracking-wider"
                  >
                    SYNSERA MATRIX
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-electric-indigo font-mono text-sm tracking-wider"
                  >
                    MACRODATA REFINEMENT PROTOCOL
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-right"
                >
                  <div className="text-electric-indigo font-mono text-lg">
                    {phases[currentPhase].progress}%
                  </div>
                  <div className="text-warm-gray text-xs">COMPLETION</div>
                </motion.div>
              </div>
            </div>

            {/* Main Content Area - Full Experience Restored */}
            <div className="flex-1 flex">
              {/* Left Panel - Raw Data Streams */}
              <div className="w-1/3 p-6 border-r border-electric-indigo/30 bg-deep-black/60 backdrop-blur-sm">
                <h3 className="text-white font-mono text-sm mb-4 tracking-wider">
                  RAW DATA STREAMS
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {dataPackets.slice(0, 8).map((packet, index) => (
                    <motion.div
                      key={packet.id}
                      animate={{
                        color: packet.category === 'processing' ? '#6366F1' : '#64748B',
                        textShadow: packet.category === 'processing' ? '0 0 10px #6366F1' : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-mono text-xs p-2 border border-electric-indigo/20 rounded bg-deep-black/50"
                    >
                      {packet.value}
                    </motion.div>
                  ))}
                </div>

                {/* System Messages */}
                <div className="space-y-1">
                  <h4 className="text-electric-indigo font-mono text-xs tracking-wider">
                    SYSTEM LOG
                  </h4>
                  {systemMessages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-warm-gray font-mono text-xs truncate"
                    >
                      {'>'} {message}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Center Panel - Main Display */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-deep-black/40 backdrop-blur-sm">
                {/* Status Display */}
                <motion.div
                  key={currentPhase}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-8"
                >
                  <div className="text-electric-indigo font-mono text-sm tracking-wider mb-2">
                    PHASE {currentPhase + 1} OF {phases.length}
                  </div>
                  <h2 className="text-white font-mono text-xl md:text-2xl tracking-wider mb-4">
                    {phases[currentPhase].label}
                  </h2>
                  <div className="text-warm-gray text-sm max-w-md">
                    {phases[currentPhase].message}
                  </div>
                </motion.div>

                {/* Central Processing Matrix */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative mb-8"
                >
                  <div className="w-64 h-64 border border-electric-indigo/30 rounded-lg bg-deep-black/80 backdrop-blur-sm p-4">
                    <div className="grid grid-cols-4 gap-2 h-full">
                      {refinedData.map((number, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            color: currentPhase >= 3 ? '#6366F1' : '#64748B',
                            textShadow: currentPhase >= 3 ? '0 0 15px #6366F1' : 'none',
                            scale: currentPhase >= 3 ? [1, 1.05, 1] : 1,
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            scale: { duration: 2, repeat: Infinity }
                          }}
                          className="font-mono text-xs text-center flex items-center justify-center border border-electric-indigo/20 rounded bg-deep-black/50"
                        >
                          {currentPhase >= 3 ? number.toString().slice(-4) : '----'}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Scanning Line Effect */}
                  {currentPhase >= 2 && (
                    <motion.div
                      animate={{ y: [0, 256, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-px bg-electric-indigo shadow-lg"
                      style={{ boxShadow: '0 0 20px #6366F1' }}
                    />
                  )}
                </motion.div>

                {/* Progress Indicator */}
                <div className="w-full max-w-md">
                  <div className="flex justify-between text-xs font-mono mb-2">
                    <span className="text-warm-gray">PROGRESS</span>
                    <span className="text-electric-indigo">
                      {phases[currentPhase].progress}%
                    </span>
                  </div>
                  <div className="h-1 bg-warm-gray/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: `${phases[currentPhase].progress}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-electric-indigo to-electric-indigo/60"
                      style={{
                        boxShadow: '0 0 20px #6366F1',
                      }}
                    />
                  </div>
                </div>

                {/* Loading Animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="mt-8"
                >
                  <div className="w-8 h-8 border-2 border-electric-indigo/30 border-t-electric-indigo rounded-full" />
                </motion.div>
              </div>

              {/* Right Panel - Refined Output */}
              <div className="w-1/3 p-6 border-l border-electric-indigo/30 bg-deep-black/60 backdrop-blur-sm">
                <h3 className="text-white font-mono text-sm mb-4 tracking-wider">
                  REFINED OUTPUT
                </h3>
                <div className="space-y-2">
                  {refinedData.slice(0, 6).map((number, index) => (
                    <motion.div
                      key={index}
                      animate={{
                        opacity: currentPhase >= 3 ? 1 : 0.3,
                        x: currentPhase >= 3 ? 0 : 20,
                      }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="font-mono text-sm p-3 border border-electric-indigo/30 rounded bg-deep-black/80 text-center"
                    >
                      <div className="text-electric-indigo">
                        {currentPhase >= 3 ? number.toString().padStart(6, '0') : '------'}
                      </div>
                      <div className="text-warm-gray text-xs mt-1">
                        DATASET {index + 1}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Final Status */}
                {currentPhase === phases.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-6 p-4 border border-electric-indigo/50 rounded-lg bg-electric-indigo/10"
                  >
                    <div className="text-electric-indigo font-mono text-sm text-center">
                      MACRODATA REFINEMENT
                      <br />
                      COMPLETE
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Footer Status Bar */}
            <div className="p-4 border-t border-electric-indigo/30 bg-deep-black/80 backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-4">
                  <span className="text-electric-indigo">SYNSERA://MATRIX</span>
                  <span className="text-warm-gray">v2.5.1</span>
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex items-center gap-1"
                  >
                    <div className="w-2 h-2 bg-electric-indigo rounded-full" />
                    <span className="text-electric-indigo">ACTIVE</span>
                  </motion.div>
                </div>
                <div className="text-warm-gray">
                  {isMounted ? currentTime : '--:--:-- --'}
                </div>
              </div>
            </div>
          </div>

          {/* Glitch Overlay */}
          {glitchActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0] }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-r from-electric-indigo/20 via-transparent to-electric-indigo/20 mix-blend-multiply"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}