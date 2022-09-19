import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import CardsController from 'core/components/CardsController';
import {cards} from 'core/components/CardsController/data/cards';

const GamePage = () => {
  const [flipCounter, setFlipCounter] = useState(0);
  const [timer, setTimer] = useState(3);

  function shuffle() {
    let shuffledArray = cards
      .map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
    return shuffledArray;
  }
  const isFlipped = () => {
    setFlipCounter(flipCounter => flipCounter + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      let t = timer;
      t = t - 1;
      t = t < 10 ? '0' + t : t;
      setTimer(t);
      if (timer <= 0) setTimer(0);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);
  const isWon = false;

  return (
    <div>
      {!isWon && timer === 0 && <div style={{fontSize: 90}}>You lost</div>}
      {isWon && <div>You Won!</div>}
      <Styled.Container disable={isWon || timer === 0}>
        Mix or Match Game
        <Styled.TextContainer>
          <Styled.Text> Timer {timer}</Styled.Text>
          <Styled.Text> flip {flipCounter}</Styled.Text>
        </Styled.TextContainer>
        <CardsController data={shuffle()} isFlipped={isFlipped} />
      </Styled.Container>
    </div>
  );
};

export default GamePage;
