import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: inherit;
  }

  html {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: #616161;
  }

  body {
    margin: 0;
    background-color: #f1f5f8;
  }

  img {
    max-width: 100%;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .shake {
    animation: shake 150ms 2 linear;
  }

  @keyframes shake {
    0% {
      transform: translate(4px, 0);
    }
    50% {
      transform: translate(-4px, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`

export default GlobalStyle
