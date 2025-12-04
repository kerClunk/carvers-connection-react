import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
               <Logo className="h-12 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connection to Carvers. Destroying Fresh Corduroy Wherever it's Found.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-bold uppercase mb-6 tracking-wide text-brand-secondary">Credits</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Content and photography by <a href="#" className="hover:text-white transition-colors underline decoration-brand-accent">Cherry Carves</a></li>
              <li>Content and photography by <a href="#" className="hover:text-white transition-colors underline decoration-brand-accent">Martina Sochorova</a></li>
              <li>Logo and animation by <a href="#" className="hover:text-white transition-colors underline decoration-brand-accent">Carver Arcalis</a></li>
              <li>Background photos by <a href="#" className="hover:text-white transition-colors underline decoration-brand-accent">Happybob</a></li>
              <li>Website by <a href="mailto:clunk@carversconnection.com" className="hover:text-white transition-colors underline decoration-brand-accent">clunk</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
             <h4 className="font-display text-lg font-bold uppercase mb-6 tracking-wide text-brand-secondary">Connect</h4>
             <div className="flex space-x-4">
               {/* Placeholders for social icons */}
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors cursor-pointer">
                  <ExternalLink size={18} />
               </div>
             </div>
             <p className="mt-6 text-sm text-gray-500">
               Based in the Mountains.<br/>
               Riding everywhere.
             </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; 2024 CarversConnection. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <span className="text-xs text-gray-500 hover:text-white cursor-pointer">Privacy Policy</span>
             <span className="text-xs text-gray-500 hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;