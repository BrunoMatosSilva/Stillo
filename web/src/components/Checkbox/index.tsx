import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "./styles";
import { InputHTMLAttributes, ReactNode, useState } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    title: string;
    icon?: ReactNode;
}

export function Checkbox({ icon, title}: InputProps) {

  const [checked, setChecked] = useState<boolean>(false);

   function handleCheckboxChange(){
      setChecked(!checked);
   }

    return (
        <CheckboxContainer
        checked={checked}
        onClick={handleCheckboxChange}
        >
          <HiddenCheckbox
          onChange={handleCheckboxChange}
          checked={checked}
          />
          <StyledCheckbox checked={checked} />
            <Text checked={checked}>
            {icon}
            {title}
            </Text>
        </CheckboxContainer>
    );
}
