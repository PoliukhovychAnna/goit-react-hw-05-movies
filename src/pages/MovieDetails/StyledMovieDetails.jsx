import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 30px;
`;
export const BackLink = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  width: 230px;
  height: 30px;
  border-radius: 30px;
  font-size: 18px;

  font-weight: 500;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: #ccccff;
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);
    color: hsla(323, 87%, 50%, 0.664);
  }
`;

export const Icon = styled(AiOutlineArrowLeft)`
  margin-right: 4px;
  margin-top: 2px;
  font-size: 18px;
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #9933ff;
  margin: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Details = styled.div`
  margin-left: 40px;
  width: 500px;
`;

export const ListOfGenres = styled.ul`
  display: flex;
  list-style: none;
  align-content: center;
  padding: 0;
  margin-left: 20px;
  column-gap: 10px;
`;

export const ListOfAddInfo = styled.ul`
  display: flex;
  list-style: none;
  align-content: center;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  column-gap: 40px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border-radius: 30px;
  font-size: 18px;

  font-weight: 500;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: #ccccff;
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);
    color: hsla(323, 87%, 50%, 0.664);
  }

  &.active {
    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);
    color: hsla(323, 87%, 50%, 0.664);
  }
`;

export const Img = styled.img`
  width: 300px;
  height: 450px;
`;
