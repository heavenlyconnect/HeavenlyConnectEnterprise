import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-gray-400">Effective Date: 2025-02-02</p>
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
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By engaging with Heavenly Connect Enterprise Immigration Services, you agree to be bound by these Terms of Service. 
              These terms govern your use of our immigration consultation and application processing services.
            </p>
          </motion.section>

          {/* Services */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">2. Our Services</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>Immigration consultation and eligibility assessment</li>
              <li>Visa and residency application preparation</li>
              <li>Documentation review and certification</li>
              <li>Government liaison services</li>
              <li>Post-arrival settlement assistance</li>
            </ul>
          </motion.section>

          {/* Client Responsibilities */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">3. Client Obligations</h2>
            <div className="space-y-4">
              <ul className="space-y-2 list-disc list-inside">
                <li>Provide accurate and complete documentation</li>
                <li>Disclose all relevant personal information</li>
                <li>Timely payment of service fees</li>
                <li>Compliance with government requirements</li>
                <li>Prompt response to information requests</li>
              </ul>
            </div>
          </motion.section>

          {/* Payments */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">4. Fees & Payments</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Service fees are non-refundable once processing begins</li>
              <li>Government fees are separate and client's responsibility</li>
              <li>Late payments may result in service suspension</li>
              <li>All fees quoted in [Currency]</li>
            </ul>
          </motion.section>

          {/* Limitations */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">5. Service Limitations</h2>
            <p className="leading-relaxed">
              While we strive for successful outcomes, Heavenly Connect Enterprise cannot guarantee visa approvals 
              or specific processing timelines. Final decisions remain at the discretion of 
              government immigration authorities.
            </p>
          </motion.section>

          {/* Termination */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-8 border-t border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
            <p className="text-gray-400">
              These terms shall be governed by the laws of [Your Country]. Any disputes shall 
              be resolved through arbitration in [City, Country].
              <br /><br />
              For questions: 
              <a href="mailto:legal@heavenlyconnectenterprise.com" className="text-orange-500 hover:text-orange-400 ml-2">
                legal@heavenlyconnectenterprise.com
              </a>
            </p>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default TermsOfService;