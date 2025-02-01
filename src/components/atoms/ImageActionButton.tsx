import { ActionButton, ActionButtonProps } from "./ActionButton";
import { useImageActionButton } from "../../hooks/useImageActionButton";

type ImageActionButtonProps = Omit<ActionButtonProps, "onClick"> & {
  name: string;
  onLoad: (background: string) => void;
};

export const ImageActionButton = ({
  icon,
  label,
  onLoad,
  disabled,
  name,
}: ImageActionButtonProps) => {
  const { isLoading, fileInputRef, handleImageUpload, onButtonClick } =
    useImageActionButton({ onLoad });

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        name={name}
        id={name}
      />
      <ActionButton
        icon={icon}
        label={label}
        onClick={onButtonClick}
        disabled={disabled || isLoading}
      />
    </>
  );
};
