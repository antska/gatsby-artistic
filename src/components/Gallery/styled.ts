import styled from 'styled-components';
import Img from 'gatsby-image';

import theme from '../../../config/theme';

export const SContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  perspective: 2000px;
`;

export const SScroller = styled.div`
  height: 100%;
  transform-style: preserve-3d;
`;

export const SRoom = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  margin: -50vh 0 0 -50vw;
  transform-style: preserve-3d;
`;

export const SRoomSide = styled.div<{ isZoomed?: boolean }>`
  cursor: zoom-in;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: ${(props) => (props.isZoomed ? '' : 'preserve-3d')};
  background: ${theme.colors.beige};

  ${(props) =>
    props.isZoomed &&
    `
    width: 100vw;
    transform: rotate3d(0, 1, 0, 0);
    justify-content: flex-start;
    cursor: auto;
  `}
`;

export const SRoomSideBack = styled(SRoomSide)<{ isZoomed: boolean }>`
  width: 100vw;
  box-shadow: 0 0 0 2px ${theme.colors.beige};

  ${(props) =>
    !props.isZoomed &&
    `transform: translate3d(0, 0, -4000px) rotate3d(1, 0, 0, 0.1deg)
    rotate3d(1, 0, 0, 0deg);`}
`;

export const SRoomSideLeft = styled(SRoomSide)`
  justify-content: center;

  ${(props) =>
    !props.isZoomed &&
    `width: 3000px;
    transform: rotate3d(0, 1, 0, 90deg);
    transform-origin: 0 50%;`}
`;

export const SRoomSideRight = styled(SRoomSide)`
  right: 0;
  justify-content: center;

  ${(props) =>
    !props.isZoomed &&
    `width: 3000px;
    transform: rotate3d(0, 1, 0, -90.03deg);
    transform-origin: 100% 50%;`}
`;

export const SRoomSideBottom = styled(SRoomSide)`
  top: 100%;
  /* depth */
  height: 4000px;
  background: ${theme.colors.darkGrey};
  transform: rotate3d(1, 0, 0, 90deg) translate3d(0, -4000px, 0);
  transform-origin: 50% 0%;
`;

export const SRoomImg = styled(Img)`
  border: 10px solid ${theme.colors.brown};
  flex: none;
  max-height: 80%;
  max-width: 700px;
  // max-width: 40%;
  margin: 0 5%;
  transform: translate3d(0, 0, 10px);
  backface-visibility: hidden;
  width: 100%;
`;

export const SRoomImgDescription = styled.p<{
  isZoomed: boolean;
  isRight?: boolean;
}>`
  font-size: 2vw;
  font-weight: 400;
  margin-right: ${(props) => (props.isRight ? 0 : '5%')};
  width: ${(props) => (props.isZoomed ? 'auto' : '')};
  margin-left: ${(props) => (props.isRight ? '4%' : 0)};
  // margin-right: 12%;
  // width: 30%;
`;
