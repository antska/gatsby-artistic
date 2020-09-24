import { createGlobalStyle } from 'styled-components';
import 'typeface-work-sans';

import theme from '../../config/theme';
import reset from './reset';
import burger from './burger-menu';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #c2292e;
  }
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.bold};
    }
    
    h1 {
      font-size: ${theme.fontSizes[5]};
    }
    h2 {
      font-size: ${theme.fontSizes[4]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[2]};
    }
    h5 {
      font-size: ${theme.fontSizes[1]};
    }
    h6 {
      font-size: ${theme.fontSizes[0]};
    }
    
    @media (max-width: 600px) {
      font-size: 16px;
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: ${theme.colors.darkBlue};
    letter-spacing: 0.1em;
    height: 100vh;
    overflow: hidden;
    font-family: 'Work Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: ${theme.colors.darkGrey};
    font-size: 18px;    
  }

  a {
    transition: all 0.3s ease-in-out;
    color: black;
    text-decoration: none;
    outline: none;

    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  
  ul {   
    margin-inline-start: 1em;
  }

  li {
    margin: 1em 0;
  }
  
  ${reset}
  ${burger}
`;

export default GlobalStyles;
