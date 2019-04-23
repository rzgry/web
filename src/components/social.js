import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

SocialList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SocialList;
