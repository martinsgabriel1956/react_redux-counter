import { Container, Control } from './styles';

import { Button } from '../UI/Button';

export function Auth() {
  return (
    <Container>
     <section>
       <form>
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