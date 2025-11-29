import React from 'react'
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";


function Workplace() {
  return (
    <section id="workspace" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Workspace</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of the business district, our modern workspace is designed for collaboration and
              innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Google Maps */}
            <div className="relative ">
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl h-[30rem]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23221.76867920492!2d77.34909992690056!3d28.639069476972143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf10063d3a6f1%3A0xe6827a21ff62abef!2sWFH%20Co-working%20space%2F%20Conference%20Room%2F%20Day%20Pass%20%26%20office%20Space!5e0!3m2!1sen!2sin!4v1754977504357!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[100%]"
                ></iframe>
              </div>

              {/* Map Overlay Badge */}
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">Our Office</div>
                    <div className="text-xs text-gray-600">Indirapuram, Ghaziabad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Location & Details</h3>

                <div className="grid grid-cols-2 space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">
                       WFH Co-working space/ Conference Room & office Space
                        <br />
                        Indirapuram, Ghaziabad
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-xl flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 8941092513</p>
                      <p className="text-sm text-gray-500">Available 24/7 for urgent projects</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">yaytech@gmail.com</p>
                      <p className="text-sm text-gray-500">Response within 2 hours</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                      <Clock className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-6 flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/dir//Second+Floor,+Plot,+WFH+Co-working+space%2F+Conference+Room%2F+Day+Pass+%26+office+Space,+27,+Mall+Rd,+opposite+Raison+Armor+society,+Ahinsa+Khand+2,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014/@28.6390695,77.3490999,14.27z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cf10063d3a6f1:0xe6827a21ff62abef!2m2!1d77.3826488!2d28.6407957?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center  bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors duration-200 shadow-lg"
                >
                  <MapPin className="h-5 w-5 mr-3" />
                  Get Directions
                  <ArrowRight className="h-5 w-5 ml-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Workplace