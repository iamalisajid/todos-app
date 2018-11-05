import styled from 'styled-components';

export const ContactLayout = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
`;
export const GridCloumn = styled.div`
`;
export const StyledContactList = styled.div`
  grid-column: span 4;
`;
export const StyledContactForm = styled.div`
  grid-column: 3 / span 4;
`;
export const FirstName = styled.div`
  grid-column: span 6;
`;
export const LastName = styled.div`
  grid-column: span 6;
`;
export const ContactImage = styled.div`
  grid-column: span 4;
`;
export const ContactDetails = styled.div`
  grid-column: span 8;
`;
export const ContactFields = styled.span`
  color: #6c757d !important;
  font-size: 80%;
  font-weight: 400;
`;
