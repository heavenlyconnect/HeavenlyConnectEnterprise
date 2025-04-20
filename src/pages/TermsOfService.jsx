import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const { t } = useTranslation();
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
            {t('TermsOfService')}
          </h1>
          <p className="mt-4 text-gray-400">{t("EffectiveDate")}</p>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection1Title")}</h2>
            <p className="leading-relaxed">
              {t("TermsSection1Content")}
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection2Title")}</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>{t("Service1")}</li>
              <li>{t("Service2")}</li>
              <li>{t("Service3")}</li>
              <li>{t("Service4")}</li>
              <li>{t("Service5")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection3Title")}</h2>
            <div className="space-y-4">
              <ul className="space-y-2 list-disc list-inside">
                <li>{t("Obligation1")}</li>
                <li>{t("Obligation2")}</li>
                <li>{t("Obligation3")}</li>
                <li>{t("Obligation4")}</li>
                <li>{t("Obligation5")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection4Title")}</h2>
            <ul className="space-y-2 list-disc list-inside">
            <li>{t("FeesContent1")}</li>
            <li>{t("FeesContent2")}</li>
            <li>{t("FeesContent3")}</li>
            <li>{t("FeesContent4")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection5Title")}</h2>
            <p className="leading-relaxed">
              {t("ServiceLimitationsContent")}
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("TermsSection6Title")}</h2>
            <p className="text-gray-400">
              {t("GoverningLawContent")}
              <br /><br />
              {t("ContactQuestions")}
              <a href="mailto:legal@heavenlyconnectenterprise.com" className="text-orange-500 hover:text-orange-400 ml-2">
                {t("LegalEmail")}
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