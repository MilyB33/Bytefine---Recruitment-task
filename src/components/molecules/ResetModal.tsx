import resetIcon from "../../assets/resetIcon.svg";
import { Modal } from "../atoms/Modal";
import { useResetModal } from "../../hooks/useResetModal";

import alertIcon from "../../assets/alertIcon.svg";
import { Button } from "../atoms/Button";

export const ResetModal = () => {
  const { isOpen, onOpen, onClose, onConfirm } = useResetModal();

  return (
    <>
      <button
        className="flex items-center gap-[8px] cursor-pointer border-b border-b-[#CB0000] text-[#CB0000] ml-auto"
        onClick={onOpen}
      >
        Reset
        <img src={resetIcon} width="32" height="32" alt="reset icon" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div className="flex flex-col justify-center items-center text-center">
          <img src={alertIcon} width="290" height="290" alt="alert icon" />
          <h2 className="text-[32px] text-black-100 font-bold mb-4">WARNING</h2>
          <p className="mb-4 text-black-75 font-medium text-center max-w-[387px]">
            You’re about to reset whole process. Are you sure you want to do it?
          </p>
          <div className="flex mt-[48px] gap-[32px] items-center">
            <button className="cursor-pointer" onClick={onClose}>
              Cancel
            </button>
            <Button onClick={onConfirm}>Reset</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
