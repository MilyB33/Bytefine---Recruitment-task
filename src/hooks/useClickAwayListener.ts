import { useRef } from "react";

import { useEffect } from "react";

type UseClickAwayListenerProps = {
  onClickAway: () => void;
};

export const useClickAwayListener = ({
  onClickAway,
}: UseClickAwayListenerProps) => {
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

  return { ref };
};
