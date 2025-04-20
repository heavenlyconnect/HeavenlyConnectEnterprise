import { motion } from 'framer-motion';
import { Users, Globe, Shield, Heart } from 'react-feather';
import { useTranslation } from 'react-i18next';

const About = ({id}) => {
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
        <motion.section
            initial="hidden"
            id={id}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-gradient-to-br from-background to-background/80 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-1/3 w-72 h-72 bg-primary-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    variants={containerVariants}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {/* Left Column */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-text-color">
                            {t("AboutUs")}
                        </h2>
                        <p className="text-lg text-text-color/80">
                            {t("AboutUsContent")}
                        </p>
                        <div className="h-1 w-20 line-color bg-primary-accent rounded-full"></div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={containerVariants}
                        className="md:col-span-2 grid gap-8 sm:grid-cols-2"
                    >
                        {[
                            {
                                icon: Globe,
                                title: t("GlobalSolutions"),
                                content: t("GlobalSolutionsContent")
                            },
                            {
                                icon: Users,
                                title: t("CollaborativeApproach"),
                                content: t("CollaborativeApproachContent")
                            },
                            {
                                icon: Shield,
                                title: t("SecureOpportunities"),
                                content: t("SecureOpportunitiesContent")
                            },
                            {
                                icon: Heart,
                                title: t("OurCommitment"),
                                content: t("OurCommitmentContent")
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <feature.icon className="w-12 h-12 icon-color text-primary-accent mb-6" />
                                <h3 className="text-2xl font-semibold mb-4 text-primary-color">
                                    {feature.title}
                                </h3>
                                <p className="text-text-color/80 leading-relaxed">
                                    {feature.content}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Mission Statement with Image */}
<motion.div 
    variants={containerVariants}
    className="py-20 px-4 sm:px-6 lg:px-8"
>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <img 
                src="https://res.cloudinary.com/dbr5uxfze/image/upload/v1745102153/iStock-1212241550_yqgxcc.jpg" 
                alt="Our team assisting clients" 
                className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/50 to-transparent"></div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 text-center lg:text-left"
        >
            <div className="inline-flex items-center text-primary-accent mb-4">
                <div className="h-1 w-12 line-color bg-primary-accent mr-4"></div>
                <span className="font-semibold">{t("OurMission")}</span>
            </div>
            <p className="text-2xl text-text-color/80 leading-relaxed mb-6">
                "{t("OurMissionContent")}"
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-hover-cta transition-all"
            >
                Meet Our Team
            </motion.button>
        </motion.div>
    </div>
</motion.div>
            </div>
        </motion.section>
    );
};

export default About;