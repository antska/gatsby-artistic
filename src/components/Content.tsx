import { graphql, navigate, useStaticQuery } from 'gatsby';
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';

const Content = ({
  room,
  isMoving,
  isZoomed,
  onGoBack,
  onRemoveTilt,
  onMove,
  scrollerRef,
  onToggleMenu,
  isMenuOpen,
  isInfoOpen,
}) => {
  const [isNavigating, setIsNavigating] = useState(false);
  const [info, setInfo] = useState({
    title: '',
    desc: '',
    md: undefined,
  });
  const { navigation } = useStaticQuery(graphql`
    query Nav {
      navigation: allNavigationYaml {
        nodes {
          title
          desc
          md
        }
      }
    }
  `);

  const handleNavigate = (dir: string) => {
    if (isMoving || isNavigating) {
      return false;
    }
    setIsNavigating(true);

    onRemoveTilt();

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
      <svg className="hidden">
        <symbol id="icon-menu" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z" />
        </symbol>
        <symbol id="icon-cross" viewBox="0 0 24 24">
          <title>cross</title>
          <path d="M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z" />
        </symbol>
        <symbol id="icon-info" viewBox="0 0 20 20">
          <title>info</title>
          <circle style={{ fill: '#fff' }} cx="10" cy="10" r="9.1" />
          <path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M10,18.6c-4.7,0-8.6-3.9-8.6-8.6S5.3,1.4,10,1.4s8.6,3.9,8.6,8.6S14.7,18.6,10,18.6z M10.7,5C10.9,5.2,11,5.5,11,5.7s-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3C9.1,6.2,9,6,9,5.7S9.1,5.2,9.3,5C9.5,4.8,9.7,4.7,10,4.7C10.3,4.7,10.5,4.8,10.7,5z M9.3,8.3h1.4v7.2H9.3V8.3z" />
        </symbol>
      </svg>
      <div className="content">
        <header className="codrops-header">
          <div className="header__title">
            <h1 className="ml12">after Rubens</h1>
            <p className="header__subject">
              The Strange Story of the Samson and Delilah
            </p>
          </div>
          {!isZoomed && !isMoving && (
            <button
              type="button"
              className={`btn btn--menu btn--toggle ${
                isMenuOpen ? 'btn--active' : ''
              }`}
              onClick={toggle}
            >
              <svg className="icon icon--menu">
                <use href="#icon-menu" />
              </svg>
              <svg className="icon icon--cross">
                <use href="#icon-cross" />
              </svg>
            </button>
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
          <div
            className={`overlay overlay--menu ${
              isMenuOpen || info.title ? 'overlay--active' : ''
            }`}
          >
            {!info.title && (
              <ul className="menu">
                {navigation.nodes.map((nav) => (
                  <li key={nav.title} className="menu__item">
                    <a
                      className="menu__link"
                      href="#"
                      onClick={() =>
                        setInfo({
                          ...info,
                          title: nav.title,
                          desc: nav.desc,
                          md: nav.md,
                        })
                      }
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div
            className={`overlay overlay--info menu__eyewitnesses ${
              info.title && isMenuOpen ? 'overlay--active' : ''
            }`}
          >
            {/* <div> */}
            <h4 className="info-title">{info.title}</h4>
            <p
              className="info"
              dangerouslySetInnerHTML={
                info.md ? { __html: info.md } : undefined
              }
            >
              {info.desc}
            </p>
            {/* <p className="info">{info.desc}</p> */}
          </div>
          {/* </div> */}
        </header>
        <h4 className="location">
          Euphrosyne Doxiades - Samson and Delilah painting
        </h4>
        <nav
          className="nav"
          style={{
            justifyContent: isZoomed ? 'center' : '',
          }}
        >
          {!isZoomed && room.prev && (
            <button
              onClick={() => handleNavigate('left')}
              title="Go left"
              type="button"
              className="btn btn--nav btn--nav-left"
            >
              <svg
                className="nav-icon nav-icon--left"
                width="42px"
                height="12px"
                viewBox="0 0 70 20"
              >
                <path className="nav__triangle" d="M52.5,10L70,0v20L52.5,10z" />
                <path className="nav__line" d="M55.1,11.4H0V8.6h55.1V11.4z" />
              </svg>
            </button>
          )}
          {!isZoomed && (
            <h2 className="room-desc room-title" style={{ fontSize: '1em' }}>
              {room.title}
            </h2>
          )}
          {isZoomed && (
            <button
              title="Go back"
              type="button"
              className="btn btn--nav btn--go-back"
              onClick={onGoBack}
            >
              GO BACK
            </button>
          )}
          {!isZoomed && room.next && (
            <button
              onClick={() => handleNavigate('right')}
              title="Go Right"
              type="button"
              className="btn btn--nav btn--nav-right"
            >
              <svg
                className="nav-icon nav-icon--right"
                width="42px"
                height="12px"
                viewBox="0 0 70 20"
              >
                <path className="nav__triangle" d="M52.5,10L70,0v20L52.5,10z" />
                <path className="nav__line" d="M55.1,11.4H0V8.6h55.1V11.4z" />
              </svg>
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Content;
