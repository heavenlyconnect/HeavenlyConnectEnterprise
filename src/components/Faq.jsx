import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'react-feather';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = ({id}) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const faqItems = [
    {
      question: t("FAQItem1"),
      answer: t("FAQItem1Answer")
    },
    {
      question: t("FAQItem2"),
      answer: t("FAQItem2Answer")
    },
    {
      question: t("FAQItem3"),
      answer: t("FAQItem3Answer")
    },
    {
      question: t("FAQItem4"),
      answer: t("FAQItem4Answer")
    },
    {
      question: t("FAQItem5"),
      answer: t("FAQItem5Answer")
    }
  ];

  return (
    <section id={id} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background/80">
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
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center text-primary-accent mb-4">
                <HelpCircle className="w-6 h-6 mr-2" />
                <span className="font-semibold">{t("FAQs")}</span>
              </div>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-text-color mb-4">
              {t("CommonQuestions")}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-text-color/80 max-w-2xl mx-auto">
              {t("CommonQuestionsContent")}
            </motion.p>
          </div>

          <motion.div 
            className="grid gap-4 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {faqItems.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group"
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex justify-between items-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-light-gray"
                >
                  <span className="text-left text-lg font-medium text-text-color">
                    {item.question}
                  </span>
                  <ChevronDown className={`w-6 h-6 text-primary-accent transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`} />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: activeIndex === index ? 'auto' : 0,
                    opacity: activeIndex === index ? 1 : 0
                  }}
                  className="overflow-hidden pl-6 pr-12"
                >
                  <p className="pt-4 pb-6 text-text-color/80 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;