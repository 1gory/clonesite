import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 768px;
  padding: 30px;
  margin: 0 auto;
  text-align: left;
  background: #fafafa;
  border-radius: 20px;
`;

const Button = styled.button`
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
  display: flex;
  justify-content: space-between;
  
  & li {
    padding-bottom: 5px;
  }
  
  @media (max-width: 675px) {
    flex-direction: column;
  }
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
        <h3>Помощь с копированием</h3>

        <Form>
          <ul>
            <li>Скопировать сайт</li>
            <li>Установить на хостинг</li>
            <li>Сделать рабочими отправку заявок (формы)</li>
            <li>Установить и настроить метрику и цели</li>
          </ul>
          <ButtonWrapper>
            <Price>От 490 ₽</Price>
            <Button onClick={this.handleClick}>Оставить заявку</Button>
          </ButtonWrapper>
        </Form>
      </Wrapper>
    )
  }
}
