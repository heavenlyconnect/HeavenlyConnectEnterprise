import { motion } from 'framer-motion';
import { CheckCircle, User, Shield } from 'react-feather';
import { useTranslation } from 'react-i18next';

const Commitment = ({id}) => {
    const {t} = useTranslation();

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

    return (
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-background/80" id={id}>
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
                <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <h2 className="text-4xl font-bold text-center mb-16 text-text-color">
                        {t("OurCoreCommitments")}
                    </h2>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={containerVariants}
                    >
                        {[
                            {
                                icon: CheckCircle,
                                title: t("TransparentProcess"),
                                content: t("TransparentProcessContent"),
                            },
                            {
                                icon: User,
                                title: t("PersonalSupport"),
                                content: t("PersonalSupportContent"),
                            },
                            {
                                icon: Shield,
                                title: t("SecureHandling"),
                                content: t("SecureHandlingContent"),
                            }
                        ].map((commitment, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-light-gray"
                            >
                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-light-gray/50 transition-all duration-300 pointer-events-none"></div>

                                <div className="w-16 h-16 bg-primary-accent/10 rounded-xl mb-6 flex items-center justify-center">
                                    <commitment.icon className="w-8 h-8 text-primary-accent icon-color" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-text-color">
                                    {commitment.title}
                                </h3>
                                <p className="text-text-color/80 leading-relaxed">
                                    {commitment.content}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Animated divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mt-16 mx-auto w-24 h-1 bg-primary-accent rounded-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Commitment;