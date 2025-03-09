
import React from 'react';
import { cn } from "@/lib/utils";
import { 
  PenTool, Layout, Smartphone, Globe, Palette, Figma, 
  Code, BrainCircuit, MessageSquare, Lightbulb 
} from "lucide-react";

type Skill = {
  name: string;
  icon: React.ReactNode;
  description: string;
};

type Service = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

const skills: Skill[] = [
  { 
    name: "UI Design", 
    icon: <PenTool className="h-6 w-6 text-pink-400" />, 
    description: "Creating visually appealing interfaces" 
  },
  { 
    name: "UX Design", 
    icon: <BrainCircuit className="h-6 w-6 text-pink-400" />, 
    description: "Crafting intuitive user experiences" 
  },
  { 
    name: "Wireframing", 
    icon: <Layout className="h-6 w-6 text-pink-400" />, 
    description: "Building structural blueprints" 
  },
  { 
    name: "Prototyping", 
    icon: <Smartphone className="h-6 w-6 text-pink-400" />, 
    description: "Creating interactive mockups" 
  },
  { 
    name: "Responsive Design", 
    icon: <Globe className="h-6 w-6 text-pink-400" />, 
    description: "Designing for all devices" 
  },
  { 
    name: "Color Theory", 
    icon: <Palette className="h-6 w-6 text-pink-400" />, 
    description: "Creating harmonious color schemes" 
  },
  { 
    name: "Figma", 
    icon: <Figma className="h-6 w-6 text-pink-400" />, 
    description: "Expert in Figma design tool" 
  },
  { 
    name: "HTML/CSS", 
    icon: <Code className="h-6 w-6 text-pink-400" />, 
    description: "Basic frontend development" 
  },
];

const services: Service[] = [
  {
    title: "UI/UX Design",
    icon: <PenTool className="h-8 w-8 text-white" />,
    description: "Creating beautiful, intuitive interfaces and experiences that delight users and meet business goals."
  },
  {
    title: "Web & Mobile Design",
    icon: <Smartphone className="h-8 w-8 text-white" />,
    description: "Designing responsive websites and mobile applications with a focus on usability and aesthetics."
  },
  {
    title: "Brand Identity",
    icon: <Palette className="h-8 w-8 text-white" />,
    description: "Developing cohesive visual identities that communicate brand values and resonate with audiences."
  },
  {
    title: "Design Consultation",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    description: "Providing expert advice and insights to improve existing designs or guide new projects."
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-pink-50 rounded-full -z-10 -translate-x-1/4 -translate-y-1/4 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-peach-50 rounded-full -z-10 translate-x-1/4 translate-y-1/4 opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Services</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-muted-foreground">My expertise and what I can offer to bring your vision to life.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold relative inline-block">
              My Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-200"></span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-card p-4 text-center transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
                >
                  <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                    {skill.icon}
                  </div>
                  <h4 className="font-bold mb-1">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold relative inline-block">
              My Services
              <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-200"></span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-pink-400 to-pink-500 rounded-xl p-6 text-white shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-1"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-white/85 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
