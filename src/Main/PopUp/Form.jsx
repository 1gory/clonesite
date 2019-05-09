import React from 'react';
import styled from 'styled-components';
import PhoneInput from './PhoneInput';
import TextInput from './TextInput';
import GhostButton from './GhostButton';

const Label = styled.label`
  font-size: 16px;
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  padding-top: 20px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  padding-bottom: 20px;
`;

const WhatsAppLink = styled.a`
  color: green;
  text-decoration: underline;
`;

export default ({ handleChangeForm, handleClick }) => (
  <FormWrapper>
    <Text>Свяжемся с вами в WhatsApp<br/> или другом мессенджере</Text>
    <Label>
      <TextInput placeholder="Сайт" name="site" onChange={handleChangeForm} />
    </Label>
    <Label>
      <PhoneInput
        mask="+7 (999) 999-99-99"
        placeholder="+7"
        name="phone"
        onChange={handleChangeForm}
      />
    </Label>
    <WhatsAppLink href="https://api.whatsapp.com/send?phone=79162282456" target="_blank">
      Или напишите мне
    </WhatsAppLink>
    <ButtonWrapper>
      <GhostButton onClick={handleClick}>Отправить</GhostButton>
    </ButtonWrapper>
  </FormWrapper>
);
