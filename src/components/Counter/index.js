import { useSelector, useDispatch } from 'react-redux';

import { Container, Value } from './styles';

import { Button } from '../UI/Button';

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  function handleIncrement() {
    dispatch({ type: 'increment'});
  }
  
  function handleDecrement() {
    dispatch({ type: 'decrement'});
  }
  
  function handleToggleCounter() {}


  return (
    <Container>
      <h1>Redux Counter</h1>
      <Value>
      {counter}
      </Value>
      <div>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <Button onClick={handleToggleCounter}>
      Toggle Counter
      </Button>
    </Container>
  );
};


