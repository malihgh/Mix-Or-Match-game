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
export const ButtonContainer = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 1;
  @media only screen and (max-width: 740px) {
    position: relative;
    margin: auto;
    top: 0;
    right: 0;
    padding-bottom: 20px;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  padding: 8px;
  border-radius: 6px;
  font-family: serif;
  text-decoration: none;
  color: white;
  background-color: ${props => (props.isLinkedin ? '#0077b5' : '#6e5494')};
  margin-bottom: 8px;
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
  background-color: white;
  padding: 2px;
  border-radius: 3px;
  margin-right: 5px;
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
