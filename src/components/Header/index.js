import { useSelector, useDispatch } from "react-redux";

import { authActions } from '../../store';

import { Container, LogoutButton } from "./styles";

export function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(authActions.logout())
  }

  return (
    <Container>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
            </li>
          </ul>
        </nav>
      )}
    </Container>
  );
}
