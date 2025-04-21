import { motion } from 'framer-motion';
import { ArrowRight } from 'react-feather'; // You can install react-feather for icons
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const { t } = useTranslation(); // Initialize translation hook

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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
                ease: [0.16, 1, 0.3, 1] // Custom easing for smooth bounce
            }
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
        },
        tap: { scale: 0.98 }
    };

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative bg-gradient-to-br from-background/50 to-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute top-0 right-1/4 w-64 h-64 bg-hover-cta/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                    {/* Text Content */}
                    <motion.div
                        variants={itemVariants}
                        className="md:w-1/2 text-center md:text-left"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl font-bold mb-6 text-text-color leading-tight"
                        >
                            <span className="block">{t("heroheaderOne")}</span>
                            <span className="relative inline-block">
                                <span className="relative z-10">{t("heroheaderTwo")}</span>
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                                    className="absolute bottom-0 left-0 w-full h-3 bg-primary-accent/30 z-0 transform origin-left"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl sm:text-2xl mb-10 text-text-color/80 max-w-3xl mx-auto md:mx-0"
                        >
                            {t("headerContent")}
                        </motion.p>

                        <motion.div variants={itemVariants} className="md:flex md:justify-start">
                            <motion.a
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                href="#contact"
                                className="inline-flex items-center bg-primary-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-hover-cta transition-all shadow-lg hover:shadow-primary-accent/30"
                            >
                                {t("StartYourJourney")}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image Container */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ delay: 0.2 }}
                        className="md:w-1/2 relative mt-12 md:mt-0"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/dbr5uxfze/image/upload/v1745231150/iStock-1204743098_m8mfeo.jpg"
                                alt="Global opportunities illustration"
                                className="w-full h-auto object-cover rounded-2xl"
                            />

                            {/* Optional image decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats section - Updated positioning */}
                <motion.div
                    variants={itemVariants}
                    className="mt-16 flex flex-wrap justify-center gap-8"
                >
                    {[
                        { value: "10+", label: t("Countries") },
                        { value: "98%", label: t("SatisfactionRate") },
                        { value: "100%", label: t("Transparency") },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.p
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1 + index * 0.2 }}
                                className="text-3xl font-bold text-primary-accent mb-1"
                            >
                                {stat.value}
                            </motion.p>
                            <p className="text-text-color/80">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSection;