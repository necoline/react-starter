import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import theme from '../../theme'
import Prose from '.';

storiesOf('Prose', module)
  .addDecorator(withKnobs)
  .add('default', () => 
  <Prose
    theme={theme.main}
    >
    Prose Text
  </Prose>
  )