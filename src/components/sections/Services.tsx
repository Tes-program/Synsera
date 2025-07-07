'use client'

import { useRef } from 'react'
import { motion, useInView, easeOut } from 'framer-motion'
import { Code, Palette, Smartphone, Zap, Globe, Database } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for optimal performance and scalability.',
    features: ['Next.js & React', 'Node.js & TypeScript', 'Cloud Architecture', 'API Development']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that provide exceptional user experiences and drive meaningful engagement.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Interaction Design']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.',
    features: ['React Native', 'iOS & Android', 'App Store Optimization', 'Mobile Strategy']
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast loading times and optimal performance to maximize user satisfaction and conversions.',
    features: ['Core Web Vitals', 'SEO Optimization', 'Performance Audits', 'Speed Enhancement']
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies that align with your business goals and drive measurable results.',
    features: ['Market Analysis', 'Technology Consulting', 'Growth Strategy', 'Digital Transformation']
  },
  {
    icon: Database,
    title: 'Backend Solutions',
    description: 'Robust, scalable backend systems and databases designed to support your growing business needs.',
    features: ['Database Design', 'API Architecture', 'Cloud Services', 'Security Implementation']
  }
]

export const Services = () => {
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
      transition: { duration: 0.8, ease: easeOut }
    }
  }

  return (
    <section id="services" ref={ref} className="py-32 bg-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-electric-indigo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-electric-indigo/3 rounded-full blur-3xl" />
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
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Our <span className="text-electric-indigo">Services</span>
          </h2>
          <p className="text-warm-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions that combine technical excellence 
            with creative innovation to deliver exceptional results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              className="group bg-gradient-to-br from-deep-black to-deep-black/50 border border-electric-indigo/20 rounded-2xl p-8 hover:border-electric-indigo/40 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-electric-indigo/10 rounded-xl flex items-center justify-center group-hover:bg-electric-indigo/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-electric-indigo" />
                </div>
              </div>

              {/* Content */}
              <div className="mb-6">
                <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-electric-indigo transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-electric-indigo rounded-full" />
                    <span className="text-warm-gray text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-electric-indigo text-white px-8 py-4 rounded-full font-medium tracking-wide hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-electric-indigo/25"
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}