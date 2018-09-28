import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  font-size: 12px;
  padding: 30px 0;
  color: #fff;
`;

const StyledLink = styled.a`
  color: #fff;
`;

export default () => (
  <Footer>
    <div>
      Права не защищены. Можете скопировать этот сайт
    </div>
    <div>
      <StyledLink href="mailto:admin@clonesite.ru" target="_blank" rel="noopener noreferrer">admin@clonesite.ru</StyledLink> {(new Date()).getFullYear()}
    </div>
  </Footer>
);