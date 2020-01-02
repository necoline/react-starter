import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import theme from '../../theme'
import Heading from '.';

storiesOf('Heading', module)
  .addDecorator(withKnobs)
  .add('default', () => 
  <Heading
    theme={theme.main}
    variation={select(
      'Variation',
      [
        'base',
        'primary',
        'secondary'
      ],
      'base'
      )}
    >
    Heading Text
  </Heading>
  )