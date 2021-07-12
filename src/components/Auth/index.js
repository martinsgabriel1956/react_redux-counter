import { useDispatch } from 'react-redux';

import { authActions } from '../../store';

import { Container, Control } from './styles';

import { Button } from '../UI/Button';

export function Auth() {
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <Container>
     <section>
       <form onSubmit={handleLogin}>
         <Control>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
         </Control>
         <Control>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
         </Control>
          <Button>Login</Button>
       </form>
     </section>
    </Container>
  );
};