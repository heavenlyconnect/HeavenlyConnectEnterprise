module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,html}',
        './public/index.html',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to bottom right, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
            },
            opacity: {
                15: '0.15',
                30: '0.30',
            },
            // Your custom colors
            colors: {
                'primary-accent': '#C87634',
                'text-color': '#2E2E2E',
                'background': '#FAFAFA',
                'secondary': '#333333',
                'hover-cta': '#A15826',
                'light-gray': '#EAEAEA'
            },
            // Custom font families
            fontFamily: {
                sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
                display: ['Helvetica Neue', 'Arial', 'sans-serif'],
            },
            // Animation configurations (if using Framer Motion, these might not be needed)
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
            // Custom box shadows
            boxShadow: {
                'cta': '0 4px 14px rgba(200, 118, 52, 0.3)',
                'nav': '0 2px 10px rgba(46, 46, 46, 0.1)',
            },
            // Custom container settings
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    xl: '1280px',
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // For better form element styling
        require('@tailwindcss/typography'), // For prose content styling
        // Add other plugins as needed
    ],
}