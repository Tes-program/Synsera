// src/components/sections/Projects.tsx
'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Eye, Star, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import { AnimatedText } from '@/components/ui/AnimatedText'

const projects = [
  {
    id: 1,
    title: 'FinanceFlow',
    category: 'Fintech Platform',
    description: 'A comprehensive financial management platform with real-time analytics, automated reporting, and intelligent investment recommendations.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    stats: { users: '50K+', growth: '+250%', rating: '4.9/5' },
    link: '#',
    github: '#',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 2,
    title: 'EcoTracker',
    category: 'Sustainability App',
    description: 'Mobile application helping users track their carbon footprint with gamification elements and community challenges.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tech: ['React Native', 'Firebase', 'ML Kit', 'Chart.js'],
    stats: { downloads: '100K+', impact: '2M kg CO2', rating: '4.8/5' },
    link: '#',
    github: '#',
    color: 'from-green-400 to-emerald-500'
  },
  {
    id: 3,
    title: 'MedConnect',
    category: 'Healthcare Platform',
    description: 'Telemedicine platform connecting patients with healthcare providers through secure video consultations and digital prescriptions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    tech: ['React', 'WebRTC', 'Express.js', 'MongoDB'],
    stats: { consultations: '25K+', providers: '500+', satisfaction: '96%' },
    link: '#',
    github: '#',
    color: 'from-pink-400 to-rose-500'
  },
  {
    id: 4,
    title: 'ArtVault',
    category: 'NFT Marketplace',
    description: 'Premium NFT marketplace featuring curated digital art collections with advanced discovery and bidding mechanisms.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    tech: ['Web3.js', 'Solidity', 'IPFS', 'Ethereum'],
    stats: { volume: '$2M+', artists: '1K+', sales: '10K+' },
    link: '#',
    github: '#',
    color: 'from-purple-400 to-indigo-500'
  }
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="work" 
      ref={ref} 
      className="py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-deep-black relative overflow-hidden"
    >
      {/* Cyber Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Cyber Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-electric-indigo to-cyan-400 rounded-full blur-3xl"
        />
        
        {/* Cyber Grid */}
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0"
        >
          <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
            {Array.from({ length: 192 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border border-cyan-400/10"
                animate={{ 
                  borderColor: [
                    'rgba(34, 211, 238, 0.1)', 
                    'rgba(167, 139, 250, 0.2)', 
                    'rgba(34, 211, 238, 0.1)'
                  ] 
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.005 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Code Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {['</>', '{}', '[]', '()', '=>', '&&', '||'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Cyber Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <AnimatedText
            text="OUR PORTFOLIO"
            animation="glitch"
            className="text-cyan-400 font-mono text-sm tracking-wider uppercase mb-4 block"
            tag="span"
          />
          <AnimatedText
            text="Featured Projects"
            animation="gradient-flow"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight"
            tag="h2"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Explore our latest work showcasing innovative solutions and exceptional craftsmanship 
            across various industries and platforms.
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => {
                setSelectedProject(index)
                setHoveredProject(project.id)
              }}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-500 backdrop-blur-sm"
            >
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={hoveredProject === project.id ? {
                  background: [
                    'linear-gradient(0deg, #00FFFF, #8B5CF6)',
                    'linear-gradient(90deg, #00FFFF, #8B5CF6)',
                    'linear-gradient(180deg, #00FFFF, #8B5CF6)',
                    'linear-gradient(270deg, #00FFFF, #8B5CF6)',
                    'linear-gradient(360deg, #00FFFF, #8B5CF6)'
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  padding: '2px',
                  background: hoveredProject === project.id ? 'linear-gradient(45deg, #00FFFF, #8B5CF6)' : 'transparent'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-900/90 to-black/90 rounded-2xl" />
              </motion.div>

              <div className="relative z-10">
                {/* Project Image with Cyber Effects */}
                <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Cyber Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-purple-900/50 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20"
                  />
                  
                  {/* Scanning Line Effect */}
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent skew-x-12"
                    />
                  )}
                  
                  {/* Action Buttons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    className="absolute top-4 right-4 flex gap-3"
                  >
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-cyan-400/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-cyan-400/40 transition-colors duration-300 border border-cyan-400/30"
                    >
                      <ExternalLink size={16} className="text-cyan-400" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors duration-300 border border-purple-500/30"
                    >
                      <Github size={16} className="text-purple-400" />
                    </motion.a>
                  </motion.div>

                  {/* Project Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={hoveredProject === project.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    className="absolute bottom-4 left-4"
                  >
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-white text-2xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.1) }}
                        whileHover={{ scale: 1.1 }}
                        className={`text-xs bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full border border-white/20 font-medium`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Cyber Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value], statIndex) => (
                      <motion.div
                        key={statIndex}
                        className="text-center p-3 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-lg border border-cyan-400/20"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                      >
                        <div className="text-cyan-400 font-bold text-lg">{value}</div>
                        <div className="text-gray-400 text-xs capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Cyber Project Link */}
                  <motion.a
                    href={project.link}
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-white transition-colors duration-300 group/link"
                  >
                    <Eye size={16} />
                    Explore Project
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                </div>
              </div>

              {/* Cyber Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                animate={hoveredProject === project.id ? {
                  background: [
                    'linear-gradient(45deg, rgba(34, 211, 238, 0.05), rgba(139, 92, 246, 0.05))',
                    'linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                    'linear-gradient(225deg, rgba(236, 72, 153, 0.05), rgba(34, 211, 238, 0.05))',
                    'linear-gradient(315deg, rgba(34, 211, 238, 0.05), rgba(139, 92, 246, 0.05))'
                  ]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>

        {/* Cyber CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(34, 211, 238, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-8 py-4 rounded-full font-bold tracking-wide flex items-center gap-3 mx-auto overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <TrendingUp size={20} />
              View All Projects
              <ArrowRight 
                size={20} 
                className="transition-transform duration-300 group-hover:translate-x-1" 
              />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}