import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
  height: 200px;
  background-color: ${props => (props.isBack ? 'black' : '#FFBB89')};
  position: relative;
  border: ${props => (props.isBack ? ' 2px #ff6d00 solid' : ' 2px #333 solid')};
  border-radius: 8px;
  margin: 5px;
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
  left: 15%;
`;
export const Spider = styled.img`
  height: 145px;
  ${Card}:hover & {
    height: 150px;
  }
`;
export const PictureContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 19%;
`;
export const Picture = styled.img`
  height: 88px;
  ${Card}:hover & {
    height: 90px;
  }
`;
