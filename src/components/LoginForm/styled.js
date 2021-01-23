import styled from '@emotion/styled'

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  width: 90%;
  padding: 42px 48px;

  border: 1px solid grey;

  & > .form-fields {
    display: flex;
    flex-direction: column;
    margin-bottom: 52px;
    
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
