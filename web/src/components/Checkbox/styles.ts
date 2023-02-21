import styled from 'styled-components';

interface CheckProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div<CheckProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 35px;
  padding-left: 5px;
  margin: 4px 4px;
  border-radius: 5px;
  background: ${props => props.checked ? '#EB5757' : '#1D1B19'};
  cursor: pointer;
`;
export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
  overflow: hidden;
  white-space: nowrap;width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;
export const Text = styled.label<CheckProps>`
display: flex;
align-items: center;
gap: 0.2rem;
`;
export const StyledCheckbox = styled.label<CheckProps>`
`;
