import styled from 'styled-components';
import { LinkButton } from '../../../globalStyles';

export const AppHeader = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: 1fr .1fr;
  background-color: #3cb5f9;
  color: white;
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

export const LogoutButton = styled(LinkButton)`
  float: right
 `;
