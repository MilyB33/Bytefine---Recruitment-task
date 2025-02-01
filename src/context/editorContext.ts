import { createContext, useContext } from "react";
import { Element } from "../types";

type Context = {
  elements: Element[];
  background?: string;
  isDirty: boolean;
  addElement: (element: Pick<Element, "type" | "src">) => void;
  removeElement: (id: string) => void;
  addBackground: (background: string) => void;
  resetEditor: () => void;
} | null;

export const EditorContext = createContext<Context>(null);

export const useEditorContext = () => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error("You can't use editor context outside Provider!");
  }

  return context;
};
