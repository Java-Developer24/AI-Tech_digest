import React, { useState, useEffect, useRef } from 'react';
import { Mail, Shield, Zap, Star, MessageCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing:', email);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--newsletter-bg-pattern)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4 tracking-tighter">
            Ready to Stay Ahead?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join 5,000+ developers, founders, and tech leaders who read AI & Tech Digest every week.
          </p>
        </motion.div>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-gray-900 shadow-lg min-h-[56px]"
                required
                aria-label="Email address for subscription"
              />
            </div>
            <motion.button
              type="submit"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl min-h-[56px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Subscribe to newsletter"
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.form>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4" />
            <span className="font-medium">Free forever</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span className="font-medium">No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span className="font-medium">Weekly delivery</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="pt-8 border-t border-blue-500/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <motion.div
              className="animate-counter"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-display font-bold text-white mb-2">
                <AnimatedCounter end={127} />
              </div>
              <div className="text-blue-200 text-sm font-medium flex items-center justify-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>Issues Published</span>
              </div>
            </motion.div>
            <motion.div
              className="animate-counter"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-display font-bold text-white mb-2">
                <AnimatedCounter end={5247} />
              </div>
              <div className="text-blue-200 text-sm font-medium flex items-center justify-center space-x-1">
                <Users className="w-4 h-4" />
                <span>Active Subscribers</span>
              </div>
            </motion.div>
            <motion.div
              className="animate-counter"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-display font-bold text-white mb-2">
                <AnimatedCounter end={4.9} suffix="★" />
              </div>
              <div className="text-blue-200 text-sm font-medium flex items-center justify-center space-x-1">
                <Star className="w-4 h-4" />
                <span>Average Rating</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-blue-500/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                "Finally, an AI newsletter that doesn't waste my time. Every issue has something I can actually use in my work."
              </p>
              <div className="text-white font-semibold">Sarah Chen</div>
              <div className="text-blue-200 text-sm">Senior ML Engineer, Stripe</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                "The technical depth is perfect. Not too shallow, not too deep. Just right for staying current without the overwhelm."
              </p>
              <div className="text-white font-semibold">Marcus Rodriguez</div>
              <div className="text-blue-200 text-sm">CTO, TechFlow</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;