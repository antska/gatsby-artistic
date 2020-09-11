import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'typeface-work-sans';

import theme from '../../config/theme';
import reset from '../styles/reset';
import burger from '../styles/burger-menu';
import Navbar from './Navbar';

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ::selection {
    color: white;
    background-color: #f6993f;
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
  
  ${reset}
  ${burger}
`;

const Main = styled.main`
  background-color: #313131;
  height: calc(100% - 122px);
`;

const Wrapper = styled.div`
  background: white;
  height: 100vh;
`;

const Footer = styled.footer`
  font-size: 11px;
  margin: 13px;
`;

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <Wrapper id="outer-container">
        <Navbar />
        <Main id="page-wrap">{children}</Main>
        <Footer>© Copyright afterRubens 2020</Footer>
      </Wrapper>
    </>
  </ThemeProvider>
);

export default Layout;
