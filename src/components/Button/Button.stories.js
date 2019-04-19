import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { OutlineIcon } from 'components/Icon';
import { Button } from '.';

storiesOf('Form/Buttons', module)
  .add('default', () => (
    <Button onClick={action('clicked')}>Default Button</Button>
  ))
  .add('primary', () => (
    <Button onClick={action('clicked')} primary>
      Primary Button
    </Button>
  ))
  .add('naked', () => (
    <Button naked onClick={action('clicked')}>
      <OutlineIcon name="logo" />
    </Button>
  ));
