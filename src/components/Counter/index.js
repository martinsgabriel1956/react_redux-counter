import { useSelector, useDispatch} from 'react-redux';

import { Container, Value } from './styles';

import { counterActions } from '../../store';

import { Button } from '../UI/Button';

export function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  
  function handleIncrease() {
    dispatch(counterActions.increase(10));
  }
  
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  
  function handleToggleCounter() {
    dispatch(counterActions.toggleCounter());

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


