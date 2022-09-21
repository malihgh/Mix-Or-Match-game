import styled from 'styled-components';
import colors from 'core/constants/colors';

export const Page = styled.div`
  position: relative;
  flex: 1 1 100%;
  display: flex;
  background: ${props => !props.disable && 'radial-gradient(#9d5900, #3d2200)'};
  background-color: ${props => props.disable && 'black'};
`;

export const Start = styled.div`
  font-size: ${props => (props.isFinished ? '140px' : '120px')};
  color: ${colors.orange};
  z-index: 10;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media only screen and (max-width: 740px) {
    font-size: ${props => props.isVictory && '100px'};
  }
`;

export const SmallStart = styled.div`
  font-size: 60px;
  color: ${colors.orange};
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 740px) {
    font-size: 40px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px 120px;
  @media only screen and (max-width: 740px) {
    padding: 15px 12px;
  }
  opacity: ${props => props.disable && '0.2'};
  pointer-events: ${props => props.disable && 'none'};
`;

export const Title = styled.div`
  font-size: 70px;
  color: ${colors.orange};
  flex-grow: 1;
  align-self: center;
  padding: 20px 0px;
  @media only screen and (max-width: 740px) {
    font-size: 60px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0.5;
  width: 630px;
  align-self: center;
  @media only screen and (max-width: 740px) {
    width: 300px;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
`;
export const Text = styled.div`
  font-family: 'Lunacy';
  font-size: 45px;
  letter-spacing: 2px;
  color: ${colors.ivory};
`;
export const CardsContainer = styled.div`
  flex-grow: 4;
  padding-bottom: 40px;
`;
