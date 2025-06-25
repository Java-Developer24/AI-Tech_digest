import React from 'react';
import { Calendar, ArrowRight, ExternalLink, Tag, Cpu, Brain, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const RecentIssues = () => {
  const issues = [
    {
      number: 127,
      title: "OpenAI's GPT-4 Turbo Changes Everything",
      excerpt: "Deep dive into GPT-4 Turbo's 128K context window, pricing changes, and what it means for your applications. Plus: Google's Gemini first impressions and the new AI developer toolkit landscape.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      topics: [
        { name: "OpenAI", icon: Brain },
        { name: "GPT-4", icon: Cpu },
        { name: "API Changes", icon: Code }
      ]
    },
    {
      number: 126,
      title: "The Great AI Framework Consolidation",
      excerpt: "LangChain vs LlamaIndex vs the new kids on the block. We tested them all so you don't have to. Also: why your RAG implementation is probably wrong (and how to fix it).",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      topics: [
        { name: "Frameworks", icon: Code },
        { name: "RAG", icon: Brain },
        { name: "LangChain", icon: Cpu }
      ]
    },
    {
      number: 125,
      title: "Vector Databases: Overhyped or Essential?",
      excerpt: "A technical deep-dive into Pinecone, Weaviate, and Chroma. Performance benchmarks, cost analysis, and when you actually need a vector database (spoiler: probably not always).",
      date: "Dec 1, 2024",
      readTime: "7 min read",
      topics: [
        { name: "Vector DB", icon: Cpu },
        { name: "Performance", icon: Code },
        { name: "Architecture", icon: Brain }
      ]
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
    <section id="recent" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 tracking-tighter">
            Recent Issues
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what you've been missing. Here's what we've covered lately.
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {issues.map((issue, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <motion.span 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    Issue #{issue.number}
                  </motion.span>
                  <div className="flex items-center space-x-2 text-gray-500 text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>{issue.date}</span>
                    <span>•</span>
                    <span>{issue.readTime}</span>
                  </div>
                </div>
                <motion.button 
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200"
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Read issue ${issue.number}`}
                >
                  <span>Read Issue</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                {issue.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">{issue.excerpt}</p>
              
              <div className="flex flex-wrap gap-3">
                {issue.topics.map((topic, topicIndex) => (
                  <motion.span 
                    key={topicIndex} 
                    className="bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <topic.icon className="w-3 h-3" />
                    <span>{topic.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold text-lg"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span>View All Issues</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RecentIssues;