import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({theme}) => theme.colors.primary.bgmenu};
`;

export const Content = styled.div`
  max-width: 1240px;
  display: flex;
  gap: 130px;
  padding: 2rem 0 2rem 0;
`;

export const MenuWrapper = styled.div`
display: flex;
align-items: center;
gap: 3rem;

  &:hover {
    color: ${({theme}) => darken(0.5, theme.colors.primary.main)};
  }

  &[active] {
      color: ${({theme}) => theme.colors.primary.secondary};
    }
`;

export const ProfileWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;

svg {
  color: ${({theme}) => theme.colors.primary.main};
}

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    gap: 1rem;
    color: ${({theme}) => theme.colors.gray[200]};
    font-size: 16px;
    text-align: left;
    transition: 0.3s;
    text-decoration: none;

    &:hover {
    opacity: 0.35;
  }

    strong {
      color: ${({theme}) => theme.colors.primary.secondary};
      font-weight: 400;
    }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
      }
  }

`;
