import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
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
  height: 338px;
  width: 600px;
  margin: 0 auto;
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
      </Wrapper>
    )
  }
}
