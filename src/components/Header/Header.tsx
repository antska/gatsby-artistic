import React from 'react';
import { animated, useTrail } from 'react-spring';

import { Button } from 'elements';
import theme from '../../../config/theme';
import {
  SAnimatedLogoText,
  SHeaderSubtitle,
  SHeaderTitle,
  SHeaderWrapper,
} from './styled';

type HeaderProps = {
  isZoomed: boolean;
  isMenuOpen: boolean;
  isMoving: boolean;
  onToggle: () => void;
};

const Header = ({ isZoomed, isMenuOpen, isMoving, onToggle }: HeaderProps) => {
  const text = [...'after Rubens'];
  const config = { mass: 5, tension: 2000, friction: 200 };
  const trail = useTrail(text.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 40 },
  });

  return (
    <>
      <SHeaderWrapper>
        <SHeaderTitle>
          <SAnimatedLogoText>
            {trail.map(({ x, ...rest }, index) => (
              <animated.span
                key={`${text}_${index}`}
                style={{
                  ...rest,
                  transform: x.interpolate((x) => `translate3d(${x}px,0,0)`),
                }}
              >
                <animated.span>{text[index]}</animated.span>
              </animated.span>
            ))}
          </SAnimatedLogoText>
          <SHeaderSubtitle>
            The Strange Story of the Samson and Delilah
          </SHeaderSubtitle>
        </SHeaderTitle>
        {!isZoomed && !isMoving && (
          <Button
            type="button"
            isMenuOpen={isMenuOpen}
            color={isMenuOpen ? theme.colors.white : ''}
            style={isMenuOpen ? { zIndex: 100 } : {}}
            onClick={onToggle}
          >
            {isMenuOpen ? (
              <svg
                fill="currentColor"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <title>close</title>
                <path d="M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z" />
              </svg>
            ) : (
              <svg
                fill="currentColor"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <title>menu</title>
                <path d="M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z" />
              </svg>
            )}
          </Button>
        )}
        {isMoving && (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g fill="none" fillRule="evenodd" strokeWidth="2">
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="0s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="22" cy="22" r="1">
                <animate
                  attributeName="r"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 20"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.165, 0.84, 0.44, 1"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="-0.9s"
                  dur="1.8s"
                  values="1; 0"
                  calcMode="spline"
                  keyTimes="0; 1"
                  keySplines="0.3, 0.61, 0.355, 1"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        )}
      </SHeaderWrapper>
    </>
  );
};

export default Header;
