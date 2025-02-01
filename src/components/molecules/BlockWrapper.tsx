import { Rnd } from "react-rnd";

import moveIcon from "@assets/moveIcon.svg";
import deleteIcon from "@assets/deleteIcon.svg";
import { useBlockWrapper } from "@hooks/useBlockWrapper";

import { ClickAwayListener } from "../atoms/ClickAwayListener";

type BlockWrapperProps = {
  children: React.ReactNode;
  elementId: string;
  padding?: { x: number; y: number };
  initialSize: { width: number; height: number };
  additionalControl?: React.ReactNode;
};

export const BlockWrapper = ({
  children,
  elementId,
  padding,
  initialSize,
  additionalControl,
}: BlockWrapperProps) => {
  const { isFocused, initialPlacement, onRemove, onFocus, onBlur } =
    useBlockWrapper({ elementId, initialSize });

  return (
    <Rnd
      onFocus={onFocus}
      className={`
        border-2 rounded-md text-center ${
          isFocused ? "border-primary" : "border-transparent"
        }`}
      bounds="parent"
      resizeHandleComponent={{
        bottomRight: isFocused ? (
          <div className="rounded-full h-[20px] w-[20px] bg-primary border-white border-4"></div>
        ) : undefined,
      }}
      default={{
        x: initialPlacement.x,
        y: initialPlacement.y,
        width: initialSize.width,
        height: initialSize.height,
      }}
      style={{ paddingBlock: padding?.y, paddingInline: padding?.x }}
      minHeight={100}
      minWidth={100}
      dragHandleClassName="drag-handle"
      enableResizing={{
        topLeft: false,
        top: false,
        topRight: false,
        right: false,
        bottomRight: true,
        bottom: false,
        bottomLeft: false,
        left: false,
      }}
    >
      <ClickAwayListener onClickAway={onBlur}>
        {isFocused && (
          <>
            <div className="drag-handle cursor-move absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <img
                style={{ pointerEvents: "none" }}
                src={moveIcon}
                width="24"
                height="24"
                alt="move element icon"
              />
            </div>
            <button
              onClick={onRemove}
              className="cursor-pointer absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <img
                src={deleteIcon}
                width="12"
                height="14"
                alt="delete element icon"
              />
            </button>
          </>
        )}
        {children}
        {isFocused && additionalControl}
      </ClickAwayListener>
    </Rnd>
  );
};
