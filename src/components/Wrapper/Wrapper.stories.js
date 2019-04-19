import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from 'components/Button';
import { Group } from 'components/Group';
import { Wrapper } from '.';

storiesOf('Layout/Wrapper', module).add('default', () => (
  <Wrapper>
    <Group>
      <Button>Button A</Button>
      <Button>Button B</Button>
    </Group>
  </Wrapper>
));
