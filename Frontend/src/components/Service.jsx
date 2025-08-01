import React, { useState, useRef } from 'react';
import { Clock, CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Img1 from '../assets/webDevelopment.png';

const Service = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      category: "Development",
      description: "Custom websites and web applications built with modern technologies",
      deliveryTime: "7-14 days",
      price: "$299",
      rating: 4.98,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      image: "https://www.tech-bhai.com/wp-content/uploads/2024/10/gifImg-9.gif"
    },
    {
      icon: "📱",
      title: "Mobile App Development", 
      category: "Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      deliveryTime: "14-21 days",
      price: "$599",
      rating: 4.99,
      features: ["Cross Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      image: "https://htsm.in/img/Flutter-App-Development.webp"
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions",
      category: "Development",
      description: "Complete online store setup with payment integration and inventory management",
      deliveryTime: "10-18 days",
      price: "$449",
      rating: 4.95,
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
      image: "https://i0.wp.com/www.magetop.com/blog/wp-content/uploads/2022/06/E-Commerce-Development-Bloom-IT.jpg?resize=800%2C445&ssl=1"
    },
    
    {
      icon: "🎨",
      title: "Graphic Design",
      category: "Design",
      description: "Professional design services for branding and marketing materials",
      deliveryTime: "3-7 days",
      price: "$149",
      rating: 4.97,
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"],
      image: "https://www.careercollegeindia.com/blog/wp-content/uploads/2024/09/UI-UX-Designer-scaled.jpg"
    },
    
    {
      icon: "📈",
      title: "Digital Marketing",
      category: "Marketing",
      description: "Complete digital marketing solutions to grow your online presence",
      deliveryTime: "5-10 days",
      price: "$199",
      rating: 4.96,
      features: ["SEO Strategy", "Social Media", "Content Marketing", "Analytics"],
      image: "https://dsdeducation.in/wp-content/uploads/2024/02/digital_marketing_img_00-1.jpg"
    },
    {
      icon: "💡",
      title: "Consulting Services",
      category: "Business",
      description: "Strategic business and technology consulting to optimize your operations",
      deliveryTime: "2-5 days",
      price: "$99",
      rating: 4.94,
      features: ["Business Strategy", "Tech Consulting", "Process Optimization", "Growth Planning"],
      image: "https://lh7-us.googleusercontent.com/CFQ5ZWuItvvsAfmVNcUT8t3jZo7ICKSbwFe4yif8iHuL3qVDd4DIcjNb6qVHelSfMCK-dFuH8bhK_nbB0f7egAZwbCoK6vPN0hgoz20c7-AlmtyyEdPt_1MAg7kLFfkCNWpO9lkifgrxQeEC39f7r8o"
    }
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 320;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  return (
    <section className="py-16 ">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
            <p className="text-gray-600">Professional services delivered by expert freelancers</p>
          </div>
          
          {/* Navigation */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition-colors ${
                canScrollLeft 
                  ? 'bg-white shadow-md hover:bg-gray-50 text-gray-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition-colors ${
                canScrollRight 
                  ? 'bg-white shadow-md hover:bg-gray-50 text-gray-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Services Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-fit"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {service.title}
                      </h3>
                      <div className="flex items-center space-x-1 mb-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                        <span className="text-sm text-gray-500">(127)</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.deliveryTime}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">
                        {service.price}
                        <span className="text-sm font-normal text-gray-500">/project</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
            <div className="w-8 h-2 rounded-full bg-blue-600"></div>
            {Array.from({ length: Math.ceil(services.length / 3) - 1 }).map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-gray-300"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
};

export default Service;