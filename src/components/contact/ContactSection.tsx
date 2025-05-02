import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-playfair text-5xl mb-6">Get in Touch</h2>
                <p className="text-cream/60 text-lg">
                  We'd love to hear from you. Our friendly team is always here to chat.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Call Us</h3>
                    <p className="text-cream/60 mb-1">Main Office</p>
                    <p className="text-lg">+91 88000 95584</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Email Us</h3>
                    <p className="text-cream/60 mb-1">Customer Support</p>
                    <p className="text-lg">contact@starshinebrands.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-cream" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl mb-2">Visit Us</h3>
                    <p className="text-cream/60 mb-1">Corporate Office</p>
                    <p className="text-lg">Flat No-20-21C, First Floor Fruit Garden NIT-5, Faridabad<br />Haryana, India, 121001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-deep-black/30 rounded-xl p-8 backdrop-blur-sm border border-cream/10">
              <form 
                action="https://usebasin.com/f/640ec996c073"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    className="w-full bg-deep-black/50 rounded-lg border border-cream/20 px-4 py-3 focus:border-cream/40 transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-cream text-deep-black font-semibold py-4 rounded-lg hover:bg-cream/90 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}