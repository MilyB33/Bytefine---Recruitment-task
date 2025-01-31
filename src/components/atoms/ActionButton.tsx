type ActionButtonProps = {
  icon: string;
  label: string;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
};

export const ActionButton = ({
  icon,
  label,
  onClick,
  disabled = false,
}: ActionButtonProps) => {
  return (
    <button
      className={`
          flex flex-col items-center  pt-[64px] pb-[12px] rounded-[10px] cursor-pointer
          bg-[#F7F7F8] transition-all
          hover:bg-black/25 
          focus:outline-none focus:ring-2 focus:ring-primary-50 focus:bg-white-97
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className={`${disabled ? "opacity-50" : ""} h-[128px]`}
        src={icon}
        width="128"
        height="128"
        alt={`${label} action`}
      />

      <span className="text-black-100 font-medium mb-4">{label}</span>
    </button>
  );
};
