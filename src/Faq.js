import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  margin-bottom: 5px;
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

const UL = styled.ul`
  & li {
    padding-bottom: 10px;
  }
`;

export default () => (
  <FAQ>
    <H3>Как работает сервис</H3>
    <P>
      В основе сервиса лежит <b>wget</b> - полезная и простая утилита Linux. На серверной стороне она выглядит как <b>"wget -k -p -Q10M http://site.com"</b>.
      <UL>
        <li>Параметр <b>-p</b> означает, что все ресурсы, на которые есть ссылки в документе (картинки, css, js) будут будут сохранены вместе с главным документом.</li>
        <li>Параметр <b>-k</b> укажет программе преобразовать все ссылки на ресурсы, чтобы их можно было использовать на компьютере.</li>
        <li>Параметр <b>-Q10M</b>, задает ограничение в 10 мегабайт на размер всего скачиваемого сайта (это сделано в целях безопасности).</li>
      </UL>
    </P>
    <H3>Как использовать скачанные файлы</H3>
    Если ссылка введена правильно, загрузка сайта начнется автоматически, спустя некотороые время.
    На ваш компьютер будет сохранен архив с файлами. После распаковки найдите в папке index.html и откройте в браузере.
    Если загрузка прошла успешно и все файлы корректно отобразились, вы увидите сохраненную копию сайта (лендинга).
    <H3>Если результат не подходит</H3>
    Напишите комментарий в форму ниже: адрес сайта и детали который вы пытались скопировать. Мы постараемся, по возможности, выяснить в чем дело и напишем ответ.
    <H3>Что не будет сохранено в архиве</H3>
    В процессе заполнения
  </FAQ>
);
