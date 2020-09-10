import React from 'react';
import { useSpring, config } from 'react-spring';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { AnimatedFlex } from '../elements';

const Index: React.FunctionComponent = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <Layout>
      <SEO />
      <AnimatedFlex
        height="100%"
        justifyContent="center"
        alignItems="center"
        style={pageAnimation}
      >
        <h2>Hello Rubens</h2>
      </AnimatedFlex>
    </Layout>
  );
};

export default Index;
