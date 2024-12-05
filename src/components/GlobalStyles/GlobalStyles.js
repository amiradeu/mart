import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* DESIGN TOKENS */
html {
  --color-primary: #262626;
  --color-gray-100: rgba(0, 0, 0, 0.015);
  --color-gray-200: rgba(0, 0, 0, 0.1);
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
	  background: #F2F2F2;
    color: var(--color-primary);
    font-family: 'Noto Sans', Arial, Helvetica, sans-serif;

}
`

export default GlobalStyles
