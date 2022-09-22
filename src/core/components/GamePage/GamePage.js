import React, {useState, useEffect} from 'react';
import * as Styled from './styles';
import CardsController from 'core/components/CardsController';
import {cards} from 'core/components/CardsController/data/cards';
import useAudio from 'core/hooks/useAudio';
import GitHub from 'assets/Images/github.png';
import linkedin from 'assets/Images/linkedin.png';

const timePerRound = 100;
const game = ['START', 'PROCESS', 'END'];

const GamePage = () => {
  const [flipCounter, setFlipCounter] = useState(0);
  const [timer, setTimer] = useState(timePerRound);
  const [isWon, setIsWon] = useState(false);
  const [gameStage, setGameStage] = useState(game[0]);
  const [data, setData] = useState(shuffle());

  const [
    playCreepySound,
    pauseCreepySound,
    playGameOverSound,
    pauseGmeOverSound,
    playVictorySound,
    pauseVictorySound
  ] = useAudio();

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
          //time is up
          setTimer(0);
          setGameStage(game[2]);
          pauseCreepySound();
          playGameOverSound();
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStage, pauseCreepySound, playGameOverSound, timer]);

  const checkIsWon = matched => {
    const isAllMatched = matched.length === cards.length;
    if (gameStage === game[1]) {
      if (isAllMatched) {
        setIsWon(true);
        setGameStage(game[2]);
        pauseCreepySound();
        playVictorySound();
      } else {
        setIsWon(false);
      }
    }
  };
  const startGame = () => {
    setGameStage(game[1]);
    setTimer(timePerRound);
    playCreepySound();
  };
  const restartGame = () => {
    setGameStage(game[1]);
    setTimer(timePerRound);
    setData(shuffle());
    setFlipCounter(0);
    playCreepySound();
    pauseGmeOverSound();
    pauseVictorySound();
  };
  return (
    <Styled.Page disable={gameStage !== game[1]}>
      {gameStage === game[0] && (
        <Styled.Start onClick={startGame}>Click to Start</Styled.Start>
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
        <Styled.ButtonContainer>
          <Styled.Button
            href="https://github.com/malihgh/Mix-Or-Match-game"
            target="_blank">
            <Styled.Icon src={GitHub} />
            <span>View GitHub</span>
          </Styled.Button>
          <Styled.Button
            href="https://www.linkedin.com/in/maliheh-ghasemian-2a04391a5/"
            target="_blank"
            isLinkedin>
            <Styled.Icon src={linkedin} />
            <span>View Linkedin</span>
          </Styled.Button>
        </Styled.ButtonContainer>
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
