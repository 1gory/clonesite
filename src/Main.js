import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;  
  background-color: #2c71a1;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 38px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-shadow: 1px 1px 2px black;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
`;

const Input = styled.input`
  padding: 10px;
  color: #333;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  width: 400px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  background: #f57c00;
  box-shadow: 0 1px 0 0 #d84d00, 0 2px 6px 0 rgba(0,0,0,.15);
  cursor: pointer;
  margin-left: 10px;
  
  &:hover {
    background-color: #ffa353;
    -o-transition: all .3s;
    transition: all .3s;
  }
`;

export default () => (
  <Wrapper>
    <Form>
      <H1>Скопировать сайт онлайн. Бесплатно</H1>
      <div>
        <Input type="text" placeholder="Введите адрес сайта" />
        <Button type="submit">Скопировать</Button>
      </div>
    </Form>
  </Wrapper>
);