
import React from 'react';
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t border-pink-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-handwriting text-2xl text-pink-400">Ayesha Zahid</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              &copy; {currentYear} All Rights Reserved. Designed with 
              <Heart className="h-4 w-4 text-pink-400 mx-1 inline-block animate-pulse" />
              by Ayesha Zahid
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
