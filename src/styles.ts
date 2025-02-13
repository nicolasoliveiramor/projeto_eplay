import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  preta: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    margin-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
