import React, { Component } from 'react';
import styled from 'styled-components';
import P from '../generic/P';
import H3 from '../generic/H3';
import icon from './icon.svg';

const Icon = styled.img`
  width: 15px;
  margin-left: 15px;
  transform: rotate(${(props) => (props.isOpen ? '30deg' : '60deg')});
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { header, text } = this.props;
    const { isOpen } = this.state;
    return <div>
      <HeaderWrapper>
        <H3 onClick={this.handleClick}>{header}</H3>
        <Icon isOpen={isOpen} src={icon} />
      </HeaderWrapper>
      <P isOpen={isOpen}>{text}</P>
    </div>
  }
}