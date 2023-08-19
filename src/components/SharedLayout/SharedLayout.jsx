import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Header,
  Navigation,
  StyledNavLink,
} from './StyledSharedLayout';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <StyledNavLink to="/"> Home </StyledNavLink>
          <StyledNavLink to="/movies"> Movies </StyledNavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
