import { Actions } from "../components/organism/Actions";
import { Canvas } from "../components/organism/Canvas";
import { EditorContext } from "../context/editorContext";
import { useEditor } from "../hooks/useEditor";

export const EditorPage = () => {
  const editorContext = useEditor();

  return (
    <EditorContext.Provider value={editorContext}>
      <main className="flex items-center min-h-screen">
        <div className="grid grid-cols-[minmax(100px,759px)] min-[1300px]:max-w-[85vw] min-[1300px]:grid-cols-[minmax(100px,759px)_minmax(100px,759px)] py-4 px-4 gap-6">
          <Canvas />
          <Actions />
        </div>
      </main>
    </EditorContext.Provider>
  );
};
