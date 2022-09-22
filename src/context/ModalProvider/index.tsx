import { createContext, ReactNode, useContext, useState } from "react";

interface IModal {
  children: ReactNode;
}

export const ModalContext = createContext({
  open: false,
  setOpen: (open: false | true) => {},
});

function ModalProvider({ children }: IModal) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
