import React from 'react';
import { storiesOf } from '@storybook/react';

import { Wrapper } from './Wrapper';
import { Button } from '../Button/Button';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';

storiesOf('Layout/Wrapper', module).add('default', () => (
  <Wrapper>
    <ButtonGroup>
      <Button>Button A</Button>
      <Button>Button B</Button>
    </ButtonGroup>
  </Wrapper>
));
