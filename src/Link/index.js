import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../generic/Footer';
import Header from '../generic/Header';

const Wrapper = styled.div`
  text-align: left;  
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;

const H1 = styled.h1`
  font-size: 22px;
    
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const H3 = styled.h3`
  font-size: 16px;
    
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;


export default () => (
  <Wrapper>
    <Header/>
    <H1>Как скачать сайт целиком - обзор сервисов</H1>
    <p>
      Если по каким-то причинам у вас не получается воспользоваться <Link to="/">нашим сервисом</Link>,
      у вас есть выбор из аналогичных сервисов
    </p>
    <H3>webparse.ru</H3>
    <H3>xdan.ru/copysite</H3>
    <H3>copyron.ru</H3>
    <H3>recopyright.ru</H3>
    <div id="vk_comments_block">
      <div id="vk_comments" />
    </div>
    <Footer/>
  </Wrapper>
);
