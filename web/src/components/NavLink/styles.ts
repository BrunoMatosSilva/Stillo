import styled from "styled-components";

export const Container = styled.div`
display: flex;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 16px;
    transition: 0.3s;

    &:hover {
      color: ${({theme}) => theme.colors.primary.secondary};
    }

    &[active] {
      color: ${({theme}) => theme.colors.primary.secondary};
    }

    svg {
      width: 34px;
      height: 34px;
    }
  }
`;
