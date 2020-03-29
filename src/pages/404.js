import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/utility/section';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <h1>Not Found</h1>
      <p>You just hit a page that doesn&#39;t exist :(</p>
      <Link to="/">Home</Link>
    </Section>
  </Layout>
);

export default NotFoundPage;
