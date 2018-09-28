import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

export default ({staticContext}) => {
  if (staticContext) {
    staticContext.status = 404;
  }

  return (<Wrapper>
    <h1>Страница не найдена</h1>
  </Wrapper>);
};
