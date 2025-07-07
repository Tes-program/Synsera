'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SeveranceLoaderProps {
  onComplete: () => void
  duration?: number
}

export const SeveranceLoader = ({ onComplete, duration = 4000 }: SeveranceLoaderProps) => {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  // Phases of the loading animation
  const phases = [
    { label: 'INITIALIZING SYSTEM', progress: 0 },
    { label: 'LOADING PROTOCOLS', progress: 25 },
    { label: 'PROCESSING DATA', progress: 50 },
    { label: 'SYNCING MODULES', progress: 75 },
    { label: 'REFINING OUTPUT', progress: 90 },
    { label: 'SYNSERA READY', progress: 100 },
  ]

  // Random numbers for the data streams
  const [dataStreams, setDataStreams] = useState<number[][]>([])
  const [refinedNumbers, setRefinedNumbers] = useState<number[]>([])

  useEffect(() => {
    // Initialize data streams
    const streams = Array.from({ length: 8 }, () =>
      Array.from({ length: 12 }, () => Math.floor(Math.random() * 9999))
    )
    setDataStreams(streams)

    // Initialize refined numbers
    setRefinedNumbers(Array.from({ length: 6 }, () => Math.floor(Math.random() * 999999)))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase(prev => prev + 1)
      } else {
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 800)
        }, 1000)
        clearInterval(interval)
      }
    }, duration / phases.length)

    return () => clearInterval(interval)
  }, [currentPhase, duration, onComplete, phases.length])

  // Update numbers during animation
  useEffect(() => {
    if (currentPhase < 4) {
      const numberInterval = setInterval(() => {
        setDataStreams(prev =>
          prev.map(stream =>
            stream.map(() => Math.floor(Math.random() * 9999))
          )
        )
        setRefinedNumbers(prev =>
          prev.map(() => Math.floor(Math.random() * 999999))
        )
      }, 150)

      return () => clearInterval(numberInterval)
    }
  }, [currentPhase])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-50 bg-deep-black flex items-center justify-center overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border border-electric-indigo/20" />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Company Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="font-display text-4xl md:text-6xl text-white tracking-wider">
                SYNSERA
              </h1>
              <div className="h-px bg-electric-indigo w-32 mx-auto mt-4" />
            </motion.div>

            {/* Data Streams */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="grid grid-cols-4 gap-4 mb-8 text-xs font-mono"
            >
              {dataStreams.slice(0, 4).map((stream, streamIndex) => (
                <div key={streamIndex} className="space-y-1">
                  {stream.slice(0, 6).map((number, numIndex) => (
                    <motion.div
                      key={`${streamIndex}-${numIndex}`}
                      animate={{
                        color: currentPhase > 2 ? '#6366F1' : '#64748B',
                        textShadow: currentPhase > 2 ? '0 0 10px #6366F1' : 'none',
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-right tracking-wider"
                    >
                      {number.toString().padStart(4, '0')}
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>

            {/* Central Processing Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-deep-black border border-electric-indigo/30 rounded-lg p-6 mb-8 backdrop-blur-sm"
            >
              <div className="grid grid-cols-3 gap-4 font-mono text-lg">
                {refinedNumbers.map((number, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      color: currentPhase >= index ? '#6366F1' : '#64748B',
                      textShadow: currentPhase >= index ? '0 0 15px #6366F1' : 'none',
                      scale: currentPhase >= index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center py-2"
                  >
                    {currentPhase >= index ? number.toString().padStart(6, '0') : '------'}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-6"
            >
              <div className="h-px bg-warm-gray/30 w-full relative overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${phases[currentPhase].progress}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-electric-indigo to-electric-indigo/60 shadow-lg"
                  style={{
                    boxShadow: '0 0 20px #6366F1',
                  }}
                />
              </div>
              <div className="flex justify-between text-xs font-mono mt-2 text-warm-gray">
                <span>0%</span>
                <motion.span
                  key={currentPhase}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-electric-indigo"
                >
                  {phases[currentPhase].progress}%
                </motion.span>
                <span>100%</span>
              </div>
            </motion.div>

            {/* Status Text */}
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-sm font-mono text-electric-indigo tracking-wider">
                {phases[currentPhase].label}
              </p>
              <div className="flex justify-center mt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-1 h-1 bg-electric-indigo rounded-full mx-1"
                  />
                ))}
              </div>
            </motion.div>

            {/* Final Message */}
            {currentPhase === phases.length - 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-8"
              >
                <p className="text-lg font-mono text-white tracking-wider">
                  WELCOME TO THE FUTURE
                </p>
              </motion.div>
            )}
          </div>

          {/* Ambient Glow Effect */}
          <div className="absolute inset-0 bg-gradient-radial from-electric-indigo/5 via-transparent to-transparent" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}