import styled from 'styled-components';
import { Button, Card } from '../../globalStyles';

export const LoginFormLayout = styled.div`
  --input-padding-x: 1.5rem;
  --input-padding-y: 0.75rem;
  grid-column: 4 / span 6;
  margin-left: auto !important;
  margin-right: auto !important;
`;
export const LoginButton = styled(Button)`
  border-radius: 5rem;
  display: block;
  font-size: 80%;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 10%;
  padding: 1rem;
  text-transform: uppercase !important;
  transition: all 0.2s;
  width: 100%;
`;
export const LoginCard = styled(Card)`
  border-radius: 1rem;
  border: 0;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  padding: 2rem;
`;
export const CardBody = styled.div`
  padding: 2rem;
`;
export const CardTitle = styled.h5`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  margin-top: 0px;
  text-align: center;
`;
export const StyledLoginForm = styled.form`
  border-radius: 5rem;
  letter-spacing: 0.1rem;
  padding: 1rem;
  transition: all 0.2s;
  width: 100%;
`;
export const FormLabelGroup = styled.div`
  margin-bottom: 1rem;
  position: relative;
  & input {
    border-radius: 2rem;
  }
  & > input,
  & > label {
    padding: var(--input-padding-y) var(--input-padding-x);
  }
  & > label {
    border-radius: 0.25rem;
    border: 1px solid transparent;
    color: #495057;
    display: block;
    left: 0;
    line-height: 1.5;
    margin-bottom: 0;
    position: absolute;
    top: 0;
    transition: all 0.1s ease-in-out;
    width: 100%;
  }
  & input::-webkit-input-placeholder {
    color: transparent;
  }
  & input:-ms-input-placeholder {
    color: transparent;
  }
  & input::-ms-input-placeholder {
    color: transparent;
  }
  & input::-moz-placeholder {
    color: transparent;
  }
  &input::placeholder {
    color: transparent;
  }
  & input:not(:placeholder-shown) {
    padding-bottom: calc(var(--input-padding-y) / 3);
    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  }
  & input:not(:placeholder-shown) ~ label {
    color: #777;
    font-size: 12px;
    padding-bottom: calc(var(--input-padding-y) / 3);
    padding-top: calc(var(--input-padding-y) / 3);
  }
`;
