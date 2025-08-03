"use client"
import { motion } from "framer-motion"
import img from "../assets/logoFooter2.png"
import { FaGooglePlay, FaAppStoreIos, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.2, color: "#6366F1" }, // Example hover color for social icons
  }

  return (
    <motion.footer
      className="w-full bg-gray-900 rounded-t-3xl h-fit p-5 md:pt-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <motion.img variants={itemVariants} src={img} alt="Orvion Logo" className="w-40 h-40" />
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl text-white font-semibold capitalize m-4 md:mt-0"
          >
            Job well-done.
          </motion.h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mb-10 gap-y-8"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Office Services
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Personal Assistant
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Shopping Delivery
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Miscellaneous
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Home & Repairs</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Home Repairs
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Furniture Assembly
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Painting
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Farm Work
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">More Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Plumbing
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Outdoor Help
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Shipping & Freight
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Livestock
              </motion.li>
            </ul>
          </motion.div>
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
                Support Center
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Sarwisi AI
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                For Taskers
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                For Drivers
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                For Merchants
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                Safety Standards
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contacts</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                +91 620-382-1043
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="hover:text-gray-300 cursor-pointer">
                anissh946@gmail.com
              </motion.li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Mobile App</h3>
            <div className="flex items-center gap-4">
              <motion.div variants={iconVariants} whileHover="hover" className="cursor-pointer">
                <FaGooglePlay size={24} />
              </motion.div>
              <motion.div variants={iconVariants} whileHover="hover" className="cursor-pointer">
                <FaAppStoreIos size={24} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border-t-2 max-w-7xl mx-auto border-gray-200 py-5 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-white text-sm">©2025 Orvion Technologies Ltd.</p>
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
