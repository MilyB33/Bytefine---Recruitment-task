import { useMemo, useRef, useState } from "react";
import { Element } from "../types";
import { toPng } from "html-to-image";

export const useEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
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

  const exportToPng = async () => {
    if (!editorRef.current) return;

    try {
      const dataUrl = await toPng(editorRef.current, { cacheBust: false });
      const link = document.createElement("a");
      link.download = "my-image-name.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log(err);
    }
  };

  const isDirty = useMemo(() => {
    return !!elements.length || !!background;
  }, [elements, background]);

  return {
    elements,
    background,
    isDirty,
    editorRef,
    addElement,
    removeElement,
    addBackground,
    resetEditor,
    exportToPng,
  };
};
