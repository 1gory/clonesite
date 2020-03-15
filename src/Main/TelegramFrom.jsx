import React from 'react';
import styled from 'styled-components';
import Wrapper from '../generic/FromWrapper';
import telegramIcon from '../generic/telegram-red.svg'

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  a {
    color: #000;
  }
`;

const Icon = styled.img`
  width: 30px;
  margin-left: 12px;
`;

export default () => (
  <a href="https://t.me/clonesite" target="_blank" rel="noopener noreferrer" onClick={() => (yaCounter50440108.reachGoal('telegram'))}>
    <Wrapper>
      <LinkWrapper>
          Задать вопрос / обсудить в telegram-чате
        <Icon src={telegramIcon} />
      </LinkWrapper>
    </Wrapper>
  </a>
);
