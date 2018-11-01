import styled from 'styled-components';
import { Button, Card } from '../../globalStyles';

export const LoginFormLayout = styled.div`
  grid-column: 4 / span 6;
  margin-left: auto!important;
  margin-right: auto!important;
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
`;
export const LoginButton = styled(Button)`
  width: 100%;
  display: block;
  border-radius: 5rem;
  font-size: 80%;
  font-weight: bold;
  letter-spacing: .1rem;
  padding: 1rem;
  transition: all 0.2s;
  margin-top: 10%;
  text-transform: uppercase!important;
`;
export const LoginCard = styled(Card)`
  border: 0;
  border-radius: 1rem;
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
  margin-top: 0px;
  margin-bottom: 2rem;
  text-align: center;
`;
export const StyledLoginForm = styled.form`
  border-radius: 5rem;
  letter-spacing: .1rem;
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
  border: 1px solid transparent;
  border-radius: .25rem;
  color: #495057;
  display: block;
  left: 0;
  line-height: 1.5;
  margin-bottom: 0;
  position: absolute;
  top: 0;
  transition: all .1s ease-in-out;
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
export const Error = styled.p`
  color:red;
`;
export const CustomCheckBox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
