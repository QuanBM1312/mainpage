/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Thêm màu mới của bạn ở đây
        'light-cyan': '#ECF8F9',
      },
      fontFamily: {
        // Add custom fonts if needed
      },
      spacing: {
        // Add custom spacing if needed
      }
    },
  },
  plugins: [
    // Add Tailwind plugins if needed
  ],
}
