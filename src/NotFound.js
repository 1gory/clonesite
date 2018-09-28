import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  text-align: center;
`;

export default ({staticContext}) => {
  if (staticContext) {
    staticContext.status = 404;
  }

  return (<Wrapper>
    <Header />
    <h1>Страница не найдена</h1>
    <Footer />
  </Wrapper>);
};
