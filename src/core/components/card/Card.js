import React from 'react';
import * as Styled from './styes';
import Cobweb from 'assets/Images/Cobweb.png';
import Spider from 'assets/Images/Spider.png';

const images = ['isTopRight', 'isBottomRight', 'isBottomLeft', 'isTopLeft'];
const Card = () => {
  return (
    <Styled.Card>
      {images.map((image, index) => (
        <Styled.ImageContainer position={image} key={index}>
          <Styled.Image src={Cobweb} position={image} />
        </Styled.ImageContainer>
      ))}
      <Styled.SpiderContainer>
        <Styled.Spider src={Spider} />
      </Styled.SpiderContainer>
    </Styled.Card>
  );
};

export default Card;
