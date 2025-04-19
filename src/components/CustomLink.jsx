// src/components/CustomLink.jsx
import { Link, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';
import { useEffect } from 'react';

const CustomLink = ({ to, section, children, className, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    
    if (window.location.pathname !== '/') {
      // Navigate to homepage first while preserving scroll position
      navigate('/', { 
        state: { targetSection: section },
        replace: true
      });
    } else {
      // If already on homepage, scroll directly
      scrollToSection(section);
    }

    // Close mobile menu if present
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={className}
      state={{ targetSection: section }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;