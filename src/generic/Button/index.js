import styled from 'styled-components';
import archive from './archive.svg';

export default styled.button`
  position: relative;
  padding: 10px;
  padding-right: 40px;
  border: none;
  border-radius: 3px;
  font-family: inherit;
  font-size: inherit;
  color: #fff;
  background: #f57c00;
  cursor: pointer;
  margin-left: 10px;
  box-shadow: -5px 5px 20px rgba(255, 163, 83, .35);
  transition: .2s;
  
  ${({isLoading})=>(isLoading && `
    cursor: arrow;
    box-shadow: none;
    background: #c3c3c3;
  `)}
  
  ${({isLoading})=>(!isLoading && `
    &:hover {
      box-shadow: -5px 5px 20px rgba(255, 163, 83, .65);
    }
  `)}
  
  &:after {
    content: "";
    display: block;
    width: 30px;
    height: 25px;
    position: absolute;
    background: url(${archive}) no-repeat;
    top: 7px;
    right: 3px;
  }
`;