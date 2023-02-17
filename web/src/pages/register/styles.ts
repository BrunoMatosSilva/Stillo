import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/bg-register.svg');
  background-position: left 15% bottom 50%;
  background-repeat: no-repeat;
  object-fit: cover;

  a {
      padding-top: 2rem;
      color: ${({theme}) => theme.colors.primary.secondary};
      text-align: center;

      &:hover {
        color: ${({theme}) => darken(0.08, theme.colors.primary.secondary)};
      }
    }

  .cardLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 20%;
    left: 60%;

    form {
      display: flex;
      flex-direction: column;
      padding-top: 4rem;

      input {
        width: 340px;
        height: 50px;
      }

      button {
        margin-top: 2rem;
        width: 100%;
        height: 60px;
      }
    }
  }
`;
