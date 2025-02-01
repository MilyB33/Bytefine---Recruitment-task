import { useEffect, useRef } from "react";

type ClickAwayListenerProps = {
  children: React.ReactNode;
  onClickAway: () => void;
};

export const ClickAwayListener = ({
  children,
  onClickAway,
}: ClickAwayListenerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleFocus(event: FocusEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway();
      }
    }

    document.addEventListener("focusin", handleFocus);
    document.addEventListener("mousedown", handleFocus);

    return () => {
      document.removeEventListener("focusin", handleFocus);
      document.addEventListener("mousedown", handleFocus);
    };
  }, [onClickAway]);

  return (
    <div style={{ all: "unset" }} ref={ref}>
      {children}
    </div>
  );
};
