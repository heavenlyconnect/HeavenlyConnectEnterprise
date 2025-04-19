export const scrollToSection = (sectionId, offset = 80) => {
    const section = document.querySelector(sectionId);
    if (section) {
        const top = section.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });
    }
};