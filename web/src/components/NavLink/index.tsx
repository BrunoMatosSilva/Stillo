import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

interface NavLinkProps {
  path: string;
  icon: ReactNode;
  title: string;
}

export function NavLink({path, icon, title}:NavLinkProps) {
  return (
    <Container>
      <Link to={path}>
        {icon}
        {title}
      </Link>
    </Container>
  );
}
