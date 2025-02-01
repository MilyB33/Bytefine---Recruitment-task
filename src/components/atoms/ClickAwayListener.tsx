import { useClickAwayListener } from "@hooks/useClickAwayListener";

type ClickAwayListenerProps = {
  children: React.ReactNode;
  onClickAway: () => void;
};

export const ClickAwayListener = ({
  children,
  onClickAway,
}: ClickAwayListenerProps) => {
  const { ref } = useClickAwayListener({ onClickAway });

  return (
    <div style={{ all: "unset" }} ref={ref}>
      {children}
    </div>
  );
};
