import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Bio from '../components/bio';
import SocialList from '../components/social';

const socialLinks = [
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryan-zegray/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/rzgry',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'Email',
    href: 'mailto:ryan.zegray@gmail.com',
  },
];

const Title = styled.h1`
  @media (min-width: 500px) {
    margin-top: 7rem;
  }
  font-size: 4rem;
  line-height: 3.5rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['ryan', 'zegray', 'ryan zegray', 'software developer', 'node', 'react']}
    />
    <Title>Ryan Zegray</Title>
    <Bio />
    <SocialList links={socialLinks} />
  </Layout>
);

export default IndexPage;
