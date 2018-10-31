import styled from 'styled-components';

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
  if (props.success) return 'limegreen;';
  if (props.warning) return 'tomato;';
  if (props.danger) return '#dc3545;';
  return '#a965cc;';
}}
  &:hover {
    color: #fff;
    background-color: #c82333;
    border-color: #bd2130;
  text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
`;
