import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  text-align: center;
  font-size: 12px;
  padding: 30px 0;
  color: #000;
`;

const StyledLink = styled.a`
  color: #000;
`;

export default () => (
  <Footer>
    <div>
      Права не защищены. Можете скопировать этот сайт. Но помните, воровать - плохо.
    </div>
    <div>
      <StyledLink href="mailto:admin@clonesite.ru" target="_blank" rel="noopener noreferrer">admin@clonesite.ru</StyledLink> {(new Date()).getFullYear()}
    </div>
  </Footer>
);
