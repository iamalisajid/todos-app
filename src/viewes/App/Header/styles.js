import styled from 'styled-components';
import { Button } from '../../../globalStyles';

export const AppHeader = styled.div`
  background-color: ${(props) => {
    if (props.theme.mode === 'dark') return '#275f7d';
    return '#3cb5f9;';
  }}
  color: white;
  display: grid;
  grid-area: header;
  grid-template-columns: 1fr .1fr .05fr;
  margin: 0 0 15px;
  overflow: hidden;
  padding: 10px 15px;
`;

export const AppTitle = styled.h2`
  font-size: 24px;
  letter-spacing: 4px;
  margin: 10px 0 4px;
  text-transform: uppercase;
  word-spacing: 5px;
`;

export const LogoutButton = styled(Button)`
  float: right;
  margin: 10px 0 4px;
`;
