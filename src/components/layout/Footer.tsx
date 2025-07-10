// src/components/layout/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Github, Twitter, Linkedin, Instagram, Sparkles, Heart, Code, Palette } from 'lucide-react'
import { AnimatedText } from '@/components/ui/AnimatedText'

const footerLinks = {
  services: [
    { name: 'Web Development', href: '#', color: 'hover:text-blue-400' },
    { name: 'Mobile Apps', href: '#', color: 'hover:text-purple-400' },
    { name: 'UI/UX Design', href: '#', color: 'hover:text-pink-400' },
    { name: 'Digital Strategy', href: '#', color: 'hover:text-orange-400' }
  ],
  company: [
    { name: 'About Us', href: '#about', color: 'hover:text-amber-400' },
    { name: 'Our Work', href: '#work', color: 'hover:text-cyan-400' },
    { name: 'Careers', href: '#', color: 'hover:text-green-400' },
    { name: 'Contact', href: '#contact', color: 'hover:text-blue-400' }
  ],
  resources: [
    { name: 'Blog', href: '#', color: 'hover:text-indigo-400' },
    { name: 'Case Studies', href: '#', color: 'hover:text-purple-400' },
    { name: 'Privacy Policy', href: '#', color: 'hover:text-teal-400' },
    { name: 'Terms of Service', href: '#', color: 'hover:text-rose-400' }
  ]
}

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub', color: 'from-gray-600 to-gray-800 hover:from-purple-500 hover:to-pink-500' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'from-blue-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-purple-500' },
  { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-rose-500 hover:from-purple-500 hover:to-pink-500' }
]

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Epic Gradient Background - Journey Summary */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'linear-gradient(45deg, #0A0A0A 0%, #1e293b 25%, #7c3aed 50%, #f97316 75%, #3b82f6 100%)',
              'linear-gradient(135deg, #3b82f6 0%, #0A0A0A 25%, #f97316 50%, #7c3aed 75%, #1e293b 100%)',
              'linear-gradient(225deg, #1e293b 0%, #7c3aed 25%, #0A0A0A 50%, #3b82f6 75%, #f97316 100%)',
              'linear-gradient(315deg, #f97316 0%, #3b82f6 25%, #1e293b 50%, #0A0A0A 75%, #7c3aed 100%)',
              'linear-gradient(45deg, #0A0A0A 0%, #1e293b 25%, #7c3aed 50%, #f97316 75%, #3b82f6 100%)'
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full opacity-80"
        />
        
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-deep-black/60" />
        
        {/* Animated particles representing each section */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                '#6366F1', // Electric Indigo
                '#FFFFFF', // White
                '#8B5CF6', // Purple
                '#F97316', // Orange
                '#3B82F6', // Blue
                '#10B981', // Emerald
                '#EF4444', // Red
                '#F59E0B'  // Amber
              ][Math.floor(Math.random() * 8)]
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Epic Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <AnimatedText
            text="SYNSERA"
            animation="gradient-flow"
            className="font-display text-4xl md:text-6xl tracking-wider mb-4"
            tag="h3"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that blend innovation, design, and technology 
            into something truly extraordinary.
          </motion.p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column with Journey Icons */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-8 h-8 bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 rounded-full"
                />
                <h3 className="font-display text-2xl text-white tracking-wider">
                  SYNSERA
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Experience the journey through design, development, and digital excellence. 
                Each color tells our story, each interaction sparks innovation.
              </p>
              
              {/* Journey Representation */}
              <div className="flex items-center gap-2 mb-6">
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-deep-black rounded-full" title="Mystery" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-white rounded-full" title="Clarity" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-purple-500 rounded-full" title="Innovation" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-orange-500 rounded-full" title="Warmth" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 bg-blue-500 rounded-full" title="Connection" />
              </div>
              
              {/* Enhanced Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-2xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:animate-bounce" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Links Columns */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Code className="w-5 h-5 text-blue-400" />
                <h4 className="text-white font-semibold">Services</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className={`text-gray-300 ${link.color} transition-all duration-300 hover:underline`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-pink-400" />
                <h4 className="text-white font-semibold">Company</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className={`text-gray-300 ${link.color} transition-all duration-300 hover:underline`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Palette className="w-5 h-5 text-purple-400" />
                <h4 className="text-white font-semibold">Resources</h4>
              </div>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className={`text-gray-300 ${link.color} transition-all duration-300 hover:underline`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Epic Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Animated border */}
          <motion.div
            animate={{
              background: [
                'linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #F97316, #3B82F6)',
                'linear-gradient(90deg, #3B82F6, #6366F1, #8B5CF6, #EC4899, #F97316)',
                'linear-gradient(90deg, #F97316, #3B82F6, #6366F1, #8B5CF6, #EC4899)'
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="h-px w-full mb-8"
          />
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-yellow-400" />
              </motion.div>
              <div className="text-gray-300 text-sm">
                © 2025 Synsera. Crafted with{' '}
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-pink-400"
                >
                  ❤️
                </motion.span>{' '}
                and endless creativity.
              </div>
            </div>
            
            {/* Epic Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative bg-gradient-to-r from-electric-indigo via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Back to Top
                <ArrowUp 
                  size={16} 
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-bounce" 
                />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}