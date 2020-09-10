import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';

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
    <Menu pageWrapId="page-wrap" outerContainerId="outer-container">
      {data.navigation.nodes.map((item) => (
        <Link className="menu-item" to={item.link} key={item.name}>
          {item.name}
        </Link>
      ))}
    </Menu>
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
