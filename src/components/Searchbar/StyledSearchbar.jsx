import styled from 'styled-components';
import { Field, Form } from 'formik';
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  width: 450px;
  border-radius: 8px;
  text-indent: 10px;
  font-size: 20px;
  ::placeholder {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  background-color: #ccccff;
  color: black;

  :hover {
    background-color: #9933ff;
  }
`;
