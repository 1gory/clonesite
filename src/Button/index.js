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
  box-shadow: 0 1px 0 0 #d84d00, 0 2px 6px 0 rgba(0,0,0,.15);
  cursor: pointer;
  margin-left: 10px;
  
  ${({isLoading})=>(isLoading && `
    cursor: arrow;
    box-shadow: none;
    background: #c3c3c3;
  `)}
  
  ${({isLoading})=>(!isLoading && `
    &:hover {
      background-color: #ffa353;
      -o-transition: all .3s;
      transition: all .3s;
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