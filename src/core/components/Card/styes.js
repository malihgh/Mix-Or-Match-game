import styled from 'styled-components';
import colors from 'core/consts/colors';

export const Container = styled.div`
  width: 150px;
  height: 200px;
  perspective: 600px;
  margin: 5px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transform-style: preserve-3d;
  transform-origin: center;
  transition: transform 1s;
  transform: ${props => props.isBack && 'rotateY(180deg)'};
`;
export const FlipCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: ${props => props.isBack && 'rotateY(180deg)'};
`;
export const Card = styled.div`
  width: 150px;
  height: 200px;
  position: relative;
  background-color: ${props => (props.isBack ? 'black' : colors.ivory)};
  border-color: ${props => (props.isBack ? colors.orange : colors.gray)};
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  position: absolute;

  top: ${props =>
    (props.position === 'isTopLeft' || props.position === 'isTopRight') && 0};
  bottom: ${props =>
    (props.position === 'isBottomLeft' || props.position === 'isBottomRight') &&
    '-4px'};
  right: ${props =>
    (props.position === 'isTopRight' || props.position === 'isBottomRight') &&
    0};
  left: ${props =>
    (props.position === 'isTopLeft' || props.position === 'isBottomLeft') && 0};
`;

export const Image = styled.img`
  height: 55px;

  transform: ${props =>
    props.position === 'isTopRight'
      ? 'rotate(0deg)'
      : props.position === 'isBottomRight'
      ? 'rotate(90deg)'
      : props.position === 'isBottomLeft'
      ? 'rotate(180deg)'
      : 'rotate(270deg)'};
  ${Card}:hover & {
    height: 60px;
  }
`;

export const SpiderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 10%;
`;
export const Spider = styled.img`
  height: 145px;
  ${Card}:hover & {
    height: 150px;
  }
`;
export const PictureContainer = styled.div`
  position: absolute;
  top: 26%;
  left: 19%;
  transform: rotateY(180deg);
`;
export const Picture = styled.img`
  height: 88px;

  @-webkit-keyframes swinging {
    0% {
      -webkit-transform: rotate(15deg);
    }
    50% {
      -webkit-transform: rotate(-10deg);
    }
    100% {
      -webkit-transform: rotate(15deg);
    }
  }

  @keyframes swinging {
    0% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(15deg);
    }
  }

  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-animation: ${props =>
    props.isBack === undefined && 'swinging 1s ease-in-out forwards infinite'};

  animation: ${props =>
    props.isBack === undefined && 'swinging 1s ease-in-out forwards infinite'};
  ${Card}:hover & {
    height: 90px;
  }
`;
