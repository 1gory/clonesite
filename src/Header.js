import React from 'react';
import styled from 'styled-components';

import logo from './logo.svg';

const Logo = styled.img`
  width: 100px;
  padding-top: 40px;
`;

export default () => (
  <a href="/">
    <Logo src={logo} />
  </a>
);