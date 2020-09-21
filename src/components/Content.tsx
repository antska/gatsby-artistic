import { navigate } from 'gatsby';
import React, { useCallback, useState } from 'react';

import { ContentProps, InfoType } from 'types';
import Header from './Header';
import Navbar from './Navbar';
import OverlayMenu from './OverlayMenu';

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
    <>
      <div className="content">
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
        <h4 className="location">
          Euphrosyne Doxiades - Samson and Delilah painting
        </h4>
        <Navbar
          room={room}
          isZoomed={isZoomed}
          onGoBack={onGoBack}
          onNavigate={handleNavigate}
        />
      </div>
    </>
  );
};

export default Content;
