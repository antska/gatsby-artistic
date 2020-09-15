/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Content = () => (
  <>
    <svg className="hidden">
      <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title>arrow</title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
      </symbol>
      <symbol id="icon-drop" viewBox="0 0 24 24">
        <title>drop</title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
        <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
      </symbol>
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
        <button type="button" className="btn btn--info btn--toggle">
          <svg className="icon icon--info">
            <use href="#icon-info" />
          </svg>
          <svg className="icon icon--cross">
            <use href="#icon-cross" />
          </svg>
        </button>
        <button type="button" className="btn btn--menu btn--toggle">
          <svg className="icon icon--menu">
            <use href="#icon-menu" />
          </svg>
          <svg className="icon icon--cross">
            <use href="#icon-cross" />
          </svg>
        </button>
        <div className="overlay overlay--menu">
          <ul className="menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Eyewitnesses
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Provenance
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                The debate so far
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Our aims
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="overlay overlay--info room__subject">
          <h4 className="info-title">Room 1</h4>
          <p className="info">
            &ldquo;Life in Pieces&rdquo; is the subject of all exhibitions
            taking place in the Mirai Art Gallery in 2017. Fragments of lost
            memories, fleeting moments and the breaking apart of human nature
            are this year's highlighted topics. We welcome you to a exploration
            space of a unique kind&mdash;the one that will stay with you and
            impact you on many levels. Come visit us.
          </p>
        </div>
        <div className="overlay overlay--info menu__eyewitnesses">
          <h4 className="info-title">Eyewitnesses</h4>
          <p className="info">
            In looking at the National Gallery’s Samson and Delilah we are
            particularly fortunate to have the visual testimony of two
            eyewitnesses. Two artists, both contemporaries of Rubens and the
            painting’s owner Nicholas Rockox, made separate copies of Rubens’
            original painting early in the 17th century. Their copies survive to
            this day, and agree on major points of composition which are
            strikingly different to that of the painting hanging in the National
            Gallery. No reasonable explanation for this has ever been given.
          </p>
        </div>
        <div className="overlay overlay--info menu__provenance">
          <h4 className="info-title">Provenance</h4>
          <p className="info">
            The Samson and Delilah’s provenance – its whereabouts over the years
            – is complex and uncertain. In reality, there are only two things of
            which we can be absolutely certain. The first is that Rubens painted
            a Samson and Delilah in the year or so after his return from Italy
            at the end of 1608. It hung in the house of his friend and patron
            Nicolaas Rockox, several times burgomaster of Antwerp, and one of
            the most cultured and influential figures in the city. The painting
            is mentioned in an inventory, and as we have seen in the The
            Eyewitnesses, was recorded by 2 artists while Rubens and Rockox
            still lived. The year following Rockox’s death in 1640, the painting
            was auctioned off along with the rest of his property for the
            benefit of the poor. Now while there are various isolated references
            to similar sounding paintings later in the 17 th century, this is
            the last cast-iron reference to Rubens’ original Samson and Delilah.
            The second certain fact is that the painting that hangs in the
            National Gallery today (whether or not you believe it to be the same
            painting that disappeared in 1641) was discovered by the art dealer
            Curt Benedict in the hands of a restorer in Paris in 1929, and was
            at first attributed to the 17th century Dutch painter Gerrit van
            Honthorst.
          </p>
        </div>
      </header>
      <h4 className="location">
        Euphrosyne Doxiadis - Samson and Delilah painting
      </h4>
      <nav className="nav">
        <button
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
        <h2 className="room-desc info-title" style={{ fontSize: '1em' }}>
          Room 1
        </h2>
        <button
          hidden
          title="Go in front"
          type="button"
          className="btn btn--nav btn--go-back"
        >
          GO BACK
        </button>
        <button
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
      </nav>
    </div>
  </>
);

export default Content;
