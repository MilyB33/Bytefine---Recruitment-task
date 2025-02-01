type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`pt-2 pb-2 pr-8 pl-8 text-button rounded-lg text-white cursor-pointer
        disabled:bg-black-25 disabled:cursor-not-allowed
        bg-primary hover:bg-primary-100 focus:outline-2 focus:outline-primary-50`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
