import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

import logo from '../../static/logos/logo.gif';
import { Header } from '../elements';

interface QueryResult {
  navigation: {
    nodes: {
      name: string;
      link: string;
    }[];
  };
}

const Navbar: React.FunctionComponent = () => {
  const data: QueryResult = useStaticQuery(query);

  return (
    <>
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        customBurgerIcon={
          <svg
            fill="none"
            height="17"
            viewBox="0 0 36 17"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#000">
              <path d="m0 0h36v3h-36z" />
              <path d="m0 7h36v3h-36z" />
              <path d="m0 14h36v3h-36z" />
            </g>
          </svg>
        }
      >
        {data.navigation.nodes.map((item) => (
          <Link className="menu-item" to={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </Menu>
      <Header justifyContent="center">
        <img style={{ marginTop: '10px' }} alt="logo" src={logo} />
      </Header>
    </>
  );
};

export default Navbar;

const query = graphql`
  query Layout {
    navigation: allNavigationYaml {
      nodes {
        name
        link
      }
    }
  }
`;
