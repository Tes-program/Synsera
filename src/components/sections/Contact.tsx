'use client'

import { useState, useRef } from 'react'
import { motion, useInView, cubicBezier } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@synsera.com',
    href: 'mailto:hello@synsera.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: '#'
  }
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
    <section id="contact" ref={ref} className="py-32 bg-gradient-to-b from-deep-black to-deep-black/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-electric-indigo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-electric-indigo/3 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Let&apos;s Create Something <span className="text-electric-indigo">Amazing</span>
          </h2>
          <p className="text-warm-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? We&apos;d love to hear about your project and explore 
            how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-deep-black to-deep-black/50 border border-electric-indigo/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl text-white font-semibold mb-8">
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-warm-gray text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white placeholder-warm-gray focus:outline-none focus:border-electric-indigo transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-warm-gray text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white placeholder-warm-gray focus:outline-none focus:border-electric-indigo transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-warm-gray text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white placeholder-warm-gray focus:outline-none focus:border-electric-indigo transition-colors duration-300"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-warm-gray text-sm font-medium mb-2">
                      Project Type
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-indigo transition-colors duration-300"
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
                  <label className="block text-warm-gray text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-indigo transition-colors duration-300"
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
                  <label className="block text-warm-gray text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-deep-black/50 border border-electric-indigo/30 rounded-lg px-4 py-3 text-white placeholder-warm-gray focus:outline-none focus:border-electric-indigo transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.95 }}
                  className="w-full bg-electric-indigo text-white px-8 py-4 rounded-lg font-medium tracking-wide flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all duration-300 hover:shadow-lg hover:shadow-electric-indigo/25 disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl text-white font-semibold mb-8">
                Get In Touch
              </h3>
              <p className="text-warm-gray leading-relaxed mb-8">
                Have a question or want to discuss your project? We&apos;re here to help. 
                Reach out to us and let&apos;s start the conversation about bringing your vision to life.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-electric-indigo/10 rounded-lg flex items-center justify-center group-hover:bg-electric-indigo/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-electric-indigo" />
                  </div>
                  <div>
                    <div className="text-warm-gray text-sm">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-electric-indigo transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-electric-indigo/10 to-transparent border border-electric-indigo/20 rounded-2xl p-8"
            >
              <h4 className="text-white font-semibold mb-4">
                Response Time
              </h4>
              <p className="text-warm-gray text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, feel free to call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}