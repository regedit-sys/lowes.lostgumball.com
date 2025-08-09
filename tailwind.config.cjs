// tailwind.config.js
import catppuccin from '@catppuccin/tailwindcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [
    catppuccin({
      defaultFlavour: 'mocha'
    })
  ],
}
