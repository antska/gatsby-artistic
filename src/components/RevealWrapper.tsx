import React, { useEffect } from 'react';
import Reveal from 'reveal.js';

const RevealWrapper: React.FunctionComponent = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Reveal.initialize({ progress: false });
    }
  }, []);
  return (
    <>
      <div className="reveal">
        <div className="slides">
          {children}
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    </>
  );
};

export default RevealWrapper;
