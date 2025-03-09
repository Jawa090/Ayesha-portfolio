
import React from 'react';
import { cn } from "@/lib/utils";
import { Heart, Star, Users } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-pink-50 rounded-full -z-10 translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 bg-peach-50 rounded-full -z-10 -translate-x-1/4 translate-y-1/4 opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-muted-foreground">Get to know the creative mind behind the designs.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-6 md:p-8 space-y-6 order-2 lg:order-1">
            <p className="text-lg leading-relaxed">
              Hello! I'm Ayesha, a passionate UI/UX designer with a keen eye for aesthetics and a deep understanding of user experience. I believe that great design is not just about how things look, but about how they work.
            </p>
            <p className="text-lg leading-relaxed">
              With over 2 years of experience in the industry, I've had the privilege of working with diverse clients across various sectors, helping them create digital experiences that are both beautiful and functional.
            </p>
            <p className="text-lg leading-relaxed">
              My approach to design centers around empathy, creativity, and strategic thinking. I'm dedicated to crafting interfaces that not only meet business objectives but also delight users at every touchpoint.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="flex justify-center">
                  <Heart className="h-8 w-8 text-pink-400 mb-2" />
                </div>
                <h3 className="font-bold text-2xl">50+</h3>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Star className="h-8 w-8 text-gold-400 mb-2" />
                </div>
                <h3 className="font-bold text-2xl">100+</h3>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <Users className="h-8 w-8 text-peach-400 mb-2" />
                </div>
                <h3 className="font-bold text-2xl">2+</h3>
                <p className="text-sm text-muted-foreground">Years Exp.</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="/ayesha.jpg" 
              alt="Ayesha at work" 
              className="rounded-lg shadow-soft object-cover h-[600px] w-full"
            />
            <div className="absolute -bottom-5 -right-5 bg-pink-100 h-32 w-32 rounded-full -z-10"></div>
            <div className="absolute -top-5 -left-5 bg-gold-100 h-24 w-24 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
