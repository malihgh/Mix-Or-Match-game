import styled from 'styled-components';

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
export const Card1000 = styled.div`
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
  background-color: ${props => (props.isBack ? 'black' : '#FFBB89')};
  border: ${props => (props.isBack ? ' 2px #ff6d00 solid' : ' 2px #333 solid')};
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
  ${Card}:hover & {
    height: 90px;
  }
`;
