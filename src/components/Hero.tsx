import React, { useState } from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Mail, Cpu, Brain, Zap as ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
  };

  const floatingIcons = [
    { Icon: Cpu, delay: 0, position: 'top-20 left-20' },
    { Icon: Brain, delay: 1, position: 'top-32 right-32' },
    { Icon: ZapIcon, delay: 2, position: 'bottom-40 left-16' },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32 relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-blue-200/30 hidden lg:block`}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-16 h-16" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">5,247 weekly readers</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Stay Sharp in the{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Get the week's most important AI and tech insights delivered to your inbox. 
              No fluff, just actionable intelligence for developers and tech leaders.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-sm min-h-[56px]"
                  required
                  aria-label="Email address"
                />
              </div>
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg hover:shadow-xl relative overflow-hidden min-h-[56px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Subscribe to newsletter"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                <span>Join 5,000+ Weekly Readers</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.form>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium">Free forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium">Unsubscribe anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="font-medium">Weekly delivery</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="bg-white rounded-xl shadow-2xl p-8 border border-gray-200 hover:shadow-3xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-500 font-medium tracking-wide">AI & Tech Digest #127</div>
                <h3 className="font-display font-bold text-gray-900 text-xl tracking-tight">OpenAI's GPT-4 Turbo Changes Everything</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This week: GPT-4 Turbo's 128K context window, Google's Gemini preview, 
                  and why your startup's AI strategy needs an immediate rethink...
                </p>
                <div className="pt-4 border-t border-gray-200 flex justify-between text-xs text-gray-500 font-medium">
                  <span>5 min read</span>
                  <span>Dec 15, 2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;