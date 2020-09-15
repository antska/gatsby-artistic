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
