/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#4a154b',
        'primary-press': '#611f69',
        'primary-tint': '#592466',
        'link-blue': '#1264a3',
        canvas: '#ffffff',
        'canvas-cream': '#f4ede4',
        'canvas-lavender': '#f9f0ff',
        'surface-aubergine': '#4a154b',
        ink: '#1d1d1d',
        'ink-mute': '#696969',
        'on-primary': '#ffffff',
        'on-aubergine-mute': '#d9bdde',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        'pill': '90px',
      }
    },
  },
  plugins: [],
}