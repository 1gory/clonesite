import styled, { keyframes } from 'styled-components';

export default styled.p`
  height: ${props => (props.isOpen ? '100%' : 0)};
  margin-top: 10px;
  overflow: hidden;
`;