import React from 'react'
import {
  Clock,
  CheckCircle,
  Users,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Calendar,
  Target,
  Zap,
} from "lucide-react"
import Footer from './Footer'
import Service from './Service'
import Review from './Review'

function Home() {
    const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: "💻",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      deliveryTime: "7-14 days",
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "📱",
      features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      deliveryTime: "14-21 days",
    },
    {
      title: "Digital Marketing",
      description: "Complete digital marketing solutions to grow your online presence",
      icon: "📈",
      features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"],
      deliveryTime: "5-10 days",
    },
    {
      title: "Graphic Design",
      description: "Professional design services for branding and marketing materials",
      icon: "🎨",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"],
      deliveryTime: "3-7 days",
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with payment integration and inventory management",
      icon: "🛒",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
      deliveryTime: "10-18 days",
    },
    {
      title: "Consulting Services",
      description: "Strategic business and technology consulting to optimize your operations",
      icon: "💡",
      features: ["Business Strategy", "Tech Consulting", "Process Optimization", "Growth Planning"],
      deliveryTime: "2-5 days",
    },
  ]

  const process = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify the perfect solution for your goals.",
      icon: <Target className="h-8 w-8" />,
    },
    {
      step: 2,
      title: "Proposal & Planning",
      description: "Detailed project proposal with timeline, milestones, and clear deliverables.",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      step: 3,
      title: "Development & Execution",
      description: "Our expert team works on your project with regular updates and communication.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "On-time delivery with comprehensive testing and ongoing support.",
      icon: <CheckCircle className="h-8 w-8" />,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "They delivered our e-commerce platform 2 days ahead of schedule. The quality exceeded our expectations!",
      rating: 5,
      project: "E-commerce Website",
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      text: "Professional team with excellent communication. They understood our requirements perfectly.",
      rating: 5,
      project: "Mobile App Development",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "Outstanding work on our rebranding project. They captured our vision and delivered on time.",
      rating: 5,
      project: "Brand Identity Design",
    },
  ]

    const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "On-Time Delivery" },
    { number: "200+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
     <>
     <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16 mt-2">
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                We Deliver Your Projects
                <span className="text-blue-600"> On Time</span>,<span className="text-blue-600"> Every Time</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional project delivery services with guaranteed deadlines. We approach clients, understand their
                needs, and deliver exceptional results within the agreed timeline.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 font-medium">
                  View Our Work
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>100% Quality Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-500 mr-2" />
                  <span>On-Time Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://lancebase.io/wp-content/uploads/2022/12/freelance-c-developer-hourly-rate.jpeg"
                // alt="Professional team working"
                className="rounded-lg shadow-2xl h-[500px] "
              />
              <div className="absolute -bottom-10 -left-12 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">98% Success Rate</div>
                    <div className="text-sm text-gray-600">Projects delivered on time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Service/>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we ensure your project is delivered on time, every time</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-blue-600 mt-1">{testimonial.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Review/>

      {/* Why Choose Us */}
      <section className="py-4 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center  gap-2 bg-blue-50 text-blue-600 px-8 py-4 rounded-full text-xl font-medium my-10">
            <CheckCircle className="w-4 h-4" />
            Why Choose Orvion
          </div>
          
          <p className="text-xl text-white max-w-3xl mx-auto">
            We deliver exceptional results through proven expertise, cutting-edge technology, 
            and an unwavering commitment to your success.
          </p>
          
          
        </div>

        {/* Main Features - Single Horizontal Line */}
         <div className="flex flex-col md:flex-row gap-8 mb-16">
          
          {/* Feature 1 */}
          <div className="group flex-1 bg-white border border-gray-100 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 transition-colors">
              <Clock className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Guaranteed On-Time Delivery</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              We understand that time is money. Every project is delivered precisely when promised with our industry-leading 99.5% on-time completion rate.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Milestone-based tracking system
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Daily progress reports
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                Risk mitigation protocols
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-900">Success Rate</span>
                <span className="text-2xl font-bold text-blue-600">99.5%</span>
              </div>
            </div>
            
            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer">
              <span className="text-sm">View case studies</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group flex-1 bg-white border border-gray-100 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">World-Class Expert Team</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Our handpicked team of senior developers, architects, and project managers brings 10+ years of experience from Fortune 500 companies.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                Certified senior professionals
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                Agile & DevOps expertise
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                24/7 dedicated support
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-green-900">Team Experience</span>
                <span className="text-2xl font-bold text-green-600">10+ Years</span>
              </div>
            </div>
            
            <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors cursor-pointer">
              <span className="text-sm">Meet our experts</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group flex-1 bg-white border border-gray-100 rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-700 transition-colors">
              <Award className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise-Grade Quality</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Our rigorous quality assurance process includes comprehensive testing protocols, code reviews, and security audits.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                Multi-tier testing framework
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                Security & compliance checks
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                Performance optimization
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-purple-900">Quality Score</span>
                <span className="text-2xl font-bold text-purple-600">98.7%</span>
              </div>
            </div>
            
            <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors cursor-pointer">
              <span className="text-sm">View quality process</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Start Your Project
            </button>
            <button className="text-gray-600 px-8 py-4 rounded-xl font-semibold hover:text-gray-900 transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>

       {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Clients only pay after hiring</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. No upfront costs, pay only when you find the right
              talent.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Marketplace Plan */}
            <div className="relative bg-white rounded-2xl shadow-xl border-2 border-blue-400 p-8 transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">MARKETPLACE</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">5%</span>
                  <span className="text-xl text-gray-600 ml-2">fee after hiring</span>
                </div>
                <p className="text-gray-600">For starting out on our global freelancer marketplace</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Free to post jobs on our global freelance marketplace</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">AI-powered features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Collaboration and project tracking tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Basic customer support</span>
                </li>
              </ul>

              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg">
                Get started for free
              </button>
            </div>

            {/* Business Plus Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg border-2 border-gray-900 p-8 transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">BUSINESS PLUS</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">10%</span>
                  <span className="text-xl text-gray-600 ml-2">fee after hiring</span>
                </div>
                <p className="text-gray-600">For growing businesses with premium features and support</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access to pre-screened top 1% of talent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Premium customer support 24/7</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">60 invites per job post</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced analytics and reporting</span>
                </li>
              </ul>

              <button className="w-full border-2 border-gray-900 text-gray-900 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200">
                Get started for free
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="relative bg-white rounded-2xl shadow-lg border-2 border-blue-400 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Enterprise
                </span>
              </div>
              <div className="text-center mb-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">ENTERPRISE</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">Contact sales</span>
                </div>
                <p className="text-gray-600">For scaling comprehensive solutions to the entire organization</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account and program management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">SSO and integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Unlimited invites per job</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Custom contracts and billing</span>
                </li>
              </ul>

              <button className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Contact sales
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline">
              Compare all plan features →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">{"Ready to discuss your project? We're here to help."}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (234) 567-890</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">hello@projectpro.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Office</div>
                    <div className="text-gray-600">
                      123 Business Ave, Suite 100
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">Business Hours</h4>
                <div className="text-gray-600">
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphic Design</option>
                    <option>E-commerce Solutions</option>
                    <option>Consulting Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements and timeline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
     </>
  )
}

export default Home