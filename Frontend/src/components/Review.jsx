"use client"

import React from "react"
import Profile from "../assets/profile.jpeg"
import { User, Star } from "lucide-react"
import { motion } from "framer-motion"

const personPlaceholder = "../assets/profile.jpeg"

const testimonials = [
  {
    name: "Ujjwal Sharma",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consectetur exercitationem officiis ea enim vero. Molestias delectus, libero, ratione quaerat quam",
    position: "Co-founder Xcentic",
    imageSrc: personPlaceholder,
  },
  {
    name: "Jane Doe",
    text: "This platform has truly transformed how I approach my work. The features are intuitive and the support is exceptional. Highly recommend!",
    position: "Lead Developer, TechCorp",
    imageSrc: personPlaceholder,
  },
  {
    name: "John Smith",
    text: "An outstanding experience from start to finish. The attention to detail and user-friendly interface make it a joy to use every day.",
    position: "Product Manager, InnovateX",
    imageSrc: personPlaceholder,
  },
  {
    name: "Alice Johnson",
    text: "Incredible value for money! This tool has boosted our team's productivity significantly. We couldn't be happier with the results.",
    position: "Marketing Director, Global Brands",
    imageSrc: personPlaceholder,
  },
  {
    name: "Bob Williams",
    text: "The best solution I've found so far. It's robust, reliable, and constantly improving. A must-have for anyone serious about their projects.",
    position: "CEO, Future Solutions",
    imageSrc: personPlaceholder,
  },
]

const Review = () => {
  return (
    <div className="w-full py-10 ">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-center md:justify-start items-center h-fit">
          <p className="flex justify-start items-center border border-gray-300 px-3 rounded-lg text-xs gap-1 mb-4 py-1 text-gray-700 font-semibold">
            <User size={12} />
            <span className="text-xs -translate-y-[1px] font-semibold">Customers</span>
          </p>
        </div>
        <h1 className="text-center md:text-left text-4xl md:text-5xl/tight font-bold capitalize mb-2 text-gray-900">
          What people say
        </h1>
        <p className="text-sm md:text-lg text-center md:text-left text-gray-500 mb-6 md:mb-10">
          Here's what some of our customers say about our platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 overflow-hidden h-[40rem] p-4">
          <TestimonialsColumn testimonials={testimonials} duration={15} />
          <TestimonialsColumn testimonials={testimonials} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={testimonials} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </div>
  )
}

const TestimonialsColumn = (props) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-12 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, position }, idx) => (
            <div
              key={idx}
              className="w-full rounded-2xl shadow-lg p-5 flex flex-col justify-between gap-3 bg-white border border-gray-200"
            >
              <div className="flex gap-1 justify-start items-center">
                <Star className="text-indigo-500" fill="currentColor" />
                <Star className="text-indigo-500" fill="currentColor" />
                <Star className="text-indigo-500" fill="currentColor" />
                <Star className="text-indigo-500" fill="currentColor" />
                <Star className="text-indigo-500" fill="currentColor" />

                <p className="text-md text-gray-900 font-bold">4.8</p>
              </div>
              <p className="font-sans italic text-sm text-gray-700">{text}</p>
              <div className="flex gap-4 items-center">
                {/* <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`Profile picture of ${name}`}
                  className="rounded-full h-10 w-10 object-cover"
                  width={40}
                  height={40}
                /> */}
                <img
                  src={Profile || imageSrc}
                  alt={`Profile picture of ${name}`}
                  className="rounded-full h-10 w-10 object-cover"
                />
                <div>
                  <h2 className="text-xs font-bold mb-1 text-gray-900">{name}</h2>
                  <p className="text-xs font-light text-gray-600">{position}</p>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

export default Review
