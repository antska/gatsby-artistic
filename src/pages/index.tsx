import React, { useEffect, useRef, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { debounce } from 'lodash';
import {
  initTransform,
  initTransition,
  tiltRotation,
  tiltTransition,
} from '../constants';
import { TranformType, TransitionType } from '../types';
import { applyRoomTransform, applyRoomTransition } from '../utils';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import Content from '../components/Content';
import GlobalStyles from '../styles/global';

const Index: React.FunctionComponent = () => {
  const { allRoomsYaml } = useStaticQuery(graphql`
    query Rooms {
      allRoomsYaml {
        nodes {
          desc
          title
          title_detail
          images {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const scrollerRef = useRef<HTMLDivElement>(null);
  // const requestRef = React.useRef();
  const [win, setWin] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isInFront, setIsInFront] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [tilt, setTilt] = useState(false);

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
    const debounceResize = debounce(() => {
      setWin({ width: window.innerWidth, height: window.innerHeight });
    }, 10);
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  useEffect(() => {
    if (scrollerRef.current) {
      move(scrollerRef.current, {
        transition: initTransition,
        transform: initTransform,
      });
      initTilt(scrollerRef.current);
    }

    const onMouseMove = (ev) => {
      requestAnimationFrame(() => {
        if (!tilt) return false;

        if (isInFront) return false;

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
        if (scrollerRef.current) {
          applyRoomTransform(scrollerRef.current, {
            translateX: initTransform.translateX,
            translateY: initTransform.translateY,
            translateZ: !isInFront ? initTransform.translateZ : '2000px',
            rotateX: `${rotX}deg`,
            rotateY: `${rotY}deg`,
            rotateZ: initTransform.rotateZ,
          });
        }
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [scrollerRef.current]);

  const initTilt = (element: HTMLDivElement) => {
    applyRoomTransition(element, tiltTransition);
    setTilt(true);
  };

  const move = (
    element: HTMLDivElement,
    {
      transition,
      transform,
      stopTransition = false,
    }: {
      transition: TransitionType;
      transform: TranformType;
      stopTransition?: boolean;
    },
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
        resolve();
        // const onEndFn = function () {
        //   setIsMoving(false);
        //   resolve();
        // };
        // onEndTransition(element, onEndFn);
      } else {
        resolve();
      }
    });

  return (
    <>
      <GlobalStyles />
      <SEO />
      <Gallery
        rooms={allRoomsYaml.nodes}
        ref={scrollerRef}
        onSetIsMoving={setIsMoving}
      />
      <Content
        rooms={allRoomsYaml.nodes}
        isMoving={isMoving}
        onRemoveTilt={setTilt}
      />
    </>
  );
};

export default Index;
