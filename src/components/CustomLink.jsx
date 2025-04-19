// 1. Create a custom link component (src/components/CustomLink.jsx)
import { Link } from 'react-router-dom';
import { scrollToSection } from '../utils/scrollUtils';

const CustomLink = ({ to, section, children }) => {
  const handleClick = (e) => {
    if (window.location.pathname !== '/') {
      // If not on homepage, navigate first then scroll
      e.preventDefault();
      window.location.href = `/${to}`;
      setTimeout(() => scrollToSection(section), 100);
    } else {
      // If already on homepage, just scroll
      e.preventDefault();
      scrollToSection(section);
    }
  };

  return (
    <Link 
      to={to} 
      onClick={handleClick}
      state={{ targetSection: section }}
    >
      {children}
    </Link>
  );
};

export default CustomLink;