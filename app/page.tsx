'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Rocket, Users, Code, Sparkles, ArrowRight, Play, Github, Twitter, MessageCircle } from 'lucide-react'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      {/* Particules animées en arrière-plan */}
      <div className="fixed inset-0 cyber-grid opacity-20"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-dark-bg/80 border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Brain className="w-8 h-8 text-neon-blue" />
              <span className="text-xl font-bold">Usine AI</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="glow-link">À Propos</a>
              <a href="#projects" className="glow-link">Projets</a>
              <a href="#community" className="glow-link">Communauté</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon"
              >
                Rejoindre
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg/50 to-dark-bg"></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Usine AI
              </span>
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl mb-8 typewriter"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Construisons l'IA qui change le monde
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Rejoignez la communauté des builders IA visionnaires qui créent des projets concrets. 
              De SophIA à nos SaaS révolutionnaires, nous façonnons l'avenir avec l'intelligence artificielle.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon flex items-center space-x-2 px-8 py-4 text-lg"
              >
                <Rocket className="w-5 h-5" />
                <span>Rejoindre la communauté</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 text-lg border border-gray-600 rounded hover:border-neon-blue transition-colors"
              >
                <Play className="w-5 h-5" />
                <span>Découvrir nos projets</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistiques flottantes */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-12">
            {[
              { number: "50+", label: "Projets IA" },
              { number: "200+", label: "Builders" },
              { number: "24/7", label: "Innovation" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.2 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-neon-blue">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À Propos */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-neon-blue">Notre</span> Mission
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'Usine A est une communauté de builders IA qui transforment les idées en projets concrets 
              grâce à l'exécution rapide et l'intelligence collective.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12 text-neon-blue" />,
                title: "Core - Développement",
                description: "Création de prototypes IA rapides avec les technologies les plus avancées"
              },
              {
                icon: <Sparkles className="w-12 h-12 text-neon-purple" />,
                title: "Growth - Croissance",
                description: "Stratégies marketing et croissance pour maximiser l'impact de nos projets"
              },
              {
                icon: <Rocket className="w-12 h-12 text-neon-pink" />,
                title: "Déploiement - Infrastructure",
                description: "Mise en production et scalabilité de nos solutions IA"
              }
            ].map((pole, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="floating-card p-8 rounded-lg text-center"
              >
                <div className="mb-6 flex justify-center">{pole.icon}</div>
                <h3 className="text-xl font-bold mb-4">{pole.title}</h3>
                <p className="text-gray-300">{pole.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20 px-4 bg-dark-surface/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-neon-purple">Projets</span> Révolutionnaires
            </h2>
            <p className="text-xl text-gray-300">
              Découvrez nos créations IA qui changent déjà le monde
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SophIA",
                description: "Chatbot empathique révolutionnaire avec IA conversationnelle avancée",
                status: "En production",
                color: "neon-blue"
              },
              {
                title: "SaaS RH",
                description: "Plateforme RH intelligente avec IA prédictive pour le recrutement",
                status: "En développement",
                color: "neon-purple"
              },
              {
                title: "Projet 0",
                description: "Mini-coach Telegram avec IA pour le développement personnel",
                status: "Prototype",
                color: "neon-pink"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="holographic floating-card p-6 rounded-lg"
              >
                <div className="mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                    {project.status}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-neon-blue hover:text-white transition-colors"
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Communauté */}
      <section id="community" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez Notre <span className="text-neon-pink">Communauté</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Que vous soyez développeur, marketeur, designer ou simplement passionné d'IA, 
              votre place est parmi nous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-neon-blue" />
                <div>
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-gray-300">Travaillez avec les meilleurs talents IA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Code className="w-8 h-8 text-neon-purple" />
                <div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-gray-300">Accès aux dernières technologies IA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Sparkles className="w-8 h-8 text-neon-pink" />
                <div>
                  <h3 className="text-xl font-bold">Impact</h3>
                  <p className="text-gray-300">Créez des projets qui changent le monde</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="floating-card p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Commencez votre aventure</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-neon-blue focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded focus:border-neon-blue focus:outline-none">
                  <option>Choisir votre rôle</option>
                  <option>Développeur</option>
                  <option>Marketeur</option>
                  <option>Designer</option>
                  <option>Autre</option>
                </select>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-neon py-3"
                >
                  Rejoindre l'Usine AI
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-dark-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-neon-blue" />
                <span className="text-lg font-bold">Usine AI</span>
              </div>
              <p className="text-gray-400">
                La factory IA qui construit l'avenir, un projet à la fois.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Projets</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="glow-link">SophIA</a></li>
                <li><a href="#" className="glow-link">SaaS RH</a></li>
                <li><a href="#" className="glow-link">Projet 0</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Communauté</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="glow-link">Discord</a></li>
                <li><a href="#" className="glow-link">Telegram</a></li>
                <li><a href="#" className="glow-link">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-neon-blue cursor-pointer transition-colors" />
                <Github className="w-6 h-6 text-gray-400 hover:text-neon-blue cursor-pointer transition-colors" />
                <MessageCircle className="w-6 h-6 text-gray-400 hover:text-neon-blue cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-dark-border mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Usine AI. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 