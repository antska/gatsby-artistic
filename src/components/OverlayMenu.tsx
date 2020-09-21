import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { InfoType } from 'types';

type OverlayMenuProps = {
  isMenuOpen: boolean;
  info: InfoType;
  onMenuClick: (info: InfoType) => void;
};

const OverlayMenu = ({ isMenuOpen, info, onMenuClick }: OverlayMenuProps) => {
  const { navigation } = useStaticQuery(graphql`
    query Nav {
      navigation: allNavigationYaml {
        nodes {
          title
          desc
          md
        }
      }
    }
  `);

  return (
    <>
      <div
        className={`overlay overlay--menu ${
          isMenuOpen || info.title ? 'overlay--active' : ''
        }`}
      >
        {!info.title && (
          <ul className="menu">
            {navigation.nodes.map((nav) => (
              <li key={nav.title} className="menu__item">
                <a
                  className="menu__link"
                  href="#"
                  onClick={() => onMenuClick(nav)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={`overlay overlay--info menu__eyewitnesses ${
          info.title && isMenuOpen ? 'overlay--active' : ''
        }`}
      >
        <h4 className="info-title">{info.title}</h4>
        <p
          className="info"
          dangerouslySetInnerHTML={info.md ? { __html: info.md } : undefined}
        >
          {info.desc}
        </p>
      </div>
    </>
  );
};

export default OverlayMenu;
