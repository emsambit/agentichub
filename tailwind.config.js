/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0B0F17',
          900: '#111827',
          850: '#161F30',
          800: '#1F2937',
          750: '#2D3748',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
        },
        brand: {
          50: '#F0FDF4',
          100: '#E8F5E9', // Nexcent green tint
          200: '#C8E6C9',
          300: '#A5D6A7',
          400: '#81C784',
          500: '#4CAF4F', // Nexcent primary green
          600: '#43A047',
          700: '#388E3C', // Nexcent dark green
          800: '#2E7D32',
          900: '#1B5E20',
          accent: '#263238', // Nexcent charcoal heading
        },
        nexcent: {
          canvas: '#F5F7FA', // Nexcent soft canvas gray
          charcoal: '#263238', // Nexcent deep charcoal headings
          gray: '#4D5E6A', // Nexcent body text
          lightgray: '#717171', // Nexcent muted text
          silver: '#89939E',
          tint: '#E8F5E9', // Nexcent soft green tint
          primary: '#4CAF4F', // Nexcent primary green
          darkgreen: '#2E7D32',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'figma-card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'figma-hover': '0 12px 24px -4px rgba(76, 175, 79, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.04)',
        'figma-green': '0 8px 20px -4px rgba(76, 175, 79, 0.35)',
        'glow-green': '0 0 25px -5px rgba(76, 175, 79, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
