import React from 'react';
import styled from 'styled-components';
import { Location } from '@reach/router';
import ScrollToAnchorLink from './utility/scroll-to-anchor-link';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.headerBackground};
  z-index: 100;

  ul {
    display: flex;
    li:not(:first-child) {
      margin-left: 2em;
    }
  }

  nav {
    padding: 1.5em;
    display: flex;
    max-width: ${({ theme }) => theme.maxContentWidth};
    margin: auto;
    justify-content: space-between;
    align-items: center;
  }

  .header-logo {
    font-size: 2em;
    color: ${({ theme }) => theme.highlight};
    box-shadow: none;
  }

  @media screen and (max-width: 700px) {
    .header-logo {
      display: none;
    }

    nav {
      justify-content: space-around;
    }
  }
`;

const HeaderOffset = styled.div`
  margin-top: 6em;
`;

export default () => {
  return (
    <Location>
      {({ location }) => (
        <>
          <StyledHeader>
            <nav>
              <a className="header-logo" href="/">
                RZ
              </a>
              {location.pathname === '/' && (
                <ul>
                  <li>
                    <ScrollToAnchorLink targetElementId="about" text="About" />
                  </li>
                  <li>
                    <ScrollToAnchorLink
                      targetElementId="skills"
                      text="Skills"
                    />
                  </li>
                  <li>
                    <ScrollToAnchorLink
                      targetElementId="projects"
                      text="Projects"
                    />
                  </li>
                </ul>
              )}
            </nav>
          </StyledHeader>
          {/* Offset for 'position: fixed' header */}
          <HeaderOffset />
        </>
      )}
    </Location>
  );
};
