import { Container, Value } from './styles';

import { Button } from '../UI/Button';

export function Counter() {
  function handleToggleCounter() {}

  return (
    <Container>
      <h1>Redux Counter</h1>
      <Value>
      -- COUNTER VALUE --
      </Value>
      <Button onClick={handleToggleCounter}>
      Toggle Counter
      </Button>
    </Container>
  );
};


