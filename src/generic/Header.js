import React from 'react';
import styled from 'styled-components';

import logo from './logo-inline.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 170px;
  padding-top: 40px;
`;

export default () => (
  <Wrapper>
    <a href="/">
      <Logo src={logo}/>
    </a>
  </Wrapper>
);