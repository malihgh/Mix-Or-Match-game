import React, {useEffect, useState, useCallback} from 'react';
import * as Styled from './styles';
import Card from 'core/components/Card';
import {cards} from 'core/components/CardsController/data/cards';

const CardsController = () => {
  const [cardsState, setCardsState] = useState(cards);
  const [flipCounter, setFlipCounter] = useState(0);

  const showCard = id => {
    if (viewCard.length === 0 || viewCard.length % 2 !== 0) {
      setFlipCounter(flipCounter => flipCounter + 1);

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

  return (
    <>
      <div> flip:{flipCounter}</div>

      <Styled.Container>
        {cardsState.map(card => (
          <Card
            key={card.id}
            id={card.id}
            isBack={card.isBack}
            picture={card.image}
            onCardClick={showCard}
          />
        ))}
      </Styled.Container>
    </>
  );
};

export default CardsController;
