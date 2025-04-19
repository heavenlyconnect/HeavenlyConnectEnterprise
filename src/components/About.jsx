import { motion } from 'framer-motion';
import { Users, Globe, Shield, Heart } from 'react-feather';

const About = ({id}) => {
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
                            About Us
                        </h2>
                        <p className="text-lg text-text-color/80">
                            We believe work should be fulfilling and collaborative, creating value for both employers and employees.
                        </p>
                        <div className="h-1 w-20 bg-primary-accent rounded-full"></div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={containerVariants}
                        className="md:col-span-2 grid gap-8 sm:grid-cols-2"
                    >
                        {[
                            {
                                icon: Globe,
                                title: "Global Solutions",
                                content: "Customized consulting and creative solutions spanning 25+ countries"
                            },
                            {
                                icon: Users,
                                title: "Collaborative Approach",
                                content: "Promoting genuine collaboration between people and companies"
                            },
                            {
                                icon: Shield,
                                title: "Secure Opportunities",
                                content: "Developing secure, enriching jobs tailored to individual needs"
                            },
                            {
                                icon: Heart,
                                title: "Our Commitment",
                                content: "Quality through transparency, reliability, and flexible solutions"
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

                {/* Mission Statement */}
                <motion.div
                    variants={itemVariants}
                    className="mt-20 text-center max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center text-primary-accent mb-4">
                        <div className="h-1 w-12 bg-primary-accent mr-4"></div>
                        <span className="font-semibold">Our Mission</span>
                    </div>
                    <p className="text-2xl text-text-color/80 leading-relaxed">
                        "To provide expert migration guidance with clarity and confidence, offering resource-oriented solutions that combine flexibility, security, and affordability."
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;