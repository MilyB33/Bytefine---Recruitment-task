import { useRef } from "react";
import { ActionButton, ActionButtonProps } from "./ActionButton";

type FileActionButtonProps = Omit<ActionButtonProps, "onClick"> & {
  name: string;
  onLoad: (background: string) => void;
};

export const FileActionButton = ({
  icon,
  label,
  onLoad,
  disabled,
  name,
}: FileActionButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onLoad(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        disabled={disabled}
      />
    </>
  );
};
