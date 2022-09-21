import { ReactNode } from "react";
import { NavContainer } from "./styles";

interface INavLink {
  title: ReactNode;
  path: string;
}

function Nav({ title, path }: INavLink) {
  return (
    <NavContainer>
      <a href={path}>{title}</a>
    </NavContainer>
  );
}

export default Nav;
