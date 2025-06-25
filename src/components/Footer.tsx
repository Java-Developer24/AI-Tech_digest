import React from 'react';
import { Zap, Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Follow on Twitter' },
    { icon: Linkedin, href: '#', label: 'Connect on LinkedIn' },
    { icon: Github, href: '#', label: 'View on GitHub' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">AI & Tech Digest</span>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                NEWSLETTER
              </div>
            </motion.div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The weekly newsletter that keeps developers and tech leaders ahead of the AI curve. 
              Insightful, actionable, and refreshingly honest.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <motion.a 
                  key={index}
                  href={href} 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-all duration-200 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4 tracking-tight">Newsletter</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: 'Recent Issues', href: '#recent' },
                { name: 'Archive', href: '#archive' },
                { name: 'Subscribe', href: '#subscribe' },
                { name: 'RSS Feed', href: '#rss' }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="hover:text-white transition-colors flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold mb-4 tracking-tight">Company</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                { name: 'About', href: '#about' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy', href: '#privacy' },
                { name: 'Terms', href: '#terms' }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a 
                    href={link.href} 
                    className="hover:text-white transition-colors flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm">
            © 2024 AI & Tech Digest. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Built with care for the developer community.
            </p>
            <div className="flex items-center space-x-1 text-red-400">
              <span className="text-sm">❤️</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;