import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Title from '../components/title';
import Bio from '../components/bio';
import Social from '../components/social';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Ryan Zegray"
      keywords={[
        'ryan',
        'zegray',
        'ryan zegray',
        'software developer',
        'cloud software developer',
        'javascript',
        'node',
        'react',
      ]}
    />
    <Title>Ryan Zegray</Title>
    <Bio />
    <Social />
  </Layout>
);

export default IndexPage;
