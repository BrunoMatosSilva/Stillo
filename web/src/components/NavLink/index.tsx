import { ReactNode } from "react";
import { Container} from "./styles";
import { NavLink } from "react-router-dom";

interface NavLinkProps{
  path: string;
  icon: ReactNode;
  title: string;
}

export function LinkMenu({path, icon, title}:NavLinkProps) {
  return (
    <Container>
      <NavLink to={path}>
        {icon}
        {title}
      </NavLink>
    </Container>
  );
}
