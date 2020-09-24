import styled from 'styled-components';

import { Button } from 'elements';
import theme from '../../../config/theme';

export const SNav = styled.nav<{ isZoomed: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isZoomed ? 'center' : 'space-between')};
  width: 100%;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
`;

export const SButton = styled(Button)`
  path {
    transition: transform 0.3s;
    fill: ${theme.colors.primary};
  }

  &:hover {
    & path:first-of-type {
      transform: translate3d(-54px, 0, 0);
    }

    & path:nth-of-type(2) {
      transform: translate3d(17px, 0, 0);
    }
  }
`;

export const SGoBackBtn = styled(Button)`
  font-size: 1rem;
  font-weight: 500;
`;

export const SRightSvg = styled.svg`
  transform: scale3d(-1, -1, 1);
`;

export const SRoomTitle = styled.h2`
  font-size: 1em;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: ${theme.colors.primary};
`;
