import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-top: 4rem;
    color: ${({theme}) => theme.colors.primary.main};
    font-size: 44px;
  }

  p {
    color: ${({theme}) => theme.colors.primary.secondary};
    font-size: 18px;
  }
`;
