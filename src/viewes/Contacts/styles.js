import styled from 'styled-components';

export const ContactLayout = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
`;
export const GridCloumn = styled.div`
  grid-column: ${(props) => `span ${props.span}`};
`;
export const StyledContactForm = styled.div`
  grid-column: 3 / span 4;
`;
export const ContactFields = styled.span`
  color: #6c757d !important;
  font-size: 80%;
  font-weight: 400;
`;
