import styled from "styled-components";

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  background: ${({theme}) => theme.colors.primary.bgmenu};
`;

export const MenuContent = styled.div`
  position: relative;
  max-width: 1240px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0 2rem 0;

    button {
      margin-left: 2rem;
      height: 55px;
      border: none;
      background: transparent;
      transition: 0.3s;

      svg {
        height: 50px;
        width: 50px;
        color: ${({theme}) => theme.colors.primary.main};
      }

      &:hover {
        svg {
          color: ${({theme}) => theme.colors.primary.secondary}
        }
      }
    }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoWrapper = styled.div`
  position: absolute;
  top: 30px;
`;

export const AvatarInput = styled.div`
  margin-bottom: 32px;
  position: relative;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }
  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: ${({theme}) => theme.colors.primary.secondary};
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      display: none;
    }
    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }
  }
`

export const FormPerfil = styled.form`
  margin-top: 8rem;
  width: 340px;

  span {
    margin: 1rem;
  }

  input {
    height: 40px
  }

  button {
    height: 50px;
  }
`;
