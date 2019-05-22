import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
  text-align: left;
  background: #fafafa;
  border-radius: 20px;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const Button = styled.a`
  display: block;
  text-decoration: none;
  box-shadow: -5px 5px 20px rgba(88, 94, 234, 0.35);
  background: #585EEA;
  border-radius: 5px;
  color: white;
  font-family: inherit;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: .2s;
  &:hover {
    box-shadow: -5px 5px 20px rgba(88, 94, 234, 0.55);  
  }
  
  @media (max-width: 675px) {
    font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-right: 50px;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 675px) {
    padding-top: 20px;
    padding-right: 0;
  }
`;

const Price = styled.div`
  font-size: 26px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const Form = styled.form`
  & li {
    padding-bottom: 5px;
  }
  
  @media (max-width: 675px) {
    & ul {
      padding-left: 20px;
    }
  }
`;

const B = styled.span`
  text-decoration: underline;
  font-weight: 900;
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
`;

export default class extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { openPopUp } = this.props;
    openPopUp();
  };

  render() {
    return (
      <Wrapper>
        <H3>Рекомендоавнный хостинг для установки сайта</H3>

        <Form>
          <ul>
            <li>Бесплатно <B>10 дней</B></li>
            <li>Бесплатная простая установка <B>SSL-сертификата (https)</B></li>
            <li>Живая поддержка <B>24/7</B> в онлайн чате</li>
            <li>Простая и удобная панель управления</li>
            <li>Высокая скорость, надежная работа, бекапы</li>
          </ul>
          <ButtonWrapper>
            {/*<Price>От 490 ₽</Price>*/}
            <Button href="https://timeweb.com/ru/services/hosting/?i=36726" target="_blank"
              onClick={() => (yaCounter50440108.reachGoal('timeweb'))}
            >
              Перейти (регистрация и 10 дней бесплатно)
            </Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    )
  }
}
