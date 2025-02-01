import { createPortal } from "react-dom";

import closeIcon from "@assets/closeIcon.svg";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ onClose, children, isOpen }: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.50)] flex items-center justify-center px-2">
      <div className="relative bg-white w-full max-w-[643px] py-12 rounded-[10px] px-2">
        <button
          className="cursor-pointer absolute right-8 top-8"
          onClick={onClose}
        >
          <img src={closeIcon} width="32" height="32" alt="close icon" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};
