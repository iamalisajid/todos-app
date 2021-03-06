import styled from 'styled-components';
import { FormInput } from '../../globalStyles';

export const TodoFormInput = styled(FormInput)`
  flex: 1 1 auto;
  margin-bottom: 0;
  ::placeholder {
    color: ${(props) => {
      if (props.error) return 'red';
      return 'grey';
    }};
    opacity: 1;
  }
  width: 1%;
`;
export const StyledTodoForm = styled.form`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem !important;
  position: relative;
  width: 100%;
`;
export const TodoFormSubmit = styled.div`
  margin-left: -1px;
`;
export const FilterGroup = styled.div`
  padding-top: 2%;
`;
export const TodoRow = styled.label`
  color: black;
`;
