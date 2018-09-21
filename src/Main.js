import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  
`;

export default () => (
  <Wrapper>
    <h1>Скопировать сайт онлайн Бесплатно</h1>
    <form>
      <input type="text" placeholder="Введите адрес сайта" />
        <button type="submit">Скопировать</button>
    </form>
  </Wrapper>
);