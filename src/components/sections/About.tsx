// src/components/sections/About.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, Coffee, Heart, Zap, Target, Lightbulb, Handshake } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Awards Won', value: '15+', color: 'from-orange-400 to-red-500' },
  { icon: Users, label: 'Happy Clients', value: '200+', color: 'from-amber-400 to-orange-500' },
  { icon: Coffee, label: 'Projects Delivered', value: '300+', color: 'from-yellow-400 to-amber-500' },
  { icon: Heart, label: 'Years Experience', value: '5+', color: 'from-red-400 to-pink-500' }
]

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that set new standards in the industry.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Target,
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand your vision and exceed your expectations.',
    color: 'from-orange-400 to-red-500'
  },
  {
    icon: Zap,
    title: 'Quality Driven',
    description: 'We maintain the highest standards in every project, ensuring exceptional quality and attention to detail.',
    color: 'from-amber-400 to-yellow-500'
  },
  {
    icon: Handshake,
    title: 'Collaborative Spirit',
    description: 'We believe in the power of collaboration, working as an extension of your team to achieve shared goals.',
    color: 'from-red-400 to-orange-500'
  }
]

export const About = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="about" 
      ref={ref} 
      className="py-32 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Warm Background Elements */}
      <div className="absolute inset-0">
        {/* Floating warm orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-orange-300/30 to-amber-400/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"
        />
        
        {/* Warm particle system */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full" />
          </motion.div>
        ))}

        {/* Geometric warm shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 right-1/6 w-32 h-32 border-2 border-orange-200/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/3 left-1/6 w-24 h-24 border-2 border-amber-200/30 rotate-45"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Warm Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Warm Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <div className="relative inline-flex items-center">
              {/* Warm Glow Effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-yellow-400/20 rounded-full blur-lg"
              />
              
              <div className="relative bg-white/80 border border-orange-200/50 rounded-full px-6 py-3 md:px-8 md:py-4 backdrop-blur-sm shadow-lg">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full shadow-lg"
                  />
                  <span className="text-orange-600 font-mono text-xs md:text-sm tracking-wider uppercase font-semibold">
                    About Synsera
                  </span>
                  <motion.div
                    animate={{ 
                      rotate: -360,
                      scale: [1.2, 1, 1.2]
                    }}
                    transition={{ 
                      rotate: { duration: 6, repeat: Infinity, ease: 'linear' },
                      scale: { duration: 2, repeat: Infinity, delay: 1 }
                    }}
                    className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Morphing Title */}
          <div className="mb-6 md:mb-8 overflow-hidden">
            <motion.h2
              initial={{ y: 100, opacity: 0, scale: 0.95 }}
              animate={isInView ? { y: 0, opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-none font-bold"
            >
              {'Redefining Digital'.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-4">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ y: 100, opacity: 0, rotateY: 90 }}
                      animate={isInView ? { y: 0, opacity: 1, rotateY: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.6 + (wordIndex * 0.1) + (charIndex * 0.02),
                        ease: [0.43, 0.13, 0.23, 0.96]
                      }}
                      whileHover={{
                        scale: 1.1,
                        color: '#EA580C',
                        transition: { duration: 0.2 }
                      }}
                      className="inline-block cursor-default"
                      style={{ transformOrigin: 'bottom center' }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                className="inline-block bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-flow 3s ease-in-out infinite'
                }}
              >
                Excellence
              </motion.span>
            </motion.h2>
          </div>

          {/* Warm Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed">
              Founded on the belief that exceptional design and cutting-edge technology can transform businesses,{' '}
              <span className="relative">
                <span className="text-orange-600 font-semibold bg-orange-100/60 px-2 py-1 rounded">
                  Synsera has become a trusted partner
                </span>
              </span>{' '}
              for companies seeking to make their mark in the digital world.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Stats with Warm Theme */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.05,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content with Warm Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-200/20 to-amber-200/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-orange-200/30 shadow-xl">
              <h3 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Synsera was born from a vision to bridge the gap between exceptional design and powerful technology. 
                  We recognized that many businesses struggled to find partners who could deliver both aesthetic excellence 
                  and technical sophistication.
                </p>
                <p>
                  Today, we work with forward-thinking companies across industries, from innovative startups to established 
                  enterprises, helping them create digital experiences that drive real business results. Our approach combines 
                  strategic thinking, creative design, and technical expertise to deliver solutions that not only look 
                  exceptional but perform flawlessly.
                </p>
                <p>
                  Every project we undertake is an opportunity to push boundaries, explore new possibilities, and create 
                  something truly remarkable. We&apos;re not just building websites and apps – we&apos;re crafting digital experiences 
                  that inspire, engage, and convert.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl md:text-4xl text-gray-800 font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              What Drives Us
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group relative bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-orange-200/30 hover:border-orange-300/50 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-gray-800 font-bold mb-2 text-lg group-hover:text-orange-600 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Warm hover effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-amber-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: [
                        'linear-gradient(45deg, rgba(251, 146, 60, 0.05), rgba(245, 158, 11, 0.05))',
                        'linear-gradient(135deg, rgba(245, 158, 11, 0.05), rgba(239, 68, 68, 0.05))',
                        'linear-gradient(225deg, rgba(239, 68, 68, 0.05), rgba(251, 146, 60, 0.05))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Warm CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-r from-orange-100/80 to-amber-100/80 backdrop-blur-sm border border-orange-200/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <motion.div
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(251, 146, 60, 0.1), rgba(245, 158, 11, 0.1))',
                  'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))',
                  'linear-gradient(225deg, rgba(239, 68, 68, 0.1), rgba(251, 146, 60, 0.1))',
                  'linear-gradient(315deg, rgba(251, 146, 60, 0.1), rgba(245, 158, 11, 0.1))'
                ]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl"
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl text-gray-800 font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s collaborate to create something extraordinary. Whether you&apos;re launching a new venture 
                or transforming an existing business, we&apos;re here to help you succeed.
              </p>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(251, 146, 60, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold tracking-wide hover:from-orange-600 hover:to-amber-600 transition-all duration-300 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <span className="relative z-10">Let&apos;s Work Together</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}