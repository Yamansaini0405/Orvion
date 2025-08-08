import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Projects() {

    const recentProjects = [
    {
      title: "E-commerce Platform for Retailer X",
      description: "Developed a scalable e-commerce solution with custom features, leading to a 30% increase in online sales.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Development",
    },
    {
      title: "Mobile App for Fitness Startup",
      description: "Designed and built an intuitive fitness tracking mobile app for iOS and Android, achieving 10k+ downloads in first month.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile App Development",
    },
    {
      title: "Brand Identity & Marketing Campaign for TechCo",
      description: "Created a cohesive brand identity and launched a successful digital marketing campaign, boosting brand recognition by 45%.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Digital Marketing",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  // Individual project card animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (

      <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful collaborations and see the impact we've made for our clients.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {recentProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-opacity-0"
                  whileHover={{ 
                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
              
              <div className="p-6">
                <motion.span 
                  className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
                
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.a 
                  href="#" 
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  View Case Study
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1d4ed8",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              className="relative z-10"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              View All Projects
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-600 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects