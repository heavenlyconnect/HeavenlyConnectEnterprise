import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'react-feather';

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialLinks = [
        // { icon: Facebook, url: "#" },
        { icon: Instagram, url: "#" },
        // { icon: Tiktok, url: "#" },
        // { icon: Twitter, url: "#" },
        // { icon: Linkedin, url: "#" }
    ];

    const quickLinks = [
        { name: "Home", url: "#" },
        { name: "About", url: "/#about" },
        { name: "Commitment", url: "/#commitment" },
        { name: "How it works", url: "/#how-it-works" },
        { name: "FAQ", url: "/#faq" },
        { name: "Contact", url: "/#contact" }
    ];

    const contactInfo = [
        { icon: Mail, text: "info@heavenlyconnectenterprise.com" },
        { icon: Phone, text: "+234 815 234 5632" },
        { icon: MapPin, text: "123 Migration St, Lagos, Nigeria" }
    ];

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            variants={footerVariants}
            viewport={{ once: true }}
            className="bg-secondary text-gray-300 pt-16 pb-8 px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                            <span className="bg-gradient-to-r from-primary-accent to-hover-cta bg-clip-text text-transparent">
                                <img src="https://res.cloudinary.com/dbr5uxfze/image/upload/v1745004302/Heavenly_Connect_Enterprise_transparent2_gmao3v.png" alt="Logo" className="h-20" />
                            </span>
                        </h3>
                        <p className="mb-6 text-gray-400">
                            Your trusted partner for global migration and labor solutions with a human touch.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    variants={itemVariants}
                                    whileHover={{ y: -3, color: "#C87634" }}
                                    className="text-gray-400 hover:text-primary-accent transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <a
                                        href={link.url}
                                        className="text-gray-400 hover:text-primary-accent transition-colors flex items-center"
                                    >
                                        <span className="w-1 h-1 bg-primary-accent rounded-full mr-2"></span>
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-start"
                                    whileHover={{ x: 5 }}
                                >
                                    <info.icon className="w-5 h-5 text-primary-accent mt-0.5 mr-3 flex-shrink-0" />
                                    <span className="text-gray-400">{info.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold text-white mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to our newsletter for the latest updates and offers.
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-secondary text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-accent w-full"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-primary-accent to-hover-cta text-white px-4 py-2 rounded-r-lg"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-secondary/50 mt-12 pt-8 text-center text-gray-500 text-sm"
                >
                    <p>
                        © {new Date().getFullYear()} HeavenlyConnect. All rights reserved. |
                        <a href="privacy-policy" className="hover:text-primary-accent ml-2">Privacy Policy</a> |
                        <a href="terms" className="hover:text-primary-accent ml-2">Terms of Service</a>
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;