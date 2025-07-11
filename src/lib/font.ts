// src/lib/fonts.ts
import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
  fallback: ['system-ui', 'arial']
})

export const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
  fallback: ['Georgia', 'serif']
})

// Font optimization CSS
export const fontOptimizationCSS = `
  /* Font rendering optimization */
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1;
  }

  /* Prevent font loading flash */
  .font-loading {
    visibility: hidden;
  }

  .font-loaded {
    visibility: visible;
  }

  /* Enhanced text rendering for headings */
  h1, h2, h3, h4, h5, h6 {
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
  }

  /* Responsive typography base */
  html {
    font-size: clamp(14px, 1.2vw, 18px);
  }

  /* Improved line-height for readability */
  body {
    line-height: 1.6;
    letter-spacing: -0.02em;
  }
`