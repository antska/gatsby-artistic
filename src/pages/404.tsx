import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { AnimatedFlex } from '../elements';

const NotFound: React.FunctionComponent = () => (
  <Layout>
    <SEO />
    <AnimatedFlex height="100%" justifyContent="center" alignItems="center">
      <h2>Page not found!</h2>
    </AnimatedFlex>
  </Layout>
);

export default NotFound;
