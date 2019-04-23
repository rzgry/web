import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import Social from '../components/social';

const Title = styled.h1`
  @media (min-width: 500px) {
    margin-top: 7rem;
  }
  font-size: 4rem;
  line-height: 3.5rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Title>Ryan Zegray</Title>
    <Bio />
    <Social />
  </Layout>
);

export default IndexPage;
