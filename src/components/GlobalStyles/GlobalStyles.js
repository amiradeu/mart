import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* DESIGN TOKENS */
html {
  --color-primary: #262626;
  --color-secondary: #E4FF5F;
  --color-purple: #D0AAF1;
  --color-red: #c2152f;
  --color-white: #f6f6f6;
  --color-gray-100: rgba(0, 0, 0, 0.015);
  --color-gray-200: rgba(0, 0, 0, 0.1);
  --color-gray-700: '#524B4B';
  --color-background: #ffffff; // #F2F2F2;
}

/* GLOBAL STYLES */
* {
    margin: 0;
    padding: 0;
}

#root {
  isolation: isolate;
}

html, body, #root {
  height: 100%;
}

body {
	  background: var(--color-background);
    color: var(--color-primary);
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;

}

/* LENIS STYLES */
html.lenis,
html.lenis body {
  height: auto;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: clip;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
`

export default GlobalStyles
