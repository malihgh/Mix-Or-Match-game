import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
  height: 200px;
  background-color: black;
  position: relative;
  border: 2px #ff6d00 solid;
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
  left: 15%;
`;
export const Spider = styled.img`
  height: 145px;
  ${Card}:hover & {
    height: 150px;
  }
`;
