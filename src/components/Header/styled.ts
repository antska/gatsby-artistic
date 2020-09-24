import styled from 'styled-components';
import theme from '../../../config/theme';

export const SHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  padding: 0 20px;
`;

export const SHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

export const SHeaderSubtitle = styled.p`
  color: ${theme.colors.white};
  font-size: 11px;
`;

export const SAnimatedLogoText = styled.h1`
  color: ${theme.colors.primary};
  font-weight: 200;
  font-size: 1.8em;
  letter-spacing: 0.5em;
  text-transform: uppercase;
`;
