import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  font-size: 12px;
  padding: 30px 0;
  color: #fff;
  
  & a {
    color: #fff;
  }
`;

export default () => (
  <Footer>
    <div>
      Права не защищены<br /> Можете скопировать этот сайт
    </div>
    <div>
      <a href="https://clonesite.ru">clonesite.ru</a> {(new Date()).getFullYear()}
    </div>
  </Footer>
);