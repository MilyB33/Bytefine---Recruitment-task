import { useMemo, useState } from "react";
import { Element } from "../types";

export const useEditor = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [background, setBackground] = useState<string | undefined>(undefined);

  const addElement = (element: Pick<Element, "type" | "src">) => {
    const id = Date.now().toString();

    setElements((prev) => [...prev, { id, ...element }]);
  };

  const removeElement = (id: string) => {
    const newElements = [...elements].filter((element) => id !== element.id);

    setElements(newElements);
  };

  const addBackground = (background: string) => {
    setBackground(background);
  };

  const resetEditor = () => {
    setElements([]);
    setBackground(undefined);
  };

  const isDirty = useMemo(() => {
    return !!elements.length || !!background;
  }, [elements, background]);

  return {
    elements,
    background,
    isDirty,
    addElement,
    removeElement,
    addBackground,
    resetEditor,
  };
};
