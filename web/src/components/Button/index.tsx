import { ButtonWrapper, ButtonContainer } from "./styles";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: boolean;
  success?: boolean;
}

export function Button({ title, icon, id, success,...rest}: ButtonProps) {

  return (
      <ButtonWrapper>
          <ButtonContainer
          success={success}
          {...rest}>
            {icon}
            {title}
          </ButtonContainer>
      </ButtonWrapper>
  );
}
