import React from 'react';
import styled from 'styled-components';

const socialLinks = [
  {
    text: 'Email',
    href: 'mailto:ryan.zegray@gmail.com',
  },
  {
    text: 'GitHub',
    href: 'https://github.com/rzgry',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    text: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryan-zegray/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const SocialListItem = styled.li`
  display: inline;
  margin-right: 1rem;
  :last-child {
    margin-right: 0;
  }
`;

const SocialList = () => (
  <ul>
    {socialLinks.map(({ href, text, ...rest }) => (
      <SocialListItem key={href}>
        <a href={href} {...rest}>
          {text}
        </a>
      </SocialListItem>
    ))}
  </ul>
);

export default SocialList;
