import { useSelector, connect } from 'react-redux';

import { Container, Value } from './styles';

import { Button } from '../UI/Button';

export function Counter() {
  const counter = useSelector(state => state.counter);

  function handleToggleCounter() {}

  return (
    <Container>
      <h1>Redux Counter</h1>
      <Value>
      {counter}
      </Value>
      <Button onClick={handleToggleCounter}>
      Toggle Counter
      </Button>
    </Container>
  );
};


