import { Actions } from "../components/organism/Actions";
import { Canvas } from "../components/organism/Canvas";

export const EditorPage = () => {
  return (
    <main className="grid grid-cols-[1fr_minmax(100px,1fr)] items-center h-screen py-[32px] gap-[24px]">
      <Canvas />
      <Actions />
    </main>
  );
};
