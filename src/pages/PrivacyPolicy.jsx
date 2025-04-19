import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400">Last updated: 2025-02-02</p>
        </motion.div>

        <div className="space-y-12 text-gray-300">
          {/* Introduction */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="leading-relaxed">
              At Heavenly Connect Enterprise Immigration Services, we are committed to protecting your privacy. This policy outlines how we collect, 
              use, and safeguard your personal information in accordance with international data protection regulations.
            </p>
          </motion.section>

          {/* Data Collection */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Personal identification information (Name, date of birth, passport details)</li>
              <li>Contact information (Email address, phone number, physical address)</li>
              <li>Immigration-related documents (Employment records, educational certificates)</li>
              <li>Payment information for service fees</li>
            </ul>
          </motion.section>

          {/* Data Usage */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <div className="space-y-4">
              <p>We use your personal data to:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Prepare and submit immigration applications</li>
                <li>Communicate with government authorities</li>
                <li>Provide updates on application status</li>
                <li>Process payments and issue invoices</li>
                <li>Improve our services</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Sharing */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Data Sharing</h2>
            <p className="mb-3">
              We only share your information with:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Government immigration authorities</li>
              <li>Accredited translation services</li>
              <li>Legal representatives (when required)</li>
              <li>Secure payment processors</li>
            </ul>
          </motion.section>

          {/* Data Protection */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures including SSL encryption, secure cloud storage, 
              and restricted access to sensitive data. Regular security audits ensure continued protection of 
              your information.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-400">
              For privacy-related inquiries, contact our Data Protection Officer at:<br />
              <a href="mailto:privacy@heavenlyconnectenterprise.com" className="text-orange-500 hover:text-orange-400">
                privacy@heavenlyconnectenterprise.com
              </a>
            </p>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;