import styled from "styled-components";

export const FormContainer = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 10px;
  background: white;
`;

export const FormBody = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: row;
  width: 100%;
  @media (max-width: 425px) {
    display: block;
  }
`;

export const FormFooter = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: right;
  & button {
    margin-left: 1rem;
  }
`;

export const FormGroup = styled.div`
  text-align: left;
  padding: 1rem;
  flex: 1;
  & > label {
    display: block;
    padding-bottom: 0.5rem;
  }
`;
