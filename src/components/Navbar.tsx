import React from 'react';

type NavbarProps = {
  isZoomed: boolean;
  room: any;
  onGoBack: () => void;
  onNavigate: (dir: string) => void;
};

const Navbar = ({ isZoomed, room, onGoBack, onNavigate }: NavbarProps) => {
  return (
    <nav
      className="nav"
      style={{
        justifyContent: isZoomed ? 'center' : '',
      }}
    >
      {!isZoomed && room.prev && (
        <button
          onClick={() => onNavigate('left')}
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
          onClick={() => onNavigate('right')}
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
  );
};

export default Navbar;
