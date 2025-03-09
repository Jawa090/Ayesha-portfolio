
import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h4 className="text-pink-400 font-medium cursive text-xl">Hello, I'm</h4>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Ayesha Zahid
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground/80">
            UI/UX Designer
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            Crafting Beautiful & Intuitive Designs that bring ideas to life with elegance,
            functionality, and a touch of magic.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary flex items-center gap-2">
              View Portfolio <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative z-10">
            <img 
              src="/zahid.jpg" 
              alt="Ayesha Zahid" 
              className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover mx-auto border-4 border-white shadow-xl"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[26rem] md:h-[26rem] bg-pink-100/50 rounded-full -z-10 animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-peach-100 rounded-full -z-10 animate-float"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
