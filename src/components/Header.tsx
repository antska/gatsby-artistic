import React from 'react';

type HeaderProps = {
  isZoomed: boolean;
  isMenuOpen: boolean;
  isMoving: boolean;
  onToggle: () => void;
};

const Header = ({ isZoomed, isMenuOpen, isMoving, onToggle }: HeaderProps) => (
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
    </svg>
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
          onClick={onToggle}
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
    </header>
  </>
);

export default Header;
