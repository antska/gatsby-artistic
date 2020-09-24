import React from 'react';
import { SButton, SGoBackBtn, SNav, SRightSvg, SRoomTitle } from './styled';

type NavbarProps = {
  isZoomed: boolean;
  room: any;
  onGoBack: () => void;
  onNavigate: (dir: string) => void;
};

const Navbar = ({ isZoomed, room, onGoBack, onNavigate }: NavbarProps) => (
  <SNav isZoomed={isZoomed}>
    {!isZoomed && room.prev && (
      <SButton onClick={() => onNavigate('left')} title="Go left" type="button">
        <svg width="42px" height="12px" viewBox="0 0 70 20">
          <path d="M52.5,10L70,0v20L52.5,10z" />
          <path d="M55.1,11.4H0V8.6h55.1V11.4z" />
        </svg>
      </SButton>
    )}
    {!isZoomed && <SRoomTitle>{room.title}</SRoomTitle>}
    {isZoomed && (
      <SGoBackBtn title="Go back" type="button" onClick={onGoBack}>
        GO BACK
      </SGoBackBtn>
    )}
    {!isZoomed && room.next && (
      <SButton
        onClick={() => onNavigate('right')}
        title="Go Right"
        type="button"
      >
        <SRightSvg width="42px" height="12px" viewBox="0 0 70 20">
          <path d="M52.5,10L70,0v20L52.5,10z" />
          <path d="M55.1,11.4H0V8.6h55.1V11.4z" />
        </SRightSvg>
      </SButton>
    )}
  </SNav>
);

export default Navbar;
