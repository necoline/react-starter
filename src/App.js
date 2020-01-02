import React from 'react';
import Button from './components/Button';
import Heading from './components/Heading';
import styled from 'styled-components';

import theme from './theme'

const AppPage = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppPage>
      <Heading theme={theme.main}>
          DevSeed Storybook
      </Heading>
        <Button 
          theme={theme.main}
          variation='base-raised-semidark'
          size='medium'
        >Click Me</Button>
    </AppPage>
  );
}

export default App;
