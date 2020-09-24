import React from 'react';

import SEO from 'components/SEO';
import { AnimatedFlex } from 'elements';

const NotFound: React.FunctionComponent = () => (
  <>
    <SEO />
    <AnimatedFlex height="100%" justifyContent="center" alignItems="center">
      <h2>Page not found!</h2>
    </AnimatedFlex>
  </>
);

export default NotFound;
