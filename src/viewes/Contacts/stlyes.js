import styled from 'styled-components';

export const ContactLayout = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
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
