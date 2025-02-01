import { Actions } from "../components/organism/Actions";
import { Canvas } from "../components/organism/Canvas";
import { EditorContext } from "../context/editorContext";
import { useEditor } from "../hooks/useEditor";

export const EditorPage = () => {
  const editorContext = useEditor();

  return (
    <EditorContext.Provider value={editorContext}>
      <main
        // style={{ maxWidth: 759 }}
        className="grid grid-cols-[minmax(100px,759px)] min-[1150px]:grid-cols-[1fr_minmax(100px,1fr)] items-center h-min-screen py-8 px-4 gap-6"
      >
        <Canvas />
        <Actions />
      </main>
    </EditorContext.Provider>
  );
};
