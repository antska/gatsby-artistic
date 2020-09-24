import { RefObject } from 'react';

export type ChildImageSharp = {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      src: string;
      srcSet: string;
      sizes: string;
      base64: string;
      tracedSVG: string;
      srcWebp: string;
      srcSetWebp: string;
    };
  };
};

export type TranformType = {
  translateX: string | number;
  translateY: string | number;
  translateZ: string | number;
  rotateX: string | number;
  rotateY: string | number;
  rotateZ: string | number;
};

export type TransitionType = {
  speed: string;
  easing: string;
};

export type InfoType = {
  title: string;
  desc: string;
  md?: string;
};

export type QueryRoom = {
  title_detail: string;
  title: string;
  desc: string;
  slug: string;
  next: string;
  prev: string;
  leftWallText: string;
  rightWallText: string;
  centerWallText: string;
};

export type QueryImages = {
  nodes: {
    name: string;
    childImageSharp: ChildImageSharp;
  };
};

export type QueryNavigation = {
  navigation: {
    nodes: {
      title: string;
      desc: string;
    }[];
  };
};

export type MoveOptions = {
  transition?: TransitionType;
  transform?: TranformType;
  stopTransition?: boolean;
};

export type ContentProps = {
  room: QueryRoom;
  scrollerRef: RefObject<HTMLDivElement>;
  isMoving: boolean;
  isZoomed: boolean;
  isMenuOpen: boolean;
  onGoBack: () => void;
  onRemoveTilt: () => void;
  onMove: (el: HTMLDivElement, options: MoveOptions) => Promise<unknown>;
  onToggleMenu: (toggle: boolean) => void;
};
