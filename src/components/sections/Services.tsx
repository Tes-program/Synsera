// src/components/sections/Services.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, Palette, Smartphone, Zap, Globe, Database } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.',
    features: ['Next.js & React', 'Node.js & TypeScript', 'Cloud Architecture', 'API Development'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive meaningful engagement.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Interaction Design'],
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: ['React Native', 'iOS & Android', 'App Store Optimization', 'Mobile Strategy'],
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and optimal performance to maximize user satisfaction and conversions.',
    features: ['Core Web Vitals', 'SEO Optimization', 'Performance Audits', 'Speed Enhancement'],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align with your business goals and drive measurable results.',
    features: ['Market Analysis', 'Technology Consulting', 'Growth Strategy', 'Digital Transformation'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Database,
    title: 'Backend Solutions',
    description: 'Robust, scalable backend systems and databases designed to support your growing business needs.',
    features: ['Database Design', 'API Architecture', 'Cloud Services', 'Security Implementation'],
    color: 'from-red-500 to-rose-600'
  }
]

export const Services = () => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="services" 
      ref={ref} 
      className="py-32 bg-gradient-to-br from-white via-soft-gray to-white relative overflow-hidden"
    >
      {/* Light Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 left-1/3 w-64 h-64 bg-gradient-to-r from-electric-indigo/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mb-20"
        >
          <AnimatedText
            text="WHAT WE DO"
            animation="shimmer"
            className="text-electric-indigo font-mono text-sm tracking-wider uppercase mb-4 block"
            tag="span"
          />
          <AnimatedText
            text="Our Services"
            animation="split"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-deep-black mb-6 tracking-tight"
            tag="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We offer comprehensive digital solutions that combine technical excellence 
            with creative innovation to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-electric-indigo/30 transition-all duration-500 hover:shadow-2xl hover:shadow-electric-indigo/10 overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 0.1, scale: 1.5 }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl`}
              />
              
              {/* Icon */}
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative mb-6">
                <h3 className="text-deep-black text-xl font-semibold mb-3 group-hover:text-electric-indigo transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features with Enhanced Animation */}
              <div className="relative space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full`}
                    />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)',
              background: 'linear-gradient(45deg, #6366F1, #8B5CF6)'
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-indigo-600 transition-all duration-300 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <span className="relative z-10">Discuss Your Project</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}