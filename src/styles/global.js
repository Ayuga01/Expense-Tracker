import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #f5f7fa;
    margin: 0;
    padding: 0;
    color: #333;
  }

  h1, h2 {
    color: #333;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    .container {
      padding: 10px;
    }
  }
`;

export default GlobalStyle;