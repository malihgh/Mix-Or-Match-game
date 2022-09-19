import React from 'react';
import * as Styled from './styles';
import GlobalStyle from 'core/styles/globalStyle';
import GamePage from 'core/components/GamePage';

const App = () => {
  return (
    <Styled.Container>
      <GlobalStyle />
      <GamePage />
    </Styled.Container>
  );
};

export default App;
