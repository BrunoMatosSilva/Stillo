import { Label, TextAreaContainer, TextAreaWrapper } from "./styles";
import { ReactNode, TextareaHTMLAttributes, useState } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    icon: ReactNode;
}

export function TextArea({ label, icon, id, ...rest }: InputProps) {
    const [focused, setFocused] = useState(false);
    return (
        <TextAreaWrapper>
            <Label htmlFor={id}>{label}</Label>
            <TextAreaContainer isFocused={focused}>
                {icon}
                <textarea
                    {...rest}
                    id={id}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </TextAreaContainer>
        </TextAreaWrapper>
    );
}
