import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
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
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
