import React, { Component } from 'react';
import styled from 'styled-components';
import Ul from '../generic/Ul';
import A from '../generic/A';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
  padding-bottom: 0;
  text-align: left;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const H3 = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const VideoWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  height: 337px;
  width: 600px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
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
        <H3>Как установить сайт на хостинг</H3>

        <VideoWrapper>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6WAQHDcS0x4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>

        <Ul>
          <li>
            Скачайте архив с сайтом по инструкции ниже
          </li>
          <li>
            {'Перейдите на '}
            <b>
              <A
              target="_blank"
              rel="nofollow"
              href="https://timeweb.com/ru/services/hosting/?i=36726"
            >
                сайт хостинга
              </A>
            </b>
            {' и зарегистрируйтесь'}
          </li>
          <li>
            Перейдите в "Файловый менеджер" и зайдите в директорию public_html
          </li>
          <li>
            Нажмите "Архиватор" -> "Загрузить и разархивировать" и выберите скачанный архив с сайтом
          </li>
          <li>
            Когда распаковка закончится, перенесите файлы в корневую директорию (public_html)
          </li>
          <li>
            Удалите лишние файлы (старый index.htm и директорию, оставшуюся от архива)
          </li>
          <li>
            Готово! Сайт работает на техническом домене.
          </li>
        </Ul>
      </Wrapper>
    )
  }
}
