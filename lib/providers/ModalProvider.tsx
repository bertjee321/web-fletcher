"use client";

import { createContext, useContext, useState } from "react";

type ModalState = {
  isOpen: boolean;
  title?: string;
  byline?: string;
  content?: React.ReactNode;
};

type ModalContextType = {
  openModal: (modal: Omit<ModalState, "isOpen">) => void;
  closeModal: () => void;
  modal: ModalState;
};

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return ctx;
};

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
  });

  const openModal = (data: Omit<ModalState, "isOpen">) => {
    setModal({ ...data, isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false });
  };

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
