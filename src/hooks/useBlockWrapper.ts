import { useMemo, useState } from "react";
import { useEditorContext } from "../context/editorContext";

type UseBlockWrapperProps = {
  elementId: string;
  initialSize: { width: number; height: number };
};

export const useBlockWrapper = ({
  elementId,
  initialSize,
}: UseBlockWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { removeElement, editorRef } = useEditorContext();

  const onRemove = () => {
    removeElement(elementId);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const initialPlacement = useMemo(() => {
    if (!editorRef.current) return { x: 0, y: 0 };

    return {
      x: ((editorRef.current?.clientWidth || 0) - initialSize.width) / 2,
      y: ((editorRef.current?.clientHeight || 0) - initialSize.height) / 2,
    };
  }, [editorRef, initialSize.height, initialSize.width]);

  return { isFocused, initialPlacement, onRemove, onFocus, onBlur };
};
