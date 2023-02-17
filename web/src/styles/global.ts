import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab', serif;
}
body {
  font-size: 16px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({theme}) => theme.colors.primary.main};
}
button {
  cursor: pointer;
}
`;
