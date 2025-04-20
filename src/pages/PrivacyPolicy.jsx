import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
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
            {t('PrivacyPolicy')}
          </h1>
          <p className="mt-4 text-gray-400">{t("LastUpdated")}</p>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("Introduction")}</h2>
            <p className="leading-relaxed">
              {t("IntroductionContent")}
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("InformationWeCollect")}</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>{t("InformationWeCollectContent1")}</li>
              <li>{t("InformationWeCollectContent2")}</li>
              <li>{t("InformationWeCollectContent3")}</li>
              <li>{t("InformationWeCollectContent4")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("HowWeUseInfo")}</h2>
            <div className="space-y-4">
              <p>{t("WeUsePIITo")}</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>{t("HowWeUseInfo1")}</li>
                <li>{t("HowWeUseInfo2")}</li>
                <li>{t("HowWeUseInfo3")}</li>
                <li>{t("HowWeUseInfo4")}</li>
                <li>{t("HowWeUseInfo5")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("DataSharing")}</h2>
            <p className="mb-3">
              {t("WeShareWith")}
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>{t("DataSharing1")}</li>
              <li>{t("DataSharing2")}</li>
              <li>{t("DataSharing3")}</li>
              <li>{t("DataSharing4")}</li>
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("DataSecurity")}</h2>
            <p className="leading-relaxed">
              {t("DataSecurityContent")}
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
            <h2 className="text-2xl font-semibold text-white mb-4">{t("ContactUs")}</h2>
            <p className="text-gray-400">
              {t("ContactUsContent")}<br />
              <a href="mailto:privacy@heavenlyconnectenterprise.com" className="text-orange-500 hover:text-orange-400">
                {t("ContactEmail")}
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