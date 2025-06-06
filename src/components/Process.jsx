import { motion } from 'framer-motion';
import { MessageSquare, Calendar, FileText, Zap } from 'react-feather';
import { useTranslation } from 'react-i18next';

const Process = ({ id }) => {
    const { t } = useTranslation();
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
            title: t("InitialConsultation"),
            description: t("InitialConsultationContent"),
            icon: MessageSquare,
            color: "bg-primary-accent/20",
            image: "https://res.cloudinary.com/dbr5uxfze/image/upload/v1745231151/iStock-1201798767_lk6cwt.jpg"
        },
        {
            title: t("ExpertAssessment"),
            description: t("ExpertAssessmentContent"),
            icon: Calendar,
            color: "bg-primary-accent/20",
            image: "https://res.cloudinary.com/dbr5uxfze/image/upload/v1745231141/iStock-1355302972_y7azty.jpg"
        },
        {
            title: t("CustomPlan"),
            description: t("CustomPlanContent"),
            icon: FileText,
            color: "bg-primary-accent/20",
            image: "https://res.cloudinary.com/dbr5uxfze/image/upload/v1745231122/iStock-1972501160_j1603m.jpg"
        },
        {
            title: t("JourneyBegins"),
            description: t("JourneyBeginsContent"),
            icon: Zap,
            color: "bg-primary-accent/20",
            image: "https://res.cloudinary.com/dbr5uxfze/image/upload/v1745231144/iStock-1644224807_xqfiup.jpg"
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
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold text-center mb-16 text-text-color"
                    >
                        {t("HowItWorks")}?
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
                                    className="group relative h-full" // Add h-full here
                                >
                                    {/* Step connector */}
                                    {index !== steps.length - 1 && (
                                        <div className="hidden md:block absolute top-16 right-[-33%] line-color w-1/2 h-1 bg-light-gray group-hover:bg-primary-accent/30 transition-colors"></div>
                                    )}

                                    {/* Add h-full to this div */}
                                    <div className="relative h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden">
                                        {/* Background Image */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover brightness-56"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                                            <div className="absolute inset-0 mix-blend-overlay bg-primary-accent/10"></div>
                                        </div>

                                        {/* Content - Add flex-col and h-full */}
                                        <div className="relative z-10 h-full flex flex-col">
                                            <div className={`w-16 h-16 ${step.color} rounded-xl mb-6 flex items-center justify-center backdrop-blur-sm bg-white/10`}>
                                                <step.icon className="w-8 h-8 text-primary-accent icon-color" />
                                            </div>
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 bg-primary-accent text-white rounded-full flex items-center justify-center mr-3 backdrop-blur-lg">
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-xl font-semibold text-white">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            {/* Add flex-grow to description */}
                                            <p className="text-text-color/80 leading-relaxed text-white bg-background/80 p-4 rounded-lg flex-grow">
                                                {step.description}
                                            </p>
                                        </div>
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