import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { InfoType, QueryNavigation } from 'types';
import {
  SInfo,
  SInfoTitle,
  SMenu,
  SMenuItem,
  SMenuLink,
  SOverlay,
} from './styled';

type OverlayMenuProps = {
  isMenuOpen: boolean;
  info: InfoType;
  onMenuClick: (info: InfoType) => void;
};

const OverlayMenu = ({ isMenuOpen, info, onMenuClick }: OverlayMenuProps) => {
  const { navigation } = useStaticQuery<QueryNavigation>(graphql`
    query Nav {
      navigation: allNavigationYaml {
        nodes {
          title
          desc
        }
      }
    }
  `);

  return (
    <SOverlay isMenuOpen={isMenuOpen} hasInfo={!!info.title}>
      {!info.title ? (
        <SMenu>
          {navigation.nodes.map((nav) => (
            <SMenuItem key={nav.title}>
              <SMenuLink onClick={() => onMenuClick(nav)}>
                {nav.title}
              </SMenuLink>
            </SMenuItem>
          ))}
        </SMenu>
      ) : (
        <>
          <SInfoTitle>{info.title}</SInfoTitle>
          {info.desc && (
            <SInfo dangerouslySetInnerHTML={{ __html: info.desc }} />
          )}
        </>
      )}
    </SOverlay>
  );
};

export default OverlayMenu;
