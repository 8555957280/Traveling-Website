import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'The most amazing travel experience of my life! The team took care of everything, making our journey unforgettable.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Photography Expert',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote: 'Incredible destinations, perfect organization, and wonderful memories. I couldn\'t have asked for more!',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-600/20" />
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}