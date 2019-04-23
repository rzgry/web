import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.main`
  flex: 1;
  margin-bottom: 2rem;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Footer = styled.footer`
  text-align: right;
  background: #8aa399;
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: -3rem;
    height: 3rem;
    left: 0;
    right: 0;
    background: linear-gradient(to bottom right, transparent 49%, #8aa399 50%);
  }
`;

const FooterText = styled.p`
  color: #f2f2f2;
  a {
    color: #3b3f47;
  }
  a:hover {
    color: #b4c3dc;
  }
  margin-top: 0.5rem;
`;

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0px 1.0875rem 0px;
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <Main>
      <MainContainer>{children}</MainContainer>
    </Main>
    <Footer>
      <FooterContainer>
        <FooterText>
          &copy;
          {' '}
          {new Date().getFullYear()}
,
          {' '}
          <span style={{ whiteSpace: 'nowrap' }}>
            Built with
            {' '}
            <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
              GatsbyJS
            </a>
          </span>
          {' '}
          <span style={{ whiteSpace: 'nowrap' }}>
            and
            {' '}
            <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
              Styled Components
            </a>
          </span>
        </FooterText>
      </FooterContainer>
    </Footer>
  </LayoutWrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
