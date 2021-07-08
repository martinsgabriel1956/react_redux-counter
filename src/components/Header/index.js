import { Container, LogoutButton } from './styles';

export function Header() {
  return (
    <Container>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <LogoutButton>Logout</LogoutButton>
          </li>
        </ul>
      </nav>
    </Container>
  );
};


