import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import CardsController from 'core/components/CardsController';
import {cards} from 'core/components/CardsController/data/cards';

const timePerRound = 10;
const game = ['START', 'PROCESS', 'END'];

const GamePage = () => {
  const [flipCounter, setFlipCounter] = useState(0);
  const [timer, setTimer] = useState(timePerRound);
  const [isWon, setIsWon] = useState(false);
  const [gameStage, setGameStage] = useState(game[0]);
  const [data, setData] = useState(shuffle());

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
    let interval;
    if (gameStage === game[1]) {
      interval = setInterval(() => {
        let t = timer;
        t = t - 1;
        t = t < 10 && t > 0 ? '0' + t : t;
        setTimer(t);
        if (timer <= 0) {
          setTimer(0);
          setGameStage(game[2]);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStage, timer]);

  const checkIsWon = matched => {
    const isAllMatched = matched.length === cards.length;
    if (gameStage === game[1]) {
      if (isAllMatched) {
        setIsWon(true);
        setGameStage(game[2]);
      } else {
        setIsWon(false);
      }
    }
  };

  const restartGame = () => {
    setGameStage(game[1]);
    setTimer(timePerRound);
    setData(shuffle());
    setFlipCounter(0);
  };
  return (
    <Styled.Page disable={gameStage !== game[1]}>
      {gameStage === game[0] && (
        <Styled.Start
          onClick={() => {
            setGameStage(game[1]);
            setTimer(timePerRound);
          }}>
          Click to Start
        </Styled.Start>
      )}
      {gameStage === game[2] && !isWon && (
        <Styled.Start onClick={restartGame} isFinished={true}>
          GAME OVER
          <Styled.SmallStart>Click to Restart</Styled.SmallStart>
        </Styled.Start>
      )}
      {gameStage === game[2] && isWon && (
        <Styled.Start onClick={restartGame} isFinished={true} isVictory>
          VICTORY
          <Styled.SmallStart>Click to Restart</Styled.SmallStart>
        </Styled.Start>
      )}
      <Styled.Container disable={gameStage !== game[1]}>
        <Styled.Title>Mix-Or-Match</Styled.Title>
        <Styled.TextContainer>
          <Styled.Text> Timer {timer}</Styled.Text>
          <Styled.Text> flip {flipCounter}</Styled.Text>
        </Styled.TextContainer>
        <Styled.CardsContainer>
          <CardsController
            data={data}
            isFlipped={isFlipped}
            checkIsWon={checkIsWon}
          />
        </Styled.CardsContainer>
      </Styled.Container>
    </Styled.Page>
  );
};

export default GamePage;
