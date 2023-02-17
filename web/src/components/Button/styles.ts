import { darken } from "polished";
import styled, { css } from "styled-components";

interface ButtonContainerProps {
  success?: boolean;
}

export const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 100%;
`;

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary.secondary};
  color: ${({ theme }) => theme.colors.gray[900]};
  font-weight: bold;
  font-size: 16px;
  border: none;
  padding: 0.3rem 0.8rem;
  border-radius: 0.3rem;
  gap: 0.8rem;
  transition: background 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => darken(0.08, theme.colors.primary.secondary)};
    }

    ${({theme, success}) => success && css`
        background: ${theme.colors.success.main};

      &:hover {
        background: ${theme.colors.success.light};
      }
      &:active {
        background: ${theme.colors.success.dark};
      }
    `}
`;
