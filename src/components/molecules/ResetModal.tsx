import resetIcon from "@assets/resetIcon.svg";
import alertIcon from "@assets/alertIcon.svg";
import { useResetModal } from "@hooks/useResetModal";

import { Modal } from "../atoms/Modal";
import { Button } from "../atoms/Button";

export const ResetModal = () => {
  const { isOpen, onOpen, onClose, onConfirm } = useResetModal();

  return (
    <>
      <button
        className="flex items-center gap-2 cursor-pointer border-b border-b-red text-red"
        onClick={onOpen}
      >
        Reset
        <img src={resetIcon} width="32" height="32" alt="reset icon" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col justify-center items-center text-center">
          <img src={alertIcon} width="290" height="290" alt="alert icon" />
          <h2 className="text-display text-black-100 mb-4">WARNING</h2>
          <p className="mb-4 text-body-medium text-black-75 text-center max-w-[387px]">
            You’re about to reset whole process. Are you sure you want to do it?
          </p>
          <div className="flex mt-12 gap-8 items-center">
            <button
              className="cursor-pointer text-body-medium"
              onClick={onClose}
            >
              Cancel
            </button>
            <Button onClick={onConfirm}>Reset</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
