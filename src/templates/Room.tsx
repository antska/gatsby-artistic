import React, { useCallback, useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';
import { debounce } from 'lodash';

import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import Content from '../components/Content';
import { applyRoomTransform, applyRoomTransition } from '../utils';
import { QueryImages, QueryRoom } from 'types';
import {
  initTransform,
  initTransition,
  menuTransform,
  menuTransition,
  resetTransform,
  roomTransition,
  tiltRotation,
  tiltTransition,
} from '../constants';
import GlobalStyles from '../styles/global';

type RoomProps = {
  data: {
    room: QueryRoom;
    images: QueryImages;
  };
};

const Room = ({ data: { room, images } }: RoomProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [win, setWin] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMoving, setIsMoving] = useState(false);
  const [tilt, setTilt] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolveRef = useRef<Function>();

  const getMousePos = (e: MouseEvent) => {
    let posx = 0;
    let posy = 0;
    let event = e;

    if (!e) {
      event = window.event;
    }

    if (event.pageX || event.pageY) {
      posx = event.pageX;
      posy = event.pageY;
    } else if (event.clientX || event.clientY) {
      posx =
        event.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        event.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    return {
      x: posx,
      y: posy,
    };
  };

  useEffect(() => {
    if (scrollerRef.current) {
      move(scrollerRef.current, {
        transition: initTransition,
        transform: initTransform,
      });
      initTilt(scrollerRef.current);
    }

    const debounceResize = debounce(() => {
      setWin({ width: window.innerWidth, height: window.innerHeight });
    }, 10);
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  useEffect(() => {
    const onMouseMove = (ev) => {
      requestAnimationFrame(() => {
        if (!tilt || isZoomed) return false;

        const mousepos = getMousePos(ev);

        // transform values
        const rotX = tiltRotation.rotateX
          ? initTransform.rotateX -
            (((2 * tiltRotation.rotateX) / win.height) * mousepos.y -
              tiltRotation.rotateX)
          : 0;
        const rotY = tiltRotation.rotateY
          ? initTransform.rotateY -
            (((2 * tiltRotation.rotateY) / win.width) * mousepos.x -
              tiltRotation.rotateY)
          : 0;

        // apply transform
        if (scrollerRef.current && window.innerHeight - mousepos.y > 70) {
          applyRoomTransform(scrollerRef.current, {
            translateX: initTransform.translateX,
            translateY: initTransform.translateY,
            translateZ: !isZoomed ? initTransform.translateZ : '2000px',
            rotateX: `${rotX}deg`,
            rotateY: `${rotY}deg`,
            rotateZ: initTransform.rotateZ,
          });
        }
      });
    };
    if (tilt && !isZoomed && !isMoving) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isZoomed, tilt, isMoving]);

  const initTilt = (element: HTMLDivElement) => {
    applyRoomTransition(element, tiltTransition);
    setTilt(true);
  };

  const move = (
    element: HTMLDivElement,
    { transition, transform, stopTransition = false }: MoveProps,
  ) =>
    new Promise((resolve) => {
      if (isMoving && !stopTransition) {
        return false;
      }
      setIsMoving(true);

      if (transition) {
        applyRoomTransition(element, transition);
      }

      if (transform) {
        applyRoomTransform(element, transform);
        resolveRef.current = resolve;
      } else {
        resolve();
      }
    });

  const toggleMenu = useCallback(
    async (toggle) => {
      if (isMoving) {
        return false;
      }

      if (scrollerRef.current) {
        if (toggle) {
          setTilt(false);
          applyRoomTransition(scrollerRef.current, menuTransition);
          await move(scrollerRef.current, {
            transform: menuTransform,
            stopTransition: true,
          });
          setIsMenuOpen(true);
        } else {
          applyRoomTransition(scrollerRef.current, roomTransition);
          await move(scrollerRef.current, {
            transform: resetTransform,
            stopTransition: true,
          });
          initTilt(scrollerRef.current);
          setIsMenuOpen(false);
        }
      }
    },
    [scrollerRef.current, isMoving, tilt],
  );

  const handleZoom = () => {
    setIsZoomed(true);
    if (scrollerRef.current) {
      move(scrollerRef.current, {
        transform: resetTransform,
        stopTransition: true,
      });
    }
  };

  return (
    <>
      <GlobalStyles />
      <SEO />
      <Gallery
        room={room}
        images={images}
        ref={scrollerRef}
        isZoomed={isZoomed}
        resolveRef={resolveRef}
        onZoom={handleZoom}
        onSetIsMoving={(val: boolean) => setIsMoving(val)}
      />
      <Content
        room={room}
        isZoomed={isZoomed}
        isMoving={isMoving}
        isMenuOpen={isMenuOpen}
        scrollerRef={scrollerRef}
        onMove={move}
        onGoBack={() => setIsZoomed(false)}
        onToggleMenu={toggleMenu}
        onRemoveTilt={() => setTilt(false)}
      />
    </>
  );
};

export default Room;

export const query = graphql`
  query RoomTemplate($slug: String!, $images: String!) {
    room: roomsYaml(slug: { eq: $slug }) {
      title_detail
      title
      desc
      slug
      next
      prev
      leftWallText
      rightWallText
      centerWallText
    }
    images: allFile(
      filter: { relativePath: { regex: $images } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 95, maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;
