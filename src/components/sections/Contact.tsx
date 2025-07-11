// src/components/sections/Contact.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check, MessageCircle, Zap, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@synsera.com',
    href: 'mailto:hello@synsera.com',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    color: 'from-cyan-400 to-teal-500'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: '#',
    color: 'from-blue-500 to-indigo-600'
  }
]

const socialLinks = [
  { icon: MessageCircle, label: 'Discord', href: '#', color: 'from-indigo-400 to-purple-500' },
  { icon: Globe, label: 'Website', href: '#', color: 'from-blue-400 to-cyan-500' },
  { icon: Zap, label: 'Slack', href: '#', color: 'from-cyan-400 to-blue-500' },
]

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        budget: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-deep-black relative overflow-hidden"
    >
      {/* Ocean Background Elements */}
      <div className="absolute inset-0">
        {/* Flowing water orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-blue-400/20 via-cyan-500/20 to-teal-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating bubbles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full" />
          </motion.div>
        ))}

        {/* Ocean waves effect */}
        <motion.div
          animate={{
            background: [
              'linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
              'linear-gradient(90deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />

        {/* Grid with ocean effect */}
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border border-blue-400/10"
                animate={{ 
                  borderColor: [
                    'rgba(59, 130, 246, 0.1)', 
                    'rgba(6, 182, 212, 0.2)', 
                    'rgba(59, 130, 246, 0.1)'
                  ] 
                }}
                transition={{ duration: 5, repeat: Infinity, delay: i * 0.01 }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Enhanced Ocean Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Ocean-style Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6 md:mb-8"
          >
            <div className="relative inline-flex items-center">
              {/* Flowing Water Effect */}
              <motion.div
                animate={{ 
                  background: [
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)',
                    'linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full blur-lg"
              />
              
              <div className="relative bg-slate-900/80 border border-blue-400/30 rounded-full px-6 py-3 md:px-8 md:py-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
                  />
                  <span className="text-blue-400 font-mono text-xs md:text-sm tracking-wider uppercase font-semibold">
                    Get In Touch
                  </span>
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  />
                </div>
                
                {/* Ripple Effect */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Liquid Title Effect */}
          <div className="mb-6 md:mb-8 overflow-hidden">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-none font-bold"
            >
              {'Let\'s Create Something'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0, scaleY: 0.3 }}
                  animate={isInView ? { y: 0, opacity: 1, scaleY: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + index * 0.02,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200
                  }}
                  whileHover={{
                    y: -5,
                    color: '#60A5FA',
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block cursor-default"
                  style={{ transformOrigin: 'bottom center' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 1.2, type: 'spring', damping: 10 }}
                className="inline-block"
                style={{
                  background: 'linear-gradient(45deg, #3B82F6, #06B6D4, #8B5CF6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-flow 3s ease-in-out infinite'
                }}
              >
                Amazing
              </motion.span>
            </motion.h2>
          </div>

          {/* Ocean Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-blue-200 text-base md:text-lg lg:text-xl leading-relaxed">
              Ready to bring your vision to life? We&apos;d love to hear about your project and explore{' '}
              <span className="relative">
                <span 
                  className="text-cyan-400 font-semibold bg-cyan-400/10 px-2 py-1 rounded border border-cyan-400/20"
                  style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.3)' }}
                >
                  how we can help you achieve your goals
                </span>
              </span>
              .
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 shadow-2xl">
              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  background: [
                    'linear-gradient(0deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
                    'linear-gradient(90deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
                    'linear-gradient(180deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))',
                    'linear-gradient(270deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ padding: '2px' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-900/60 to-slate-900/60 rounded-3xl" />
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-2xl text-white font-semibold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Start Your Project
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="Your name"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-xl opacity-0 pointer-events-none"
                        whileFocus={{ opacity: 1 }}
                      />
                    </motion.div>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-blue-200 text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-strategy">Digital Strategy</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-blue-200 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-slate-800/50 border border-blue-400/30 rounded-xl px-4 py-3 text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-medium tracking-wide flex items-center justify-center gap-3 hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity }}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <Check size={20} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white font-semibold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-blue-200 leading-relaxed mb-8">
                Have a question or want to discuss your project? We&apos;re here to help. 
                Reach out to us and let&apos;s start the conversation about bringing your vision to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="group relative bg-gradient-to-r from-blue-900/30 to-slate-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300 cursor-pointer block"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{
                      background: [
                        'linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
                        'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(99, 102, 241, 0.05))',
                        'linear-gradient(225deg, rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.05))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative z-10 flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <div className="text-blue-200 text-sm font-medium">{info.label}</div>
                      <div className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-6"
            >
              <h4 className="text-white font-semibold mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 group`}
                    title={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6"
            >
              <motion.div
                animate={{
                  background: [
                    'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
                    'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))',
                    'linear-gradient(225deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))'
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl"
              />
              <div className="relative z-10">
                <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                  <Zap size={18} />
                  Response Time
                </h4>
                <p className="text-blue-200 text-sm leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, feel free to call us directly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
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