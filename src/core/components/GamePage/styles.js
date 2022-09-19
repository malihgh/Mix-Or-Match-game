import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 100%;
  padding: 10px 10px 0px 15px;
  opacity: ${props => props.disable && '0.3'};
  pointer-events: ${props => props.disable && 'none'};
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const Text = styled.div`
  font-family: 'Lunacy';
  font-size: 45px;
  letter-spacing: 2px;
`;
