import styled, { css } from "styled-components";

export interface TextAreaContainerProps {
    isFocused: boolean;
}

export const TextAreaWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
width: 100%;
`;

export const Label = styled.label`
color: ${({ theme }) => theme.colors.gray[200]};
font-size: 0.8rem;
`;

export const TextAreaContainer = styled.div<TextAreaContainerProps>`
background-color: ${({ theme }) => theme.colors.gray[900]};
border: 2px solid ${({ theme }) => theme.colors.gray[500]};
padding: 0.3rem 0.8rem;
display: flex;
border-radius: 0.3rem;
gap: 0.8rem;
transition: 0.4s;

&:hover {
    border-color: ${({ theme }) => theme.colors.primary.secondary};
}

svg {
    width: 1.2rem;
    height: 1.2rem;
    transition: 0.4s;
    color: ${({ theme }) => theme.colors.gray[200]};
}

textarea {
    flex: 1;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.gray[200]};
    height: 120px;
    resize: none;

    input:-internal-autofill-selected {
        background: none;
    }

    &::placeholder{
        color: ${({ theme }) => theme.colors.gray[200]};
    }

    &:focus {
        outline: none;
    }
}

${({ isFocused }) => isFocused && css`
    border-color: ${({ theme }) => theme.colors.primary.secondary};

    svg {
        color: ${({ theme }) => theme.colors.primary.secondary};
    }
`}
`;
