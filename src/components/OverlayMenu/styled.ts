import styled from 'styled-components';
import theme from '../../../config/theme';

export const SOverlay = styled.div<{ isMenuOpen: boolean; hasInfo: boolean }>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: ${(props) => (props.isMenuOpen ? 'auto' : 'none')};
  background: ${(props) =>
    props.hasInfo ? 'rgb(142, 121, 121, 0.9)' : 'rgb(126, 36, 38, 0.74)'};
  opacity: ${(props) => (props.isMenuOpen ? 1 : 0)};
`;

export const SMenu = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const SMenuItem = styled.li`
  font-size: 7vh;
  margin: 0.25em 0;
  padding: 0;
  text-transform: uppercase;
`;

export const SMenuLink = styled.div`
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 400ms ease-in-out;

  &:hover,
  &:focus {
    color: ${theme.colors.darkblue};
  }
`;

export const SInfoTitle = styled.h4`
  font-size: 2.5em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${theme.colors.primary};
  margin-bottom: 20px;

  @media screen and (max-width: ${theme.breakpoints[1]}) {
    font-size: 1.5em;
  }
`;

export const SInfo = styled.section`
  color: white;
  font-size: 1.2em;
  line-height: 1.4;
  width: 70vw;
  min-width: calc(320px - 2em);
  max-width: 900px;
  margin: 0;
  padding: 1em;
  overflow: auto;
  max-height: 80vh;
  text-align: justify;

  @media screen and (max-width: ${theme.breakpoints[1]}) {
    && h3 {
      font-size: 1.2em;
    }

    font-size: 0.75em;
  }
`;
