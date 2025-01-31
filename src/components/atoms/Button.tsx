type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({ label, disabled, onClick }: ButtonProps) => {
  return (
    <button
      className={
        "pt-[8px] pb-[8px] pr-[32px] pl-[32px] text-[15px] rounded-lg text-white font-medium transition-all duration-200 cursor-pointer " +
        (disabled
          ? "disabled:bg-[#CDCDCD] disabled:cursor-not-allowed "
          : "bg-[#7209B7] hover:bg-[#550788] focus:ring-2 focus:ring-primary-50")
      }
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
