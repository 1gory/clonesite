import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Row, Col, Grid} from 'react-flexbox-grid';
import archiveIcon from './archive.svg';
import link from './link.svg';
import waiting from './waiting.svg';
import success from './success.svg';

const StepsWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 30px;
`;

const Step = styled.div`
  padding-top: 35px;
  text-align: center;
`;

const StepIcon = styled.img`
  width: 35px;
`;

const StepText = styled.span`
  font-weight: bold;
  padding-top: 15px;
  display: inline-block;
`;

const H3 = styled.h3`
  margin-bottom: 5px;
  font-size: 22px;
`;

const P = styled.p`
  margin-top: 10px;
`;

const FAQ = styled.div`
  text-align: left;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 15px;
  padding-bottom: 70px;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const UL = styled.ul`
  & li {
    padding-bottom: 10px;
  }
`;

const StepComponent = ({num, text, icon, alt}) => (
  <Step>
    <StepIcon src={icon} alt={alt} />
    <div>
      <StepText>{num}. {text}</StepText>
    </div>
  </Step>
);

export default () => (
  <FAQ>
    <H3>Как работает сервис</H3>
    <StepsWrapper>
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            <StepComponent
              num="1"
              text={<span>Вставьте<br/> ссылку</span>}
              icon={link}
              alt="Вставьте ссылку на копируемый сайт"
            />
          </Col>
          <Col xs={6} md={3}>
            <StepComponent
              num="2"
              text={<span>Нажмите<br/> "Cкопировать"</span>}
              icon={archiveIcon}
              alt="Нажмите на кнопку 'Скопировать'"
            />
          </Col>
          <Col xs={6} md={3}>
            <StepComponent
              num="3"
              icon={waiting}
              text={<span>Дождитесь<br/> начала скачивания</span>}
              alt="Дождитесь начала загрузки"
            />
          </Col>
          <Col xs={6} md={3}>
            <StepComponent
              num="4"
              icon={success}
              text={<span>Файлы загружены<br/> на компьютер</span>}
              alt="Архив с сайтом сохранен на компьютер"
            />
          </Col>
        </Row>
      </Grid>
    </StepsWrapper>
    <P>
      <StyledLink to="/">clonesite.ru</StyledLink> - сервис, с помощью которого можно полностью
      скачать сайт на компьютер онлайн и бесплатно.<br />
      В основе сервиса лежит <b>wget</b> - полезная и простая программа Linux. На серверной стороне
      она выглядит как <b>"wget -k -p -Q10M http://site.com"</b>:
      <UL>
        <li>Параметр <b>-p</b> означает, что все ресурсы, на которые есть ссылки в документе
          (картинки, css, js) будут будут сохранены вместе с главным документом.
        </li>
        <li>Параметр <b>-k</b> укажет программе преобразовать все ссылки на ресурсы, чтобы их можно
          было использовать на компьютере.
        </li>
        <li>Параметр <b>-Q10M</b>, задает ограничение в 10 мегабайт на размер всего скачиваемого
          сайта (это сделано в целях безопасности).
        </li>
      </UL>
    </P>
    <H3>Если сервис не работает или результат не подходит</H3>
    <P>
      К сожалению, не все сайты можно сохранить вышеописанным методом.
      Для некоторых случаев требуется особый подход.<br />
      <u><b>Напишите комментарий в форму ниже</b></u>: адрес сайта который вы пытались скопировать и прочие детали.
      Мы постараемся, по возможности, выяснить в чем дело и напишем ответ.
      Вы можете воспользоваться <StyledLink to='/other'>альтернативными методами</StyledLink>.<br />
    </P>
    <H3>Как использовать скачанные файлы</H3>
    <P>
      Если ссылка введена правильно, загрузка сайта начнется автоматически, спустя некоторое время.
      На ваш компьютер будет сохранен архив с файлами. После распаковки найдите в папке index.html и
      откройте в браузере.
      Если загрузка прошла успешно и все файлы корректно отобразились, вы увидите сохраненную копию
      сайта (лендинга).
    </P>
    <H3>Что не будет сохранено в архиве</H3>
    <P>
      Серверные ресурсы, такие как скрипты php, обработчики форм, базы данных, и прочий back-end,
      хранящийся на
      серверной стороне никаким образом не может быть получен обычным пользователем.
      Доступ к этим файлам может получить только владелец сайта (хостинга).
    </P>
    <H3>Как сделать рабочими формы на сайте</H3>
    <P>В процессе заполнения</P>
    <H3>Три причины поделиться проектом</H3>
    <P>
      <UL>
        <li>Сервис бесплатный</li>
        <li>Нет рекламы</li>
        <li>Нет регистрации</li>
      </UL>
      Сервис полностью бесплатный и позволяет получить код сайта с сохраненной структурой для
      экспериментов.
      Никакой рекламы, никакой регистрации.<br />
      <b>Пожалуйста, поддержите проект</b>, поделитесь с друзьями. Или оставьте комментарий в форму
      ниже.
    </P>
  </FAQ>
);
