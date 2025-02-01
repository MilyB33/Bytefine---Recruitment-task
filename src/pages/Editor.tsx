import { Actions } from "../components/organism/Actions";
import { Canvas } from "../components/organism/Canvas";
import { EditorContext } from "../context/editorContext";
import { useEditor } from "../hooks/useEditor";

export const EditorPage = () => {
  const editorContext = useEditor();

  return (
    <EditorContext.Provider value={editorContext}>
      <main className="grid grid-cols-[minmax(100px,759px)] min-[1150px]:grid-cols-[minmax(100px,759px)_minmax(100px,759px)] min-h-screen py-4 px-4 gap-6">
        <Canvas />
        <Actions />
      </main>
    </EditorContext.Provider>
  );
};
