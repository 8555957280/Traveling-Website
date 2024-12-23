import React from 'react';
import { Plane } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Wanderlust</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#destinations" className="text-gray-600 hover:text-blue-600 transition-colors">Destinations</a>
            <a href="#deals" className="text-gray-600 hover:text-blue-600 transition-colors">Deals</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}