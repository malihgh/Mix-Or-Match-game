import React from 'react';
import * as Styled from './styes';
import Cobweb from 'assets/Images/Cobweb.png';
import CobwebGrey from 'assets/Images/CobwebGrey.png';
import Spider from 'assets/Images/Spider.png';

const corners = ['isTopRight', 'isBottomRight', 'isBottomLeft', 'isTopLeft'];

const Card = props => {
  const {picture, isBack, onCardClick, id} = props;

  const handleCardClick = () => {
    onCardClick(id);
  };

  return (
    <div>
      <Styled.Container>
        <Styled.CardContainer isBack={isBack}>
          {isBack === true ? (
            <Styled.FlipCard isBack onClick={handleCardClick}>
              <Styled.Card isBack>
                {corners.map((corner, index) => (
                  <Styled.ImageContainer position={corner} key={index}>
                    <Styled.Image src={Cobweb} position={corner} />
                  </Styled.ImageContainer>
                ))}

                <Styled.SpiderContainer>
                  <Styled.Spider src={Spider} />
                </Styled.SpiderContainer>
              </Styled.Card>
            </Styled.FlipCard>
          ) : (
            <Styled.FlipCard isBack={false}>
              <Styled.Card isBack={false} isBat={id === 6 || id === 14}>
                {corners.map((corner, index) => (
                  <Styled.ImageContainer position={corner} key={index}>
                    <Styled.Image src={CobwebGrey} position={corner} />
                  </Styled.ImageContainer>
                ))}

                <Styled.PictureContainer>
                  <Styled.Picture
                    src={picture}
                    isBack={isBack}
                    isBat={id === 6 || id === 14}
                  />
                </Styled.PictureContainer>
              </Styled.Card>
            </Styled.FlipCard>
          )}
        </Styled.CardContainer>
      </Styled.Container>
    </div>
  );
};

export default Card;
