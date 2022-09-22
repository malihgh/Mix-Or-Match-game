import {useRef} from 'react';
import creepySound from 'assets/Audio/creepy.mp3';
import gameOverSound from 'assets/Audio/gameOver.wav';
import victorySound from 'assets/Audio/victory.wav';

export default function useAudio() {
  const creepy = useRef(new Audio(creepySound));
  const gameOver = useRef(new Audio(gameOverSound));
  const victory = useRef(new Audio(victorySound));

  const playCreepySound = () => {
    creepy.current.play();
  };
  const pauseCreepySound = () => {
    creepy.current.pause();
  };
  const playGameOverSound = () => {
    gameOver.current.play();
  };
  const pauseGmeOverSound = () => {
    gameOver.current.pause();
  };
  const playVictorySound = () => {
    victory.current.play();
  };
  const pauseVictorySound = () => {
    victory.current.pause();
  };

  return [
    playCreepySound,
    pauseCreepySound,
    playGameOverSound,
    pauseGmeOverSound,
    playVictorySound,
    pauseVictorySound
  ];
}
