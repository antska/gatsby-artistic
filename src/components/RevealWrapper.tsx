import React, { useEffect } from 'react';
import Reveal from 'reveal.js';

const RevealWrapper: React.FunctionComponent = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Reveal.initialize({
        progress: false,
        autoSlide: 5000,
      });
    }
  }, []);
  return (
    <>
      <div className="reveal">
        <div className="slides">{children}</div>
      </div>
    </>
  );
};

export default RevealWrapper;
