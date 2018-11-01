import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/bg.png');
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;
export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s 
  color: #fff;
  background: ${props => {
    if (props.primary) return '#007bff;';
    if (props.success) return '#28a745;';
    if (props.danger) return '#dc3545;';
    
    return '#a965cc;';
  }}
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: ${props => {
      if (props.primary) return '#007bff;';
      if (props.success) return '#28a745;';
      if (props.danger) return '#dc3545;';
    
      return '#a965cc;';
    }}
    border-color: ${props => {
      if (props.primary) return '#007bff;';
      if (props.success) return '#28a745;';
      if (props.danger) return '#dc3545;';
    
      return '#a965cc;';
    }}
  }
  &:focus {
    text-decoration: none;
  }
`;

export const LinkButton = styled(Button, Link)``;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
`;

export const FormRow = styled(Row)`
  margin-bottom: 1rem;
`;
export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;
