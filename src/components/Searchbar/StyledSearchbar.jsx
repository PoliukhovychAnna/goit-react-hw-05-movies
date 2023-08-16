import styled from 'styled-components';
import { Field, Form } from 'formik';
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  border-color: #9933ff;
  margin-top: 30px;
  margin-bottom: 20px;
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
  font-size: 18px;
  font-weight: 600;
  color: black;
  border-radius: 30px;
  border: none;

  transition: all 300ms cubic-bezier(0.39, 0.575, 0.565, 1);
  background-color: #ccccff;

  &:hover {
    box-shadow: 0px 0px 26px 8px hsl(270, 100%, 60%, 0.664);
    color: hsla(323, 87%, 50%, 0.664);
  }
`;
