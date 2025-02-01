import { useState } from "react";
import { useEditorContext } from "../context/editorContext";

export const useResetModal = () => {
  const { resetEditor } = useEditorContext();
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onConfirm = () => {
    resetEditor();
    onClose();
  };

  return { isOpen, onOpen, onClose, onConfirm };
};
