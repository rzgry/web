import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import Footer from './footer';
import theme from '../utils/theme';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  margin-bottom: 2rem;
`;

const MainContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.maxContentWidth};
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LayoutWrapper>
      <Main>
        <MainContainer>{children}</MainContainer>
      </Main>
      <Footer />
    </LayoutWrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
