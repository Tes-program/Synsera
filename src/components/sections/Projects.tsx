'use client'

import { useState, useRef } from 'react'
import { motion, useInView, cubicBezier } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
    github: '#'
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
    github: '#'
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
    github: '#'
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
    github: '#'
  }
]

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)
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
    <section id="work" ref={ref} className="py-32 bg-gradient-to-b from-deep-black to-deep-black/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-indigo/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-electric-indigo/3 rounded-full blur-3xl" />
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
            Our Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight">
            Featured <span className="text-electric-indigo">Projects</span>
          </h2>
          <p className="text-warm-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our latest work showcasing innovative solutions and exceptional craftsmanship 
            across various industries and platforms.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              onHoverStart={() => setSelectedProject(index)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-deep-black to-deep-black/50 border border-electric-indigo/20 hover:border-electric-indigo/40 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-electric-indigo/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-electric-indigo/40 transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-electric-indigo/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-electric-indigo/40 transition-colors duration-300"
                  >
                    <Github size={16} className="text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="text-electric-indigo text-sm font-mono tracking-wider uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-white text-2xl font-semibold mt-2 group-hover:text-electric-indigo transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-warm-gray leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-electric-indigo/10 text-electric-indigo px-3 py-1 rounded-full border border-electric-indigo/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-white font-semibold">{value}</div>
                      <div className="text-warm-gray text-xs capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* View Project Link */}
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-electric-indigo font-medium hover:text-white transition-colors duration-300"
                >
                  View Project
                  <ArrowRight size={16} />
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-indigo/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-electric-indigo to-indigo-600 text-white px-8 py-4 rounded-full font-medium tracking-wide flex items-center gap-3 mx-auto hover:shadow-lg hover:shadow-electric-indigo/25 transition-all duration-300"
          >
            View All Projects
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}