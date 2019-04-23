import React from 'react';
import styled from 'styled-components';

const SocialListItem = styled.li`
  display: inline;
  margin-right: 1rem;
  :last-child {
    margin-right: 0;
  }
`;

const SocialList = ({ links }) => (
  <ul>
    {links.map(({ href, text, ...rest }) => (
      <SocialListItem key={href}>
        <a href={href} {...rest}>
          {text}
        </a>
      </SocialListItem>
    ))}
  </ul>
);

export default SocialList;
