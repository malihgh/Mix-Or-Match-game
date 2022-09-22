import React, {useEffect, useState, useCallback, useRef} from 'react';
import * as Styled from './styles';
import Card from 'core/components/Card';
import flipSound from 'assets/Audio/flip.wav';
import matchSound from 'assets/Audio/match.wav';

const CardsController = props => {
  const {data, isFlipped, checkIsWon} = props;
  const [cardsState, setCardsState] = useState(data);

  const flip = useRef(new Audio(flipSound));
  const match = useRef(new Audio(matchSound));

  useEffect(() => {
    setCardsState(data);
  }, [data]);

  const showCard = id => {
    if (viewCard.length === 0 || viewCard.length % 2 !== 0) {
      isFlipped();
      flip.current.play();
      const newState = cardsState.map(obj => {
        if (obj.id === id) {
          return {...obj, isBack: false};
        }
        return obj;
      });
      setCardsState(newState);
    }
  };
  const viewCard = cardsState.filter(e => e.isBack === false);

  const checkIsMatch = useCallback(() => {
    if (viewCard[0].value === viewCard[1].value) {
      //it's matched
      const newState = cardsState.map(obj => {
        if (obj.id === viewCard[0].id) {
          return {...viewCard[0], isBack: undefined};
        } else if (obj.id === viewCard[1].id) {
          return {...viewCard[1], isBack: undefined};
        }
        return obj;
      });
      setCardsState(newState);
      match.current.play();
    } else {
      //it's not matched
      const newState = cardsState.map(obj => {
        if (obj.id === viewCard[0].id) {
          return {...obj, isBack: true};
        } else if (obj.id === viewCard[1].id) {
          return {...obj, isBack: true};
        }
        return obj;
      });
      setCardsState(newState);
    }
  }, [cardsState, viewCard]);

  useEffect(() => {
    if (viewCard && viewCard.length !== 0 && viewCard.length % 2 === 0) {
      setTimeout(() => {
        checkIsMatch();
      }, 1000);
    }
  }, [checkIsMatch, viewCard]);

  useEffect(() => {
    const matched = cardsState.filter(e => e.isBack === undefined);
    checkIsWon(matched);
  });

  return (
    <Styled.Container>
      <Styled.CardContainer>
        {cardsState.map(card => (
          <Card
            key={card.id}
            id={card.id}
            isBack={card.isBack}
            picture={card.image}
            onCardClick={showCard}
          />
        ))}
      </Styled.CardContainer>
    </Styled.Container>
  );
};

export default CardsController;
