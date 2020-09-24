import React, { useCallback, useState } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

import { ContentProps, InfoType } from 'types';
import theme from '../../../config/theme';
import Header from '../Header';
import Navbar from '../Navbar';
import OverlayMenu from '../OverlayMenu';

const SVerticalTitle = styled.h4`
  font-size: 1em;
  font-weight: normal;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  margin: 0 1.5em;
  padding: 6em 0;
  text-align: center;
  pointer-events: none;
  color: ${theme.colors.primary};
  writing-mode: vertical-rl;

  @media screen and (max-width: ${theme.breakpoints[1]}) {
    font-size: 0.75em;
  }
`;

const Content = ({
  room,
  isMoving,
  isZoomed,
  scrollerRef,
  isMenuOpen,
  onGoBack,
  onRemoveTilt,
  onMove,
  onToggleMenu,
}: ContentProps) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [info, setInfo] = useState<InfoType>({
    title: '',
    desc: '',
    md: undefined,
  });

  const onMenuClick = (nav: InfoType) => {
    setInfo({
      ...info,
      title: nav.title,
      desc: nav.desc,
      md: nav.md,
    });
  };
  const handleNavigate = (dir: string) => {
    if (isMoving || isNavigating) {
      return false;
    }
    setIsNavigating(true);

    onRemoveTilt();

    if (scrollerRef?.current) {
      onMove(scrollerRef.current, {
        transform: {
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        stopTransition: true,
      }).then(() => {
        setTimeout(() => {
          if (dir === 'left') {
            navigate(room.prev, { replace: true });
          } else {
            navigate(room.next, { replace: true });
          }
        }, 500);
      });
    }
  };

  const toggle = useCallback(() => {
    if (info.title) {
      setInfo({ ...info, title: '', desc: '', md: undefined });
    }
    if (!isMoving && !info.title) {
      onToggleMenu(!isMenuOpen);
    }
  }, [info, isMoving, isMenuOpen, onToggleMenu]);

  return (
    <div>
      <Header
        isMenuOpen={isMenuOpen}
        isMoving={isMoving}
        isZoomed={isZoomed}
        onToggle={toggle}
      />
      <OverlayMenu
        info={info}
        isMenuOpen={isMenuOpen}
        onMenuClick={onMenuClick}
      />
      <SVerticalTitle>
        Euphrosyne Doxiades - Samson and Delilah painting
      </SVerticalTitle>
      <Navbar
        room={room}
        isZoomed={isZoomed}
        onGoBack={onGoBack}
        onNavigate={handleNavigate}
      />
    </div>
  );
};

export default Content;