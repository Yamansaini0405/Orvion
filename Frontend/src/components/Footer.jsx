"use client"
import { motion } from "framer-motion"
import Logo2 from "../assets/Logo.png"
import { FaGooglePlay, FaAppStoreIos, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.2, color: "#6366F1" },
  }

  return (
    <motion.footer
      className="w-full bg-black rounded-t-3xl h-fit p-5 md:pt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logo + Tagline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <motion.img variants={itemVariants} src={Logo2} alt="Company Logo" className="w-48 h-16 bg-white my-6" />
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl text-white font-semibold capitalize m-4 md:mt-0"
          >
            Building Intelligent Digital Experiences.
          </motion.h1>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          variants={containerVariants}
          className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10 gap-y-8"
        >
          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Web App Development
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Mobile App Development
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                AI & ML Solutions
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                SaaS Product Development
              </motion.li>
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Custom Enterprise Software
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Cloud & DevOps Solutions
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Automation Tools
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Data & Analytics
              </motion.li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                SaaS Platforms
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                API Integrations
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                CRM & ERP Systems
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                AI Automation Tools
              </motion.li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                About Us
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Careers
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Blog & Insights
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Contact & Support
              </motion.li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Case Studies
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Documentation
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Developer Tools
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Security Guidelines
              </motion.li>
            </ul>
          </motion.div>

          {/* Contacts */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                +91 8941092513
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                hello@yourcompany.com
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white text-sm">©2025 Your Software Solutions Company.</p>
          <ul className="text-white flex gap-3 text-xl mt-4 md:mt-0">
            <motion.li variants={iconVariants} whileHover="hover" className="cursor-pointer">
              <FaFacebook />
            </motion.li>
            <motion.li variants={iconVariants} whileHover="hover" className="cursor-pointer">
              <FaSquareXTwitter />
            </motion.li>
            <motion.li variants={iconVariants} whileHover="hover" className="cursor-pointer">
              <FaLinkedin />
            </motion.li>
            <motion.li variants={iconVariants} whileHover="hover" className="cursor-pointer">
              <FaInstagram />
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer