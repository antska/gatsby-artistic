import React, { useEffect, useLayoutEffect } from 'react';
import { useSpring, config } from 'react-spring';
import { graphql, useStaticQuery } from 'gatsby';

// import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import { AnimatedFlex } from '../elements';
// import RevealWrapper from '../components/RevealWrapper';
import Gallery from '../components/Gallery';
import Content from '../components/Content';
import GlobalStyles from '../styles/global';

const Index: React.FunctionComponent = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  // useEffect(() => {
  //   require('../../static/main.js');
  // }, []);

  const { allRoomsYaml } = useStaticQuery(graphql`
    query Rooms {
      allRoomsYaml {
        nodes {
          desc
          title
          title_detail
          images {
            childImageSharp {
              fluid(quality: 95, maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyles />
      <SEO />
      <Gallery rooms={allRoomsYaml.nodes} />
      <Content />
      {/* <RevealWrapper>
          <section>First slide</section>
          <section>Second slide</section>
          <section>Third slide</section>
          <section>Fourth slide</section>
        </RevealWrapper> */}
    </>
  );
};

export default Index;
