import { css } from 'styled-components';

const demo = css`
  *,
  *::after,
  *::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    // font-family: 'Josefin Sans', sans-serif;
    letter-spacing: 0.1em;
    color: #1f1f21;
    background: #2d2d2d;
    height: 100vh;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
    outline: none;
  }

  a:hover,
  a:focus {
    color: #c2292e;
  }

  .hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  /* Icons */
  .icon {
    display: block;
    width: 1.5em;
    height: 1.5em;
    margin: 0 auto;
    fill: currentColor;
  }

  .btn {
    position: relative;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }

  .btn:focus {
    outline: none;
  }

  .btn:hover {
    color: #c2292e;
  }

  .btn--nav {
    // font-size: 2em;
    pointer-events: auto;
    cursor: pointer;
  }

  .nav-icon--right {
    transform: scale3d(-1, -1, 1);
  }

  .nav__triangle,
  .nav__line {
    transition: transform 0.3s;
    fill: #c2292e;
  }

  .btn--nav:hover .nav__triangle {
    transform: translate3d(-54px, 0, 0);
  }

  .btn--nav:hover .nav__line {
    transform: translate3d(17px, 0, 0);
  }

  .btn--nav-up:hover .nav__triangle {
    transform: translate3d(0, -32px, 0);
  }

  .btn--nav-up:hover .nav__line {
    transform: translate3d(0, 10px, 0);
  }

  .btn--go-back {
    font-size: 1rem;
    // visibility: hidden;
    // opacity: 0;
    transition: opacity 700ms ease-in;
  }

  .btn--info {
    margin: 0 2em 0 auto;
  }

  .btn--toggle.btn--active {
    z-index: 100;
    color: #fff;
  }

  .btn--toggle.btn--active:hover {
    color: #1f1f21;
  }

  .btn--toggle .icon:nth-child(2),
  .btn--toggle.btn--active .icon:first-child {
    display: none;
  }

  .btn--toggle.btn--active .icon:nth-child(2) {
    display: block;
  }

  /* two seats on each side for free space */

  .container {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    perspective: 2000px;
  }

  .scroller {
    height: 100%;
    transform-style: preserve-3d;
  }

  .room {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    margin: -50vh 0 0 -50vw;
    pointer-events: none;
    opacity: 0;
    transform-style: preserve-3d;
  }

  .room--current {
    pointer-events: auto;
    opacity: 1;
  }

  .room__side {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
  }

  // .room__side:hover:not(.room__side--bottom):not(.selected__room) {
  //   background: antiquewhite;
  // }

  .room__side--left,
  .room__side--right {
    // cursor: pointer;
    cursor: zoom-in;
    width: 3000px;
    /* depth */
    height: 100vh;
    background: #edd9bd;
  }

  .room__side--back {
    // cursor: pointer;
    cursor: zoom-in;
    width: 100vw;
    height: 100vh;
    background: #edd9bd;
    box-shadow: 0 0 0 2px #edd9bd;
    transform: translate3d(0, 0, -4000px) rotate3d(1, 0, 0, 0.1deg)
      rotate3d(1, 0, 0, 0deg);
    /* Rotation due to rendering bug in Chrome when loader slides up (images seem cut off) */
  }

  .room__side--right {
    right: 0;
    justify-content: center;
    transform: rotate3d(0, 1, 0, -90.03deg);
    transform-origin: 100% 50%;
  }

  .room__side--left {
    justify-content: center;
    transform: rotate3d(0, 1, 0, 90deg);
    transform-origin: 0 50%;
  }

  .room__side--bottom {
    width: 100vw;
    /* depth */
    height: 4000px;
    background: #2d2d2d;
    transform: rotate3d(1, 0, 0, 90deg) translate3d(0, -4000px, 0);
    transform-origin: 50% 0%;
  }

  .room__side--bottom {
    top: 100%;
  }

  .room_zoomed {
    width: 100vw;
    transform: rotate3d(0, 1, 0, 0);
    justify-content: flex-start;
    cursor: auto;
  }

  /* Inner elements */
  .room__img {
    border: 10px solid #483023;
    flex: none;
    // max-width: 40%;
    max-height: 80%;
    max-width: 700px;
    margin: 0 5%;
    transform: translate3d(0, 0, 10px);
    backface-visibility: hidden;
    width: 100%;
    // height: 100%;
  }

  .room__img--desc {
    font-size: 2vw;
    font-weight: 400;
    // margin-left: 4%;
    // margin-right: 12%;
    margin-right: 5%;
    // width: 30%;
  }

  /* Content */
  .content {
    // position: absolute;
    // top: 0;
    // left: 0;
    // display: flex;
    // flex-direction: column;
    // width: 100%;
    // height: 100vh;
    // padding: 2vw;
  }

  /* Header */
  .codrops-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    padding: 0 20px;
  }

  .codrops-header__title {
    color: #c2292e;
    font-size: 1.5em;
    font-weight: normal;
    margin: 0.5em 0 0 0;
  }

  .header__title {
    display: flex;
    flex-direction: column;
    padding-top: 15px;
  }

  .header__subject {
    color: white;
    font-size: 11px;
  }

  /* Top Navigation Style */
  .codrops-links {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.75em;
    margin: 0 2em 0 0;
    text-align: center;
    white-space: nowrap;
    border: 2px solid;
    background: #fff;
  }

  .codrops-links::after {
    content: '';
    position: absolute;
    top: -5%;
    left: calc(50% - 1px);
    width: 2px;
    height: 110%;
    background: currentColor;
    transform: rotate3d(0, 0, 1, 22.5deg);
  }

  .codrops-icon {
    display: inline-block;
    padding: 0 0.65em;
  }

  .subject {
    font-size: 1.5em;
    margin: 0 auto;
    color: #c2292e;
  }

  /* Location */
  .location {
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
    color: #c2292e;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }

  /* Slides */
  .slides {
    position: relative;
    flex: 1;
  }

  .slide {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70vw;
    height: 100%;
    margin: 7vh 0 0 10vw;
    pointer-events: none;
    opacity: 0;
  }

  .slide--current {
    pointer-events: auto;
    opacity: 1;
  }

  .slide__name {
    font-size: 15vw;
    line-height: 0.8;
    margin: 0;
    padding: 0 0 0 5vw;
    text-indent: -5vw;
    letter-spacing: -0.05em;
    text-transform: lowercase;
    color: #fff;
  }

  .slide__title,
  .slide__date {
    text-align: right;
  }

  .slide__title {
    font-size: 3vw;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0.75em 0 0 0;
    color: #fff;
  }

  .slide__date {
    font-size: 1.5vw;
    font-weight: bold;
    margin: 1.15em 0 0 0;
    text-transform: uppercase;
    color: #c2292e;
  }

  .slide__number {
    font-size: 0.4em;
    display: inline-block;
    margin: 0.5em 0 0 0;
    padding: 0.4em 0.5em 0.25em 0.5em;
    color: #fff;
    background: #c2292e;
  }

  /* Nav */
  .nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // margin: auto 0 0 0;
    // pointer-events: none;
    padding: 10px 20px;
    position: absolute;
    bottom: 0;
  }

  /* Overlay with menu */
  .overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0;
  }

  .overlay--loader {
    z-index: 1000;
    background: #fff;
    // background: rgb(126, 36, 38, 0.74);
  }

  .overlay--info {
    // background: rgba(23, 94, 236, 0.4);
    background: rgb(142, 133, 121, 0.58);
  }

  .overlay--menu {
    background: rgb(126, 36, 38, 0.74);
  }

  .overlay--active {
    pointer-events: auto;
    opacity: 1;
  }

  .menu {
    text-align: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu__item {
    font-size: 7vh;
    margin: 0.25em 0;
    padding: 0;
    text-transform: uppercase;
  }

  .menu__item--current {
    font-weight: bold;
  }

  .menu__link {
    color: #fff;
  }

  .menu__link:focus,
  .menu__link:hover {
    color: #1f1f21;
  }

  .info {
    color: white;
    font-size: 1.2em;
    line-height: 1.4;
    width: 70vw;
    min-width: calc(320px - 2em);
    max-width: 900px;
    margin: 0;
    padding: 1em;
    overflow: auto;
    max-height: 80vh;
    text-align: justify;
  }

  .info-title {
    font-size: 2.5em;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #ab262b;
    margin-bottom: 20px;
    // background-color: #ab262b;
  }

  .room-title {
    font-size: 1.5em;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: #c2292e;
  }

  .loader {
    display: flex;
  }

  .loader div {
    width: 30px;
    height: 30px;
    margin: -30px 0.2em 0;
    border: 4px solid;
    background: #e9e9e9;
    animation: anim-loader 0.8s alternate infinite forwards;
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .loader div:nth-child(2) {
    border-radius: 50%;
    background: #c2292e;
    animation-delay: 0.15s;
  }

  .loader div:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes anim-loader {
    100% {
      transform: translate3d(0, 30px, 0) scale3d(0.9, 0.9, 1);
    }
  }

  @media screen and (max-width: 50em) {
    .subject {
      display: none;
    }

    .codrops-links {
      margin: 0 0.5em 0 0;
    }

    .btn--info {
      margin-right: 1.25em;
    }

    .location {
      font-size: 0.85em;
      position: relative;
      height: auto;
      margin: 1em 0 0 0;
      padding: 0;
      text-align: left;
      -webkit-writing-mode: horizontal-tb;
      writing-mode: horizontal-tb;
    }

    .slide {
      width: 100%;
      margin: 7vh 0 0 0;
    }

    .slide__name {
      padding: 0 0 0 12vw;
    }

    .slide__title {
      font-size: 1.5em;
    }

    .slide__date {
      font-size: 0.65em;
    }

    .nav {
      position: absolute;
      top: 7em;
      left: 0;
      width: 100%;
      padding: 1em;
    }

    .nav__triangle {
      transform: translate3d(-54px, 0, 0);
    }

    .nav__line {
      transform: translate3d(17px, 0, 0);
    }

    .btn--nav:hover {
      color: currentColor;
    }

    .info {
      font-size: 0.95em;
      width: 100vw;
    }
  }
`;

export default demo;
