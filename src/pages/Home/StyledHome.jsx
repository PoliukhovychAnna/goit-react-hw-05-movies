import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 15px;
`;

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: 800;
  color: #9933ff;
  text-align: center;
  margin-bottom: 35px;
`;

export const MoviesList = styled.ul`
  padding: 0;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 70px;
  row-gap: 50px;
`;

export const ListItem = styled.li`
  background-color: #ccccff;
  width: 210px;
  height: 414px;
  border: 2px solid #ccccff;
  border-radius: 5px;
  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: #ccccff;
  cursor: pointer;
  &:hover,
  :focus {
    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);
    color: hsla(323, 87%, 50%, 0.664);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`;

export const MovieTitle = styled.p`
  padding: 4px;
  font-size: 18px;
  font-weight: 500;
  width: 200px;
  justify-content: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 315px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;
