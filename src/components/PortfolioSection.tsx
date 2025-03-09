
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ExternalLink, Eye } from "lucide-react";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Bloom Beauty App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1596742578443-7682ef7b7766?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A luxury beauty e-commerce application with intuitive navigation and elegant UI design.",
    link: "#",
  },
  {
    id: 2,
    title: "Serene Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A clean, minimal dashboard design for a wellness platform with soothing aesthetics.",
    link: "#",
  },
  {
    id: 3,
    title: "Lumina Website",
    category: "Website",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A lifestyle brand website with elegant typography and sophisticated visual elements.",
    link: "#",
  },
  {
    id: 4,
    title: "Harmony Music App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A music streaming application with an intuitive interface and elegant visual design.",
    link: "#",
  },
  {
    id: 5,
    title: "Petals E-commerce",
    category: "Website",
    image: "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A floral e-commerce platform with a delicate design and seamless user experience.",
    link: "#",
  },
  {
    id: 6,
    title: "Velvet Fashion App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A luxury fashion mobile application with sophisticated UI and smooth interactions.",
    link: "#",
  },
];

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section id="portfolio" className="section-padding bg-soft-pink-gradient">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-muted-foreground">A showcase of my finest UI/UX design projects.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeFilter === category 
                  ? "bg-pink-400 text-white shadow-md" 
                  : "bg-white hover:bg-pink-50 text-foreground"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-soft transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-pink-500/70 via-pink-500/40 to-transparent flex items-center justify-center transition-opacity duration-300",
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                )}>
                  <a 
                    href={project.link} 
                    className="bg-white text-pink-500 px-5 py-2 rounded-full flex items-center gap-2 hover:bg-pink-50 transition-all"
                  >
                    <Eye size={18} /> View Project
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium bg-pink-100 text-pink-500 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <a 
                  href={project.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-500"
                >
                  View Details <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
