import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  height: 90px;
`;
export const Header = styled.header`
  background-color: #ccccff;
  height: 100%;
`;
export const Navigation = styled.nav`
  padding: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 24px;
  width: 100px;
  font-weight: 600;
  color: #9933ff;
  margin-right: 16px;

  &.active {
    color: #9933ff;
    text-decoration: underline #9933ff;
  }
`;
