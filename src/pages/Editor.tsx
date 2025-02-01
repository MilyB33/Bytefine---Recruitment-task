import { Actions } from "../components/organism/Actions";
import { Canvas } from "../components/organism/Canvas";
import { EditorContext } from "../context/editorContext";
import { useEditor } from "../hooks/useEditor";

export const EditorPage = () => {
  const editorContext = useEditor();

  return (
    <EditorContext.Provider value={editorContext}>
      <main className="grid grid-cols-[1fr_minmax(100px,1fr)] items-center h-screen py-[32px] gap-[24px]">
        <Canvas />
        <Actions />
      </main>
    </EditorContext.Provider>
  );
};
