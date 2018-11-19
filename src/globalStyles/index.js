import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { backGroundImage, bodyColor, backgroundColor, bulbImage } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${backGroundImage});
    color: ${bodyColor}
    font-family: 'Ubuntu', sans-serif;
    margin: 0;
    padding: 0;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    margin-top: 0;
  }
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
`;

export const Button = styled.button`
  background-color: ${backgroundColor};
  border-radius: .25rem;
  border: 1px solid transparent;
  color: #fff;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  float: ${(props) => {
    if (props.right) return 'right!important';
    if (props.left) return 'left!important';
    return 'none';
  }}
  line-height: 1.5;
  padding: .375rem .75rem;
  text-align: center;
  transition: color .15s; 
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
  }
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
`;
export const ButtonGroup = styled.div`
  display: inline-flex;
  position: relative;
  vertical-align: middle;
`;

export const LinkButton = styled(Button, Link)``;

export const Row = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
`;

export const FormRow = styled(Row)`
  margin-bottom: 1rem;
`;
export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;
export const FormInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  color: #495057;
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  width: 100%;
`;
export const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 0;
`;
export const ListGroupItem = styled.li`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  display: block;
  margin-bottom: -1px;
  padding: 0.75rem 1.25rem;
  position: relative;
`;
export const RoundedImage = styled.img`
  border-radius: 50% !important;
  display: block !important;
  height: auto;
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 100%;
`;
export const Center = styled.div`
  text-align: center !important;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const FontAws = styled.span`
  color: ${(props) => {
    if (props.danger) return 'red';
    if (props.success) return 'green';
    return '#423a3a';
  }}
    float: ${(props) => {
      if (props.right) return 'right!important';
      if (props.left) return 'left!important';
      return 'none';
    }}
`;
export const Card = styled.div`
  background-clip: border-box;
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;
  word-wrap: break-word;
`;

export const LightBulb = styled.label`
  background-image: url(${bulbImage});
  background-size: 50px 50px;
  height: 50px;
  margin-left: 17%;
  transition: ease-in 0.1s;
  width: 50px;
`;
export const LanguagePicker = styled.ul`
  background-color: #fff;
  border-radius: 5px;
  display: inline-block;
  float: left;
  height: 40px;
  margin-top: 10px;
  overflow: hidden;
  padding: 0;
  transition: all 0.3s ease;
  vertical-align: top;
  &:hover {
    height: 81px;
  }
  a {
    color: #000;
    text-decoration: none;
    &:first-child li {
      border: none;
      background: #eee !important;
    }
  }
  li {
    border-top: 1px solid #eee;
    display: block;
    line-height: 40px;
    padding: 0 20px;
    &:hover {
      background-color: #eee;
    }
    img {
      margin-right: 5px;
    }
  }
`;
export const Hidden = styled.input`
  display: none;
`;

export const Error = styled.p`
  color: red;
`;
