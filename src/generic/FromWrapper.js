import styled from 'styled-components';

export default styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 30px;
  text-align: left;
  background: #fafafa;
  border-radius: 20px;
  cursor: pointer;
  transition: .2s;
  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;
