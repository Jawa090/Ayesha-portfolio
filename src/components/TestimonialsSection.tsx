
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Chen",
    role: "CEO",
    company: "Bloom Beauty",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial: "Ayesha transformed our app's design from functional to exceptional. Her eye for detail and understanding of our brand vision resulted in a beautiful interface that our customers love to use.",
  },
  {
    id: 2,
    name: "Michael Peterson",
    role: "Product Manager",
    company: "Serene Tech",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial: "Working with Ayesha was a true pleasure. She took our vague ideas and transformed them into a cohesive, user-friendly dashboard that exceeded our expectations.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Marketing Director",
    company: "Lumina Fashion",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    testimonial: "Ayesha has an incredible ability to bring brands to life through design. She created a website that perfectly captures our brand essence while providing an intuitive user experience.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Founder",
    company: "Harmony Music",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    testimonial: "The UI/UX design that Ayesha created for our music app was nothing short of phenomenal. Her attention to detail and understanding of user behavior led to a significant increase in user engagement.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const visibleTestimonials = isMobile 
    ? [testimonials[activeIndex]] 
    : [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
      ];

  return (
    <section id="testimonials" className="section-padding bg-peach-pink-gradient relative overflow-hidden">
      <div className="absolute top-20 right-20 w-48 h-48 bg-white rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-white rounded-full opacity-20"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-muted-foreground">What my clients say about working with me.</p>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 md:gap-8 flex-wrap md:flex-nowrap">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="w-full md:w-1/2 glass-card p-6 md:p-8 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-pink-300 mb-4" />
                  <p className="text-lg italic text-foreground/85">{testimonial.testimonial}</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 bg-white text-pink-400 rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 bg-white text-pink-400 rounded-full flex items-center justify-center shadow-md hover:bg-pink-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
