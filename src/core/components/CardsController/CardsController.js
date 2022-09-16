import React from 'react';
import * as Styled from './styles';
import Card from 'core/components/Card';
import Eye from 'assets/Images/Eye.png';
import Ghost from 'assets/Images/Ghost.png';
import Pumpkin from 'assets/Images/Pumpkin.png';
import Skull from 'assets/Images/Skull.png';
import Dracula from 'assets/Images/Dracula.png';
import Bones from 'assets/Images/Bones.png';

const CardsController = () => {
  return (
    <Styled.Container>
      <Card isBack />
      <Card picture={Eye} />
      <Card picture={Ghost} />
      <Card picture={Pumpkin} />
      <Card picture={Skull} />
      <Card picture={Dracula} />
      <Card picture={Bones} />
    </Styled.Container>
  );
};

export default CardsController;
