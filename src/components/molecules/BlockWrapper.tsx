import moveIcon from "../../assets/moveIcon.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useEditorContext } from "../../context/editorContext";
import { useState } from "react";
import { Rnd } from "react-rnd";
import { ClickAwayListener } from "../atoms/ClickAwayListener";

type BlockWrapperProps = {
  children: React.ReactNode;
  elementId: string;
  padding?: { x: number; y: number };
  additionalControl?: React.ReactNode;
};

export const BlockWrapper = ({
  children,
  elementId,
  padding,
  additionalControl,
}: BlockWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { removeElement } = useEditorContext();

  const onRemove = () => {
    removeElement(elementId);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <Rnd
      onFocus={onFocus}
      className={`border-2 ${
        isFocused ? "border-primary" : "border-transparent"
      } rounded-md text-center`}
      bounds="parent"
      resizeHandleComponent={{
        bottomRight: isFocused ? (
          <div className="rounded-full h-[20px] w-[20px] bg-primary border-white border-[4px]"></div>
        ) : (
          <></>
        ),
      }}
      default={{
        x: 0,
        y: 0,
        width: 350,
        height: 120,
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
