import { createGlobalStyle } from 'styled-components';
import 'typeface-work-sans';

import theme from '../../config/theme';
import reset from './reset';
import demo from './demo';
import burger from './burger-menu';

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
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
    color: black;
    font-family: 'Work Sans', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: white;
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

  .svg-icon {
    width: 12em;
    height: 12em;
  }
  
  .svg-icon path,
  .svg-icon polygon,
  .svg-icon rect {
    fill: #4691f6;
  }
  
  .svg-icon circle {
    stroke: #4691f6;
    stroke-width: 1;
  }

  .ml12 {
    font-weight: 200;
    font-size: 1.8em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: #c2292e;
  }
  
  .ml12 .letter {
    display: inline-block;
    line-height: 1em;
  }

  ${demo}
  ${reset}
  ${burger}
`;

export default GlobalStyles;
