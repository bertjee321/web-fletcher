"use client";

import { useModal } from "@/lib/providers/ModalProvider";
import { ModalContainer } from "../ui/ModalContainer";

export function ModalRenderer() {
  const { modal, closeModal } = useModal();

  if (!modal.isOpen) return null;

  return (
    <ModalContainer
      isOpen={modal.isOpen}
      onClose={closeModal}
      title={modal.title}
      byline={modal.byline}
    >
      {modal.content}
    </ModalContainer>
  );
}
