import { Counter } from '../../components/Counter';

import { Header } from '../../components/Header';
import { Auth } from '../../components/Auth';

export function Home() {
  return (
    <>
      <Header />
      <Auth />
      <Counter />
    </>
  );
}