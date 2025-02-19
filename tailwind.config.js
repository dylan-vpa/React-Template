// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#252525', 
          light: '#252525',   
          dark: '#252525',  
        },
        secondary: {
          DEFAULT: '#9333EA', 
          light: '#A855F7',  
          dark: '#7E22CE',
        },
        accent: {
          DEFAULT: '#FBBF24', 
          light: '#FCE68D',   
          dark: '#B77F1D',    
        },
        neutral: {
          DEFAULT: '#6B7280', 
          light: '#D1D5DB',   
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
        serif: ['Merriweather', 'serif'], 
        mono: ['Fira Code', 'monospace'], 
      },
      fontSize: {
        xs: '0.75rem',  
        sm: '0.875rem',  
        base: '1rem',    
        lg: '1.125rem',  
        xl: '1.25rem',   
        '2xl': '1.5rem', 
        '3xl': '1.875rem', 
        '4xl': '2.25rem', 
        '5xl': '3rem',   
      },
      spacing: {
        '0': '0px',      
        '1': '0.25rem',  
        '2': '0.5rem',   
        '3': '0.75rem',  
        '4': '1rem',     
        '5': '1.25rem',  
        '6': '1.5rem',   
        '8': '2rem',     
        '10': '2.5rem', 
        '12': '3rem',    
        '16': '4rem',    
        '20': '5rem',    
        '24': '6rem',  
        '32': '8rem',    
        '40': '10rem',   
        '48': '12rem',   
        '56': '14rem',   
        '64': '16rem',   
      },
      borderRadius: {
        none: '0',      
        sm: '0.125rem', 
        DEFAULT: '0.25rem', 
        md: '0.375rem',  
        lg: '0.5rem',    
        full: '9999px',  
      },
    },
  },
  plugins: [],
};
