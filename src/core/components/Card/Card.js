import React from 'react';
import * as Styled from './styes';
import Cobweb from 'assets/Images/Cobweb.png';
import CobwebGrey from 'assets/Images/CobwebGrey.png';
import Spider from 'assets/Images/Spider.png';

const corners = ['isTopRight', 'isBottomRight', 'isBottomLeft', 'isTopLeft'];
const Card = props => {
  const {picture, isBack} = props;
  return (
    <Styled.Card isBack={isBack}>
      {corners.map((corner, index) => (
        <Styled.ImageContainer position={corner} key={index}>
          <Styled.Image src={isBack ? Cobweb : CobwebGrey} position={corner} />
        </Styled.ImageContainer>
      ))}

      {isBack === true ? (
        <Styled.SpiderContainer>
          <Styled.Spider src={Spider} />
        </Styled.SpiderContainer>
      ) : (
        <Styled.PictureContainer>
          <Styled.Picture src={picture} />
        </Styled.PictureContainer>
      )}
    </Styled.Card>
  );
};

export default Card;
