import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  column-gap: 1.25%;
  row-gap: 0.2%;
  margin: auto;
  @media only screen and (max-width: 740px) {
    grid-template-columns: 50% 50%;
  }
`;
