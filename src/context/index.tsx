import { ReactNode } from "react";
import ModalProvider from "./ModalProvider";

interface IProvider {
  children: ReactNode;
}

function Provider({ children }: IProvider) {
  return <ModalProvider>{children}</ModalProvider>;
}

export default Provider;
