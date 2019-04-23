import React from 'react';
import styled from 'styled-components';

const SocialListItem = styled.li`
  display: inline;
  margin-right: 1rem;
  :last-child {
    margin-right: 0;
  }
`;

const Social = () => (
  <ul>
    <SocialListItem>
      <a href="https://www.linkedin.com/in/ryan-zegray/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </SocialListItem>
    <SocialListItem>
      <a href="https://github.com/rzgry" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </SocialListItem>
    <SocialListItem>
      <a href="mailto:ryan.zegray@gmail.com">Email</a>
    </SocialListItem>
  </ul>
);

export default Social;
