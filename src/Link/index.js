import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../generic/Footer';
import Header from '../generic/Header';

const Wrapper = styled.div`
  text-align: left;  
  max-width: 768px;
  margin: 0 auto;
`;

export default () => (
  <Wrapper>
    <Header/>
    <h1>Как скачать сайт целиком - обзор сервисов</h1>
    <p>
      Если по каким-то причинам у вас не получается воспользоваться <Link to="/">нашим сервисом</Link>,
      у вас есть выбор из аналогичных сервисов
    </p>
    <h3>webparse.ru</h3>
    <h3>xdan.ru/copysite</h3>
    <h3>copyron.ru</h3>
    <h3>recopyright.ru</h3>
    <div id="vk_comments_block">
      <div id="vk_comments" />
    </div>
    <Footer/>
  </Wrapper>
);
