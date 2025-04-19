import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'react-feather';
import CustomLink from './CustomLink';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', path: "", section: '#about' },
    { name: 'Commitment', path: "", section: '#commitment' },
    { name: 'How it works', path: "", section: '#how-it-works' },
    { name: 'Faq', path: "", section: '#faq' },
    { name: 'Contact', path: "", section: '#contact' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, color: '#4f46e5' },
    tap: { scale: 0.98 }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/90 backdrop-blur-md shadow-sm py-3' : 'bg-secondary/80 backdrop-blur-sm py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-accent to-hover-cta bg-clip-text text-transparent"
            >
              <img src="https://res.cloudinary.com/dbr5uxfze/image/upload/v1745004302/Heavenly_Connect_Enterprise_transparent2_gmao3v.png" alt="Logo" className="h-12" />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <CustomLink
                  key={item.name}
                  to={item.path}
                  section={item.section}
                  className="text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </CustomLink>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 4px 14px rgba(200, 118, 52, 0.3)' // Primary accent RGBA
              }}
              whileTap={{ scale: 0.98 }}
              className="hidden md:block bg-gradient-to-r from-primary-accent to-hover-cta text-white px-6 py-2 rounded-full font-medium shadow-sm"
            >
              Get Started
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-light-gray" />
              ) : (
                <Menu className="w-6 h-6 text-light-gray" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background shadow-lg rounded-b-lg"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileTap={{ scale: 0.98 }}
                  className="block py-2 text-text-color font-medium hover:text-primary-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center bg-gradient-to-r from-primary-accent to-hover-cta text-white px-6 py-2 rounded-full font-medium shadow-sm mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Add space for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;