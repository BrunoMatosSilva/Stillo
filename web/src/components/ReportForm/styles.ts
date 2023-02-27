import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 600px;

    input {
      height: 40px;
    }

    .button-wrapper {
      margin-top: 1rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;

      button {
        height: 40px;
        width: 100px;
      }
    }
  }
`;
