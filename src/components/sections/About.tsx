'use client'

import { useRef } from 'react'
import { motion, useInView, cubicBezier } from 'framer-motion'
import { Award, Users, Coffee, Heart } from 'lucide-react'

const stats = [
  { icon: Award, label: 'Awards Won', value: '15+' },
  { icon: Users, label: 'Happy Clients', value: '200+' },
  { icon: Coffee, label: 'Projects Delivered', value: '300+' },
  { icon: Heart, label: 'Years Experience', value: '5+' }
]

const values = [
  {
    title: 'Innovation First',
    description: 'We push boundaries and embrace cutting-edge technologies to deliver solutions that set new standards in the industry.'
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We work closely with you to understand your vision and exceed your expectations.'
  },
  {
    title: 'Quality Driven',
    description: 'We maintain the highest standards in every project, ensuring exceptional quality and attention to detail.'
  },
  {
    title: 'Collaborative Spirit',
    description: 'We believe in the power of collaboration, working as an extension of your team to achieve shared goals.'
  }
]

export const About = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.43, 0.13, 0.23, 0.96) }
    }
  }

  return (
    <section id="about" ref={ref} className="py-32 bg-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-electric-indigo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-indigo/3 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-electric-indigo/20" />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mb-20"
        >
          <span className="text-electric-indigo font-mono text-sm tracking-wider uppercase mb-4 block">
            About Synsera
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Redefining <span className="text-electric-indigo">Digital Excellence</span>
          </h2>
          <p className="text-warm-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that exceptional design and cutting-edge technology can transform businesses, 
            Synsera has become a trusted partner for companies seeking to make their mark in the digital world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-electric-indigo/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-electric-indigo/20 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-electric-indigo" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-electric-indigo transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-warm-gray font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-warm-gray leading-relaxed">
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
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-8">
              What Drives Us
            </h3>
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1, ease: [0.43, 0.13, 0.23, 0.96] }}
                  className="border-l-2 border-electric-indigo/30 pl-6 hover:border-electric-indigo/60 transition-colors duration-300"
                >
                  <h4 className="text-white font-semibold mb-2 text-lg">
                    {value.title}
                  </h4>
                  <p className="text-warm-gray">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-electric-indigo/10 to-transparent border border-electric-indigo/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate to create something extraordinary. Whether you&apos;re launching a new venture 
              or transforming an existing business, we&apos;re here to help you succeed.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-electric-indigo/25"
            >
              Let&apos;s Work Together
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}