import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/* DESIGN TOKENS */
html {
  --color-primary: #262626;
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
	  background: #E6FDFC;
    color: var(--color-primary);
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
}
`

export default GlobalStyles
