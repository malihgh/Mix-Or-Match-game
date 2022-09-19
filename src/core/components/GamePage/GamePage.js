import React from 'react';
import * as Styled from './styles';
import CardsController from 'core/components/CardsController';

const GamePage = () => {
  return (
    <Styled.Container>
      Mix or Match Game
      <CardsController />
    </Styled.Container>
  );
};

export default GamePage;
