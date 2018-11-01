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
  *, ::after, ::before {
    box-sizing: border-box;
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
  float: ${ props => {
    if(props.right) return 'right!important';
    if(props.left) return 'left!important';
    return 'none'
  }}
  background: ${props => {
    if (props.primary) return '#007bff;';
    if (props.success) return '#28a745;';
    if (props.danger) return '#dc3545;';
    if(props.warning) return  '#ffc107';
    if(props.info) return  '#17a2b8';
    
    return '#a965cc;';
  }}
  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: ${props => {
      if (props.primary) return '#007bff;';
      if (props.success) return '#28a745;';
      if (props.danger) return '#dc3545;';
      if(props.warning) return  '#e0a800';
      if(props.info) return  '#138496';
      
      return '#a965cc;';
    }}
    border-color: ${props => {
      if (props.primary) return '#007bff;';
      if (props.success) return '#28a745;';
      if (props.danger) return '#dc3545;';
      if(props.warning) return  '#d39e00';
      if(props.info) return  '#117a8b';
      
      return '#a965cc;';
    }}
  }
  &:focus {
    text-decoration: none;
  }
`;
export const ButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
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
export const ListGroup  = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;
export const ListGroupItem = styled.li`
  position: relative;
  display: block;
  padding: .75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.125);
`;
export const RoundedImage = styled.img`
  border-radius: 50%!important;
  margin-left: auto!important;
  margin-right: auto!important;
  display: block!important;
  max-width: 100%;
  height: auto;
`;
export const TextCenter = styled.div`
    text-align: center!important;
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
  
`;
export const FontAws = styled.span`
  float: ${ props => {
    if(props.right) return 'right!important';
    if(props.left) return 'left!important';
    return 'none'
  }}
  color: ${ props => {
    if(props.danger) return 'red';
    if(props.success) return 'green';
    return '#423a3a'
  }}
`;
