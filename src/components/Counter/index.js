import { useSelector, useDispatch} from 'react-redux';

import { Container, Value } from './styles';

import { Button } from '../UI/Button';

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  function handleIncrement() {
    dispatch({ type: 'increment'});
  }
  
  function handleIncrease() {
    dispatch({ type: 'increase', amount: 10});
  }
  
  function handleDecrement() {
    dispatch({ type: 'decrement'});
  }
  
  function handleToggleCounter() {
    dispatch({ type: 'toggle'});

  }


  return (
    <Container>
      <h1>Redux Counter</h1>
      {show && <Value>
      {counter}
      </Value>}
      <div>
        <Button onClick={handleIncrement}>Increment</Button>
        <Button onClick={handleIncrease}>Increase by 10</Button>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <Button onClick={handleToggleCounter}>
      Toggle Counter
      </Button>
    </Container>
  );
};


