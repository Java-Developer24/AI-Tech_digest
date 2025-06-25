import React from 'react';
import { Brain, Clock, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Curated AI Intelligence",
      description: "Skip the noise. Get only the AI developments that actually impact your work and career."
    },
    {
      icon: Clock,
      title: "5-Minute Weekly Reads",
      description: "Designed for busy professionals. Everything you need to know in the time it takes to drink your coffee."
    },
    {
      icon: Target,
      title: "Actionable Insights",
      description: "Not just news. Real takeaways you can implement in your projects, team, or strategy this week."
    },
    {
      icon: Users,
      title: "Developer-First Perspective",
      description: "Written by developers, for developers. Technical depth without the marketing fluff."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 tracking-tighter">
            Why Subscribe to AI & Tech Digest?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-tight">
            Because your time is valuable, and the AI landscape changes faster than you can keep up with it.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="group"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 h-full border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4 tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;