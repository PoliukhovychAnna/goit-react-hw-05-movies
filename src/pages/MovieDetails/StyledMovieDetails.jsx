import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  margin-top: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
  width: 230px;
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 18px;
`;

export const Icon = styled(AiOutlineArrowLeft)`
  margin-right: 4px;
  margin-top: 2px;
  font-size: 18px;
`;
