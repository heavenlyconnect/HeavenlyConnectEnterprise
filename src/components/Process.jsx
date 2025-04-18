import { motion } from 'framer-motion';
import { MessageSquare, Calendar, FileText, Zap } from 'react-feather';

const Process = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const steps = [
    { 
      title: "Initial Consultation",
      description: "Free preliminary discussion to understand your needs",
      icon: MessageSquare,
      color: "bg-primary-accent/20"
    },
    { 
      title: "Expert Assessment", 
      description: "Comprehensive evaluation by our specialists",
      icon: Calendar,
      color: "bg-primary-accent/20"
    },
    { 
      title: "Custom Plan", 
      description: "Tailored migration strategy development",
      icon: FileText,
      color: "bg-primary-accent/20"
    },
    { 
      title: "Journey Begins", 
      description: "Implementation and ongoing support",
      icon: Zap,
      color: "bg-primary-accent/20"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background/80">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 text-text-color"
          >
            Your Migration Pathway
          </motion.h2>

          <div className="relative">
            {/* Progress line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-light-gray"></div>
            
            <motion.div 
              className="grid md:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Step connector */}
                  {index !== steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 right-[-33%] w-1/2 h-1 bg-light-gray group-hover:bg-primary-accent/30 transition-colors"></div>
                  )}

                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-light-gray">
                    <div className={`w-16 h-16 ${step.color} rounded-xl mb-6 flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-primary-accent" />
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-accent text-white rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-text-color">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-text-color/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;