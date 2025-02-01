export type ActionButtonProps = {
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
          flex flex-col items-center  pt-16 pb-3 rounded-[10px] cursor-pointer
          bg-white-97
          hover:bg-black-25 
          focus:outline-4 focus:outline-primary-50 focus:bg-white-97
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
      onClick={onClick}
      disabled={disabled}
    >
      <img
        className={`${disabled ? "opacity-75" : ""} h-[128px]`}
        src={icon}
        width="128"
        height="128"
        alt={`${label} action`}
      />

      <span className="text-black-100 text-body-medium mb-4">{label}</span>
    </button>
  );
};
