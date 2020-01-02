import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import theme from '../../theme'
import Button from '.';


storiesOf('Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => 
  <Button
    theme={theme.main}
    variation={select(
      'Variation',
      [
        'base-plain',
        'base-raised-light',
        'base-raised-semidark',
        'base-raised-dark',
        'primary-raised-light',
        'primary-raised-semidark',
        'primary-raised-dark',
        'primary-plain',
        'danger-raised-dark',
        'danger-plain',
        'achromic-plain',
        'achromic-glass'
      ],
      'base-plain'
      )}
    size={select('Size', ['small', 'medium', 'large', 'xlarge'], 'medium')}
    radius={select('Radius', ['ellipsoid', 'square', 'default'], 'default')}

    onClick={action('On Click')}
    disabled={boolean('Disabled', false)}
    >
    {text('Label', 'Hello Impact Team')}
  </Button>, {
  notes: 'Here are some notes on how to use this button.',
}, {
  info: {
    text: `
          description or documentation about my component, supports markdown

          
          <Button>Click Here</Button>
          
        `,
  }
}
  )
