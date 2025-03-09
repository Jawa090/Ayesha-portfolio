
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Mail, MessageSquare, Phone, Send, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gold-pink-gradient">
      <div className="absolute top-0 right-0 w-48 h-48 bg-white/30 rounded-full -translate-y-1/2 translate-x-1/2 backdrop-blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/30 rounded-full translate-y-1/2 -translate-x-1/4 backdrop-blur-sm"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-muted-foreground">Have a project in mind? Let's bring your vision to life!</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 bg-white/60 border border-pink-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                    // placeholder="John Doe"
                  />
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 bg-white/60 border border-pink-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                    // placeholder="john@example.com"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pl-10 bg-white/60 border border-pink-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                    placeholder="Project Inquiry"
                  />
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-pink-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/60 border border-pink-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                  placeholder="Hello, I'd like to discuss a project idea..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in-right">
            <div className="glass-card p-6 md:p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:ayesha@example.com" className="font-medium hover:text-pink-500 transition-colors">
                    ayesharao923@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-pink-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="font-medium hover:text-pink-500 transition-colors">
                      +92 67567890
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-400 text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-400 text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayesha-zahid-96a0a7324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  className="w-12 h-12 bg-pink-400 text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-pink-400 text-white rounded-full flex items-center justify-center hover:bg-pink-500 transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
