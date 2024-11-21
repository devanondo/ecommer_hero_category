"use client";

import React, { createContext, ReactNode, useState } from "react";

interface ContextState {
  isOpen: boolean;
  type: string | null;
  onOpenModal: (payload: string) => void;
  onModalClose: () => void;
}
const Context = createContext<ContextState | undefined>(undefined);
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [type, setType] = useState<null | string>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpenModal = (payload: string) => {
    setIsOpen(true);
    setType(payload);
  };
  const onModalClose = () => {
    setIsOpen(false);
    setType(null);
  };

  return (
    <Context.Provider value={{ type, isOpen, onOpenModal, onModalClose }}>
      {children}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useContext must be used within a Provider");
  }
  return context;
};
