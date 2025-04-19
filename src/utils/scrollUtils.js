// src/utils/scrollUtils.js
export const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without adding to history
      window.history.replaceState(null, null, sectionId);
    }
  };