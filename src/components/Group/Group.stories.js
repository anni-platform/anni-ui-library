import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button';
import { Group } from '.';

storiesOf('Form/Group', module)
  .add('default', () => (
    <Group>
      <Button onClick={action('clicked')}>Button A</Button>
      <Button onClick={action('clicked')}>Button B</Button>
    </Group>
  ))
  .add('center', () => (
    <Group center>
      <Button onClick={action('clicked')}>Button A</Button>
      <Button onClick={action('clicked')}>Button B</Button>
    </Group>
  ));
