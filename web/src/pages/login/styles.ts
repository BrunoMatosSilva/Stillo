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
  background-image: url('/bg-login.svg');
  background-position: right 0 bottom 0px;
  background-repeat: no-repeat;
  object-fit: cover;

  .cardLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    top: 20%;
    left: 25%;

    span {
      padding-top: 4rem;

      a {
        color: ${({theme}) => theme.colors.primary.secondary};
      }
    }

    h2 {
      font-size: 24px;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      input {
        width: 340px;
        height: 50px;
      }

      a {
        color: ${({theme}) => theme.colors.primary.secondary};
      }

      button {
        width: 100%;
        height: 60px;
      }
    }
  }
`;
